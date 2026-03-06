import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Crowdscope Docs',
      social: {
        github: 'https://github.com/dsantoreis/crowdscope',
      },
    }),
  ],
});
