<script context="module" lang="ts">
  export const load = ({ session }: App.Session) => ({
    props: {
      posts: session.posts
    }
  });
</script>

<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Layout from '$lib/components/Layout.svelte';
  import Header from '$lib/components/Header.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import PostList from '$lib/components/PostList.svelte';

  export let posts: Post[];
</script>

<PageTitle title="Home" />
<Layout>
  <Header />
  <Section title="About Me">
    <div class="mb-6">
      <p>
        Hello, I am a software engineer from London, UK. This website is a sandbox for my thoughts,
        ideas and experiments.
      </p>
    </div>
  </Section>
  <Section title="Latest Posts">
    <PostList {posts} limit={5} />
  </Section>
</Layout>
