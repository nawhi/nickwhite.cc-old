import type { GetSession, Handle } from '@sveltejs/kit';

export const getSession: GetSession = async (event) => ({
  posts: event.locals.posts
});

export const handle: Handle = async ({ event, resolve }) => {
  const routes = Object.entries(import.meta.glob('/src/routes/blog/*.md'));
  const posts = await Promise.all(
    routes.map(async ([path, page]) => {
      const { metadata } = await page();
      const filename = path.split('/').pop();
      return { ...metadata, filename };
    })
  );
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  event.locals.posts = posts.map((post) => ({
    ...post,
    href: `/blog/${post.filename.replace(/.md$/, '')}`
  }));
  return resolve(event);
};
