const parameter: AuthRoute.Route = {
  name: 'parameter',
  path: '/parameter',
  component: 'basic',
  children: [
    {
      name: 'parameter_furnace',
      path: '/parameter/furnace',
      component: 'self',
      meta: {
        title: '炉区参数配置',
        requiresAuth: true,
        icon: 'material-symbols:settings-overscan-outline-sharp'
      }
    }
  ],
  meta: {
    title: '系统重要参数配置',
    icon: 'material-symbols:settings-outline-rounded',
    order: 21
  }
};

export default parameter;
