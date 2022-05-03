<script>
  import { siteMetadata } from '../content/meta';
  import GitHubIcon from '$lib/icons/github.svelte';
  import LinkedInIcon from '$lib/icons/linkedin.svelte';
</script>

<ul class="m-1 inline-flex items-center gap-1">
  <li class="inline list-none pr-2">
    <a
      href={siteMetadata.github}
      target="_blank"
      rel="noreferrer"
      class="inline-block h-4 transform transition-all duration-150 hover:scale-110"
    >
      <GitHubIcon alt="GitHub" />
    </a>
  </li>
  <li class="inline list-none pr-2">
    <a
      href={siteMetadata.linkedin}
      target="_blank"
      rel="noreferrer"
      class="inline-block h-4 transform transition-all duration-150 hover:scale-110"
    >
      <LinkedInIcon alt="LinkedIn" />
    </a>
  </li>
</ul>
