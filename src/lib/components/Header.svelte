<script lang="ts">
  import SocialIcons from '$lib/components/SocialIcons.svelte';
  import Sitemap from '$lib/components/Sitemap.svelte';
  import { siteMetadata } from '$lib/content/meta';
</script>

<div class="block mb-6 md:flex print:flex">
  <div class="w-full max-w-150">
    <a href="/">
      <img
        src="/img/profile.jpg"
        alt={siteMetadata.name}
        class="rounded-full transform transition-all duration-150 hover:scale-105"
      />
    </a>
  </div>
  <div class="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20 print:pl-20">
    <h1 class="text-4xl xs:text-5xl text-th-primary font-bold leading-tight hover:text-block">
      <a href="/">{siteMetadata.name}</a>
    </h1>
    <p class="text-th-secondary py-1 font-serif text-lg tracking-wide">
      {siteMetadata.description}
    </p>
    <SocialIcons />
    <div class="print:hidden">
      <Sitemap />
    </div>
    <slot />
  </div>
</div>
