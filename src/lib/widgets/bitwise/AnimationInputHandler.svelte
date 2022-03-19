<script lang="ts">
  import Animation from "$lib/widgets/bitwise/Animation.svelte";

  export let input1: string;
  export let input2: string;
</script>

<style>
  .error {
    @apply text-red-400 font-semibold p-px;
  }
</style>

<div class="py-4">
  {#if isNaN(parseInt(input1))}
    <div class="error">First number must be integer</div>
  {/if}
  {#if isNaN(parseInt(input2))}
    <div class="error">Second number must be integer</div>
  {/if}

  {#if !isNaN(parseInt(input1)) && !isNaN(parseInt(input2))}
    <Animation number1={parseInt(input1)} number2={parseInt(input2)} />
  {/if}
</div>
