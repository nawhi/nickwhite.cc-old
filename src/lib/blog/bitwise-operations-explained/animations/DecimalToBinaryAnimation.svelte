<script lang="ts">
  export let number: number;

  /**
   * ANIMATION HERE
   * 28 = 16 + 8 + 4 = 0b11100
   *
   * Step 1: (28 / 1) % 2 = 0
   * Step 2: (28 / 2) % 2 = 0
   * Step 3: (28 / 4) % 2 = 1
   * Step 4: (28 / 8) % 2 = 1
   * Step 5: (28 / 16) % 2 = 1
   * Step 6: (28 / 32) < 1, so STOP
   *
   * Result: 11100
   */

  const generateSteps = (target: number): { val: number; stop: boolean }[] => {
    const steps = [];
    let i = 1;
    for (; target / i >= 1; i *= 2) {
      steps.push({ val: i, stop: false });
    }
    steps.push({ val: i, stop: true });
    return steps;
  };
</script>

<div class="flex flex-col gap-4">
  {#each generateSteps(number) as { val, stop }}
    <div class="inline-flex">
      <span class="font-mono">({number} / {val}) % 2&nbsp;</span>
      {#if stop}
        <pre>&lt; 0</pre>
        ,&nbsp;<strong>STOP</strong>
      {:else}
        <pre>= {(number / val) % 2}</pre>
      {/if}
    </div>
  {/each}
  Result = <pre>0b{number.toString(2)}</pre>
</div>
