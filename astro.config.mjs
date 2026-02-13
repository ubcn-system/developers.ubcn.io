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
            social: [],
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
                            label: 'Legacy',
                            autogenerate: {directory: 'release-notes/legacy'},
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
                {
                    label: 'API',
                    badge: {text: '유료', variant: 'caution'},
                    autogenerate: {directory: 'api'},
                    collapsed: true
                },
                {
                    label: '네트워크',
                    badge: {text: 'link', variant: 'note'},
                    link: 'https://ubcn.notion.site/UBCn-Network-Pay-21930b3d33e24caea25d97d3a314f066?pvs=4'
                },
                {
                    label: '자주 묻는 질문',
                    link: '/faq'
                },
            ],
        })
        ,
    ],
})
;
