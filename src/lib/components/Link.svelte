<script lang="ts">
  export let href: string;
  const isInternal = href.startsWith('/');
</script>

{#if isInternal}
  <a {href}>
    <slot />
  </a>
{:else}
  <a {href} target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
{/if}
