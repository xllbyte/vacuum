const nitrogen: AuthRoute.Route = {
  name: 'nitrogen_navigation',
  path: '/nitrogen/navigation',
  component: 'self',
  meta: {
    title: '氮气',
    requiresAuth: true,
    singleLayout: 'basic',
    icon: 'iconoir:nitrogen',
    order: 4
  }
};

export default nitrogen;
