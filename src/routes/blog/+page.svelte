<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Section from '$lib/components/Section.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import type { Post } from '../../lib/types';

  export let data: { posts: Post[] };
</script>

<PageTitle title="Blog" />
<Header />
<Section title="All Blog Posts">
  <PostList posts={data.posts} />
</Section>
