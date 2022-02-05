<script lang="ts">
  import Layout from '$lib/Layout.svelte';
  import Header from '$lib/Header.svelte';
  import Section from '$lib/Section.svelte';
  import { about } from '$lib/content/about';
  import SummaryItem from '$lib/SummaryItem.svelte';
</script>

<Layout>
  <Header />
  <Section title="About Me">
    {#each about.about as line}
      <p class="mb-3">{line}</p>
    {/each}
  </Section>
  <Section title="Experience">
    {#each about.experience as { name, link, description, bio }}
      <SummaryItem {name} {link} longDesc={bio} shortDesc={description} />
    {/each}
  </Section>
  <Section title="Projects">
    {#each about.projects as { name, link, description }}
      <SummaryItem {name} {link} shortDesc={description} />
    {/each}
  </Section>
  <Section title="Skills">
    {#each about.skills as { name, link, description }}
      <SummaryItem {name} {link} shortDesc={description} />
    {/each}
  </Section>
</Layout>
