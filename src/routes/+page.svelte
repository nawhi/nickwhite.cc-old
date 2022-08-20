<script>
  /** @type import('./$types').PageData */
  export let data;

  import Section from '$lib/components/Section.svelte';
  import Header from '$lib/components/Header.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import PostList from '$lib/components/PostList.svelte';
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
  <PostList posts={data.posts} limit={5} />
</Section>
