/**
 * Registry of module names.
 */
var MODULES = {
  Bootstrap: {
    Pagination: 'ui.bootstrap.pagination',
    Tabs: 'ui.bootstrap.tabs',
    Modal: 'ui.bootstrap.modal',
    ProgressBar: 'ui.bootstrap.progressbar',
    Templates: 'ui.bootstrap.tpls'
  },
  Restangular: 'restangular',
  I18Next: 'jm.i18next',
  TinyMCE: 'ui.tinymce',

  // Application components
  App: 'app',
  Directives: 'directives',
  Filters: 'filters',
  Services: {
    Base: 'services',
    Http: 'services.http',
    Logging: 'services.logging',
    Repository: 'services.repository',
    Security: 'services.security',
    Shared: 'services.shared'
  },
  CommonTemplates: 'common.tpls',

  // Application areas
  Root: 'root',
  Account: 'account',
  Beers: 'beers',
  Breweries: 'breweries',
  RootTemplates: 'root.tpls',
  Dashboard: {
    Home: 'dashboard',
    Malts: 'dashboard.malts',
    Yeasts: 'dashboard.yeasts',
    Hops: 'dashboard.hops',
    Regions: 'dashboard.regions',
    BeerTypes: 'dashboard.beerTypes',
    Breweries: 'dashboard.breweries',
    Beers: 'dashboard.beers',
    Users: 'dashboard.users'
  },
  Shared: 'shared',
  DashboardTemplates: 'dashboard.tpls'
};