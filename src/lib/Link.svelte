<script lang="ts">
  export let href: string;
  const isInternal = href.startsWith('/');
</script>

<style>
  .link {
    @apply hover:underline hover:text-black;
  }
</style>

{#if isInternal}
  <a {href} class="link">
    <slot />
  </a>
{:else}
  <a {href} target="_blank" rel="noopener noreferrer">
    <span class="link">
      <slot />
    </span>
    <span class="m-2 text-xs font-light">&#x2197;</span>
  </a>
{/if}
