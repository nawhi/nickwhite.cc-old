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
<h1 class="mt-6 text-3xl xs:text-4xl text-th-primary font-bold">{title}</h1>
<p class="text-th-secondary pt-2 pb-1 font-serif tracking-wide text-lg">{description}</p>
<p class="text-th-tertiary font-light pt-1">
  Posted on {formattedDate}
</p>

<div class="mt-12 blog-content">
  <slot />
</div>
