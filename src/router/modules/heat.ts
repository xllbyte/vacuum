const heat: AuthRoute.Route = {
  name: 'heat_homepage',
  path: '/heat/homepage',
  component: 'self',
  meta: {
    title: '加热',
    requiresAuth: true,
    singleLayout: 'basic',
    icon: 'material-symbols:mode-heat',
    order: 2
  }
};

export default heat;
