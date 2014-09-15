/**
 * Registry of controller names.
 */
var CONTROLLERS = {
  Main: 'ctrl.main',
  Home: 'ctrl.home',
  About: 'ctrl.about',
  NotFound: 'ctrl.notFound',
  Dashboard: {
    Home: 'ctrl.dashboard',
    User: {
      List: 'ctrl.dashboard.users.index',
      Create: 'ctrl.dashboard.users.create',
      Show: 'ctrl.dashboard.users.show',
      Edit: 'ctrl.dashboard.users.edit',
      Delete: 'ctrl.dashboard.users.delete',
      Photo: 'ctrl.dashboard.users.photo',
      PhotoDelete: 'ctrl.dashboard.users.photoDelete'
    }
  }
};
