const track: AuthRoute.Route = {
  name: 'track_navigation',
  path: '/track/navigation',
  component: 'self',
  meta: {
    title: '轨道',
    requiresAuth: true,
    singleLayout: 'basic',
    icon: 'material-symbols:format-letter-spacing-rounded',
    order: 3
  }
};

export default track;
