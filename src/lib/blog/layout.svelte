<script>
  import PageTitle from '$lib/components/PageTitle.svelte';
  import Sitemap from '$lib/components/Sitemap.svelte';

  const { title, date, description } = $$restProps;

  const formattedDate = (() => {
    const d = new Date(date);
    return d.getTime()
      ? new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(d)
      : undefined;
  })();
</script>

<Sitemap />
<PageTitle {title} />
<h1 class="mt-6 text-3xl font-bold text-th-primary xs:text-4xl">{title}</h1>
<p class="pt-2 pb-1 font-serif text-lg tracking-wide text-th-secondary">{description}</p>
<p class="pt-1 font-light text-th-tertiary">
  Posted on {formattedDate}
</p>

<div class="blog-content mt-12">
  <slot />
</div>
