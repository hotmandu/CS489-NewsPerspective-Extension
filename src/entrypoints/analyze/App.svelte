<script lang="ts">
  import type { ApiAnalyzeResult, Article } from "@/lib/types";
  import Icon from "@iconify/svelte";
  import { createDialog } from "svelte-headlessui";
  import Transition from "svelte-transition";
  import Section from "./Section.svelte";
  import type { Snippet } from "svelte";

  const NO_API_MODE = false;
  const SHOW_RAW_API_RESULT = false;

  const HASHED_API_RESULT: string | null = String.raw`{
  "analysis": {
    "bias_indicators": {
      "extreme_language": [
        "The military then announced that all parliamentary activity was suspended under martial law.",
        "This was “a move I never expected to see in the 21st century in South Korea,” university student Juye Hong told BBC World Service's OS programme from Seoul.",
        "\"But then overwhelmingly the sense of fear settled in, that kept me up all night.",
        "I thought, ‘Is this something that can happen in 21st century Korea, especially in the National Assembly?\"\n\"After such a storm last night, it was hard to get back to reality,\" she added, recalling the previous night.",
        "Some crawled through the legs of security forces, others shoved and screamed at armed soldiers; many frantically clambered over fences and walls.",
        "Hong said that protesters helped to hoist him over the wall.",
        "But public anger - and the political fallout - was not spent.",
        "As the sun rose on Wednesday, thousands gathered to call for Yoon's resignation."
      ],
      "generalizations": [
        "The military then announced that all parliamentary activity was suspended under martial law.",
        "This was “a move I never expected to see in the 21st century in South Korea,” university student Juye Hong told BBC World Service's OS programme from Seoul.",
        "\"But then overwhelmingly the sense of fear settled in, that kept me up all night.",
        "I thought, ‘Is this something that can happen in 21st century Korea, especially in the National Assembly?\"\n\"After such a storm last night, it was hard to get back to reality,\" she added, recalling the previous night.",
        "Some crawled through the legs of security forces, others shoved and screamed at armed soldiers; many frantically clambered over fences and walls.",
        "Hong said that protesters helped to hoist him over the wall.",
        "But public anger - and the political fallout - was not spent.",
        "As the sun rose on Wednesday, thousands gathered to call for Yoon's resignation."
      ],
      "hedging": [
        "\"I couldn’t believe what I was seeing,\" said the student, who wished to be identified only by his surname.",
        "\"\n\"No words can express how afraid I am that things might turn out like North Korea for our people,\" a South Korean who did not want to be named told BBC OS.",
        "As concerns grew that the government might restrict the media, journalists in Seoul stayed in touch with one another, exchanging advice on how to stay safe.",
        "Hastily, they barricaded the entrances with whatever they could find: cushioned benches, long tables, sofas.",
        "But this would only be made official, he said, when he could assemble enough of his cabinet to lift the order."
      ],
      "opinion_statements": [
        "\"I couldn’t believe what I was seeing,\" said the student, who wished to be identified only by his surname.",
        "The president's gamble backfired: What was he thinking?",
        "\"I wasn't thinking about anything intellectual or rational, I was just like, ‘We have to stop this, if we don't stop this, there's nothing else,’’ she told the BBC."
      ]
    },
    "emotional_language": [
      {
        "intensity": -0.8176,
        "text": "In a little less than six hours, Yoon was forced to walk back his shock announcement after lawmakers scrambled to block it.\n"
      },
      {
        "intensity": -0.9331,
        "text": "But those were chaotic hours, sparking protests, fear and uncertainty in the country that had elected him.\n"
      },
      {
        "intensity": -0.6808,
        "text": "The embattled leader is in a deadlock over a budget bill, dogged by corruption scandals and investigations into his cabinet members.\n"
      },
      {
        "intensity": -0.8736,
        "text": "But neither that nor the heavy security presence stopped thousands from gathering in front of the assembly in concern and fury.\n"
      },
      {
        "intensity": 0.6597,
        "text": "It is easy to forget that South Korea - now a vibrant democracy - had its last brush with authoritarianism in the not-too-distant past - it only emerged from military rule in 1987."
      },
      {
        "intensity": -0.5719,
        "text": "How two hours of martial law chaos unfolded\nIt was a sleepless night for some."
      },
      {
        "intensity": -0.7227,
        "text": "\"But then overwhelmingly the sense of fear settled in, that kept me up all night."
      },
      {
        "intensity": -0.5423,
        "text": "\"\nAs Ahn was confronting the soldiers, the clock was ticking for opposition lawmakers, who rushed to get into the assembly to block the order."
      },
      {
        "intensity": 0.5106,
        "text": "“Democracy is strong here,” Hong said."
      },
      {
        "intensity": -0.7227,
        "text": "But public anger - and the political fallout - was not spent.\n"
      },
      {
        "intensity": 0.7783,
        "text": "“We are a strong democracy…But Korean people want to be safe - President Yoon must resign or be impeached,” Yang Bu-nam, a Democratic Party politician, told the BBC.\n"
      }
    ],
    "overall_bias_score": 2.238388353730754,
    "sentiment_scores": {
      "compound": -0.04930588235294118,
      "neg": 0.08202941176470589,
      "neu": 0.8667647058823529,
      "pos": 0.051235294117647066
    },
    "subjectivity_score": 0.10961968680089486
  },
  "keywords": [
    "seoul",
    "yoon",
    "night",
    "bbc",
    "hundreds"
  ],
  "political_analysis": {
    "evidence": {
      "left_indicators": ["A"],
      "right_indicators": ["B", "C"]
    },
    "leaning": "Neutral/Centrist",
    "left_percentage": 10,
    "right_percentage": 60
  },
  "related_articles": [
    {
      "author": null,
      "content": "Crowds of protesters erupted with cheers outside South Korea's parliament early on Wednesday after the country's president dramatically withdrew a martial law order that had sparked chaotic scenes in… [+2711 chars]",
      "description": "President Yoon Suk Yeol's sudden announcement of martial law sparked chaotic scenes in Seoul.",
      "publishedAt": "2024-12-03T20:21:33Z",
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "title": "Crowds celebrate as South Korean president withdraws troops",
      "url": "https://www.bbc.com/news/articles/c77jx1n4epdo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9eee/live/28f02910-b1a6-11ef-a2ca-e99d0c9a24e3.jpg"
    },
    {
      "author": "Associated Press",
      "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nS… [+8086 chars]",
      "description": "South Korean President Yoon Suk Yeol said that he would soon lift the military rule he imposed overnight, after the parliament voted to reject his martial...",
      "publishedAt": "2024-12-03T21:33:22Z",
      "source": {
        "id": "buzzfeed",
        "name": "Buzzfeed"
      },
      "title": "If You're Seeing A Ton Of Headlines About South Korea But Don't Know What's Happening, Here's What We Know",
      "url": "https://www.buzzfeed.com/associatedpress/south-korea-martial-law-imposed-voted-to-be-lifted",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/IKCKxl0QAaP_tD3icmeiAA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTc-/https://media.zenfs.com/en/buzzfeed_articles_778/653397d8cc9d67a353204b08183d5aa4"
    },
    {
      "author": "Deutsche Welle",
      "content": "South Korea's cabinet agreed to end martial law in the early hours of Wednesday morning after the opposition-controlled parliament voted against it.\r\n\"Just a moment ago, there was a demand from the N… [+6522 chars]",
      "description": "Police and soldiers entered parliament in Seoul soon after the shock late-night address from President Yoon Suk Yeol. The National Assembly quickly convened and voted to declare the move invalid.",
      "publishedAt": "2024-12-03T19:49:00Z",
      "source": {
        "id": null,
        "name": "DW (English)"
      },
      "title": "South Korea ends martial law after lawmakers vote it down",
      "url": "https://www.dw.com/en/south-korea-ends-martial-law-after-lawmakers-vote-it-down/a-70947817",
      "urlToImage": "https://static.dw.com/image/70950967_6.jpg"
    },
    {
      "author": "Deutsche Welle",
      "content": "South Korean President Yoon Suk Yeol said he would lift \"emergency martial law\" soon after the opposition-controlled parliament voted against it.\r\n\"Just a moment ago, there was a demand from the Nati… [+5903 chars]",
      "description": "Police and soldiers entered parliament in Seoul soon after the shock late-night address from the president. The National Assembly quickly convened and voted to declare the move invalid.",
      "publishedAt": "2024-12-03T19:49:00Z",
      "source": {
        "id": null,
        "name": "DW (English)"
      },
      "title": "South Korean President Yoon Suk Yeol to end martial law",
      "url": "https://www.dw.com/en/south-korean-president-yoon-suk-yeol-to-end-martial-law/a-70947817",
      "urlToImage": "https://static.dw.com/image/70950967_6.jpg"
    },
    {
      "author": "Oscar Coleman",
      "content": "South Korean President Yoon Suk Yeol declared martial law overnight, then rescinded it, after blasting the opposition as \"anti-state forces\" threatening the country's democracy.\r\nThe unexpected move … [+8854 chars]",
      "description": "South Korean President Yoon Suk Yeol declared martial law, but then rescinded it, after criticising the opposition as \"anti-state forces\" threatening the country's democracy.",
      "publishedAt": "2024-12-03T22:04:06Z",
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "title": "South Korea's president declared martial law overnight, then revoked it hours later. Here's why",
      "url": "https://www.abc.net.au/news/2024-12-04/what-is-martial-law-south-korea/104681802",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/0bce98bfbc9763eb7506204ebdfac5b7?impolicy=wcms_watermark_news&cropH=1380&cropW=2453&xPos=0&yPos=160&width=862&height=485&imformat=generic"
    }
  ],
  "status": "success"
}
  `;

  const dialogFullArticle = createDialog({ label: "Full News Article" });

  const dialogBiasEmotionals = createDialog({ label: "Emotional Languages" });
  const dialogBiasIndicators = createDialog({ label: "Bias Indicators" });

  let articleMsg = $state<Article | null>(null);
  // Don't need to use state?
  let flagApiOnce = false;
  let fetchResult = $state<ApiAnalyzeResult | null>(null);
  let errorState = $state(false);

  $effect(() => {
    let iv = null;
    if (articleMsg !== null) {
      if (NO_API_MODE) {
        if (HASHED_API_RESULT === null) {
          console.log("API was set to be ignored but NO HASHED_API_RESULT!");
          errorState = true;
        } else {
          iv = setTimeout(() => {
            try {
              fetchResult = JSON.parse(HASHED_API_RESULT);
            } catch (e) {
              console.log("HASHED_API_RESULT is invalid JSON String!");
              errorState = true;
            }
          }, 500);
        }
      } else {
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
              console.log("Fetch Failed!");
              console.log(fetchResult);
              errorState = true;
            }
          })
          .catch((e) => {
            console.log("API ERROR!");
            console.log(e);
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
    browser.runtime.onMessage.addListener((msg) => {
      if (!flagApiOnce) {
        articleMsg = msg;
        flagApiOnce = true;
      }
    });
    let iv = null;
    if (NO_API_MODE) {
      iv = setTimeout(() => {
        articleMsg = {
          title: String.raw`'Are we about to repeat history?': Martial law's traumatic legacy in South Korea`,
          content: String.raw`Koh Jae-hak can still vividly remember when he saw soldiers gunning down a group of young women in cold blood.
It was April 1960. Students had launched protests calling for the resignation of the dictatorial president Syngman Rhee. Mr Koh was working in a government building when he looked out of the window and saw protesters clashing with police.
"There were demonstrations from various universities, and they all gathered in front… that's when shots were fired," the 87-year-old said. Days later, martial law was declared.
South Korea is widely considered a peaceful beacon of democracy in Asia, but that wasn't always the case. This is a country that saw 16 bouts of martial law during its first four decades ruled largely by dictators.
It is why democracy is now deeply treasured by South Koreans as a hard-won right. It is also why President Yoon Suk Yeol's declaration of martial law this week – the first to happen in 45 years and during democratic rule - was particularly triggering and prompted such a visceral response.
Almost immediately, lawmakers jumped out of bed and rushed to the national assembly, clambering over fences to reverse martial law.
Hundreds of ordinary citizens gathered to hold back troops who had been ordered to throw out MPs.
Some soldiers, apparently unwilling to carry out their orders, reportedly dragged their feet in clearing the crowd and entering the building.
When Yoon declared martial law on Tuesday night, he said it was necessary to get rid of "pro-North anti-state" forces. Initially, it caused confusion with some South Koreans who believed there was a genuine threat from the North.
But as they continued watching Yoon's televised announcement, many grew sceptical. He gave no evidence of such forces at work, nor explained who they were. As Yoon had previously used similar language to describe the opposition that had been stymying his reforms, the public concluded he was actually trying to crush his political foes.
Previous periods of martial law had also been justified by leaders as necessary to stabilise the country, and sometimes stamp out what they alleged were communist subversives planted by North Korea.
They curtailed freedom of press and freedom of movement. Night curfews and arrests were common.
Violent clashes sometimes took place, most indelibly in 1980, when then President Chun Doo-hwan extended martial law to deal with student protesters calling for democracy in the southern city of Gwangju. A brutal military crackdown was launched, and it has since been labelled a massacre – while the official death toll is 193, some experts believe hundreds more died.
South Korea eventually transitioned to democracy in 1988, when the government held its first free and fair presidential election following mounting public pressure. But the preceding decades had permanently and profoundly shaped the nation's consciousness.
"Most Koreans have trauma, deep trauma, about martial law," said Kelly Kim, 53, an environmental activist. "We don't want to repeat the same thing over and over."
Ms Kim was a young child when martial law was last in place and has little memory of it. Still, she shudders at the thought of it returning.
"The government would control all the media, our normal activities. I'm working in civil society, so all our activities, like criticising the government, would not be possible under the martial law. So that's really horrible."
The freedoms afforded by democracy have not just led to a thriving civil society.
In the more than 35 years since that first democratic election, South Korea's creative industries have flourished, with its dramas, TV shows, music and literature becoming world famous. Those creative industries have turned their own lenses onto the country's past, bringing history to life for those too young to remember.
The country has seen a proliferation of shows about its dictatorship past, immortalising incidents such as the Gwangju uprising in popular culture.
Some were blockbusters featuring South Korea's biggest stars, such as last year's 12.12 The Day, a historical drama starring popular actor Hwang Jung-min. The movie depicts the political chaos that took place in 1979 as martial law was declared following the assassination of then president Park Chung-hee.
"As soon as I saw the images [of Yoon's declaration of martial law], it reminded me of that movie… it made me question, are we about to repeat that history now?" said Marina Kang, a 37-year-old web designer.
"Korea's got a wealth of visual representational works [of that era] in films and documentaries. Though we only have indirect experience of the horrific past through these works… that still makes me feel very strongly that such events should not happen again."
Among younger citizens, there is a sense of disbelief that it could have returned. Despite never knowing life under martial law, they have been taught by their parents and older relatives to fear it.
"At first [when I heard Yoon's announcement], I was excited at the thought of getting a day off from school. But that joy was fleeting, and I was overwhelmed by the fear of daily life collapsing. I couldn't sleep," said 15-year-old Kwon Hoo.
"My father was concerned that under martial law, he wouldn't be able to stay out late even though his work required him to… when he heard the news about the possibility of a curfew being imposed again, he started swearing while watching the news."
Not all South Koreans feel this way about their past.
"The vast majority of Koreans appreciate democracy enormously and regret the authoritarianism of the post-war period," said Mason Richey, associate professor of international politics at Hankuk University of Foreign Studies in Seoul.
But, he added, "the country remains very divided regarding numerous aspects of the authoritarian past, notably how justified certain repressive measures were in order to prevent communist subversion."
There is the view among a significant portion of the population, especially among older folk, that martial law was necessary in the past for stability and democracy.
"Back then, it was a time defined by ideological warfare between democracy and communist socialism," said Kang Hyo-san, 83. He was sitting next to his friend Mr Koh in a cafe at Gwanghwamun, Seoul's main square and focal point for the city's protest rallies.
The competing ideologies would lead to clashes and "when the military intervened, the situation would stabilise… it was a process to restore order and properly establish free democracy.
"Given the circumstances, we couldn't help but view it positively," he said, adding that he felt each period of martial law left the country in a more "favourable" position. Martial law in South Korea "fundamentally differed" from other nations, where it "wasn't about killing people or senseless violence", he insisted.
But this time, it's different. Both octogenarians felt that Yoon's declaration of martial law was unacceptable. "Even though we've experienced martial law many times throughout our lives, this time there's no justification for its declaration," said Mr Koh.
Like them, Ms Kim, the environmental activist, was glad Yoon did not succeed and democracy prevailed in the end. "Because we fought so hard to get it, right? We don't want to lose it again.
"Without democracy and freedom of living, what is life?"`,
        };
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
        <div class="w-full mx-auto mt-4 flex flex-row flex-wrap justify-center items-center gap-4">
          {#each fetchResult.related_articles as atcl, _ (atcl.url)}
          <div
            class="panel w-full {false ? 'max-w-72 h-48' : 'h-32'} overflow-hidden"
          >
          <a class="w-full h-full flex flex-col items-stretch justify-start gap-2 select-text p-2" href={atcl.url}>
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
