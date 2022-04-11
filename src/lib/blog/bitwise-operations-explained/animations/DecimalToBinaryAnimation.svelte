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
   * Step 6: (28 / 32) < 0, so STOP
   *
   * Result: 11100
   */
</script>



<pre>{number}</pre>
