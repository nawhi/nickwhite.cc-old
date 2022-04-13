<script lang="ts">
  export let number: number;
  const generateSteps = (target: number): { val: number; stop: boolean }[] => {
    const steps = [];
    let i = 1;
    for (; target / i >= 1; i *= 2) {
      steps.push({ val: i, stop: false });
    }
    steps.push({ val: i, stop: true });
    return steps;
  };

  $: steps = generateSteps(number);
</script>

<div class="py-4 grid grid-rows-{steps.length} grid-cols-3 items-center text-center gap-3">
  {#each steps as { val, stop }, i}
    <div>⌊{number} ÷ 2<sup>{i}</sup>⌋ = {Math.floor(number / val)}</div>
    <div>
      {#if stop}
        (<strong>STOP:</strong> result &lt; 1)
      {:else}
        {Math.floor(number / val)} mod 2&nbsp;=&nbsp;{Math.floor(number / val) % 2}
      {/if}
    </div>
    <div class="font-bold text-xl font-mono">
      {#if !stop}
        {Math.floor(number / val) % 2}
      {/if}
    </div>
  {/each}
  <div class="inline-flex gap-2">Result: <span class="font-mono">0b{number.toString(2)}</span></div>
</div>
