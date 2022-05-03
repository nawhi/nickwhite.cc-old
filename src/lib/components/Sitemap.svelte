<script lang="ts">
  import { page } from '$app/stores';
  import { pages } from '$lib/content/pages';

  const getLinkStyle = (route) =>
    `inline-block py-2 text-xs ${
      route === $page.url.pathname
        ? 'font-bold text-th-primary'
        : 'text-th-secondary hover:text-th-primary'
    }`;
</script>

<ul class="mt-6 uppercase tracking-wider">
  {#each pages as { route, name }}
    <li class="inline list-none pr-4">
      <a class={getLinkStyle(route)} href={route}>
        {name}
      </a>
    </li>
  {/each}
</ul>
