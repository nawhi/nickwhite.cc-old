<script lang="ts">
  import Calculation from './calculations/BinaryToDecimalCalculation.svelte';
  import Form from './common/InlineForm.svelte';

  let binary: string;
  let ready = false;

  // language=RegExp
  const binaryPattern = '[01]+';
</script>

<Form
  class="flex flex-row p-1"
  on:submit={(e) => {
    ready = true;
    binary = e.detail.get('number1');
  }}
>
  <input required name="number1" placeholder="Enter a binary number" inputmode="numeric" />
</Form>
{#if ready}
  <div class="py-4">
    {#if /[^01]/.test(binary)}
      <div class="font-semibold text-th-error">
        Please enter a binary number, consisting only of digits 0 and 1
      </div>
    {:else if binary.length > 12}
      <div class="font-semibold text-th-error">Please enter no more than twelve digits</div>
    {:else}
      <Calculation {binary} />
    {/if}
  </div>
{/if}
