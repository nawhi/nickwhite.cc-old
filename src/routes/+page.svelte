<script lang="ts">
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
  // Suggestion (check code before using, and possibly convert to data.X access later):
  import type { PageData } from './$types';
  export let data: PageData;
  $: ({ posts } = data);

  import Section from '$lib/components/Section.svelte';
  import Header from '$lib/components/Header.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import type { Post } from "$lib/types";

  export let posts: Post[];
</script>

<PageTitle title="Home" />
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
