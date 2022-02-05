<script>
  import '../app.css';
  import DotPattern from '$lib/DotPattern.svelte';
</script>

<div class="relative">
  <DotPattern />
  <div class="p-8 relative max-w-screen-xl xs:p-24">
    <slot />
  </div>
</div>
