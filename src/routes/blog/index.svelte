<script context="module" lang="ts">
  export const load = ({ session }: App.Session) => ({
    props: {
      posts: session.posts
    }
  });
</script>

<script lang="ts">
  import Layout from '$lib/Layout.svelte';
  import Header from '$lib/Header.svelte';
  import Section from '$lib/Section.svelte';
  import PostList from '$lib/PostList.svelte';

  export let posts: Post[];

  const postsToShow = posts.filter((post) => !post.unlisted);
</script>

<Layout>
  <Header />
  <Section title="All Blog Posts">
    <PostList posts={postsToShow} />
  </Section>
</Layout>
