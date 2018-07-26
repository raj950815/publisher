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
    icon: 'fas fa-user-plus',
    link: 'users',
  },
  {
    title: 'RSS',
    icon: 'fas fa-rss-square',
    link: 'rss',
  },
  {
    title: 'Payment',
    icon: 'far fa-money-bill-alt',
    link: 'payment',
  },
];
