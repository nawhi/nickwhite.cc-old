<script lang="ts">
  import Link from '$lib/components/Link.svelte';
  import { toArray } from '$lib/utils/toArray';

  export let name: string,
    shortDesc: string | string[],
    link: string | undefined,
    longDesc: string[] | undefined = undefined,
    tags: string[] | undefined = undefined;
</script>

<div class="mb-6">
  <h3 class="font-semibold text-gray-900 pb-1">
    {#if link}
      <Link href={link}>{name}</Link>
    {:else}
      {name}
    {/if}
  </h3>
  <div class="text-lg text-gray-800 font-light">
    <div class={longDesc && 'italic'}>
      {#each toArray(shortDesc) as line}
        <p class="pt-1">{line}</p>
      {/each}
    </div>
  </div>
  {#if longDesc}
    {#if tags}
      <ul class="text-xs flex flex-wrap gap-2 pt-2 pb-1">
        {#each tags as tag}
          <li class="px-2 bg-white rounded-full border border-gray-300">{tag}</li>
        {/each}
      </ul>
    {/if}
    <div class="text-base pt-1">
      {#each toArray(longDesc) as line}
        <p class="pt-1 pb-1">{line}</p>
      {/each}
    </div>
  {/if}
</div>
