<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Section from '$lib/components/Section.svelte';
  import { about as content } from '$lib/content/about';
  import SummaryItem from '$lib/components/SummaryItem.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';

  const { about, education, experience, projects, skills } = content;
</script>

<PageTitle title="About" />
<Header />
<Section title="About Me">
  {#each about as line}
    <p class="mb-3">{line}</p>
  {/each}
</Section>
<Section title="Experience">
  {#each experience as { name, link, technologies, description, bio }}
    <SummaryItem {name} {link} shortDesc={description} longDesc={bio} tags={technologies} />
  {/each}
</Section>
<Section title="Education">
  {#each education as { name, link, description, bio }}
    <SummaryItem {name} {link} shortDesc={description} longDesc={bio} />
  {/each}
</Section>
<Section title="Projects">
  {#each projects as { name, link, description }}
    <SummaryItem {name} {link} shortDesc={description} />
  {/each}
</Section>
<Section title="Skills">
  {#each skills as { name, link, description }}
    <SummaryItem {name} {link} shortDesc={description} />
  {/each}
</Section>
