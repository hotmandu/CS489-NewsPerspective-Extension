<script lang="ts">
  const detectibleLinks = [
    {name: 'BBC', link: 'www.bbc.com'}
  ];
</script>

<style lang="postcss">
.bg-gradient {
  background: #642B73;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #C6426E, #642B73);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #C6426E, #642B73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.panel {
  @apply bg-white rounded-xl p-4 shadow-md;
}

</style>

<div class="p-4 bg-gradient min-h-screen w-full">
  <div class="w-full panel">
    <h1 class="mx-auto text-4xl tracking-wider font-semibold text-center mb-4">News Perspective</h1>
    <p class="text-xl mb-2">This extension can detect news articles from...</p>
    <ul class="text-lg list-disc list-inside disc">
      {#each detectibleLinks as dlink, _ (dlink.name)}
        <li><a href={dlink.link}>{dlink.name} ({dlink.link})</a></li>
      {/each}
    </ul>
  </div>
</div>