/// <reference types="@sveltejs/kit" />

import type { Post } from '$lib/types';

declare namespace App {
  // See https://kit.svelte.dev/docs#typescript
  // for information about these interfaces
  interface Locals {
    posts: Post[];
  }

  interface Platform {}

  interface Session {
    posts: Post[];
  }

  interface Stuff {}
}
