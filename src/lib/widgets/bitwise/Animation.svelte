<script lang="ts">
  export let number1: number,
    number2: number,
    bin1: string,
    bin2: string,
    bin1Padded: string,
    bin2Padded: string,
    result10: number,
    resultBin: string,
    resultBinPadded: string;
  $: {
    bin1 = number1.toString(2);
    bin2 = number2.toString(2);

    bin1Padded = bin1.padStart(7, '0');
    bin2Padded = bin2.padStart(7, '0');

    result10 = number1 & number2;
    resultBin = result10.toString(2);
    resultBinPadded = resultBin.padStart(7, '0');
  }
</script>

<style>
  .inputs-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
    justify-items: center;
  }

  .operation-grid {
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
    justify-items: center;
  }

  .char-0 {
    @apply text-gray-300;
  }

  .char-1 {
    @apply font-bold text-green-600;
  }

  .result {
    padding-top: 20px;
  }
</style>

<div class="text-4xl font-mono">
  <div class="inputs-grid">
    <div>{number1}</div>
    <div><code>&amp;</code></div>
    <div>{number2}</div>
    <div>0b{bin1}</div>
    <div><code>&amp;</code></div>
    <div>0b{bin2}</div>
  </div>
  <div class="operation-grid">
    {#each bin1Padded as char}
      <div>{char}</div>
    {/each}
    {#each bin2Padded as char}
      <div>{char}</div>
    {/each}
    {#each bin2Padded as char}
      {#if char === '0'}
        <div class="char-0">0</div>
      {:else}
        <div class="char-1">1</div>
      {/if}
    {/each}
  </div>
  <div class="result">
    {number1} &amp; {number2} = 0b{resultBin} = {result10}
  </div>
</div>
