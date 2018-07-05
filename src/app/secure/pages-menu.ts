import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/dashboard',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Content',
    icon: 'nb-edit',
    link: '/content',
    children: [
      // {
      //   title: 'RSS Feed',
      //   link: '/ui-features/buttons',
      // },
      {
        title: 'Sync',
        link: '/content/sync',
      },
      {
        title: 'Create Manually',
        link: '/content/manual',
      },
 
    ],
  },
  {
    title: 'Earnings',
    icon: 'ion-social-usd-outline',
    link: '/earnings',

  },

  {
    title: 'Analytics',
    icon: 'nb-bar-chart',
    link: '/analytics/',
  }
];
