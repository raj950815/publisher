import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Content',
    icon: 'nb-edit',
    link: '/pages/ui-features',
    children: [
      // {
      //   title: 'RSS Feed',
      //   link: '/pages/ui-features/buttons',
      // },
      {
        title: 'Sync',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Create Manually',
        link: '/pages/editors/ckeditor',
      },
      // {
      //   title: 'Icons',
      //   link: '/pages/ui-features/icons',
      // },
      // {
      //   title: 'Modals',
      //   link: '/pages/ui-features/modals',
      // },
      // {
      //   title: 'Popovers',
      //   link: '/pages/ui-features/popovers',
      // },
      // {
      //   title: 'Typography',
      //   link: '/pages/ui-features/typography',
      // },
      // {
      //   title: 'Animated Searches',
      //   link: '/pages/ui-features/search-fields',
      // },
      // {
      //   title: 'Tabs',
      //   link: '/pages/ui-features/tabs',
      // },
    ],
  },
  {
    title: 'Earnings',
    icon: 'ion-social-usd-outline',
    link: 'ui-features/',
    // children: [
    //   {
    //     title: 'Withdraws',
    //     link: '/pages/forms/inputs',
        
    //   },
    //   {
    //     title: 'Earning Setting',
    //     link: 'ui-features/tabs/tab1',
    //   },
    // ],
  },
  // {
  //   title: 'Analytics',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Tree',
  //       link: '/pages/components/tree',
  //     }, {
  //       title: 'Notifications',
  //       link: '/pages/components/notifications',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  {
    title: 'Analytics',
    icon: 'nb-bar-chart',
    link: '/pages/analytics/',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // // {
  // //   title: 'Tables',
  // //   icon: 'nb-tables',
  // //   children: [
  // //     {
  // //       title: 'Smart Table',
  // //       link: '/pages/tables/smart-table',
  // //     },
  // //   ],
  // // },
  // // {
  // //   title: 'Miscellaneous',
  // //   icon: 'nb-shuffle',
  // //   children: [
  // //     {
  // //       title: '404',
  // //       link: '/pages/miscellaneous/404',
  // //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
