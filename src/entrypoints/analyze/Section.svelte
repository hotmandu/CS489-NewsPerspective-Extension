<script lang="ts">
  import type { Snippet } from 'svelte';

  
  interface Props {
    title: string,
    children: Snippet
  }
  let { title, children }: Props = $props();
</script>

<div class="select-none w-full">
  <h2 class="w-full text-center text-4xl font-bold tracking-wide text-white drop-shadow-lg mb-4">
    {title}
  </h2>
  <div>
    {@render children()}
  </div>
</div>
