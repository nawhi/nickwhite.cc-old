<script lang="ts">
  export let binary: string,
    powersOfTwoReversed: number[],
    decimalDigitsReversed: number[],
    result: number;

  const descendingSeq = (limit: number): number[] => [...Array(limit).keys()].reverse();

  $: {
    powersOfTwoReversed = [...Array(binary.length).keys()].reverse();
    decimalDigitsReversed = descendingSeq(binary.length)
      .filter((powerOfTwo, ix) => binary[ix] !== '0')
      .map((powerOfTwo) => Math.pow(2, powerOfTwo));

    result = decimalDigitsReversed.reduce((a, b) => a + b);
  }
</script>

<div
  class="w-full h-full grid gap-6 grid-rows-3 justify-items-center font-mono text-3xl pb-5"
  style="grid-template-columns: repeat({binary.length}, 1fr)"
>
  {#each binary as digit, i}
    <div class="h-full {digit === '0' ? 'text-gray-400' : 'font-bold'}">{digit}</div>
  {/each}
  {#each powersOfTwoReversed as powerOfTwo, ix}
    <div class="text-sm pt-4 {binary[ix] === '0' ? 'text-gray-400' : 'font-bold'}">
      2<sup>{powerOfTwo}</sup>
    </div>
  {/each}
  {#each powersOfTwoReversed as powerOfTwo, ix}
    <div class="text-sm pt-4 {binary[ix] === '0' ? 'text-gray-400' : 'font-bold'}">
      {Math.pow(2, powerOfTwo)}
    </div>
  {/each}
</div>
<div class="font-mono pt-5">
  0b{binary} = {decimalDigitsReversed.join(' + ')} =
  <strong>{result}</strong>
</div>
