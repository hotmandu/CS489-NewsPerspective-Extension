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

export const CACHED_API_RESULT: string | null = ""; /* String.raw`{
  "GPT_Compare": "### Summary of Analysis: Current Article vs. Other Articles\n\n**Current Article:**\nThe current article reports on Israeli air strikes within Syria, emphasizing significant military actions in Damascus and surrounding areas, with over 100 strikes targeting military sites, including one linked to chemical weapons. It outlines Israel's justification for these operations, highlighting fears about arms reaching extremists after the Assad regime's collapse. The article discusses international reactions, particularly from the UN, regarding the situation's implications for Syria's territorial integrity and human rights concerns related to chemical weapons.\n\n**Other Articles:**\nThe other articles corroborate several key points from the current article:\n\n1. **Israeli Control of the Golan Buffer Zone**: Other articles confirm that Israel has temporarily seized control of a demilitarized buffer zone in the Golan Heights following the withdrawal of Syrian troops, aligning with the current article's mention of increased Israeli military presence in the region due to changing conditions in Syria.\n\n2. **Rebel Takeover in Damascus**: Similar to the current article, the other articles report on the rebel group's (HTS) takeover of Damascus and the subsequent declaration of Syria being \"free.\" This detail establishes a critical backdrop for the Israeli military actions.\n\n3. **Context of Chemical Weapons**: Both the current article and other articles communicate concerns about potential access to Assad's chemical weapons stockpiles by extremist groups, reflecting a shared apprehension regarding security after the regime's fall.\n\n4. **International Reaction**: The other articles echo sentiments about the instability resulting from the regime change and ongoing international deliberations concerning Syria's future. They highlight Israeli Prime Minister Netanyahu's statements about the consequences of the Assad regime's collapse and Israel's intent to maintain its security interests.\n\n5. **Geopolitical Implications**: Both the current article and other reporting emphasize the complexity of the situation, regarding not just regional stability but also the broader implications of Israel's military strategy in light of Iranian and Hezbollah influences in Syria.\n\n### Conclusion:\nOverall, the current article aligns closely with other articles in terms of factual accuracy, particularly concerning Israeli military actions and geopolitical dynamics following the Assad regime's downfall. Both sources present a consistent narrative regarding the unfolding crisis in Syria, underlining the urgent security considerations for Israel and the unpredictable nature of future developments in the region.",
  "analysis": {
      "bias_indicators": {
          "extreme_language": [
              "Israel says it is acting to stop weapons falling \"into the hands of extremists\" following the overthrow of the Assad regime.",
              "On Monday, the UN Security Council met to discuss the situation in the country following the downfall of President Bashar al-Assad, and said they will work on a statement in the coming days.",
              "Despite the OPCW and the UN destroying all 1,300 tonnes of chemicals that the Syrian government declared, chemical weapons attacks in the country still continued.",
              "Syria's Assad regime falls - follow live",
              "On Monday, the OPCW said it had contacted Syria \"with a view to emphasising the paramount importance of ensuring the safety and security of all chemical weapons related materials and facilities\" in the country.",
              "It comes a day after Israeli Prime Minister Benjamin Netanyahu announced that the military had temporarily seized control of the so-called Area of Separation, saying the 1974 disengagement agreement with Syria had \"collapsed\" with the rebel takeover of the country.",
              "Israel seized the Golan from Syria in the closing stages of the 1967 Six-Day War and unilaterally annexed it in 1981.",
              "The move was not recognised internationally, although the US did so unilaterally in 2019.",
              "During the 2011 Syrian uprising, Israel made the calculation that Assad, despite being an ally of both Iran and Hezbollah, was a better bet than what might follow his regime.",
              "It has previously acknowledged carrying out hundreds of strikes in recent years on targets in Syria that it says are linked to Iran and allied armed groups such as Hezbollah."
          ],
          "generalizations": [
              "Israel says it is acting to stop weapons falling \"into the hands of extremists\" following the overthrow of the Assad regime.",
              "On Monday, the UN Security Council met to discuss the situation in the country following the downfall of President Bashar al-Assad, and said they will work on a statement in the coming days.",
              "Despite the OPCW and the UN destroying all 1,300 tonnes of chemicals that the Syrian government declared, chemical weapons attacks in the country still continued.",
              "Syria's Assad regime falls - follow live",
              "On Monday, the OPCW said it had contacted Syria \"with a view to emphasising the paramount importance of ensuring the safety and security of all chemical weapons related materials and facilities\" in the country.",
              "It comes a day after Israeli Prime Minister Benjamin Netanyahu announced that the military had temporarily seized control of the so-called Area of Separation, saying the 1974 disengagement agreement with Syria had \"collapsed\" with the rebel takeover of the country.",
              "Israel seized the Golan from Syria in the closing stages of the 1967 Six-Day War and unilaterally annexed it in 1981.",
              "The move was not recognised internationally, although the US did so unilaterally in 2019.",
              "During the 2011 Syrian uprising, Israel made the calculation that Assad, despite being an ally of both Iran and Hezbollah, was a better bet than what might follow his regime.",
              "It has previously acknowledged carrying out hundreds of strikes in recent years on targets in Syria that it says are linked to Iran and allied armed groups such as Hezbollah."
          ],
          "hedging": [
              "Western powers said the attack could only have been carried out by the government, but Assad blamed the opposition.",
              "During the 2011 Syrian uprising, Israel made the calculation that Assad, despite being an ally of both Iran and Hezbollah, was a better bet than what might follow his regime.",
              "The Israeli strikes in Syria have reportedly been more frequent since the start of the war in Gaza in October 2023, in response to cross-border attacks on northern Israel by Hezbollah and other groups in Lebanon and Syria."
          ],
          "loaded_words": [
              "Israel says it is acting to stop weapons falling \"into the hands of extremists\" following the overthrow of the Assad regime."
          ],
          "opinion_statements": [
              "A research centre with suspected links to chemical weapon production was among the sites hit, according to local media reports.",
              "\"The council, I think, was more or less united on the need to preserve the territorial integrity and unity of Syria, to ensure the protection of civilians, to ensure that humanitarian aid is coming to the needy population,\" Russian UN Ambassador Vassily Nebenzia told reporters.",
              "The strikes come as the UN's chemical watchdog warns authorities in Syria to ensure that suspected stockpiles of chemical weapons are safe.",
              "It is not known where or how many chemical weapons Syria has, but it's believed former President Bashar al-Assad kept stockpiles and that the declaration he had made was incomplete.",
              "Forces led by the Islamist opposition group Hayat Tahrir al-Sham (HTS) entered Damascus in the early hours of Sunday, before appearing on state television to declare that Syria was now \"free\"."
          ]
      },
      "emotional_language": [
          {
              "intensity": -0.6908,
              "text": "Israel says it is acting to stop weapons falling \"into the hands of extremists\" following the overthrow of the Assad regime.\n"
          },
          {
              "intensity": 0.8004,
              "text": "\"The council, I think, was more or less united on the need to preserve the territorial integrity and unity of Syria, to ensure the protection of civilians, to ensure that humanitarian aid is coming to the needy population,\" Russian UN Ambassador Vassily Nebenzia told reporters.\n"
          },
          {
              "intensity": -0.91,
              "text": "According to the UN's chemical watchdog, the Organisation for the Prohibition of Chemical Weapons (OPCW), a chemical weapon is a chemical used to cause intentional death or harm through its toxic properties.\n"
          },
          {
              "intensity": -0.7003,
              "text": "The use of chemical weapons is prohibited under international humanitarian law regardless of the presence of a valid military target, as the effects of such weapons are indiscriminate by nature.\n"
          },
          {
              "intensity": -0.9217,
              "text": "Syria signed the OPCW's Chemical Weapons Certificate in 2013, a month after a chemical weapons attack on suburbs of the capital, Damascus, that involved the nerve agent sarin and left more than 1,400 people dead.\n"
          },
          {
              "intensity": -0.8957,
              "text": "The horrific pictures of victims convulsing in agony shocked the world."
          },
          {
              "intensity": -0.7351,
              "text": "Western powers said the attack could only have been carried out by the government, but Assad blamed the opposition.\n"
          },
          {
              "intensity": -0.8555,
              "text": "Despite the OPCW and the UN destroying all 1,300 tonnes of chemicals that the Syrian government declared, chemical weapons attacks in the country still continued.\n"
          },
          {
              "intensity": -0.7783,
              "text": "BBC analysis in 2018 confirmed that between 2014 and 2018, chemical weapons were used in the Syrian civil war at least 106 times.\n"
          },
          {
              "intensity": 0.7096,
              "text": "On Monday, the OPCW said it had contacted Syria \"with a view to emphasising the paramount importance of ensuring the safety and security of all chemical weapons related materials and facilities\" in the country.\n"
          },
          {
              "intensity": -0.5994,
              "text": "Israel seized the Golan from Syria in the closing stages of the 1967 Six-Day War and unilaterally annexed it in 1981."
          },
          {
              "intensity": -0.6808,
              "text": "Defence Minister Israel Katz meanwhile said the Israeli military would \"destroy heavy strategic weapons\" - including missile and air defence systems.\n"
          },
          {
              "intensity": -0.6124,
              "text": "On Tuesday, HTS said incoming authorities will publish a list with the \"names of the most senior officials involved in torturing the Syrian people\".\n"
          },
          {
              "intensity": -0.743,
              "text": "\"\nThe Assad regime received much support from Hezbollah and Russia in the country's brutal civil war."
          },
          {
              "intensity": -0.6908,
              "text": "With Hezbollah involved in the Israel-Gaza war and cross-border air strikes between Israel and Lebanon, and Russia expending huge resources on its invasion of Ukraine, HTS, along with other rebel groups in Syria, were able to seize on the occasion and were ultimately able to capture large swathes of Syria.\n"
          },
          {
              "intensity": 0.7906,
              "text": "On Sunday, Netanyahu branded the collapse of the Assad regime a \"historic day in the Middle East\" and insisted Israel would \"send a hand of peace\" to Syrians who wanted to live in peace with Israel.\n"
          },
          {
              "intensity": 0.7096,
              "text": "\"If we can establish neighbourly relations and peaceful relations with the new forces emerging in Syria, that's our desire."
          },
          {
              "intensity": -0.8519,
              "text": "The Israeli strikes in Syria have reportedly been more frequent since the start of the war in Gaza in October 2023, in response to cross-border attacks on northern Israel by Hezbollah and other groups in Lebanon and Syria.\n"
          },
          {
              "intensity": -0.8807,
              "text": "Just last month, the Syrian Observatory for Human Rights (SOHR), a UK-based monitoring group, reported that a set of strikes hit a weapons depot and other locations in and around an area near Palmyra where families of Iran-backed militia fighters were, killing 68 Syrian and foreign fighters."
          }
      ],
      "overall_bias_score": 2.49944399339934,
      "sentiment_scores": {
          "compound": -0.21745111111111118,
          "neg": 0.13406666666666667,
          "neu": 0.816488888888889,
          "pos": 0.04944444444444444
      },
      "subjectivity_score": 0.11551155115511551
  },
  "keywords": [
      "assad",
      "syria",
      "israel",
      "syrian",
      "strikes"
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
          "content": "Israel's prime minister has announced its military has temporarily seized control of a demilitarized buffer zone in the Golan Heights, saying the 1974 disengagement agreement with Syria had \"collapse… [+3314 chars]",
          "description": "PM Netanyahu said the 1974 disengagement agreement had \"collapsed\" with the rebel takeover of Syria.",
          "publishedAt": "2024-12-08T17:24:19Z",
          "source": {
              "id": null,
              "name": "BBC News"
          },
          "title": "Israel seizes Golan buffer zone after Syrian troops leave positions",
          "url": "https://www.bbc.com/news/articles/c77jrrxxn07o",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0d3c/live/4fd93110-b580-11ef-95a5-d503f49bd186.jpg"
      },
      {
          "author": "Jackie Northam",
          "content": "Rebels in Syria are making rapid advances against the government forces of President Bashar al-Assad. Assad has managed to stay in power throughout the civil war that has engulfed his country for mor… [+363 chars]",
          "description": "Rebels in Syria are making rapid advances against the government forces of President Bashar al-Assad. Assad has managed to stay in power throughout the civil war that has engulfed his country for more than a decade. But he again finds himself in a precarious …",
          "publishedAt": "2024-12-06T22:15:20Z",
          "source": {
              "id": null,
              "name": "NPR"
          },
          "title": "Will Assad Survive in Syria? And Will the Conflict Widen Into a Regional War?",
          "url": "https://www.npr.org/2024/12/06/1217547153/will-assad-survive-in-syria-and-will-the-conflict-widen-into-a-regional-war",
          "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg"
      },
      {
          "author": "The Associated Press",
          "content": "BEIRUT Syrian insurgents have reached the suburbs of Damascus as part of a rapidly moving offensive that has seen them take over some of Syria's largest cities across the country, opposition activist… [+5856 chars]",
          "description": "Syrian insurgents have reached the suburbs of Damascus as part of a offensive that has seen them take over some of Syria's largest cities, opposition activists and a rebel commander said Saturday.",
          "publishedAt": "2024-12-07T15:25:35Z",
          "source": {
              "id": null,
              "name": "NPR"
          },
          "title": "Syrian opposition activists say insurgents have reached the suburbs of Damascus",
          "url": "https://www.npr.org/2024/12/07/g-s1-37295/syria-insurgents-have-reached-suburbs-damascus",
          "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6000x3375+0+313/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F7d%2Fe2%2Fa40d410844d1b00f88052cf09281%2Fap24341647534867.jpg"
      },
      {
          "author": "Paul Iddon",
          "content": "Iran may have few options or appetite to bolster Syrian leader Bashar Assad against a rebel offensive that took Aleppo.Abdulfettah Huseyin/Anadolu via Getty Images\r\n<ul><li>Syria's embattled presiden… [+7091 chars]",
          "description": "Syria's embattled president is losing ground to advancing rebel forces, but Iran is poorly positioned this time to help him turn the tide.",
          "publishedAt": "2024-12-05T18:31:34Z",
          "source": {
              "id": "business-insider",
              "name": "Business Insider"
          },
          "title": "Syria's Assad can't count on Iran to stop the rebel offensive",
          "url": "https://www.businessinsider.com/syria-assad-cant-count-on-iran-to-stop-rebel-offensive-2024-12",
          "urlToImage": "https://i.insider.com/6750dd20ef9a5d904789fe1d?width=1200&format=jpeg"
      },
      {
          "author": "Nathan Rennolds",
          "content": "Rebel fighters have already seized the key cities of Aleppo and Hama.Izettin Kasim/Anadolu via Getty Images\r\n<ul><li>A rebel commander said opposition forces had begun to encircle the Syrian capital,… [+3313 chars]",
          "description": "With Syrian President Bashar Assad's position coming under increasing pressure, Donald Trump weighed in on the situation.",
          "publishedAt": "2024-12-07T17:29:11Z",
          "source": {
              "id": "business-insider",
              "name": "Business Insider"
          },
          "title": "Syrian rebels say they are surrounding Damascus, threatening Assad's hold on power",
          "url": "https://www.businessinsider.com/syrian-rebels-reach-damascus-suburbs-threatening-assad-regime-2024-12",
          "urlToImage": "https://i.insider.com/6754646b8fbb2783ed306eb4?width=1024&format=jpeg"
      },
      {
          "author": "Howard Altman",
          "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nS… [+17314 chars]",
          "description": "Syrian dictator Bashar al-Assad boarded a plane to leave the country on Saturday, according to several media reports.  Meanwhile, there are claims that the...",
          "publishedAt": "2024-12-08T09:51:18Z",
          "source": {
              "id": null,
              "name": "Twz.com"
          },
          "title": "The Assad Regime Has Fallen, Claims Swirl Around Possible Crash Of His Escape Jet (Updated)",
          "url": "https://www.twz.com/news-features/the-assad-regime-has-fallen-claims-swirl-around-possible-crash-of-his-escape-jet",
          "urlToImage": "https://media.zenfs.com/en/the_warzone_735/d14bb899938e406593a9b783720de63b"
      },
      {
          "author": "The Associated Press",
          "content": "BEIRUT The Syrian government appeared to have fallen early Sunday in a stunning end to the 50-year rule of the Assad family after a lightning rebel offensive.\r\nThe head of a Syrian opposition war mon… [+7140 chars]",
          "description": "The Syrian government appeared to have fallen early Sunday in a stunning end to the 50-year rule of the Assad family after a lightning rebel offensive.",
          "publishedAt": "2024-12-08T04:55:33Z",
          "source": {
              "id": null,
              "name": "NPR"
          },
          "title": "Syrian government appears to have fallen in stunning end to long rule of Assad family",
          "url": "https://www.npr.org/2024/12/07/g-s1-37354/syrian-government-appears-to-have-fallen-in-stunning-end-to-long-rule-of-assad-family",
          "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3320x1868+0+216/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F18%2F75%2F364920ff4ab7b56a8c679f822acc%2Fap24341531993048.jpg"
      },
      {
          "author": "Layal ABOU RAHAL",
          "content": "The Syrian military and its ally Russia conducted deadly joint air raids on areas under Islamist-led rebel control on Monday, as they battle a lightning offensive that has wrested swathes of Syria fr… [+5738 chars]",
          "description": "The Syrian military and its ally Russia conducted deadly joint air raids on areas under Islamist-led rebel control on Monday, as they battle a lightning...",
          "publishedAt": "2024-12-02T10:21:36Z",
          "source": {
              "id": null,
              "name": "Yahoo Entertainment"
          },
          "title": "Syria, Russia conduct deadly strikes to push back rebel advance",
          "url": "https://www.yahoo.com/news/syria-russia-conduct-deadly-strikes-102136928.html",
          "urlToImage": "https://media.zenfs.com/en/afp.com/3e60cdd5992a5c727b708c938476d407"
      },
      {
          "author": "Maya Gebeily, Suleiman Al-Khalidi and Parisa Hafezi",
          "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nB… [+5887 chars]",
          "description": "BEIRUT/AMMAN/DUBAI (Reuters) -Iran will send missiles, drones and more advisers to Syria, a senior Iranian official said on Friday, as rebel forces pushed...",
          "publishedAt": "2024-12-06T07:09:46Z",
          "source": {
              "id": null,
              "name": "Yahoo Entertainment"
          },
          "title": "Iran, Hezbollah aim to bolster Assad as rebels bear down on Homs",
          "url": "https://ca.news.yahoo.com/thousands-flee-syrian-rebels-push-070946250.html",
          "urlToImage": "https://media.zenfs.com/en/reuters.com/55e46488c18e7dfbec25eb6690526e69"
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
