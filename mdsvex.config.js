import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkExternalLinks from 'remark-external-links';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  layout: './src/lib/components/blog/blog-content-layout.svelte',

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [
    [
      remarkExternalLinks,
      {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    ]
  ],
  rehypePlugins: []
});

export default config;
