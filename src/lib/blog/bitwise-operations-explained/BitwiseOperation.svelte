<script lang="ts">
  import Animation from './animations/BitwiseOperationAnimation.svelte';
  import InlineForm from './common/InlineForm.svelte';

  let number1: number, number2: number;
  let ready = false;
</script>

<InlineForm
  on:submit={(e) => {
    ready = true;
    number1 = parseInt(e.detail.get('number1'));
    number2 = parseInt(e.detail.get('number2'));
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
</InlineForm>
{#if ready}
  <div class="py-4">
    <Animation {number1} {number2} />
  </div>
{/if}
