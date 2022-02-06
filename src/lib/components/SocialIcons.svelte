<script>
  export let icons;
</script>

<ul class={'mt-1'}>
  {#each icons as { name, icon, link }}
    <li class="inline list-none pr-2">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          class="inline-block h-4 transform transition-all duration-150 hover:scale-110"
          src={icon}
          alt={name}
        />
      </a>
    </li>
  {/each}
</ul>
