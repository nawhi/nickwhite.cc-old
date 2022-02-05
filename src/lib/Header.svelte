<script>
  import SocialIcons from '$lib/SocialIcons.svelte';
  import Sitemap from '$lib/Sitemap.svelte';
  import {  siteMetadata, icons } from '$lib/content/meta';
</script>

<div class="block mb-6 md:flex">
  <div class="w-full max-w-150">
    <a href="/">
      <img
        src="/static/img/profile.jpg"
        alt={siteMetadata.name}
        class="rounded-full transform transition-all duration-150 hover:scale-105"
      />
    </a>
  </div>
  <div class="flex-none pt-6 md:pt-1 md:flex-1 md:pl-20">
    <h1 class="text-5xl text-gray-900 font-bold leading-tight hover:text-block">
      <a href="/">{siteMetadata.name}</a>
    </h1>
    <p class="text-gray-700">{siteMetadata.description}</p>
    <SocialIcons icons={icons} />
    <Sitemap />
    <slot />
  </div>
</div>
