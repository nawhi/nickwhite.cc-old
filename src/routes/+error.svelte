<script lang="ts">
  import { page } from '$app/stores';

  const { status } = $page;

  let title: string, message: string;

  $: {
    title = status === 404 ? '404 Not Found' : 'Error';
    message =
      status === 404
        ? "You just hit a route that doesn't exist."
        : 'There was an unexpected error. Please try again later.';
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div class="h-full w-full">
  <h1 class="text-lg font-bold">{title}</h1>
  <div class="pt-2">
    <p class="py-1">{message}</p>
    <p class="py-1">
      <a class="underline" href="/">Back to safety</a>
    </p>
  </div>
</div>
