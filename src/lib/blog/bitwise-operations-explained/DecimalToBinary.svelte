<script lang="ts">
  import InlineForm from './common/InlineForm.svelte';
  import DecimalToBinaryAnimation from './animations/DecimalToBinaryAnimation.svelte';

  let number: number;
  let ready = false;
</script>

<InlineForm
  on:submit={(e) => {
    ready = true;
    number = parseInt(e.detail.get('number1'));
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
</InlineForm>
{#if ready}
  <DecimalToBinaryAnimation {number} />
{/if}
