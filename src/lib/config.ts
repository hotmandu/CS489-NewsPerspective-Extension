export const NO_API_MODE = false;
export const SHOW_RAW_API_RESULT = false;
export const DEBUG_CONSOLE_OUTPUT = false;

export const getConsolelog = (namespace: string) => {
  if(DEBUG_CONSOLE_OUTPUT) {
    return (...args: any[]) => console.log(`[NewsPsp ${namespace}]`, ...args);
  } else {
    return (...args: any[]) => {};
  }
}

export const CACHED_API_RESULT: string | null = ""; /*String.raw`{
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
}`; //*/

export const CACHED_ARTICLE = { title: '', content: '' }; /*{
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
};//*/
