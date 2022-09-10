<script lang="ts">
  import SummaryItem from '$lib/components/SummaryItem.svelte';
  import type { Post } from '$lib/types';
  import { cleanPostsForDisplay } from '../posts';

  export let posts: Post[];
  export let limit: number = Infinity;

  const postsToShow = cleanPostsForDisplay(posts, limit);
</script>

{#each postsToShow as { title, href, description }}
  <SummaryItem name={title} link={href} shortDesc={description} />
{/each}
{#if posts.length > limit}
  <a class="text-th-tertiary text-sm hover:text-black" href="/blog"> View all posts &rarr; </a>
{/if}
