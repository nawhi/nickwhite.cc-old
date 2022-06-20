<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<style>
  :global(.form-with-styled-inputs > input) {
    @apply py-2 px-3 leading-tight;
    @apply appearance-none rounded border shadow focus:outline-none;
    @apply border-th-subtle text-th-primary placeholder-th-tertiary dark:bg-th-subtle;
  }

  :global(.form-with-styled-inputs > button) {
    @apply rounded py-2 px-4 font-bold focus:outline-none;
    @apply bg-th-action text-th-background transition-all hover:bg-th-action-focus dark:text-th-primary;
  }
</style>

<form
  class="form-with-styled-inputs flex flex-wrap items-center gap-4 p-1"
  on:submit|preventDefault={(e) => {
    dispatch('submit', new FormData(e.target));
  }}
>
  <slot />
  <button type="submit">Go</button>
</form>
