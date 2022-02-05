/// <reference types="@sveltejs/kit" />

interface Post {
  title: string;
  date: string;
  description: string;
  unlisted?: boolean;
  draft?: boolean;
  filename: string;
}

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
  interface Locals {
    posts: Post[];
  }

  interface Platform {}

  interface Session {}

  interface Stuff {}
}
