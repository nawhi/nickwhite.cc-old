<script>
  import Header from '$lib/components/Header.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';

  const { title, date, description } = $$restProps;

  const formattedDate = (() => {
    const d = new Date(date);
    return d.getTime()
      ? new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(d)
      : undefined;
  })();
</script>

<PageTitle {title} />
<Header image={false} />
<h1 class="mt-12 text-4xl text-th-primary font-bold">{title}</h1>
<p class="text-th-secondary font-light pt-1.5">
  Posted on {formattedDate}
</p>

<div class="mt-12 blog-content">
  <slot />
</div>
