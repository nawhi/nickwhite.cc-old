<script lang="ts">
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
  // Suggestion (check code before using, and possibly convert to data.X access later):
  // import type { PageData } from './$types';
  // export let data: PageData;
  // $: ({ posts } = data);

  import Header from '$lib/components/Header.svelte';
  import Section from '$lib/components/Section.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { Post } from '$lib/types';

  export let posts: Post[];

  const postsToShow = posts.filter((post) => !post.unlisted);
</script>

<PageTitle title="Blog" />
<Header />
<Section title="All Blog Posts">
  <PostList posts={postsToShow} />
</Section>
