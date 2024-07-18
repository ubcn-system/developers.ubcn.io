import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: "https://ubcn.co.kr",
  integrations: [
    starlight({
      title: '개발자센터',
      logo: {
        light: './src/assets/logo/logo_blue.png',
        dark: './src/assets/logo/logo_white.png',
      },
      favicon: '/favicon.png',
      customCss: ['./src/assets/styles/style.css'],
      social: {
        github: 'https://github.com/ubcn-system/developers.ubcn.io',
      },
      defaultLocale: 'kr',
      locales: {
        kr: {
          label: '한국어',
          direction: 'ltr',
        },
      },
      sidebar: [
        {
          label: '서비스 가이드',
          collapsed: true,
          autogenerate: {directory: 'guides'},
        },
        {
          label: '릴리즈노트',
          collapsed: false,
          autogenerate: {directory: 'release-notes'},
        },
      ],
    }),
  ],
});
