import { resolvePosts } from '$lib/resolvePosts';

export const load = async () => ({ posts: await resolvePosts() });
