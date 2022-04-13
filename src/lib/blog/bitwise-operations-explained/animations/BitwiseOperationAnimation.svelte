<script lang="ts">
  import NumberGrid from '../common/NumberGrid.svelte';

  export let number1: number, number2: number;

  let bin1: string,
    bin2: string,
    digits: number,
    bin1Padded: string,
    bin2Padded: string,
    resultBase10: number,
    resultBin: string,
    resultBinPadded: string;
  $: {
    bin1 = number1.toString(2);
    bin2 = number2.toString(2);

    digits = Math.max(bin1.length, bin2.length);

    bin1Padded = bin1.padStart(digits, '0');
    bin2Padded = bin2.padStart(digits, '0');

    resultBase10 = number1 & number2;
    resultBin = resultBase10.toString(2);
    resultBinPadded = resultBin.padStart(digits, '0');
  }
</script>

<div class="text-4xl font-mono flex flex-col overflow-x-auto gap-8">
  <NumberGrid rows={3} cols={digits}>
    {#each bin1Padded as char}
      <div>{char}</div>
    {/each}
    {#each bin2Padded as char}
      <div>{char}</div>
    {/each}
    {#each resultBinPadded as char}
      {#if char === '0'}
        <div class="text-gray-300">0</div>
      {:else}
        <div class="font-bold text-green-600">1</div>
      {/if}
    {/each}
  </NumberGrid>
  <div class="pt-0 text-xl">
    0b{resultBin} = <strong>{resultBase10}</strong>
  </div>
</div>
