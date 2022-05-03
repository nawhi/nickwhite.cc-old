<script context="module" lang="ts">
  export const load = ({ session }: App.Session) => ({
    props: {
      posts: session.posts
    }
  });
</script>

<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Section from '$lib/components/Section.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import { Post } from '$lib/types';

  export let posts: Post[];

  const postsToShow = posts.filter((post) => !post.unlisted);
</script>

<PageTitle title="Blog" />
<Header />
<Section title="All Blog Posts">
  <PostList posts={postsToShow} />
</Section>
