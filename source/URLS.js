/**
 * Registry of view URLs.
 */
var URLS = {
  Root: '/',
  Home: '/home',
  About: '/about',
  NotFound: '/not-found',
  Dashboard: {
    Home: '/dashboard',
    User: {
      List: '/dashboard/users',
      Create: '/dashboard/users/create',
      Show: '/dashboard/users/:key',
      Edit: '/dashboard/users/:key/edit',
      Photo: '/dashboard/users/:key/photo'
    }
  }
};
