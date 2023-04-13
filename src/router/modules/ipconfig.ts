const ipconfig: AuthRoute.Route = {
  name: 'ipconfig',
  path: '/ipconfig',
  component: 'basic',
  children: [
    {
      name: 'ipconfig_homepage',
      path: '/ipconfig/homepage',
      component: 'self',
      meta: {
        title: 'IP配置界面',
        requiresAuth: true,
        icon: 'mdi:map-marker-multiple'
      }
    }
  ],
  meta: {
    title: 'IP管理',
    icon: 'material-symbols:bring-your-own-ip',
    order: 20
  }
};

export default ipconfig;
