<script lang="ts">
  const detectibleLinks = [
    {name: 'BBC', link: 'www.bbc.com'}
  ];
</script>

<div class="pt-4 pl-4">
  <p class="text-xl mb-2">This extension can detect news articles from...</p>
  <ul class="text-lg list-disc list-inside disc">
    {#each detectibleLinks as dlink, _ (dlink.name)}
      <li><a href={dlink.link}>{dlink.name} ({dlink.link})</a></li>
    {/each}
  </ul>
</div>