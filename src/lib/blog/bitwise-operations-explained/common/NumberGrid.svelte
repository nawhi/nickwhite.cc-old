<script lang="ts">
  export let rows: number, cols: number;
</script>

<div
  class="font-mono text-3xl grid gap-6 justify-items-center"
  style="
    grid-template-rows: repeat({rows}, minmax(0, 1fr));
    grid-template-columns: repeat({cols}, minmax(0, 1fr));"
>
  <slot />
</div>
