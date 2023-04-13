const log: AuthRoute.Route = {
  name: 'log',
  path: '/log',
  component: 'basic',
  children: [
    {
      name: 'log_output',
      path: '/log/output',
      component: 'self',
      meta: {
        title: '行为日志输出页',
        requiresAuth: true,
        icon: 'ci:youtube'
      }
    }
  ],
  meta: {
    title: '系统日志',
    icon: 'ci:calendar-plus',
    order: 17
  }
};

export default log;
