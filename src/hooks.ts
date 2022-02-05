import type { GetSession, Handle } from '@sveltejs/kit';
import { dev } from '$app/env';

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
  event.locals.posts = posts
    .map((post) => ({
      ...post,
      title: `${post.draft ? "[DRAFT]" : ""} ${post.title}`,
      href: `/blog/${post.filename.replace(/.md$/, '')}`
    }))
    .filter((post) => dev || !post.draft)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return resolve(event);
};
