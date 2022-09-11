<script>
  import '../app.css';
  import DotPattern from '$lib/components/DotPattern.svelte';
</script>

<div class="relative h-full">
  <DotPattern />
  <div class="p-8 relative max-w-screen-xl xs:p-24 print:xs:p-0">
    <slot />
  </div>
</div>
