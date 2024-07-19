import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: "https://ubcn.co.kr",
  compressHTML: false,
  integrations: [
    starlight({
      title: '개발자센터',
      logo: {
        light: './src/assets/logo/ubcn-logo-text.png',
        dark: './src/assets/logo/ubcn-logo-white.png',
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
          items: [
            {label: '2024년 1월', autogenerate: {directory: 'release-notes/2024-01'}, collapsed: true},
            {label: '2024년 2월', autogenerate: {directory: 'release-notes/2024-02'}, collapsed: true},
            {label: '2024년 3월', autogenerate: {directory: 'release-notes/2024-03'}, collapsed: true},
            {label: '2024년 4월', autogenerate: {directory: 'release-notes/2024-04'}, collapsed: true},
            {label: '2024년 5월', autogenerate: {directory: 'release-notes/2024-05'}, collapsed: true},
            {label: '2024년 6월', autogenerate: {directory: 'release-notes/2024-06'}, collapsed: true},
            {label: '2024년 7월', autogenerate: {directory: 'release-notes/2024-07'}, collapsed: false,
              badge: {text: 'New', variant: 'default'},
            },
          ],
        },
      ],
    }),
  ],
});
