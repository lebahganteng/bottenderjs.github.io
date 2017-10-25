export const link = [
  {
    rel: 'icon',
    sizes: '192x192',
    href: `${__PATH_PREFIX__}/favicon-192x192.png`,
  },
  {
    href: `${__PATH_PREFIX__}/favicon-32x32.png`,
    rel: 'shortcut icon',
    type: 'image/x-icon',
  },
  {
    href: `${__PATH_PREFIX__}/apple-touch-icon.png`,
    rel: 'apple-touch-icon',
  },
];

export const meta = [
  {
    name: 'apple-mobile-web-app-title',
    content: 'Bottender',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  { property: 'og:url', content: 'https://yoctol.github.io/bottender-docs/' },
  {
    property: 'og:title',
    content: 'Bottender | Make Bots in Your Way, Fast and Flexibly',
  },
  {
    property: 'og:image',
    content: `${__PATH_PREFIX__}/fb-og.png`,
  },
  {
    property: 'og:description',
    content: 'Bottender | Make Bots in Your Way, Fast and Flexibly',
  },
  { property: 'og:site_name', content: 'Bottender' },
  { property: 'og:locale', content: 'en_US' },
];