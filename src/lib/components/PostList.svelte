<script lang="ts">
  import SummaryItem from '$lib/components/SummaryItem.svelte';
  import type {Post} from '$lib/types';

  export let posts: Post[];
  export let limit: number = Infinity;

  const postsToShow = posts.slice(0, limit);
</script>

{#each postsToShow as { title, href, description }}
  <SummaryItem name={title} link={href} shortDesc={description} />
{/each}
{#if posts.length > limit}
  <a class="text-th-tertiary text-sm hover:text-black" href="/blog"> View all posts &rarr; </a>
{/if}
