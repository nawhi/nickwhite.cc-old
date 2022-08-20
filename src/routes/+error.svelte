<script context="module" lang="ts">
  throw new Error("@migration task: Replace error load function (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3293209)");

  // import type { ErrorLoad } from '@sveltejs/kit';
  // export const load: ErrorLoad = ({ error: { message }, status }) => {
  //   if (status >= 500) {
  //     return {
  //       props: {
  //         status,
  //         message,
  //         title: 'Error',
  //         extra: 'There was an unexpected error, please try again later.'
  //       }
  //     };
  //   }
  //   if (status === 404) {
  //     return {
  //       props: {
  //         status,
  //         message,
  //         title: '404 Not Found',
  //         extra: "You just hit a route that doesn't exist"
  //       }
  //     };
  //   }
  //   return {
  //     props: { status, message, extra: '' }
  //   };
  // };
</script>

<script lang="ts">
  export let status: number;
  export let message: string;
  export let title: string;
  export let extra: string;
</script>

<style>
  p {
    @apply py-1;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div class="h-full w-full">
  <h1 class="text-lg font-bold">{status} {message}</h1>
  <div class="pt-2">
    {#if extra}
      <p>{extra}</p>
    {/if}
    <p><a class="underline" href="/">Back to safety</a></p>
  </div>
</div>
