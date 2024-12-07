import type { Article } from "@/lib/types";

type Extractor = (url: URL) => Article | null;

const extractFromBBC: Extractor = (url) => {
  // Check if URL is BBC
  if(url.hostname !== 'www.bbc.com') {
    return null;
  }

  // Extract
  const article = document.querySelector('article');
  if(article === null) {
    return null;
  }

  const result: Article = { title: '', content: '' }
  result.title = article.querySelector('h1')?.innerText ?? '';

  const textBlocks = article.querySelectorAll<HTMLDivElement>('div[data-component="text-block"]');
  const texts = textBlocks.values().map((v) => v.innerText).reduce((pv, cv, _) => (pv + '\n' + cv), '');

  result.content = texts.replaceAll('\n\n', '\n').trim();

  return result;
};

const extractFromCNN: Extractor = (url) => {
  // Check if URL is CNN
  if(url.hostname !== 'edition.cnn.com') {
    return null;
  }

  // Extract

  return {
    title: 'CNN',
    content: 'Hell yeah'
  };
};


const extractors: Extractor[] = [extractFromBBC, extractFromCNN];

const extractArticle: (url: string) => Article | null = (url: string) => {
  const urlo = URL.parse(url);
  if(urlo === null) {
    return null;
  }

  for(const ext of extractors) {
    const extResult = ext(urlo);
    if(extResult !== null && extResult.content.length !== 0) {
      return extResult;
    }
  }

  return null;
};

export default defineContentScript({
  matches: ['*://*/*'],
  main(ctx) {
    browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
      if(msg?.cmd === 'get_article') {
        const url: string | undefined = msg.url;
        console.log(`Got URL: ${url}`)
        if(url) {
          const result = extractArticle(url);
          if(result === null) {
            sendResponse({ error: 'error' });
          } else {
            sendResponse(result);
          }
        } else {
          sendResponse({ error: 'error' });
        }
      }
    });
  },
});
