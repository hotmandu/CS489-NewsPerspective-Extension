import { ContentScriptContext } from 'wxt/client';
import './overlay/app.css';
import App from './overlay/App.svelte';
import { getConsolelog } from "@/lib/config";
import type { Article } from "@/lib/types";
import { mount, unmount } from 'svelte';

type Extractor = (url: URL) => Article | null;

const clog = getConsolelog('Content');

const extractFromBBC: Extractor = (url) => {
  // Check if URL is BBC
  if (url.hostname !== "www.bbc.com") {
    return null;
  }

  // Extract
  const article = document.querySelector("article");
  if (article === null) {
    return null;
  }

  const result: Article = { title: "", content: "" };
  result.title = article.querySelector("h1")?.innerText ?? "";

  const textBlocks = article.querySelectorAll<HTMLDivElement>(
    'div[data-component="text-block"]'
  );
  const texts = textBlocks
    .values()
    .map((v) => v.innerText)
    .reduce((pv, cv, _) => pv + "\n" + cv, "");

  result.content = texts.replaceAll("\n\n", "\n").trim();

  return result;
};

const extractFromCNN: Extractor = (url) => {
  // Check if URL is CNN
  if (url.hostname !== "edition.cnn.com") {
    return null;
  }

  // Extract
  const article = document.querySelector<HTMLDivElement>("div.article__content");
  const title = document.querySelector<HTMLHeadingElement>("h1.headline__text");
  if (article === null) {
    return null;
  }

  const result: Article = { title: "", content: "" };
  result.title = title?.innerText ?? "";

  const texts = article.innerText;

  result.content = texts.replaceAll("\r", "\n").replaceAll("\n\n", "\n").trim();

  return result;
};

const extractFromEverywhere: Extractor = (url) => {
  const result: Article = { title: "", content: "" };
  result.title = "Extracted from HTML";

  const texts = document.body.innerText;

  result.content = texts.replaceAll("\r", "\n").replaceAll("\n\n", "\n").trim();
  return result;
};

const extractors: Extractor[] = [extractFromBBC, extractFromCNN, extractFromEverywhere];

const extractArticle: (url: string) => Article | null = (url: string) => {
  const urlo = URL.parse(url);
  if (urlo === null) {
    return null;
  }

  for (const ext of extractors) {
    const extResult = ext(urlo);
    if (extResult !== null && extResult.content.length !== 0) {
      return extResult;
    }
  }

  return null;
};

const openOverlay = async (ctx: ContentScriptContext) => {
  const ui = await createShadowRootUi(ctx, {
    name: 'news-perspective',
    position: 'inline',
    anchor: 'body',
    onMount: (container) => {
      // Create the Svelte app inside the UI container
      const app = mount(App, {
        target: container,
        props: {}
      });
      return app;
    },
    onRemove: (app) => {
      // Destroy the app when the UI is removed
      if (app) unmount(app);
    },
  });

  // 4. Mount the UI
  ui.mount();
};

export default defineContentScript({
  matches: ["*://*/*"],
  cssInjectionMode: 'ui',
  main(ctx) {
    clog(`Content Script Run`);
    browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
      clog(`Got Message`, msg);
      if (msg?.cmd === "get_article") {
        const url: string | undefined = msg.url;
        clog(`Got URL: ${url}`);
        if (url) {
          const result = extractArticle(url);
          clog(`Extraction Result:`, result);
          if (result === null) {
            sendResponse({ error: "error" });
          } else {
            sendResponse(result);
          }
        } else {
          sendResponse({ error: "error" });
        }
        clog(`Sent Response`);
        return;
      } else if (msg?.cmd === "open_overlay") {
        openOverlay(ctx).then(() => {
          sendResponse({ ok: "ok" });
        }).catch(() => {
          sendResponse({ error: "error" });
        });
        return;
      }
      clog(`Invalid Command: ${msg?.cmd}`);
      sendResponse({ error: "invalid" });
    });
  },
});
