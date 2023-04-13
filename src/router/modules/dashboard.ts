const dashboard: AuthRoute.Route = {
  name: 'dashboard_analysis',
  path: '/dashboard/analysis',
  component: 'self',
  meta: {
    title: '主页',
    requiresAuth: true,
    singleLayout: 'basic',
    icon: 'material-symbols:cloud-domains',
    order: 1
  }
};

export default dashboard;
