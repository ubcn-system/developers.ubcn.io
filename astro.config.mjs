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
                PageTitle: './src/components/Title.astro',
            },
            logo: {
                src: './src/assets/logo/ubcn-logo-text.png',
            },
            favicon: '/favicon.png',
            customCss: ['./src/assets/styles/style.css'],
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/ubcn-system/developers.ubcn.io' },
                ],
            defaultLocale: 'root',
            locales: {
                root: {
                    label: '한국어',
                    lang: 'ko',
                }
            },
            sidebar: [
                {
                    label: '용어사전',
                    badge: {text: 'New', variant: 'success'},
                    link: '/glossary'
                },
                {
                    label: '릴리즈노트',
                    collapsed: false,
                    /*autogenerate: {directory: 'release-notes'},*/
                    items: [
                        {
                            label: '2024년',
                            autogenerate: {directory: 'release-notes/2024'},
                            collapsed: true
                        },
                        {
                            label: '2025년',
                            autogenerate: {directory: 'release-notes/2025'},
                            collapsed: true
                        },
                        {
                            label: '2026년 1월',
                            autogenerate: {directory: 'release-notes/2026-01'},
                            collapsed: true
                        },
                        {
                            label: '2026년 2월',
                            autogenerate: {directory: 'release-notes/2026-02'},
                            collapsed: false
                        },

                    ],
                },
                /*{
                    label: 'API',
                    autogenerate: {directory: 'api'},
                    collapsed: false
                },*/
            ],
        })
        ,
    ],
})
;
