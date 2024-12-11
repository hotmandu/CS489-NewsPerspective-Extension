<script lang="ts">
  import type { ApiAnalyzeResult, Article } from "@/lib/types";
  import Icon from "@iconify/svelte";
  import { createDialog } from "svelte-headlessui";
  import Transition from "svelte-transition";
  import Section from "./Section.svelte";
  import type { Snippet } from "svelte";
  import { CACHED_API_RESULT, CACHED_ARTICLE, getConsolelog, NO_API_MODE, SHOW_RAW_API_RESULT } from "@/lib/config";
  import Markdown from "svelte-exmarkdown";

  const clog = getConsolelog('Analyze');

  const dialogFullArticle = createDialog({ label: "Full News Article" });

  const dialogBiasEmotionals = createDialog({ label: "Emotional Languages" });
  const dialogBiasIndicators = createDialog({ label: "Bias Indicators" });

  let articleMsg = $state<Article | null>(null);
  // Don't need to use state?
  let flagApiOnce = false;
  let fetchResult = $state<ApiAnalyzeResult | null>(null);
  let errorState = $state(false);
  
  browser.runtime.onMessage.addListener((msg) => {
    clog('Got Message:', msg);
    if (!flagApiOnce) {
      clog('This is first message');
      articleMsg = msg;
      flagApiOnce = true;
    }
  });

  $effect(() => {
    let iv = null;
    if (articleMsg !== null) {
      clog('Got article', $state.snapshot(articleMsg));
      if (NO_API_MODE) {
        if (CACHED_API_RESULT === null) {
          clog("API was set to be ignored but NO CACHED_API_RESULT!");
          errorState = true;
        } else {
          iv = setTimeout(() => {
            try {
              fetchResult = JSON.parse(CACHED_API_RESULT!);
              clog("Set API Result");
            } catch (e) {
              clog("HASHED_API_RESULT is invalid JSON String!");
              errorState = true;
            }
          }, 500);
        }
      } else {
        clog("Call API...");
        fetch(
          "https://cs489-newsperspective-backend-production.up.railway.app/api/analyze",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ article_text: articleMsg.content }),
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((v) => {
            fetchResult = v as ApiAnalyzeResult;
            if (fetchResult.status !== "success") {
              clog("API returned Error!", $state.snapshot(fetchResult));
              errorState = true;
            } else {
              clog("API Call Success", $state.snapshot(fetchResult));
            }
          })
          .catch((e) => {
            clog("Fetch Error!", e);
            errorState = true;
          });
      }
    }
    if (iv !== null) {
      return () => {
        clearTimeout(iv);
      };
    }
  });

  onMount(() => {
    clog('Load Script');
    let iv = null;
    if (NO_API_MODE) {
      clog('No API Mode');
      iv = setTimeout(() => {
        articleMsg = CACHED_ARTICLE;
      }, 500);
    }

    if (iv !== null) {
      return () => {
        clearTimeout(iv);
      };
    }
  });

  const capitalize = (val: string) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  const clip = (num: number, min: number, max: number) => {
    return Math.max(Math.min(num, max), min);
  }
</script>

