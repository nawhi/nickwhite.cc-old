<script lang="ts">
  import SocialIcons from '$lib/components/SocialIcons.svelte';
  import Sitemap from '$lib/components/Sitemap.svelte';
  import { siteMetadata } from '$lib/content/meta';
</script>

<div class="mb-6 block md:flex">
  <div class="max-w-150 w-full">
    <a href="/">
      <img
        src="/img/profile.jpg"
        alt={siteMetadata.name}
        class="transform rounded-full transition-all duration-150 hover:scale-105"
      />
    </a>
  </div>
  <div class="flex-none pt-6 md:flex-1 md:pt-1 md:pl-20">
    <h1 class="hover:text-block text-4xl font-bold leading-tight text-th-primary xs:text-5xl">
      <a href="/">{siteMetadata.name}</a>
    </h1>
    <p class="py-1 font-serif text-lg tracking-wide text-th-secondary">
      {siteMetadata.description}
    </p>
    <SocialIcons />
    <Sitemap />
    <slot />
  </div>
</div>
