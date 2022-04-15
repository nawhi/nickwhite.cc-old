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
  />
</Form>
{#if ready}
  <div class="py-4">
    {#if /[^01]/.test(binary)}
      <div class="text-red-400 font-semibold">
        Please enter a binary number, consisting only of digits 0 and 1
      </div>
    {:else if binary === "10111110101001"}
      <div>
        <span>🥚🥚🥚 🐱‍🐉 🍫🍫 🥚🥚🥚</span>
        <br/>
        <span class="text-green-400 font-semibold">
          HAPPY EASTER
        </span>
        <br/>
        <span>Cupboard under the stairs</span>
      </div>
    {:else if binary.length > 12}
      <div class="text-red-400 font-semibold">
        Please enter no more than twelve digits
      </div>
    {:else}
      <BinaryToDecimalAnimation {binary} />
    {/if}
  </div>
{/if}
