const profile: AuthRoute.Route = {
  name: 'profile',
  path: '/profile',
  component: 'basic',
  children: [
    {
      name: 'profile_track',
      path: '/profile/track',
      component: 'self',
      meta: {
        title: '轨道参数配置',
        requiresAuth: true,
        icon: 'ic-round-settings-suggest'
      }
    },
    {
      name: 'profile_nitrogen',
      path: '/profile/nitrogen',
      component: 'self',
      meta: {
        title: '氮气参数配置',
        requiresAuth: true,
        icon: 'ic-round-settings-suggest'
      }
    },
    {
      name: 'profile_vacuum',
      path: '/profile/vacuum',
      component: 'self',
      meta: {
        title: '真空参数配置',
        requiresAuth: true,
        icon: 'ic-round-settings-suggest'
      }
    }
  ],
  meta: {
    title: '编辑profile',
    icon: 'mdi-file-edit',
    order: 18
  }
};

export default profile;
