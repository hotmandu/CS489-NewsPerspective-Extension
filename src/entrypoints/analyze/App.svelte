<script lang="ts">
  import type { Article } from '@/lib/types';

  const NO_API_MODE = false;

  let articleMsg = $state<Article | null>(null);
  // Don't need to use state?
  let flagApiOnce = false;
  let fetchResult = $state<Object | null>(null);
  let errorState = $state(false);

  $effect(() => {
    if(!NO_API_MODE && articleMsg !== null) {
      fetch('https://cs489-newsperspective-backend-production.up.railway.app/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ article_text: articleMsg.content }),
      }).then((res) => {
        return res.json()
      }).then((v) => {
        fetchResult = v;
      })
      .catch((e) => {
        console.log('API ERROR!')
        console.log(e)
        errorState = true;
      });
    }
  })

  onMount(() => {
    browser.runtime.onMessage.addListener((msg) => {
      if(!flagApiOnce) {
        articleMsg = msg;
        flagApiOnce = true;
      }
    });
  });
</script>

<div class="min-h-screen w-full">
  {#if articleMsg === null}
    <div>Reading article...</div>
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
    {#if errorState === false && fetchResult === null}
    <div>Processing article...</div>
    {:else if errorState === true}
    <div>An error occurred while processing article</div>
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
</div>
