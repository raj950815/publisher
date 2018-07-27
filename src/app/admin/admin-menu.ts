import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Admin Home',
    icon: 'fa fa-home',
    link: '/admin',
    home: true,
  },
  {
    title: 'Users',
    icon: 'fa fa-user',
    link: 'users',
  },
  {
    title: 'RSS',
    icon: 'fa fa-rss-square',
    link: 'rss',
  },
  {
    title: 'Payment',
    icon: 'far fa-money-bill-alt',
    link: 'payment',
  },
];
