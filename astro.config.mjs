import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: "https://ubcn.co.kr",
    compressHTML: false,
    integrations: [
        starlight({
            title: '개발자센터',
            components: {
                Header: './src/components/Header.astro',
            },
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
            sidebar: [
                {
                    label: '릴리즈노트',
                    collapsed: false,
                    /*autogenerate: {directory: 'release-notes'},*/
                    items: [
                        {
                            label: '2024년 7월',
                            autogenerate: {directory: 'release-notes/2024-07'},
                            collapsed: true
                        },
                        {
                            label: '2024년 8월',
                            autogenerate: {directory: 'release-notes/2024-08'},
                            collapsed: true
                        },
                        {
                            label: '2024년 9월',
                            autogenerate: {directory: 'release-notes/2024-09'},
                            collapsed: false
                        },
                        {
                            label: '2024년 10월',
                            autogenerate: {directory: 'release-notes/2024-10'},
                            collapsed: false
                        },
                    ],
                },
                {label: 'API', autogenerate: {directory: 'api'}, collapsed: false},
            ],
        })
        ,
    ],
})
;
