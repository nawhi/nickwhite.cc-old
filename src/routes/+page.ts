import { resolvePosts } from '../lib/posts';

export const load = async () => ({ posts: await resolvePosts() });
