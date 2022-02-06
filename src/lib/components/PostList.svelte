<script lang="ts">
  import SummaryItem from '$lib/components/SummaryItem.svelte';

  export let posts: Post[];
  export let limit: number = Infinity;

  const postsToShow = posts.slice(0, limit).filter((post) => !post.unlisted);
</script>

{#each postsToShow as { title, href, description }}
  <SummaryItem name={title} link={href} shortDesc={description} />
{/each}
{#if posts.length > limit}
  <a class="text-gray-500 text-sm hover:text-black" href="/blog"> View all posts &rarr; </a>
{/if}
