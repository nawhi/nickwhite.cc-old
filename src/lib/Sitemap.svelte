<script>
  const pages = [
    { route: '/', name: 'Home' },
    { route: '/about', name: 'About' },
    { route: '/blog', name: 'Blog' }
  ];

  const currentPath = '/'; // TODO

  const getLinkStyle = (route) =>
    `inline-block py-2 text-xs ${
      route === currentPath ? 'font-bold text-black' : 'text-gray-700 hover:text-black'
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
