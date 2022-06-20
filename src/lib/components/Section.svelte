<script>
  export let title;
</script>

<div class="block pt-12 md:flex">
  <div class="md:max-w-150 pb-6 md:w-full md:p-0">
    <h2
      class="font-xs text-sm font-light uppercase leading-normal tracking-widest text-th-secondary"
    >
      {title}
    </h2>
  </div>
  <div class="max-w-screen-sm flex-none text-lg font-light text-th-secondary md:flex-1 md:pl-20">
    <slot />
  </div>
</div>
