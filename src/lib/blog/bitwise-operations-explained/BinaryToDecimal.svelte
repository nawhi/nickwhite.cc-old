<script lang="ts">
  import BinaryToDecimalAnimation from './BinaryToDecimalAnimation.svelte';

  let binary: string;
  let ready = false;

  // language=RegExp
  const binaryPattern = '[01]+';
</script>

<style>
  input {
    @apply w-60 py-2 px-3 text-gray-700 leading-tight;
    @apply shadow appearance-none focus:outline-none border rounded;
  }

  button {
    @apply py-2 px-4 rounded;
    @apply bg-emerald-500 hover:bg-emerald-700 text-white font-bold focus:outline-none;
  }

  button:disabled {
    @apply bg-gray-500 text-gray-200 cursor-not-allowed;
  }
</style>

<form
  class="p-1 flex flex-row"
  on:submit|preventDefault={(e) => {
    const formData = new FormData(e.target);
    ready = true;
    binary = formData.get('number1');
  }}
>
  <input
    required
    name="number1"
    placeholder="Enter a binary number"
    inputmode="numeric"
    pattern={binaryPattern}
  />
  <button type="submit" class="mx-5">Go</button>
</form>
{#if ready}
  <div class="py-4">
    <BinaryToDecimalAnimation {binary} />
  </div>
{/if}
