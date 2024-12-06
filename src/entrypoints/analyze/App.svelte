<script lang="ts">
  import type { ApiAnalyzeResult, Article } from '@/lib/types';

  const NO_API_MODE = true;

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
      "left_indicators": [],
      "right_indicators": []
    },
    "leaning": "Neutral/Centrist",
    "left_percentage": 0,
    "right_percentage": 0
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

  let articleMsg = $state<Article | null>(null);
  // Don't need to use state?
  let flagApiOnce = false;
  let fetchResult = $state<ApiAnalyzeResult | null>(null);
  let errorState = $state(false);

  $effect(() => {
    if(articleMsg !== null) {
      if(NO_API_MODE) {
        if (HASHED_API_RESULT === null) {
          console.log('API was set to be ignored but NO HASHED_API_RESULT!')
          errorState = true;
        } else {
          try {
            fetchResult = JSON.parse(HASHED_API_RESULT);
          } catch (e) {
            console.log('HASHED_API_RESULT is invalid JSON String!')
            errorState = true;
          }
        }
      } else {
        fetch('https://cs489-newsperspective-backend-production.up.railway.app/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ article_text: articleMsg.content }),
        }).then((res) => {
          return res.json()
        }).then((v) => {
          fetchResult = v as ApiAnalyzeResult;
          if(fetchResult.status !== 'success') {
            console.log('Fetch Failed!')
            console.log(fetchResult)
            errorState = true;
          }
        })
        .catch((e) => {
          console.log('API ERROR!')
          console.log(e)
          errorState = true;
        });
      }
    }
  })

  onMount(() => {
    browser.runtime.onMessage.addListener((msg) => {
      if(!flagApiOnce) {
        articleMsg = msg;
        flagApiOnce = true;
      }
    });
    if (NO_API_MODE) {
      articleMsg = { title: 'NO API MODE', content: 'CONTENT IS IGNORED, USED HASHED_API_RESULT INSTEAD' };
    }
  });
</script>

<div class="min-h-screen w-full">
  {#if errorState}
  <div class="h-40 w-full flex flex-col items-center gap-4">
    <p class="text-xl">An error occurred while processing article!</p>
    <p class="text-lg">Please retry later.</p>
  </div>
  {:else}
  {#if articleMsg === null}
    <div>Reading article. If this process takes too long, please retry. Do not refresh this page.</div>
  {:else}
    <div>Article</div>
    <div class="min-w-96 w-full p-2">
      <div class="w-full border border-black p-2">
        <div class="text-2xl">
          {articleMsg.title}
        </div>
        <div class="mt-2 whitespace-break-spaces">
          {articleMsg.content}
        </div>
      </div>
    </div>
    {#if fetchResult === null}
    <div>Processing article...</div>
    {:else}
    <div>API Result</div>
    <div class="min-w-96 w-full p-2">
      <div class="w-full border border-black p-2">
        <div class="whitespace-break-spaces">
          {JSON.stringify(fetchResult, undefined, 2)}
        </div>
      </div>
    </div>
    {/if}
  {/if}
  {/if}
</div>
