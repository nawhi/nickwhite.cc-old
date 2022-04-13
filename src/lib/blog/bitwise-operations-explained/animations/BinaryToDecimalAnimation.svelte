<script lang="ts">
  import NumberGrid from '../common/NumberGrid.svelte';

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

<NumberGrid rows={3} cols={binary.length}>
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
</NumberGrid>
<div class="font-mono pt-5">
  {decimalDigitsReversed.join(' + ')} =&nbsp;<strong>{result}</strong>
</div>
