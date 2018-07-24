import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Admin Home',
    icon: 'fa fa-home',
    link: '/admin',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Users',
    icon: 'fas fa-user-plus',
    link: 'users',
    // children: [
    //   // {
    //   //   title: 'RSS Feed',
    //   //   link: '/ui-features/buttons',
    //   // },
    //   {
    //     title: 'Sync',
    //     icon: 'fa fa-sync',
    //     link: '/content/sync',
    //   },
    //   // {
    //   //   title: 'Create Manually',
    //   //   link: '/content/manual',
    //   // },

    // ],
  },
  // {
  //   title: 'Earnings',
  //   icon: 'ion-social-usd-outline',
  //   link: '/earnings',

  // },

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
