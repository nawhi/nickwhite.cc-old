<script lang="ts">
  import Link from '$lib/components/Link.svelte';
  import { toArray } from '$lib/utils/toArray';

  export let name: string,
    shortDesc: string | string[],
    link: string | undefined = undefined,
    longDesc: string[] | undefined = undefined,
    tags: string[] | undefined = undefined;
</script>

<div class="mb-6">
  <div class="print:break-inside-avoid">
    <h3 class="font-semibold text-th-primary pb-1">
      {#if link}
        <div>
          <Link href={link}>{name}</Link>
          <div class="hidden print:block text-xs font-light">{link}</div>
        </div>
      {:else}
        {name}
      {/if}
    </h3>
    <div class="text-lg text-th-secondary font-light">
      <div class={longDesc && 'italic'}>
        {#each toArray(shortDesc) as line}
          <p class="pt-1">{line}</p>
        {/each}
      </div>
    </div>
  </div>
  {#if longDesc}
    {#if tags}
      <ul class="text-xs flex flex-wrap gap-2 pt-2 pb-1">
        {#each tags as tag}
          <li
            class="px-2 dark:bg-th-subtle rounded-full border border-th-subtle dark:text-th-primary"
          >
            {tag}
          </li>
        {/each}
      </ul>
    {/if}
    <div class="text-base text-th-tertiary pt-1">
      {#each toArray(longDesc) as line}
        <p class="pt-1 pb-1">{line}</p>
      {/each}
    </div>
  {/if}
</div>
