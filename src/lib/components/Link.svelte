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
    <span>
      <slot />
    </span>
    <span class="m-2 text-xs font-light">&#x2197;</span>
  </a>
{/if}
