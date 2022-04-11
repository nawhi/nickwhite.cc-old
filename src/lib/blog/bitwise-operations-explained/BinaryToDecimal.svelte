<script lang="ts">
  import BinaryToDecimalAnimation from './animations/BinaryToDecimalAnimation.svelte';
  import Form from './common/InlineForm.svelte';

  let binary: string;
  let ready = false;

  // language=RegExp
  const binaryPattern = '[01]+';
</script>

<Form
  class="p-1 flex flex-row"
  on:submit={(e) => {
    ready = true;
    binary = e.detail.get('number1');
  }}
>
  <input
    required
    name="number1"
    placeholder="Enter a binary number"
    inputmode="numeric"
    pattern={binaryPattern}
  />
</Form>
{#if ready}
  <div class="py-4">
    <BinaryToDecimalAnimation {binary} />
  </div>
{/if}
