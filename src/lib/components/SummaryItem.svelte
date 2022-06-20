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
  <h3 class="pb-1 font-semibold text-th-primary">
    {#if link}
      <Link href={link}>{name}</Link>
    {:else}
      {name}
    {/if}
  </h3>
  <div class="text-lg font-light text-th-secondary">
    <div class={longDesc && 'italic'}>
      {#each toArray(shortDesc) as line}
        <p class="pt-1">{line}</p>
      {/each}
    </div>
  </div>
  {#if longDesc}
    {#if tags}
      <ul class="flex flex-wrap gap-2 pt-2 pb-1 text-xs">
        {#each tags as tag}
          <li
            class="rounded-full border border-th-subtle px-2 dark:bg-th-subtle dark:text-th-primary"
          >
            {tag}
          </li>
        {/each}
      </ul>
    {/if}
    <div class="pt-1 text-base text-th-tertiary">
      {#each toArray(longDesc) as line}
        <p class="pt-1 pb-1">{line}</p>
      {/each}
    </div>
  {/if}
</div>
