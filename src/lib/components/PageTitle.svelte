<script lang="ts">
  import { siteMetadata } from '$lib/content/meta';

  export let title: string;

  const pageTitle = `${title} | ${siteMetadata.titlePostfix}`;
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>
