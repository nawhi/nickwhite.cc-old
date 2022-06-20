<script lang="ts">
  export let rows: number, cols: number;
</script>

<!-- grid-rows-{rows} doesn't work in this context... don't know why -->
<div
  class="grid justify-items-start gap-4 font-mono text-3xl"
  style="
   /*  */
    grid-template-rows: repeat({rows}, minmax(0, 1fr));
    grid-template-columns: repeat({cols}, minmax(0, 1fr));"
>
  <slot />
</div>
