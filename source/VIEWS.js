/**
 * Registry of view names.
 */
var VIEWS = {
  Home: 'home.html',
  About: 'about.html',
  NotFound: 'not-found.html',
  Dashboard: {
    Home: 'dashboard/index.html',
    User: {
      List: 'dashboard/users/index.html',
      Create: 'dashboard/users/create.html',
      Show: 'dashboard/users/show.html',
      Edit: 'dashboard/users/edit.html',
      Delete: 'dashboard/users/delete.html',
      Photo: 'dashboard/users/photo.html',
      PhotoDelete: 'dashboard/users/photo-delete.html'
    }
  }
};
