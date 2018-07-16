import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'fa fa-home',
    link: '/',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Content',
    icon: 'fa fa-pencil',
    link: '/content',
    children: [
      // {
      //   title: 'RSS Feed',
      //   link: '/ui-features/buttons',
      // },
      {
        title: 'Sync',
        icon: 'fa fa-sync',
        link: '/content/sync',
      },
      // {
      //   title: 'Create Manually',
      //   link: '/content/manual',
      // },

    ],
  },
  // {
  //   title: 'Earnings',
  //   icon: 'ion-social-usd-outline',
  //   link: '/earnings',

  // },

  {
    title: 'Analytics',
    icon: 'fa fa-chart-line',
    link: '/analytics/',
  },
];
