<script>
  import '../app.css';
  import DotPattern from '$lib/components/DotPattern.svelte';
</script>

<div class="relative h-full">
  <DotPattern />
  <div class="relative max-w-screen-xl p-8 xs:p-24">
    <slot />
  </div>
</div>
