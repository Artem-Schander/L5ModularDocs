const ogprefix = 'og: http://ogp.me/ns#';
const title = 'L5Modular';
const description = 'Keep Your Laravel App Organized';
const color = '#c8edd3';
const author = 'Artem Schander';
const url = 'https://l5modular.com';

module.exports = {
    title,
    description,
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             "@assets": "assets",
    //         },
    //     },
    // },
    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: `/assets/favicon.png` }],
        ['meta', { name: 'theme-color', content: color }],
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
        ['meta', { prefix: ogprefix, property: 'og:url', content: url }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        ['meta', { prefix: ogprefix, property: 'og:image', content: `${url}/assets/og.png` }],
        ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/assets/logo-no-borders-bicolor.png` }],
        ['link', { rel: 'mask-icon', href: '/assets/logo-no-borders-bicolor.svg', color: color }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/tile.png' }],
        ['meta', { name: 'msapplication-TileColor', content: color }],
    ],
    themeConfig: {
        logo: '/assets/logo-no-borders-bicolor.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Free Modules', link: 'https://share.l5modular.com' },
        ],
        sidebar: ['/', '/introduction/', '/getting-started/', '/usage/', '/artisan-commands/', '/configuration/'],
        // sidebar: [
        //     { title: 'Home', path: '/' },
        //     { title: 'Introduction', path: '/introduction/' },
        //     {
        //         title: 'Installation',
        //         path: '/installation/',
        //         children: ['/', '/installation/requirements'],
        //     },
        // ],
    },
    markdown: {
        lineNumbers: false,
    },
};
