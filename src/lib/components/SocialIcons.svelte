<script>
  import { siteMetadata } from '../content/meta';
  import GitHubIcon from '$lib/icons/github.svelte';
  import LinkedInIcon from '$lib/icons/linkedin.svelte';

  const socials = [
    {
      href: siteMetadata.github,
      name: 'GitHub',
      Icon: GitHubIcon
    },
    {
      href: siteMetadata.linkedin,
      name: 'LinkedIn',
      Icon: LinkedInIcon
    }
  ];
</script>

<ul class="m-1 inline-flex items-start gap-1 print:flex print:flex-col">
  {#each socials as { href, name, Icon }}
    <li class="inline list-none pr-2">
      <a
        {href}
        target="_blank"
        rel="noreferrer"
        class="inline-block h-4 transform transition-all duration-150 hover:scale-110 print:inline-flex print:items-center print:gap-3"
      >
        <Icon alt={name} />
        <span class="hidden print:block print:underline print:text-th-tertiary">{href}</span>
      </a>
    </li>
  {/each}
</ul>
