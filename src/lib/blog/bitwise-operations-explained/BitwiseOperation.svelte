<script lang="ts">
  import Animation from './BitwiseOperationAnimation.svelte';

  let number1: number, number2: number;
  let ready = false;
</script>

<style>
  input {
    @apply w-auto py-2 px-3 text-gray-700 leading-tight;
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

<div class="flex flex-col">
  <div class="p-1 flex-row">
    <form
      on:submit|preventDefault={(e) => {
        const formData = new FormData(e.target);
        ready = true;
        number1 = parseInt(formData.get('number1'));
        number2 = parseInt(formData.get('number2'));
      }}
    >
      <input
        type="number"
        id="num1"
        name="number1"
        required
        placeholder="Enter an integer"
        min="0"
        step="1"
      />
      <code class="px-5">&amp;</code>
      <input
        type="number"
        id="num2"
        name="number2"
        required
        placeholder="Enter an integer"
        min="0"
        step="1"
      />
      <button type="submit" class="mx-5">Go</button>
    </form>
  </div>
</div>
{#if ready}
  <div class="py-4">
    <Animation {number1} {number2} />
  </div>
{/if}
