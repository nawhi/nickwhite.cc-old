import type { Post } from 'src/lib/types';

interface BlogPostModule {
  metadata: Post;
}

const extractFilename = (page: string) => {
  return page.replace('/+page.md', '').split('/').pop();
};

export const resolvePosts = () => {
  const routes = import.meta.glob<false, string, BlogPostModule>('/src/routes/blog/*/+page.md');
  return Promise.all(
    Object.entries(routes).map(async ([path, page]) => {
      const imported = await page();
      const filename = extractFilename(path);
      return { href: `/blog/${filename}/`, ...imported.metadata };
    })
  );
};
