<script lang="ts">
  import { getConsolelog } from '@/lib/config';
  import type { Article } from '@/lib/types';

  const clog = getConsolelog('Popup');

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
    clog(`Opening new Tab`);
    const tab = await browser.tabs.create({ url: pathToAnalyze, active: false });
    if(tab.id) {
      clog(`Waiting for the tab to complete loading`);
      await waitForTabLoadingToComplete(tab.id);
      const dataToSent = currentPageData ? $state.snapshot(currentPageData) : $state.snapshot(customArticle);
      clog(`Preparing data: `, dataToSent);
      const _ = browser.tabs.sendMessage(tab.id, dataToSent);
      clog(`Data Sent`);
    } else {
      clog(`Error: Unable to get tab ID`);
    }
  };

  const openAboutPage = () => {
    browser.tabs.create({ url: pathToAbout });
  };

  const openOverlay = async () => {
    clog(`Query current tab...`)
    const currentTab = await browser.tabs.query({ active: true, currentWindow: true });
    const tid = currentTab.length == 0 ? undefined : currentTab[0].id;
    if(tid === undefined) {
      clog(`Open overlay failed`);
    } else {
      try{
        clog(`Found tab ID. Sendind command...`);
        browser.tabs.sendMessage(tid, { cmd: 'open_overlay', url: currentTab[0].url });
      } catch (e) {
      }
    }
  };

  onMount(async () => {
    clog(`Query current tab...`)
    const currentTab = await browser.tabs.query({ active: true, currentWindow: true });
    const tid = currentTab.length == 0 ? undefined : currentTab[0].id;
    if(tid === undefined) {
      clog(`Tab detection failed`);
      currentPageData = false;
    } else {
      try{
        clog(`Found tab ID. Reading article...`);
        const articleData = await browser.tabs.sendMessage(tid, { cmd: 'get_article', url: currentTab[0].url });
        clog(`Got article data:`, articleData);
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

<style>
.bg-gradient {
  background: #D3CCE3;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E9E4F0, #D3CCE3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>

<main class="min-h-screen flex flex-col gap-1 items-center p-1 min-w-96 select-none bg-gradient">
  <div class="relative h-full w-full bg-white rounded-lg flex flex-col items-stretch pb-4">
    <span class="absolute left-0 bottom-0 p-1 text-xs text-gray-400 select-text">{APP_VERSION}</span>
    <button class="absolute right-0 bottom-0 p-1 text-xs text-gray-400" onclick={openAboutPage}>About</button>
    <h1 class="w-full text-center text-xl font-semibold tracking-wide mt-4 mb-2">News Perspective</h1>
  
    {#if currentPageData === null}
    <div class="w-full text-center mt-8">
      Reading current page
    </div>
    {:else if currentPageData === false}
    <div class="flex flex-col items-center mb-3">
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
    <button class="border rounded-2xl bg-teal-500 hover:bg-teal-600 p-2 m-2 w-36 mx-auto text-white text-lg font-medium tracking-wide" onclick={openAnalyzeWithMsg}
      >Analyze</button
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
    <button class="border rounded-2xl bg-teal-500 hover:bg-teal-600 p-2 m-2 w-36 mx-auto text-white text-lg font-medium tracking-wide" onclick={openAnalyzeWithMsg}
      >Analyze</button
    >
    {/if}
    <button class="border rounded-2xl bg-teal-500 hover:bg-teal-600 p-2 m-2 w-36 mx-auto text-white text-lg font-medium tracking-wide" onclick={openOverlay}
      >Open Overlay</button
    >
  </div>
</main>
