<script lang="ts">
  import type { Article } from '@/lib/types';

  const pathToAnalyze = browser.runtime.getURL('/analyze.html');
  const pathToAbout = browser.runtime.getURL('/about.html');

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

  const openAboutPage = () => {
    browser.tabs.create({ url: pathToAbout });
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

<main class="min-h-screen flex flex-col gap-1 items-center p-4 {currentPageData === false || true ? 'min-w-96' : 'min-w-48'} select-none">
  <span class="absolute left-0 bottom-0 p-1 text-xs text-gray-400 select-text">{APP_VERSION}</span>
  <button class="absolute right-0 bottom-0 p-1 text-xs text-gray-400" onclick={openAboutPage}>About</button>
  <h1 class="text-xl font-bold mb-1 tracking-wide">News Analyze</h1>

  {#if currentPageData === null}
  <div>
    Reading current page
  </div>
  {:else if currentPageData === false}
  <div class="flex flex-col items-center mb-2">
    <p class="text-lg bg-red-100 p-1 rounded-lg">No article detected!</p>
    <p>You can upload your own news article instead.</p>
  </div>
  <table class="w-80">
    <tbody class="w-full">
      <tr class="">
        <th class="text-right font-normal">Title</th>
        <td class="pl-2"><input type="text" class="border rounded border-slate-600 p-1 w-full" bind:value={customArticle.title} /></td>
      </tr>
      <tr>
        <th class="text-right font-normal">Content</th>
        <td class="pl-2"><textarea class="border rounded border-slate-600 resize-none w-full h-32 p-1" bind:value={customArticle.content}></textarea></td>
      </tr>
    </tbody>
  </table>
  <button class="border border-black p-2 m-2" onclick={openAnalyzeWithMsg}
    >Analyze!</button
  >
  {:else}
  <div class="flex flex-col items-center mb-2">
    <p class="text-lg bg-green-100 p-1 rounded-lg">Article detected!</p>
  </div>
  <table class="w-80">
    <tbody class="w-full">
      <tr class="">
        <th class="text-right font-normal">Title</th>
        <td class="pl-2"><input type="text" class="border rounded border-slate-300 p-1 w-full" readonly bind:value={currentPageData.title} /></td>
      </tr>
      <tr>
        <th class="text-right font-normal">Content</th>
        <td class="pl-2"><textarea class="border rounded border-slate-300 resize-none w-full h-32 p-1" readonly bind:value={currentPageData.content}></textarea></td>
      </tr>
    </tbody>
  </table>
  <button class="border border-black p-2 m-2" onclick={openAnalyzeWithMsg}
    >Analyze!</button
  >
  {/if}
</main>
