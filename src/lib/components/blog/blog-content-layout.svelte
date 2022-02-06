<script>
  import Layout from '$lib/components/Layout.svelte';
  import Header from '$lib/components/Header.svelte';

  const { title, date, description } = $$restProps;

  const formattedDate = (() => {
    const d = new Date(date);
    return d.getTime()
      ? new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(d)
      : undefined;
  })();
</script>

<Layout>
  <Header />
  <h1 class="mt-16 text-4xl text-gray-900 font-bold">{title}</h1>
  <p class="text-gray-700 font-light">
    Posted on {formattedDate}
  </p>

  <div class="mt-16 blog-content">
    <slot />
  </div>
</Layout>
