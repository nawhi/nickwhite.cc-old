<script context="module" lang="ts">
  import type { ErrorLoad } from '@sveltejs/kit';

  const getExtra = (status: number): string => {
    if (status >= 500) {
      return 'There was an unexpected error, please try again later.';
    }
    if (status === 404) {
      return "You just hit a route that doesn't exist.";
    }
    return '';
  };

  export const load: ErrorLoad = ({ error, status }) => ({
    props: {
      title: `${status} ${error.message}`,
      extra: getExtra(status)
    }
  });
</script>

<script lang="ts">
  export let title: string;
  export let extra: string;
</script>

<style>
  p {
    @apply py-1;
  }
</style>

<h1 class="text-lg font-bold">{title}</h1>
<div class="pt-2">
  {#if extra}
    <p>{extra}</p>
  {/if}
  <p><a class="underline" href="/">Back to safety</a></p>
</div>
