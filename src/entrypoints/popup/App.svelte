<script lang="ts">
  import type { Article } from '@/lib/types';

  const pathToAnalyze = browser.runtime.getURL('/analyze.html');

  let currentPageData = $state<Article | false | null>(null);
  let customArticle = $state<Article>({ title: '', content: '' })

  // TODO: convert it to store?
  interface LoadingTrapData {
    tabId?: number,
    resolve?: (value?: unknown) => void,
  };
  const tabLoadingTrap: LoadingTrapData = { tabId: undefined, resolve: undefined };

  browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (tabId === tabLoadingTrap.tabId && changeInfo.status === 'complete') {
      if(tabLoadingTrap.resolve) tabLoadingTrap.resolve();

      Object.assign(tabLoadingTrap, { tabId: undefined, resolve: undefined });
    }
  });

  
  function waitForTabLoadingToComplete(tabId: number) {
    tabLoadingTrap.tabId = tabId;

    return new Promise((resolve) => {
      tabLoadingTrap.resolve = resolve;
    });
  }

  const openAnalyzeWithMsg = async () => {
    const tab = await browser.tabs.create({ url: pathToAnalyze });
    if(tab.id) {
      await waitForTabLoadingToComplete(tab.id);
      const dataToSent = currentPageData ? currentPageData : customArticle;
      const _ = await chrome.tabs.sendMessage(tab.id, dataToSent);
    }
  };

  onMount(async () => {
    const currentTab = await browser.tabs.query({ active: true, currentWindow: true });
    const tid = currentTab.length == 0 ? undefined : currentTab[0].id;
    if(tid === undefined) {
      currentPageData = false;
    } else {
      try{
        const articleData = await chrome.tabs.sendMessage(tid, { cmd: 'get_article', url: currentTab[0].url });
        console.log(`Got article data`)
        console.log(articleData)
        if(articleData?.content === undefined) {
          currentPageData = false;
        } else {
          currentPageData = articleData;
        }
      } catch (e) {
        currentPageData = false;
      }
    }
  })

</script>

<main class="min-h-screen flex flex-col gap-1 items-center p-4 {currentPageData === false ? 'min-w-96' : 'min-w-48'}">
  <h1>News Analyze</h1>

  {#if currentPageData === null}
  <div>
    Reading current page
  </div>
  {:else if currentPageData === false}
  <div>
    No article detected.
  </div>
  <label>
    Title:
    <input type="text" class="border rounded border-slate-600 p-1" bind:value={customArticle.title} />
  </label>
  <label>
    Content:
    <textarea class="border rounded border-slate-600 resize-none w-60 h-32 p-1" bind:value={customArticle.content}></textarea>
  </label>
  <button class="border border-black p-2 m-2" onclick={openAnalyzeWithMsg}
    >Go to Analyze</button
  >
  {:else}
  <button class="border border-black p-2 m-2" onclick={openAnalyzeWithMsg}
    >Go to Analyze</button
  >
  {/if}
</main>
