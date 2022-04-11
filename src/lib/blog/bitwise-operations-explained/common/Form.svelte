<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<style>
  :global(.form-input > input) {
    @apply w-auto py-2 px-3 text-gray-700 leading-tight;
    @apply shadow appearance-none focus:outline-none border rounded;
  }

  button {
    @apply py-2 px-4 rounded;
    @apply bg-emerald-500 hover:bg-emerald-700 text-white font-bold focus:outline-none;
  }
</style>

<form
  class="p-1 flex flex-row"
  on:submit|preventDefault={(e) => {
    dispatch('submit', new FormData(e.target));
  }}
>
  <div class="form-input"><slot /></div>
  <button type="submit" class="mx-5">Go</button>
</form>
