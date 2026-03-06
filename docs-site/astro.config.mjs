import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Crowdscope Docs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dsantoreis/crowdscope' }],
      sidebar: [
        {
          label: 'Docs',
          items: [{ label: 'Overview', slug: 'overview' }],
        },
      ],
    }),
  ],
});
