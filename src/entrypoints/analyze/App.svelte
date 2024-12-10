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

<div class="min-h-screen w-full bg-gradient p-4">
  <div class="min-h-full w-full max-w-[80%] mx-auto">
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
  <h3
    class="sticky top-0 left-0 right-0 text-lg font-medium leading-6 text-gray-900 mb-2"
  >
    {articleMsg?.title}
  </h3>
  <div class="grow overflow-auto h-0">
    <p class="text-sm text-gray-500 whitespace-break-spaces">
      {articleMsg?.content}
    </p>
  </div>
  {/snippet}
  {#snippet modalBiasIndicators()}
  <div class="grow overflow-auto h-0">
    {#snippet indicatorSection(title: string, indicators?: string[])}
    <div class="relative">
      <div
        class="sticky top-0 left-0 right-0 text-lg font-medium leading-6 text-gray-900 pb-2 bg-white"
      >
        {title}
      </div>
      {#if indicators && indicators.length > 0}
      <div class="alternating-p">
        {#each indicators as indic, _ (indic)}
        <p class="text-sm text-gray-800 whitespace-break-spaces px-2 py-1">
          {indic.trim()}
        </p>
        {/each}
      </div>
      {:else}
      <div class="text-sm text-gray-500 whitespace-break-spaces">No Indicators</div>
      {/if}
    </div>
    {/snippet}
    <div class="flex flex-col gap-4">
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
        class="sticky top-0 left-0 right-0 text-lg font-medium leading-6 text-gray-900 pb-2 bg-white"
      >
        Emotional Languages
      </div>
      {#if emolangs && emolangs.length > 0}
      <table class="highlight-color2 alternating-row w-full">
        <colgroup>
          <col class="w-16"/>
          <col class="" />
        </colgroup>
        <thead>
          <tr>
            <th class="text-center">
              Intensity
            </th>
            <th class="pl-4">
              Language
            </th>
          </tr>
        </thead>
        <tbody>
          {#each emolangs as indic, _ (indic)}
          <tr class="highlight-calc" style="--value: {indic.intensity}">
            <td class="highlight-this text-right rounded-l-lg pr-2 border-transparent border-r-4 border-t-8 border-b-8">
              {indic.intensity.toFixed(2)}
            </td>
            <td>
              {indic.text.trim()}
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
      {:else}
      <div class="text-sm text-gray-500 whitespace-break-spaces">No Emotional Languages</div>
      {/if}
    </div>
  </div>
  {/snippet}
  {@render modal(dialogFullArticle, $dialogFullArticle.expanded, modalFullArticle)}
  {@render modal(dialogBiasIndicators, $dialogBiasIndicators.expanded, modalBiasIndicators)}
  {@render modal(dialogBiasEmotionals, $dialogBiasEmotionals.expanded, modalBiasEmotionals)}
    <div
      class="panel p-4 w-full flex flex-col items-center justify-start select-none mb-4"
    >
      <p class="text-lg mb-1">Analysis Result for</p>
      <p
        class="max-w-full text-3xl font-semibold px-4 h-10 text-ellipsis overflow-hidden whitespace-nowrap"
        title={articleMsg.title}
      >
        {articleMsg.title}
      </p>
      <button
        class="mt-2 rounded-md bg-black bg-opacity-5 hover:bg-opacity-10 px-4 py-2"
        onclick={dialogFullArticle.open}
      >
        View Article
      </button>
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
        <div class="w-4/5 mx-auto select-text flex flex-row flex-wrap justify-center items-center">
          {#each fetchResult.keywords as kw, _ (kw)}
          <div class="m-1 py-1 px-2 rounded-full bg-white shadow-md">{capitalize(kw)}</div>
          {/each}
        </div>
      </Section>
      <Section title="Bias Analysis">
        <div
          class="panel p-4 w-full flex flex-col items-stretch justify-start gap-2 select-none highlight-color"
        >
        <div class="self-stretch flex flex-col items-center highlight-calc" style="--value: {fetchResult.analysis.overall_bias_score};">
          <span class="text-lg mb-1">Overall Bias Score (0 - 4)</span>
          <div class="text-2xl select-text highlight-this px-2 py-1 rounded">{fetchResult.analysis.overall_bias_score.toFixed(2)}</div>
        </div>
        {#snippet progressbar(percentage: number, barColor: string, additionalString?: string)}
        <div class="relative rounded-full bg-slate-200 w-full h-6 overflow-hidden" title="{additionalString !== undefined ? additionalString : ''}{(percentage * 100).toFixed(1)}%">
          <div class="absolute left-0 top-0 bottom-0 z-10" style="background: {barColor}; width: {clip(percentage * 100, 0.0, 100.0)}%;"></div>
          <div class="relative z-20 text-black w-full h-full flex items-center justify-center">
            {additionalString !== undefined ? additionalString : ''}{(percentage * 100).toFixed(1)}%
          </div>
        </div>
        {/snippet}
        <div class="flex flex-row items-stretch gap-2">
          <div class="relative flex-1 grow">
            <div class="text-lg mb-1 w-full text-center">Subjectivity</div>
            {@render progressbar(fetchResult.analysis.subjectivity_score, '#d8b4fe')}
            <button
              class="absolute bottom-0 w-full rounded-md bg-black bg-opacity-5 hover:bg-opacity-10 px-4 py-2"
              onclick={dialogBiasIndicators.open}
            >
              View Indicators
            </button>
          </div>
          <div class="flex-none w-0.5 vert-line"></div>
          <div class="relative flex-1 grow">
            <div class="text-lg mb-1 w-full text-center">Sentiment</div>
            <div class="flex flex-col gap-2">
              {@render progressbar(fetchResult.analysis.sentiment_scores.compound / 2 + 0.5, '#d8b4fe', 'Compound ')}
              {@render progressbar(fetchResult.analysis.sentiment_scores.neg, '#60a5fa', 'Negative ')}
              {@render progressbar(fetchResult.analysis.sentiment_scores.neu, '#facc15', 'Neutral ')}
              {@render progressbar(fetchResult.analysis.sentiment_scores.pos, '#f87171', 'Positive ')}
            </div>
            <button
              class="mt-2 w-full rounded-md bg-black bg-opacity-5 hover:bg-opacity-10 px-4 py-2"
              onclick={dialogBiasEmotionals.open}
            >
              View Emotionals
            </button>
          </div>
        </div>
      </Section>
      <Section title="Political Analysis">
        <div
          class="panel p-4 w-full flex flex-col items-stretch justify-start gap-2 select-none"
        >
          <div class="self-stretch flex flex-col items-center">
            <span class="text-lg">Leaning</span>
            <span class="text-2xl select-text">{fetchResult.political_analysis.leaning}</span>
          </div>
          
          {#if (fetchResult.political_analysis.left_percentage !== 0 ||
          fetchResult.political_analysis.right_percentage !== 0 ||
          fetchResult.political_analysis.evidence.left_indicators.length !== 0 ||
          fetchResult.political_analysis.evidence.right_indicators.length !== 0)}
          {#snippet keywords(kws: string[], isLeft: boolean)}
          <div class="mt-4 text-lg flex flex-row items-center justify-center flex-wrap select-text">
            {#each kws as indic, _ (indic)}
              <div class="m-1 px-2 py-1 {isLeft ? 'bg-red-100' : 'bg-blue-100'}">{indic}</div>
            {/each}
          </div>
          {/snippet}
          <div class="flex flex-row items-stretch">
            <div class="flex-1 grow pr-2">
              <div class="text-lg mb-1 w-full text-center">Left</div>
              <div class="relative rounded-full bg-slate-200 w-full h-6 overflow-hidden" title="{fetchResult.political_analysis.left_percentage}%">
                <div class="absolute left-0 top-0 bottom-0 bg-red-400 z-10" style="width: {clip(fetchResult.political_analysis.left_percentage, 0, 100)}%;"></div>
                <div class="relative z-20 text-black w-full h-full flex items-center justify-center">
                  {fetchResult.political_analysis.left_percentage}%
                </div>
              </div>
              {@render keywords(fetchResult.political_analysis.evidence.left_indicators, true)}
            </div>
            <div class="flex-none w-0.5 vert-line"></div>
            <div class="flex-1 grow pl-2">
              <div class="text-lg mb-1 w-full text-center">Right</div>
              <div class="relative rounded-full bg-slate-200 w-full h-6 overflow-hidden" title="{fetchResult.political_analysis.right_percentage}%">
                <div class="absolute right-0 top-0 bottom-0 bg-blue-400 z-10" style="width: {clip(fetchResult.political_analysis.right_percentage, 0, 100)}%;"></div>
                <div class="relative z-20 text-black w-full h-full flex items-center justify-center">
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
      <Section title="Related Articles">
        <div
          class="panel p-4 w-full flex flex-col items-center justify-center gap-2 select-none"
        >
          <p class="text-xl">Comparison Summary</p>
          <div class="w-full py-4 px-8 prose prose-base max-w-none">
            <Markdown md={fetchResult.GPT_Compare} />
          </div>
        </div>
        <div class="w-full mx-auto mt-4 flex flex-row flex-wrap justify-center items-center gap-4">
          {#each fetchResult.related_articles as atcl, _ (atcl.url)}
          <div
            class="panel w-full {false ? 'max-w-72 h-48' : 'h-32'} overflow-hidden"
          >
          <a class="w-full h-full flex flex-col items-stretch justify-start gap-2 select-text p-2" href={atcl.url} target="_blank">
            <div class="relative h-full w-full flex flex-row justify-start items-stretch">
              {#if atcl.urlToImage}
              <div class="h-full aspect-square flex-shrink-0 flex items-center justify-center overflow-hidden rounded-md">
                <div class="h-[200%] aspect-square flex items-center justify-center">
                  <img src={atcl.urlToImage} alt="Article"/>
                </div>
              </div>
              {/if}
              <div class="pl-4 pr-2 w-full h-full flex flex-col justify-start items-stretch overflow-hidden">
                <p class="text-lg flex-1 max-w-full h-10 text-ellipsis overflow-hidden whitespace-nowrap" title={atcl.title}>{atcl.title}</p>
                <p class="grow max-w-full text-ellipsis overflow-hidden whitespace-break-spaces">{atcl.description}</p>
                <div class="flex-shrink-0">{atcl.author} {atcl.author ? '-' : ''} {new Date(Date.parse(atcl.publishedAt)).toLocaleDateString()}</div>
              </div>
            </div>
          </a>
          </div>
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
  .bg-gradient {
    background: #06beb6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #48b1bf,
      #06beb6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #48b1bf,
      #06beb6
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

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

  .alternating-p > p:nth-of-type(even) {
    background-color: #eeeeee
  }

  .alternating-row tbody > tr:nth-of-type(even) > td:nth-child(2) {
    background-color: #eeeeee
  }
</style>
