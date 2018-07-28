import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'fa fa-home',
    link: '/',
    home: true,
  },
  {
    title: 'Content',
    icon: 'fa fa-pencil',
    link: '/content',
    children: [
      {
        title: 'RSS',
        icon: 'fa fa-rss-square',
        link: '/content/rss',
      },
    ],
  },
  {
    title: 'Analytics',
    icon: 'fa fa-chart-line',
    link: '/analytics/',
  },
];
