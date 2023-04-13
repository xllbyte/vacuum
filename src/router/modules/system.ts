const system: AuthRoute.Route = {
  name: 'system',
  path: '/system',
  component: 'basic',
  children: [
    {
      name: 'system_navigation',
      path: '/system/navigation',
      component: 'self',
      meta: {
        title: '系统维护导航页',
        requiresAuth: true,
        icon: 'ci:settings-filled'
      }
    },
    {
      name: 'system_oil',
      path: '/system/oil',
      component: 'self',
      meta: {
        title: '注油参数配置页',
        requiresAuth: true,
        icon: 'ci:show'
      }
    },
    {
      name: 'system_maintain',
      path: '/system/maintain',
      component: 'self',
      meta: {
        title: '维护倒计时提示页',
        requiresAuth: true,
        icon: 'ci:grid-round'
      }
    }
  ],
  meta: {
    title: '系统维护',
    icon: 'ci:window-code-block',
    order: 15
  }
};

export default system;