{#snippet modal(dialogStore: ReturnType<typeof createDialog>, expanded: boolean, insideSnippet: Snippet)}
<div class="relative z-50">
  <Transition show={expanded}>
    <Transition
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button
        class="fixed inset-0 bg-black bg-opacity-25"
        onclick={dialogStore.close}
      ></button>
    </Transition>

    <div class="fixed inset-0 overflow-y-auto">
      <div
        class="flex min-h-full items-center justify-center p-4 text-center"
      >
        <Transition
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            class="flex flex-col max-h-full h-[70vh] w-4/5 max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            use:dialogStore.modal
          >
          {@render insideSnippet()}
            <div class="sticky bottom-0 left-0 right-0 mt-2 bg-white">
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onclick={dialogStore.close}
              >
                Close
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</div>
{/snippet}

<div class="min-h-screen w-full bg-[#0b3535] p-4">
  <div class="min-h-full w-full max-w-[1300px] mx-auto">
  {#if errorState}
    <div
      class="panel p-4 min-h-40 w-full flex flex-col items-center justify-center gap-4 select-none"
    >
      <p class="text-xl">An error occurred while processing article.</p>
      <p class="text-lg">Please retry later.</p>
    </div>
  {:else if articleMsg === null}
    <div
      class="panel p-4 min-h-40 w-full flex flex-col items-center justify-center gap-2 select-none"
    >
      <p class="text-4xl"><Icon icon="line-md:loading-loop" /></p>
      <p class="text-xl">Reading article...</p>
      <p class="text-lg">
        If this process takes too long, please retry. Do not refresh this page.
      </p>
    </div>
  {:else}
  {#snippet modalFullArticle()}
  <h2
    class="sticky top-0 left-0 right-0 text-2xl font-bold leading-6 text-gray-900 mb-6"
  >
    {articleMsg?.title}
  </h2>
  <article class="grow overflow-auto h-0">
    <p class="text-base leading-relaxed text-gray-700 whitespace-pre-wrap">
      {articleMsg?.content}
    </p>
  </article>
  {/snippet}
  {#snippet modalBiasIndicators()}
  <div class="grow overflow-auto h-0">
    {#snippet indicatorSection(title: string, indicators?: string[])}
    <div class="relative mb-8">
      <h3
        class="sticky top-0 left-0 right-0 text-xl font-semibold text-gray-900 bg-white pb-4"
      >
        {title}
      </h3>
      {#if indicators && indicators.length > 0}
      <div class="space-y-3">
        {#each indicators as indic, _ (indic)}
        <div class="p-4 bg-gray-50 rounded-lg text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
          {indic.trim()}
        </div>
        {/each}
      </div>
      {:else}
      <div class="p-4 bg-gray-50 rounded-lg text-base text-gray-500">No Indicator Found</div>
      {/if}
    </div>
    {/snippet}
    <div class="space-y-8">
      {@render indicatorSection('Extreme Language', fetchResult?.analysis?.bias_indicators?.extreme_language)}
      {@render indicatorSection('Generalizations', fetchResult?.analysis?.bias_indicators?.generalizations)}
      {@render indicatorSection('Hedging', fetchResult?.analysis?.bias_indicators?.hedging)}
      {@render indicatorSection('Opinion Statements', fetchResult?.analysis?.bias_indicators?.opinion_statements)}
      {@render indicatorSection('Unsubstantiated Claims', fetchResult?.analysis?.bias_indicators?.unsubstantiated_claims)}
    </div>
  </div>
  {/snippet}
  {#snippet modalBiasEmotionals()}
  {@const emolangs = fetchResult?.analysis?.emotional_language}
  <div class="grow overflow-auto h-0">
    <div class="relative">
      <div
        class="sticky top-0 left-0 right-0 text-xl font-medium leading-6 text-gray-900 pb-2 bg-white"
      >
        Emotional Languages
      </div>
      {#if emolangs && emolangs.length > 0}
      <div class="space-y-6 highlight-color2">
        {#each emolangs as indic, _ (indic)}
        <div class="p-4 rounded-lg border border-gray-200 highlight-calc" style="--value: {indic.intensity}">
          <div class="flex items-center justify-between mb-2">
            <div class="highlight-this px-3 py-1 rounded-md bg-black text-white text-lg font-bold">
              {indic.intensity.toFixed(2)}
            </div>
            <div class="text-sm text-gray-500">Intensity Score</div>
          </div>
          <p class="text-gray-700 text-lg leading-relaxed">
            {indic.text.trim()}
          </p>
        </div>
        {/each}
      </div>
      {:else}
      <div class="text-base text-gray-500 text-center p-8">No Emotional Language Detected</div>
      {/if}
    </div>
  </div>
  {/snippet}
  {@render modal(dialogFullArticle, $dialogFullArticle.expanded, modalFullArticle)}
  {@render modal(dialogBiasIndicators, $dialogBiasIndicators.expanded, modalBiasIndicators)}
  {@render modal(dialogBiasEmotionals, $dialogBiasEmotionals.expanded, modalBiasEmotionals)}
  <div class="panel p-6 w-full flex flex-col select-none mb-6">
    <div class="flex items-start justify-between gap-6">
      <div class="flex-1 min-w-0">
        <h1 class="text-3xl h-10 font-bold text-gray-900 mb-3 truncate" title={articleMsg.title}>
          {articleMsg.title}
        </h1>
        <div class="flex items-center gap-4 text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <Icon icon="heroicons:calendar" class="w-4 h-4" />
            {new Date().toLocaleDateString()}
          </div>
          <div class="flex items-center gap-2">
            <Icon icon="heroicons:document-text" class="w-4 h-4" />
            {(articleMsg.content.length / 1000).toFixed(1)}K characters
          </div>
        </div>
      </div>
      <button
        class="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-base font-medium"
        onclick={dialogFullArticle.open}
      >
        <Icon icon="heroicons:arrow-top-right-on-square" class="w-5 h-5" />
        Read Full Article
      </button>
    </div>
  </div>
    {#if fetchResult === null}
    <div
      class="panel p-4 min-h-40 w-full flex flex-col items-center justify-center gap-2 select-none"
    >
      <p class="text-4xl"><Icon icon="line-md:loading-loop" /></p>
      <p class="text-xl">Processing article...</p>
      <p class="text-lg">
        If this process takes too long, please retry. Do not refresh this page.
      </p>
    </div>
    {:else if SHOW_RAW_API_RESULT}
    <div
      class="panel p-4 w-full flex flex-col items-center justify-center gap-2 select-none"
    >
      <p class="text-xl">API Result</p>
      <div class="text-sm self-stretch whitespace-break-spaces">
        {JSON.stringify(fetchResult, undefined, 2)}
      </div>
    </div>
    {:else}
    <div class="flex flex-col gap-4">
      <Section title="Keywords">
        <div class="w-full mx-auto mt-6 px-6 py-4 select-text flex flex-row flex-wrap justify-center items-center gap-2">
          {#each fetchResult.keywords as kw, _ (kw)}
          <div
            class="py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 font-medium text-base transition-colors"
          >
            {capitalize(kw)}
          </div>
          {/each}
        </div>
      </Section>
      <Section title="Bias Analysis">
        <div
          class="panel p-6 w-full flex flex-col items-stretch justify-start gap-2 select-none highlight-color my-6"
        >
        <div class="self-stretch flex flex-col items-center highlight-calc" style="--value: {fetchResult.analysis.overall_bias_score};">
          <span class="text-xl font-medium text-gray-500 mb-1">Overall Bias Score (0 - 4)</span>
          <div class="text-4xl font-bold select-text highlight-this px-2 py-1 rounded mt-2">{fetchResult.analysis.overall_bias_score.toFixed(2)}</div>
        </div>
        {#snippet progressbar(percentage: number, barColor: string, additionalString?: string)}
        <div class="relative rounded-full bg-slate-200 w-full h-8 overflow-hidden" title="{additionalString !== undefined ? additionalString : ''}{(percentage * 100).toFixed(1)}%">
          <div class="absolute left-0 top-0 bottom-0 z-10" style="background: {barColor}; width: {clip(percentage * 100, 0.0, 100.0)}%;"></div>
          <div class="relative z-20 text-black w-full h-full flex items-center justify-center text-lg">
            {additionalString !== undefined ? additionalString : ''}{(percentage * 100).toFixed(1)}%
          </div>
        </div>
        {/snippet}
        <div class="flex flex-row items-stretch gap-2">
          <div class="flex-1 grow flex flex-col">
            <div class="text-xl font-medium mb-2 w-full text-center">Subjectivity</div>
            {@render progressbar(fetchResult.analysis.subjectivity_score, '#6366f1')}
            <div class="flex-grow"></div>
            <button
              class="w-full mt-3 rounded-md bg-black hover:bg-opacity-90 text-white px-4 py-2.5 text-lg"
              onclick={dialogBiasIndicators.open}
            >
              View Indicators
            </button>
          </div>
          <div class="flex-none w-0.5 vert-line"></div>
          <div class="flex-1 grow flex flex-col">
            <div class="text-xl font-medium mb-2 w-full text-center">Sentiment</div>
            <div class="flex flex-col gap-2.5">
              {@render progressbar(fetchResult.analysis.sentiment_scores.compound / 2 + 0.5, '#a855f7', 'Compound ')}
              {@render progressbar(fetchResult.analysis.sentiment_scores.neg, '#3b82f6', 'Negative ')}
              {@render progressbar(fetchResult.analysis.sentiment_scores.neu, '#eab308', 'Neutral ')}
              {@render progressbar(fetchResult.analysis.sentiment_scores.pos, '#22c55e', 'Positive ')}
            </div>
            <div class="flex-grow"></div>
            <button
              class="w-full mt-3 rounded-md bg-black hover:bg-opacity-90 text-white px-4 py-2.5 text-lg"
              onclick={dialogBiasEmotionals.open}
            >
              View Emotionals
            </button>
          </div>
        </div>
      </Section>
      <Section title="Political Analysis">
        <div
          class="panel p-6 w-full flex flex-col items-stretch justify-start gap-2 select-none my-6"
        >
          <div class="self-stretch flex flex-col items-center">
            <span class="text-xl font-medium text-gray-500">Political Leaning</span>
            <span class="text-4xl font-bold mt-2">{fetchResult.political_analysis.leaning}</span>
          </div>
          
          {#if (fetchResult.political_analysis.left_percentage !== 0 ||
          fetchResult.political_analysis.right_percentage !== 0 ||
          fetchResult.political_analysis.evidence.left_indicators.length !== 0 ||
          fetchResult.political_analysis.evidence.right_indicators.length !== 0)}
          {#snippet keywords(kws: string[], isLeft: boolean)}
          <div class="flex flex-wrap gap-2 justify-center mt-4 select-text">
            {#each kws as indic, _ (indic)}
              <div class="px-3 py-1.5 rounded-lg text-sm font-medium {isLeft ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}">{indic}</div>
            {/each}
          </div>
          {/snippet}
          <div class="flex flex-row items-stretch mt-8 gap-8">
            <div class="flex-1 space-y-4">
              <div class="text-xl font-medium text-center mb-2 text-red-700">Left-leaning</div>
              <div class="relative rounded-xl bg-slate-100 w-full h-10 overflow-hidden" title="{fetchResult.political_analysis.left_percentage}%">
                <div class="absolute left-0 top-0 bottom-0 bg-red-500 z-10" style="width: {clip(fetchResult.political_analysis.left_percentage, 0, 100)}%;"></div>
                <div class="relative z-20 text-black w-full h-full flex items-center justify-center text-lg font-medium">
                  {fetchResult.political_analysis.left_percentage}%
                </div>
              </div>
              {@render keywords(fetchResult.political_analysis.evidence.left_indicators, true)}
            </div>
            <div class="flex-none w-0.5 vert-line"></div>
            <div class="flex-1 space-y-4">
              <div class="text-xl font-medium text-center mb-2 text-blue-700">Right-leaning</div>
              <div class="relative rounded-xl bg-slate-100 w-full h-10 overflow-hidden" title="{fetchResult.political_analysis.right_percentage}%">
                <div class="absolute right-0 top-0 bottom-0 bg-blue-500 z-10" style="width: {clip(fetchResult.political_analysis.right_percentage, 0, 100)}%;"></div>
                <div class="relative z-20 text-black w-full h-full flex items-center justify-center text-lg font-medium">
                  {fetchResult.political_analysis.right_percentage}%
                </div>
              </div>
              {@render keywords(fetchResult.political_analysis.evidence.right_indicators, false)}
            </div>
          </div>
          {/if}
        </div>
      </Section>
      {#if fetchResult.related_articles.length > 0}
      <Section title="Summary">
        <div class="my-6 space-y-8">
          <div
            class="panel p-6"
          >
            <p class="text-2xl font-medium text-gray-900 mb-4 text-center">Article Comparison</p>
            <div class="prose prose-lg max-w-none text-gray-700 px-4 select-text">
              <Markdown md={fetchResult.GPT_Compare} />
            </div>
          </div>
        </div>
        <h3 class="text-2xl font-medium text-white mb-6 px-2 text-center">Related Articles</h3>
        <div class="w-full space-y-4">
          {#each fetchResult.related_articles as atcl, _ (atcl.url)}
          <a href={atcl.url} target="_blank" class="panel block p-4 hover:bg-gray-50 transition-colors">
            <div class="flex gap-6">
              {#if atcl.urlToImage}
                <div class="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                  <img src={atcl.urlToImage} alt="" class="w-full h-full object-cover" />
                </div>
              {/if}
              <div class="flex-1 min-w-0 space-y-2">
                <h4 class="text-xl font-medium text-gray-900 truncate">
                  {atcl.title}
                </h4>
                <p class="text-gray-600 line-clamp-2">
                  {atcl.description}
                </p>
                <div class="text-sm text-gray-500">
                  {#if atcl.author}
                    <span class="font-medium">{atcl.author}</span>
                    <span class="mx-2">·</span>
                  {/if}
                  <span>
                    {new Date(Date.parse(atcl.publishedAt)).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </a>
          {/each}
        </div>
      </Section>
      {/if}
    </div>
    {/if}
  {/if}
  </div>
</div>

<style lang="postcss">

  .panel {
    @apply bg-white rounded-xl shadow-md;
  }

  .vert-line {
    background: rgb(100,116,139);
    background: linear-gradient(0deg, rgba(100,116,139,0) 0%, rgba(100,116,139,1) 10%, rgba(100,116,139,1) 90%, rgba(100,116,139,0) 100%);
  }

  /* https://stackoverflow.com/questions/78305428/is-there-a-way-to-interpolate-the-colour-of-an-element-using-css-based-on-a-val */
  .highlight-color {
    --min: 0;
    --max: 4;
    --incs: oklch;
    --value: 2;
    --high-color: #F8696B;
    --middle-color: #FFEB84;
    --low-color: #63BE7B;
  }
  
  .highlight-color2 {
    --min: -1;
    --max: 1;
    --incs: oklch;
    --value: 0;
    --high-color: #f87171;
    --middle-color: #00000000;
    --low-color: #60a5fa;
  }

  .highlight-color .highlight-calc {
    --normed: calc(100% * (var(--value) - var(--min))/(var(--max) - var(--min)));
  }

  .highlight-color2 .highlight-calc {
    --normed: calc(100% * (var(--value) - var(--min))/(var(--max) - var(--min)));
  }

  .highlight-color .highlight-this {
    --n1: calc((var(--normed) - 50%) * 2);
    --n2: calc(var(--normed)*2);
    background-color: color-mix(
      in var(--incs),
      color-mix(in var(--incs), var(--high-color) var(--n1), var(--middle-color)) var(--normed),
      color-mix(in var(--incs), var(--middle-color) var(--n2), var(--low-color))
    );
  }
  .highlight-color2 .highlight-this {
    --n1: calc((var(--normed) - 50%) * 2);
    --n2: calc(var(--normed)*2);
    background-color: color-mix(
      in var(--incs),
      color-mix(in var(--incs), var(--high-color) var(--n1), var(--middle-color)) var(--normed),
      color-mix(in var(--incs), var(--middle-color) var(--n2), var(--low-color))
    );
  }
</style>
