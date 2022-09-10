import type { Post } from 'src/lib/types';

interface BlogPostModule {
  metadata: Post;
}

const extractFilename = (page: string) => {
  return page.replace('/+page.md', '').split('/').pop();
};

export const resolvePosts = async () => {
  const routes = import.meta.glob<false, string, BlogPostModule>('/src/routes/blog/*/+page.md');
  const posts = await Promise.all(
    Object.entries(routes).map(async ([path, page]) => {
      const imported = await page();
      const filename = extractFilename(path);
      return { href: `/blog/${filename}/`, ...imported.metadata };
    })
  );

  return posts
    .filter((post) => !post.unlisted)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
