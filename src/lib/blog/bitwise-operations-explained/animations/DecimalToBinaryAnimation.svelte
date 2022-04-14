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

<div class="md:max-w-[50%] py-4 grid grid-rows-{steps.length - 1} grid-cols-5 items-center text-center gap-3">
  {#each steps as { val, stop }, i}
    <div>
      2<sup>{i}</sup>:
    </div>
    <div class="col-span-3">
      &LeftFloor;{number} &div; 2<sup>{i}</sup>&RightFloor;&nbsp;= {Math.floor(number / val)}
      <br />
      {#if stop}
        (<strong>STOP:</strong> result &lt; 1)
      {:else}
        {Math.floor(number / val)}&nbsp;&percnt;&nbsp;2&nbsp;=&nbsp;{Math.floor(number / val) % 2}
      {/if}
    </div>
    <div class="font-bold text-xl font-mono">
      {#if !stop}
        {Math.floor(number / val) % 2}
      {/if}
    </div>
  {/each}
</div>
<div>Ordering the bits from greatest to smallest, the result is:</div>
<div class="inline-flex gap-2"><span class="font-mono">0b{number.toString(2)}</span></div>
