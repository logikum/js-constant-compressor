/*! Krigli.WebSite - v0.0.10 - 2014-09-02 */

/**
 * Registry of API URLs.
 */
var API = {
  Root: '/api',
  RootV2: '/api/v2',
  Account: {
    Login: '/api/account/login',
    Logout: '/api/account/logout',
    CurrentUser: '/api/account/current-user'
  },
  Images: {
    Upload: '/api/images/upload'
  }
};

/**
 * Registry of controller names.
 */
var CONTROLLERS = {
  Main: 'ctrl.main',
  Home: 'ctrl.home',
  About: 'ctrl.about',
  NotFound: 'ctrl.notFound',
  Account: {
    Home: "ctrl.account",
    Login: 'ctrl.account.login',
    Register: 'ctrl.account.register',
    ConfirmRegistration: 'ctrl.account.confirmRegistration',
    ForgottenPassword: 'ctrl.account.forgottenPassword',
    NewPassword: 'ctrl.account.newPassword',
    Edit: 'ctrl.account.edit',
    ChangePassword: 'ctrl.account.changePassword',
    ChangeEmail: 'ctrl.account.changeEmail',
    ConfirmEmail: 'ctrl.account.confirmEmail'
  },
  Beer: {
    Home: 'ctrl.beers',
    Search: 'ctrl.beers.search',
    Show: 'ctrl.beers.show'
  },
  Brewery: {
    Home: 'ctrl.breweries',
    Search: 'ctrl.breweries.search',
    Show: 'ctrl.breweries.show'
  },
  Dashboard: {
    Home: 'ctrl.dashboard',
    MailerTest: 'ctrl.dashboard.mailerTest',
    ModelDefinitions: 'ctrl.dashboard.modelDefinitions',
    SystemInfo: 'ctrl.dashboard.systemInfo',
    Malt: {
      List: 'ctrl.dashboard.malts.index',
      Create: 'ctrl.dashboard.malts.create',
      Show: 'ctrl.dashboard.malts.show',
      Edit: 'ctrl.dashboard.malts.edit',
      Delete: 'ctrl.dashboard.malts.delete',
      ImageUpload: 'ctrl.dashboard.malts.imageUpload',
      ImageShow: 'ctrl.dashboard.malts.imageShow',
      ImageEdit: 'ctrl.dashboard.malts.imageEdit',
      ImageDelete: 'ctrl.dashboard.malts.imageDelete'
    },
    Yeast: {
      List: 'ctrl.dashboard.yeasts.index',
      Create: 'ctrl.dashboard.yeasts.create',
      Show: 'ctrl.dashboard.yeasts.show',
      Edit: 'ctrl.dashboard.yeasts.edit',
      Delete: 'ctrl.dashboard.yeasts.delete',
      ImageUpload: 'ctrl.dashboard.yeasts.imageUpload',
      ImageShow: 'ctrl.dashboard.yeasts.imageShow',
      ImageEdit: 'ctrl.dashboard.yeasts.imageEdit',
      ImageDelete: 'ctrl.dashboard.yeasts.imageDelete'
    },
    Hop: {
      List: 'ctrl.dashboard.hops.index',
      Create: 'ctrl.dashboard.hops.create',
      Show: 'ctrl.dashboard.hops.show',
      Edit: 'ctrl.dashboard.hops.edit',
      Delete: 'ctrl.dashboard.hops.delete',
      ImageUpload: 'ctrl.dashboard.hops.imageUpload',
      ImageShow: 'ctrl.dashboard.hops.imageShow',
      ImageEdit: 'ctrl.dashboard.hops.imageEdit',
      ImageDelete: 'ctrl.dashboard.hops.imageDelete'
    },
    Region: {
      List: 'ctrl.dashboard.regions.index',
      Create: 'ctrl.dashboard.regions.create',
      Show: 'ctrl.dashboard.regions.show',
      Edit: 'ctrl.dashboard.regions.edit',
      Delete: 'ctrl.dashboard.regions.delete',
      CountryCreate: 'ctrl.dashboard.regions.countryCreate',
      CountryShow: 'ctrl.dashboard.regions.countryShow',
      CountryEdit: 'ctrl.dashboard.regions.countryEdit',
      CountryDelete: 'ctrl.dashboard.regions.countryDelete',
      ProvinceCreate: 'ctrl.dashboard.regions.provinceCreate',
      ProvinceShow: 'ctrl.dashboard.regions.provinceShow',
      ProvinceEdit: 'ctrl.dashboard.regions.provinceEdit',
      ProvinceDelete: 'ctrl.dashboard.regions.provinceDelete'
    },
    BeerType: {
      List: 'ctrl.dashboard.beerTypes.index',
      Create: 'ctrl.dashboard.beerTypes.create',
      Show: 'ctrl.dashboard.beerTypes.show',
      Edit: 'ctrl.dashboard.beerTypes.edit',
      Delete: 'ctrl.dashboard.beerTypes.delete'
    },
    Brewery: {
      List: 'ctrl.dashboard.breweries.index',
      Create: 'ctrl.dashboard.breweries.create',
      Show: 'ctrl.dashboard.breweries.show',
      Edit: 'ctrl.dashboard.breweries.edit',
      Delete: 'ctrl.dashboard.breweries.delete',
      ImageUpload: 'ctrl.dashboard.breweries.imageUpload',
      ImageShow: 'ctrl.dashboard.breweries.imageShow',
      ImageEdit: 'ctrl.dashboard.breweries.imageEdit',
      ImageDelete: 'ctrl.dashboard.breweries.imageDelete',
      Logo: 'ctrl.dashboard.breweries.logo',
      LogoDelete: 'ctrl.dashboard.breweries.logoDelete'
    },
    Beer: {
      List: 'ctrl.dashboard.beers.index',
      Create: 'ctrl.dashboard.beers.create',
      Show: 'ctrl.dashboard.beers.show',
      Edit: 'ctrl.dashboard.beers.edit',
      Delete: 'ctrl.dashboard.beers.delete',
      ImageUpload: 'ctrl.dashboard.beers.imageUpload',
      ImageShow: 'ctrl.dashboard.beers.imageShow',
      ImageEdit: 'ctrl.dashboard.beers.imageEdit',
      ImageDelete: 'ctrl.dashboard.beers.imageDelete',
      Label: 'ctrl.dashboard.beers.label',
      LabelDelete: 'ctrl.dashboard.beers.labelDelete'
    },
    User: {
      List: 'ctrl.dashboard.users.index',
      Create: 'ctrl.dashboard.users.create',
      Show: 'ctrl.dashboard.users.show',
      Edit: 'ctrl.dashboard.users.edit',
      Delete: 'ctrl.dashboard.users.delete',
      Photo: 'ctrl.dashboard.users.photo',
      PhotoDelete: 'ctrl.dashboard.users.photoDelete'
    }
  },
  Shared: {
    Header: 'ctrl.shared.header',
    ChooseRegion: 'ctrl.shared.chooseRegion',
    ChooseBrewery: 'ctrl.shared.chooseBrewery',
    ChooseBeerType: 'ctrl.shared.chooseBeerType',
    ChooseMalts: 'ctrl.shared.chooseMalts',
    ChooseYeasts: 'ctrl.shared.chooseYeasts',
    ChooseHops: 'ctrl.shared.chooseHops'
  }
};

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
/**
 * Defines reference types for images.
 */
var IMG__REF_TYPE = {
  Malt: 1,
  Yeast: 2,
  Hop: 3,
  Brewery: 4,
  Beer: 5,
  Photo: 6,   // in User
  Label: 7,   // in Beer
  Logo: 8     // in Brewery
};

/**
 * Defines region types.
 */
var REGION_TYPE = {
  Continent: 1,
  Country: 2,
  Province: 3
};

/**
 * Defines brewery types.
 */
var BREWERY_TYPE = {
  Commercial: 1,
  Microbrewery: 2,
  Brewpub: 3,
  ClientBrewer: 4
};

/**
 * Defines roles.
 */
var ROLE = {
  Anonymous: 0,
  Member: 1,
  Editor: 2,
  Supervisor: 3
};

/**
 * Defines user states.
 */
var USER_STATE = {
  Deleted: 0,
  Draft: 1,
  Active: 2,
  Suspended: 3,
  Removed: 4
};

/**
 * Defines beer type states.
 */
var BEER_TYPE_STATE = {
  Deleted: 0,
  Draft: 1,
  Active: 2,
  Suspended: 3
};

/**
 * Defines malt states.
 */
var MALT_STATE = {
  Deleted: 0,
  Draft: 1,
  Active: 2,
  Suspended: 3
};

/**
 * Defines yeast states.
 */
var YEAST_STATE = {
  Deleted: 0,
  Draft: 1,
  Active: 2,
  Suspended: 3
};

/**
 * Defines hop states.
 */
var HOP_STATE = {
  Deleted: 0,
  Draft: 1,
  Active: 2,
  Suspended: 3
};

/**
 * Defines brewery states.
 */
var BREWERY_STATE = {
  Deleted: 0,
  Draft: 1,
  Active: 2,
  Suspended: 3
};

/**
 * Defines beer states.
 */
var BEER_STATE = {
  Deleted: 0,
  Draft: 1,
  Active: 2,
  Suspended: 3
};

/**
 * Defines search targets.
 */
var SEARCH_TARGET = {
  Beer: 0,
  Brewery: 1
};

/**
 * Registry of view URLs.
 */
var URLS = {
  Root: '/',
  Home: '/home',
  About: '/about',
  NotFound: '/not-found',
  Account: {
    Home: '/account',
    Register: '/account/register',
    ConfirmRegistration: '/account/confirm-registration/:code/:token',
    ForgottenPassword: '/account/forgotten-password',
    NewPassword: '/account/new-password/:code/:token',
    Edit: '/account/edit',
    ChangePassword: '/account/change-password',
    ChangeEmail: '/account/change-email',
    ConfirmEmail: '/account/confirm-email/:code/:token'
  },
  Beer: {
    Home: '/beers',
    Search: '/beers/search',
    Show: '/beers/:key'
  },
  Brewery: {
    Home: '/breweries',
    Search: '/breweries/search',
    Show: '/breweries/:key'
  },
  Dashboard: {
    Home: '/dashboard',
    MailerTest: '/dashboard/mailer-test',
    ModelDefinitions: '/dashboard/model-definitions',
    SystemInfo: '/dashboard/system-info',
    Malt: {
      List: '/dashboard/malts',
      Create: '/dashboard/malts/create',
      Show: '/dashboard/malts/:key',
      Edit: '/dashboard/malts/:key/edit',
      ImageUpload: '/dashboard/malts/:key/images',
      ImageShow: '/dashboard/malts/:key/images/:key2',
      ImageEdit: '/dashboard/malts/:key/images/:key2/edit'
    },
    Yeast: {
      List: '/dashboard/yeasts',
      Create: '/dashboard/yeasts/create',
      Show: '/dashboard/yeasts/:key',
      Edit: '/dashboard/yeasts/:key/edit',
      ImageUpload: '/dashboard/yeasts/:key/images',
      ImageShow: '/dashboard/yeasts/:key/images/:key2',
      ImageEdit: '/dashboard/yeasts/:key/images/:key2/edit'
    },
    Hop: {
      List: '/dashboard/hops',
      Create: '/dashboard/hops/create',
      Show: '/dashboard/hops/:key',
      Edit: '/dashboard/hops/:key/edit',
      ImageUpload: '/dashboard/hops/:key/images',
      ImageShow: '/dashboard/hops/:key/images/:key2',
      ImageEdit: '/dashboard/hops/:key/images/:key2/edit'
    },
    Region: {
      List: '/dashboard/regions',
      Create: '/dashboard/regions/create',
      Show: '/dashboard/regions/:key',
      Edit: '/dashboard/regions/:key/edit',
      CountryCreate: '/dashboard/regions/:key/countries',
      CountryShow: '/dashboard/regions/:key/countries/:key2',
      CountryEdit: '/dashboard/regions/:key/countries/:key2/edit',
      ProvinceCreate: '/dashboard/regions/:key/countries/:key2/provinces',
      ProvinceShow: '/dashboard/regions/:key/countries/:key2/provinces/:key3',
      ProvinceEdit: '/dashboard/regions/:key/countries/:key2/provinces/:key3/edit'
    },
    BeerType: {
      List: '/dashboard/beer-types',
      Create: '/dashboard/beer-types/create',
      Show: '/dashboard/beer-types/:key',
      Edit: '/dashboard/beer-types/:key/edit'
    },
    Brewery: {
      List: '/dashboard/breweries',
      Create: '/dashboard/breweries/create',
      Show: '/dashboard/breweries/:key',
      Edit: '/dashboard/breweries/:key/edit',
      ImageUpload: '/dashboard/breweries/:key/images',
      ImageShow: '/dashboard/breweries/:key/images/:key2',
      ImageEdit: '/dashboard/breweries/:key/images/:key2/edit',
      Logo: '/dashboard/breweries/:key/logo'
    },
    Beer: {
      List: '/dashboard/beers',
      Create: '/dashboard/beers/create',
      Show: '/dashboard/beers/:key',
      Edit: '/dashboard/beers/:key/edit',
      ImageUpload: '/dashboard/beers/:key/images',
      ImageShow: '/dashboard/beers/:key/images/:key2',
      ImageEdit: '/dashboard/beers/:key/images/:key2/edit',
      Label: '/dashboard/beers/:key/label'
    },
    User: {
      List: '/dashboard/users',
      Create: '/dashboard/users/create',
      Show: '/dashboard/users/:key',
      Edit: '/dashboard/users/:key/edit',
      Photo: '/dashboard/users/:key/photo'
    }
  }
};

/**
 * Registry of view names.
 */
var VIEWS = {
  Home: 'home.html',
  About: 'about.html',
  NotFound: 'not-found.html',
  Account: {
    Home: "account/index.html",
    Login: 'account/login.html',
    Register: 'account/register.html',
    ConfirmRegistration: 'account/confirm-registration.html',
    ForgottenPassword: 'account/forgotten-password.html',
    NewPassword: 'account/new-password.html',
    Edit: 'account/edit.html',
    ChangePassword: 'account/change-password.html',
    ChangeEmail: 'account/change-email.html',
    ConfirmEmail: 'account/confirm-email.html'
  },
  Beer: {
    Home: 'beers/index.html',
    Search: 'beers/search.html',
    Show: 'beers/show.html'
  },
  Brewery: {
    Home: 'breweries/index.html',
    Search: 'breweries/search.html',
    Show: 'breweries/show.html'
  },
  Dashboard: {
    Home: 'dashboard/index.html',
    MailerTest: 'dashboard/mailer-test.html',
    ModelDefinitions: 'dashboard/model-definitions.html',
    SystemInfo: 'dashboard/system-info.html',
    Malt: {
      List: 'dashboard/malts/index.html',
      Create: 'dashboard/malts/create.html',
      Show: 'dashboard/malts/show.html',
      Edit: 'dashboard/malts/edit.html',
      Delete: 'dashboard/malts/delete.html',
      ImageUpload: 'dashboard/malts/image-upload.html',
      ImageShow: 'dashboard/malts/image-show.html',
      ImageEdit: 'dashboard/malts/image-edit.html',
      ImageDelete: 'dashboard/malts/image-delete.html'
    },
    Yeast: {
      List: 'dashboard/yeasts/index.html',
      Create: 'dashboard/yeasts/create.html',
      Show: 'dashboard/yeasts/show.html',
      Edit: 'dashboard/yeasts/edit.html',
      Delete: 'dashboard/yeasts/delete.html',
      ImageUpload: 'dashboard/yeasts/image-upload.html',
      ImageShow: 'dashboard/yeasts/image-show.html',
      ImageEdit: 'dashboard/yeasts/image-edit.html',
      ImageDelete: 'dashboard/yeasts/image-delete.html'
    },
    Hop: {
      List: 'dashboard/hops/index.html',
      Create: 'dashboard/hops/create.html',
      Show: 'dashboard/hops/show.html',
      Edit: 'dashboard/hops/edit.html',
      Delete: 'dashboard/hops/delete.html',
      ImageUpload: 'dashboard/hops/image-upload.html',
      ImageShow: 'dashboard/hops/image-show.html',
      ImageEdit: 'dashboard/hops/image-edit.html',
      ImageDelete: 'dashboard/hops/image-delete.html'
    },
    Region: {
      List: 'dashboard/regions/index.html',
      Create: 'dashboard/regions/create.html',
      Show: 'dashboard/regions/show.html',
      Edit: 'dashboard/regions/edit.html',
      Delete: 'dashboard/regions/delete.html',
      CountryCreate: 'dashboard/regions/country-create.html',
      CountryShow: 'dashboard/regions/country-show.html',
      CountryEdit: 'dashboard/regions/country-edit.html',
      CountryDelete: 'dashboard/regions/country-delete.html',
      ProvinceCreate: 'dashboard/regions/province-create.html',
      ProvinceShow: 'dashboard/regions/province-show.html',
      ProvinceEdit: 'dashboard/regions/province-edit.html',
      ProvinceDelete: 'dashboard/regions/province-delete.html'
    },
    BeerType: {
      List: 'dashboard/beer-types/index.html',
      Create: 'dashboard/beer-types/create.html',
      Show: 'dashboard/beer-types/show.html',
      Edit: 'dashboard/beer-types/edit.html',
      Delete: 'dashboard/beer-types/delete.html'
    },
    Brewery: {
      List: 'dashboard/breweries/index.html',
      Create: 'dashboard/breweries/create.html',
      Show: 'dashboard/breweries/show.html',
      Edit: 'dashboard/breweries/edit.html',
      Delete: 'dashboard/breweries/delete.html',
      ImageUpload: 'dashboard/breweries/image-upload.html',
      ImageShow: 'dashboard/breweries/image-show.html',
      ImageEdit: 'dashboard/breweries/image-edit.html',
      ImageDelete: 'dashboard/breweries/image-delete.html',
      Logo: 'dashboard/breweries/logo.html',
      LogoDelete: 'dashboard/breweries/logo-delete.html'
    },
    Beer: {
      List: 'dashboard/beers/index.html',
      Create: 'dashboard/beers/create.html',
      Show: 'dashboard/beers/show.html',
      Edit: 'dashboard/beers/edit.html',
      Delete: 'dashboard/beers/delete.html',
      ImageUpload: 'dashboard/beers/image-upload.html',
      ImageShow: 'dashboard/beers/image-show.html',
      ImageEdit: 'dashboard/beers/image-edit.html',
      ImageDelete: 'dashboard/beers/image-delete.html',
      Label: 'dashboard/beers/label.html',
      LabelDelete: 'dashboard/beers/label-delete.html'
    },
    User: {
      List: 'dashboard/users/index.html',
      Create: 'dashboard/users/create.html',
      Show: 'dashboard/users/show.html',
      Edit: 'dashboard/users/edit.html',
      Delete: 'dashboard/users/delete.html',
      Photo: 'dashboard/users/photo.html',
      PhotoDelete: 'dashboard/users/photo-delete.html'
    }
  },
  Shared: {
    ChooseRegion: 'shared/choose-region.html',
    ChooseBrewery: 'shared/choose-brewery.html',
    ChooseBeerType: 'shared/choose-beer-type.html',
    ChooseMalts: 'shared/choose-malts.html',
    ChooseYeasts: 'shared/choose-yeasts.html',
    ChooseHops: 'shared/choose-hops.html'
  },
  Directives: {
    AccountToolbar: 'directives/account-toolbar.html',
    SearchToolbar: 'directives/search-toolbar.html',
    Storage: {
      ImageOnly: 'directives/storage/image-only.html',
      ImageLink: 'directives/storage/image-link.html'
    }
  }
};

/**
 * Definition of the app module.
 */
(function () {
  'use strict';

  console.log('=> Starting application...');

  // Create the module and define its dependencies.
  angular.module(MODULES.App, [

    // Angular modules
    'ngRoute',
    'ngSanitize',
    'ngAnimate',

    // 3rd Party Modules
    MODULES.Restangular,

    // Custom modules
    MODULES.CommonTemplates,
    MODULES.Directives,
    MODULES.Filters,
    MODULES.Services.Base,
    MODULES.Services.Http,
    MODULES.Services.Logging,
    MODULES.Services.Repository,
    MODULES.Services.Security,
    MODULES.Services.Shared,
    MODULES.Root
  ])

  /**
   * Execute configuring code before module loading.
   */
  .config([
    '$locationProvider', '$routeProvider', 'RestangularProvider',
    function ($locationProvider, $routeProvider, RestangularProvider) {
      console.log('Configuring ' + MODULES.App + '...');

      // Configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
      $routeProvider.otherwise({
        redirectTo: '/not-found'
      });

      // Configure Restangular service.
      RestangularProvider.setBaseUrl(API.Root);
    }
  ])

  /**
   * Execute bootstrapping code and any dependencies.
   */
  .run(
    function() {
      console.log('=> Application has started.');
    }
  );
})();

/**
 * Definition of the directives module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Directives, [
    // Angular modules
    // 3rd Party Modules
    // Custom modules
  ])

  /**
   * Execute bootstrapping code and any dependencies.
   */
  .run(function() {
    console.log('Applying ' + MODULES.Directives + '...');
  });
})();

/**
 * The accountToolbar directive is a reusable widget
 * that can show login or logout buttons and
 * information about the current authenticated user.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'accountToolbar';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['Security', fnDirective]
  );

  /**
   * Account toolbar component.
   * Usage:
   *
   * Creates:
   *
   * @param Security
   * @returns {{
   *    templateUrl: string,
   *    restrict: string,
   *    replace: boolean,
   *    scope: boolean,
   *    link: function
   * }}
   */
  function fnDirective(Security) {

    var directive = {
      templateUrl: VIEWS.Directives.AccountToolbar,
      restrict: 'A',
      replace: true,
      scope: true,
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink($scope) {

      $scope.isAuthenticated = Security.isAuthenticated;
      $scope.login = Security.showLogin;
      $scope.logout = Security.logout;

      $scope.$watch(function () {
        return Security.currentUser;
      }, function (currentUser) {
        $scope.currentUser = currentUser;
      });
    }

    //endregion
  }

})();

/**
 * File uploader component.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'fileUpload';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['uuid', 'fileSender', fnDirective]
  );

  /**
   * File uploader component.
   * Usage:
   *
   * Creates:
   *
   * @param uuid
   * @param fileSender
   * @returns {{
   *    restrict: string,
   *    replace: boolean,
   *    scope: {
   *        chooseFileButtonText: string,
   *        chooseFileButtonStyle: string,
   *        uploadFileButtonText: string,
   *        uploadFileButtonStyle: string,
   *        uploadFileButtonId: string,
   *        uploadUrl: string,
   *        maxFiles: string,
   *        maxFileSizeMb: string,
   *        autoUpload: string,
   *        onFileChosen: string,
   *        getUploadUrl: string,
   *        getAdditionalData: string,
   *        onProgress: string,
   *        onDone: string,
   *        onError: string
   *    },
   *    template: string,
   *    compile: compile
   * }}
   */
  function fnDirective(uuid, fileSender) {

    var directive = {
      restrict: 'E',
      replace: true,
      scope: {
        chooseFileButtonText: '@',
        chooseFileButtonStyle: '@',
        uploadFileButtonText: '@',
        uploadFileButtonStyle: '@',
        uploadFileButtonId: '@',
        uploadUrl: '@',
        maxFiles: '@',
        maxFileSizeMb: '@',
        autoUpload: '@',
        onFileChosen: '&',
        getUploadUrl: '&',
        getAdditionalData: '&',
        onProgress: '&',
        onDone: '&',
        onError: '&'
      },
      template: '<span>' +
        '<a class="{{ chooseFileButtonStyle }}" ng-click="choose()">{{chooseFileButtonText}}</a>' +
        '&nbsp;<button class="{{ uploadFileButtonStyle }}" ng-show="showUploadButton" ng-click="upload()">{{uploadFileButtonText}}</button>' +
        '<input type="file" style="opacity:0;display:inline;width:0" />' +
        '</span>',
      compile: fnCompile
    };

    return directive;

    //region Public methods

    function fnCompile(tElement, tAttrs, transclude) {
      var fileLabel = angular.element(tElement.children()[0]);
      var fileButton = angular.element(tElement.children()[1]);
      var fileInput = angular.element(tElement.children()[2]);

      if (!tAttrs.chooseFileButtonStyle) {
        tAttrs.chooseFileButtonStyle = 'lvl-choose-button';
      }

      if (!tAttrs.uploadFileButtonStyle) {
        tAttrs.uploadFileButtonStyle = 'lvl-upload-button';
      }
      if (tAttrs.uploadFileButtonId) {
        fileButton.attr("id", tAttrs.uploadFileButtonId);
        fileButton.css("display", "none");
      }

      if (!tAttrs.maxFiles || tAttrs.maxFiles < 2) {
        tAttrs.maxFiles = 1;
        fileInput.removeAttr("multiple")
      } else {
        fileInput.attr("multiple", "multiple");
      }

      if (!tAttrs.maxFileSizeMb) {
        tAttrs.maxFileSizeMb = 50;
      }

      var fileId = uuid.new();
      fileInput.attr("id", fileId);
      fileLabel.attr("for", fileId);

      return function postLink(scope, el, attrs, ctl) {
        scope.files = [];
        scope.showUploadButton = false;
        var useUploadButton = !attrs.uploadFileButtonId

        el.bind('change', function (e) {
          scope.files = [];

          if (!e.target.files.length) {
            propagate();
            return;
          }

          var tooBig = [];
          if (e.target.files.length > scope.maxFiles) {
            raiseError(e.target.files, 'TOO_MANY_FILES', "Cannot upload " + e.target.files.length + " files, maxium allowed is " + scope.maxFiles);
            return;
          }

          for (var i = 0; i < scope.maxFiles; i++) {
            if (i >= e.target.files.length) break;

            var file = e.target.files[i];
            scope.files.push(file);

            if (file.size > scope.maxFileSizeMb * 1048576) {
              tooBig.push(file);
            }
          }

          if (tooBig.length > 0) {
            raiseError(tooBig, 'MAX_SIZE_EXCEEDED', "Files are larger than the specified max (" + scope.maxFileSizeMb + "MB)");
            return;
          }

          propagate();
        });

        function propagate(enabled) {
          enabled = enabled || true;
          var autoUpload = scope.autoUpload && scope.autoUpload.toLowerCase() == 'true';
          var show = useUploadButton && !autoUpload && scope.files.length;

          scope.$apply(function () {
            scope.showUploadButton = show;
            if (scope.onFileChosen) {
              scope.onFileChosen({ files: scope.files });
            }
          });

          if (autoUpload && enabled) {
            scope.upload();
          }
        }

        scope.choose = function () {
          fileInput.click();
        };

        scope.upload = function () {
          var uploadUrl = scope.uploadUrl ? scope.uploadUrl : scope.getUploadUrl();
          if (!uploadUrl) {
            scope.onError({ files: [], type: 'UPLOAD_ERROR', msg: 'Missing upload URL.' });
            return;
          }
          var data = null;
          if (scope.getAdditionalData) {
            data = scope.getAdditionalData();
          }

          if (angular.version.major <= 1 && angular.version.minor < 2) {
            // O.older versions of angular's q-service don't have a notify callback.
            // Pass the onProgress callback into the service.
            fileSender
              .post(scope.files, data, function (complete) { scope.onProgress({ percentDone: complete }); })
              .to(uploadUrl)
              .then(function (ret) {
                success(ret);
              }, function (error) {
                scope.onError({ files: scope.files, type: 'UPLOAD_ERROR', msg: error });
              })
          } else {
            fileSender
              .post(scope.files, data)
              .to(uploadUrl)
              .then(function (ret) {
                success(ret);
              }, function (error) {
                scope.onError({ files: scope.files, type: 'UPLOAD_ERROR', msg: error });
              }, function (progress) {
                scope.onProgress({ percentDone: progress });
              });
          }

          resetFileInput();
        };

        function success(ret) {
          scope.files = [];
          if (scope.onFileChosen) {
            scope.onFileChosen({ files: scope.files });
          }
          scope.onDone({ files: ret.files, data: ret.data });
        }

        function raiseError(files, type, msg) {
          propagate(false);
          scope.onError({ files: files, type: type, msg: msg });
          resetFileInput();
        }

        function resetFileInput() {
          //var parent = fileInput.parent();
          scope.showUploadButton = false;

          fileInput.remove();
          var input = document.createElement("input");
          var attr = document.createAttribute("type");
          attr.value = "file";
          input.setAttributeNode(attr);

          var inputId = uuid.new();
          attr = document.createAttribute("id");
          attr.value = inputId;
          input.setAttributeNode(attr);

          attr = document.createAttribute("style");
          attr.value = "opacity:0;display:inline;width:0";
          input.setAttributeNode(attr);

          if (scope.maxFiles > 1) {
            attr = document.createAttribute("multiple");
            attr.value = "multiple";
            input.setAttributeNode(attr);
          }

          fileButton.after(input);
          fileLabel.attr("for", inputId);

          fileInput = angular.element(input);
        }
      }
    }

    //endregion
  }

})();

/**
 * Menu path (breadcrumbs) component.
 */
(function() {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'menuPath';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$compile', fnDirective]
  );

  /**
   * Menu path (breadcrumbs) component.
   * Usage:
   *
   * Creates:
   *
   * @param $compile
   * @returns {{
   *    restrict: string,
   *    link: function
   * }}
   */
  function fnDirective($compile) {

    var directive = {
      restrict: 'A',
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs) {

      scope.$watch(attrs.menuPath, function (value) {
        build(value);
      });

      function build(items) {
        var html = '',
          container = element[0]
        container.innerHTML = ''
        ;
        if (!items || !items.length) {
          return;
        }
        for (var i = 0; i < items.length; i++) {
          if (i > 0) {
            // Not first item.
            html += ' ● ';
          }
          if (i + 1 == items.length) {
            // Last item.
            html += '<span>' + items[i].name + '</span>';
          } else {
            // Not last item.
            html += '<a class="menu-path-item" href="' + items[i].href + '">' + items[i].name + '</a>';
          }
        }
        var path = $compile(html)(scope);
        path.appendTo(container);
      }
    }

    //endregion
  }

})();
/**
 * Date input element.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'moDateInput';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$window', directiveFn]
  );

  /**
   * Date input element.
   * Usage:
   *
   * Creates:
   *
   * @param $window
   * @returns {{restrict: string, require: string, link: link}}
   */
  function directiveFn($window) {

    var directive = {
      restrict: 'A',
      require: '^ngModel',
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs, ctrls) {

      var moment = $window.moment;
      var dateFormat = 'LLLL';
      attrs.$observe('moDateInput', function (newValue) {
        if (dateFormat == newValue) return;
        dateFormat = newValue;
        ctrl.$modelValue = new Date(ctrl.$setViewValue);
      });

      ctrl.$formatters.unshift(function (modelValue) {
        scope = scope;
        if (!dateFormat || !modelValue) return "";
        var retVal = moment(modelValue).format(dateFormat);
        return retVal;
      });

      ctrl.$parsers.unshift(function (viewValue) {
        scope = scope;
        var date = moment(viewValue, dateFormat);
        return (date && date.isValid() && date.year() > 1950) ? date.toDate() : "";
      });
    }

    //endregion
  }

})();

/**
 * The searchToolbar directive is a reusable widget
 * that provides search actions.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'searchToolbar';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['Search', '$window', fnDirective]
  );

  /**
   * Search toolbar component.
   * Usage:
   *    <search-toolbar target="beer|brewery"></search-toolbar>
   * Creates:
   *
   * @param Security
   * @returns {{
   *    templateUrl: string,
   *    restrict: string,
   *    replace: boolean,
   *    scope: boolean,
   *    link: function
   * }}
   */
  function fnDirective(Search, $window) {

    var directive = {
      templateUrl: VIEWS.Directives.SearchToolbar,
      restrict: 'E',
      replace: true,
      scope: true,
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs) {

      var target = getTarget(attrs.target || 'beers');
      var phrase = element.find(':text')[0];
      var button = element.find(':button')[1];

      phrase.value = Search.getPhrase();

      element.find('li').click(function() {
        target = getTarget($(this).data('target'));
      });

      button.onclick = function() {
        Search.search(target, phrase.value);
      };

      if (phrase.value) {
        button.click();
      }

      function getTarget(code) {
        switch (code) {
          case 'brewery':
            setTargetName('Sörfőzde');
            return SEARCH_TARGET.Brewery;
          default:
            setTargetName('Sör');
            return SEARCH_TARGET.Beer;
        }
      }

      function setTargetName(name) {
        element.find('.input-group-addon')[0].textContent = name + ':';
      }
    }

    //endregion
  }

})();

/**
 * Sort column directive.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'sortColumn';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$compile', fnDirective]
  );

  /**
   * Sort column directive.
   * Usage:
   *      <th sort-column="columnName">...</th>
   *      <th sort-column="-columnName">...</th>
   *      <th sort-column="mySettings.columnName">...</th>
   *      <th sort-column="-mySettings.columnName">...</th>
   * Creates:
   *
   * @param $compile
   * @returns {{restrict: string, link: link}}
   */
  function fnDirective($compile) {

    var directive = {
      restrict: 'A',
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs) {

      var name = 'settings',
        column = attrs.sortColumn,
        th = element[0],
        desc = false,
        settings, dot;

      // Handle reverse order.
      if (column[0] === '-') {
        column = column.slice(1);
        desc = true;
      }

      // Handle custom settings.
      dot = column.indexOf('.');
      if (dot > 0) {
        name = column.substr(0, dot);
        column = column.substr(dot + 1);
      }
      settings = scope[name];

      // Add list header CSS handler to scope.
      if (!scope.sortClass) {
        scope.sortClass = function (column) {
          return column === settings.sortColumn &&
            'sort-' + (settings.sortDesc ? 'desc' : 'asc');
        };
      }

      // Rebuild list header.
      var htmlText = "<th ng-class='sortClass(\"" + column + "\")'>" +
        "<a class='sort-text'>" + th.textContent + "</a></th>";
      var newEl = $compile(htmlText)(scope)[0];

      th.innerHTML = '';
      th.appendChild(newEl);

      // Define list sort manager.
      function sortChange() {
        if (settings.sortColumn === column) {
          settings.sortDesc = !settings.sortDesc;
        } else {
          settings.sortColumn = column;
          settings.sortDesc = desc;
        }
        scope[settings.sortFunction || 'changeSort']();
      };

      // Invoke sort manager by clicking on text.
      element.bind('click', sortChange);
    }

    //endregion
  }

})();
/**
 * An image element with optional link.
 * The image is retrieved from the storage server.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'ksAvatar';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$compile', 'Configuration', fnDirective]
  );

  /**
   * An image element with optional link.
   * Usage:
   *      <ks-avatar code="CODE"></ks-avatar>
   *    or
   *      <ks-avatar code="CODE" action="show(CODE)"></ks-avatar>
   * Creates:
   *      <img ng-src="/path-to-avatars/CODE" alt="" class="img-circle">
   *    or
   *      <a href="" ng-click="show(CODE)">
   *        <img ng-src="/path-to-avatars/CODE" alt="" class="img-circle">
   *      </a>
   * @param $compile
   * @param Configuration
   * @returns {{
   *    restrict: string,
   *    scope: {
   *        action: string
   *    },
   *    link: function
   * }}
   */
  function fnDirective($compile, Configuration) {

    var directive = {
      restrict: 'E',
      scope: {
        action: '&'
      },
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs) {

      // Observe changes to interpolated attribute.
      attrs.$observe('code', function(value) {
        var template = Configuration.getTemplate('avatar', value, 'img-circle', attrs.action);
        element.html(template);
        $compile(element.contents())(scope);
      });
    }

    //endregion
  }

})();

/**
 * An image element with optional link.
 * The image is retrieved from the storage server.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'ksImage';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$compile', 'Configuration', fnDirective]
  );

  /**
   * An image element with optional link.
   * Usage:
   *      <ks-image code="CODE"></ks-image>
   *    or
   *      <ks-image code="CODE" action="show(CODE)"></ks-image>
   * Creates:
   *      <img ng-src="/path-to-images/CODE" alt="" class="img-rounded">
   *    or
   *      <a href="" ng-click="show(CODE)">
   *        <img ng-src="/path-to-images/CODE" alt="" class="img-rounded">
   *      </a>
   * @param $compile
   * @param Configuration
   * @returns {{
   *    restrict: string,
   *    scope: {
   *        action: string
   *    },
   *    link: function
   * }}
   */
  function fnDirective($compile, Configuration) {

    var directive = {
      restrict: 'E',
      scope: {
        action: '&'
      },
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs) {

      // Observe changes to interpolated attribute.
      attrs.$observe('code', function(value) {
        var template = Configuration.getTemplate('image', value, 'img-rounded', attrs.action);
        element.html(template);
        $compile(element.contents())(scope);
      });
    }

    //endregion
  }

})();

/**
 * An image element with optional link.
 * The image is retrieved from the storage server.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'ksLabel';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$compile', 'Configuration', fnDirective]
  );

  /**
   * An image element with optional link.
   * Usage:
   *      <ks-label code="CODE"></ks-label>
   *    or
   *      <ks-label code="CODE" action="show(CODE)"></ks-label>
   * Creates:
   *      <img ng-src="/path-to-labels/CODE" alt="" class="img-rounded">
   *    or
   *      <a href="" ng-click="show(CODE)">
   *        <img ng-src="/path-to-labels/CODE" alt="" class="img-rounded">
   *      </a>
   * @param $compile
   * @param Configuration
   * @returns {{
   *    restrict: string,
   *    scope: {
   *        action: string
   *    },
   *    link: function
   * }}
   */
  function fnDirective($compile, Configuration) {

    var directive = {
      restrict: 'E',
      scope: {
        action: '&'
      },
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs) {

      // Observe changes to interpolated attribute.
      attrs.$observe('code', function(value) {
        var template = Configuration.getTemplate('label', value, 'img-rounded', attrs.action);
        element.html(template);
        $compile(element.contents())(scope);
      });
    }

    //endregion
  }

})();

/**
 * An image element with optional link.
 * The image is retrieved from the storage server.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'ksPhoto';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$compile', 'Configuration', fnDirective]
  );

  /**
   * An image element with optional link.
   * Usage:
   *      <ks-photo code="CODE"></ks-photo>
   *    or
   *      <ks-photo code="CODE" action="show(CODE)"></ks-photo>
   * Creates:
   *      <img ng-src="/path-to-photos/CODE" alt="" class="img-rounded">
   *    or
   *      <a href="" ng-click="show(CODE)">
   *        <img ng-src="/path-to-photos/CODE" alt="" class="img-rounded">
   *      </a>
   * @param $compile
   * @param Configuration
   * @returns {{
   *    restrict: string,
   *    scope: {
   *        action: string
   *    },
   *    link: function
   * }}
   */
  function fnDirective($compile, Configuration) {

    var directive = {
      restrict: 'E',
      scope: {
        action: '&'
      },
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs) {

      // Observe changes to interpolated attribute.
      attrs.$observe('code', function(value) {
        var template = Configuration.getTemplate('photo', value, 'img-rounded', attrs.action);
        element.html(template);
        $compile(element.contents())(scope);
      });
    }

    //endregion
  }

})();

/**
 * An image element with optional link.
 * The image is retrieved from the storage server.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'ksThumbnail';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$compile', 'Configuration', fnDirective]
  );

  /**
   * An image element with optional link.
   * Usage:
   *      <ks-thumbnail code="CODE"></ks-thumbnail>
   *    or
   *      <ks-thumbnail code="CODE" action="show(CODE)"></ks-thumbnail>
   *    or
   *      <ks-thumbnail default="imageType" code="CODE"></ks-thumbnail>
   * Creates:
   *      <img ng-src="/path-to-thumbnails/CODE" alt="" class="img-thumbnail">
   *    or
   *      <a href="" ng-click="show(CODE)">
   *        <img ng-src="/path-to-thumbnails/CODE" alt="" class="img-thumbnail">
   *      </a>
   *    or
   *      <img ng-src="/images/default-thumbnail" alt="" class="img-thumbnail">
   * Valid values of default attribute:
   *    label
   * @param $compile
   * @param Configuration
   * @returns {{
   *    restrict: string,
   *    scope: {
   *        action: string
   *    },
   *    link: function
   * }}
   */
  function fnDirective($compile, Configuration) {

    var directive = {
      restrict: 'E',
      scope: {
        action: '&'
      },
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs) {

      // Observe changes to interpolated attribute.
      attrs.$observe('code', function(value) {
        var template = '';
        if (value) {
          template = Configuration.getTemplate('thumbnail', value, 'img-thumbnail', attrs.action);
        } else if (attrs.default) {
          switch (attrs.default) {
            case 'label':
              template = Configuration.getDefaultTemplate(attrs.default, 100, 'img-thumbnail', attrs.action);
              break;
            default:
          }
        }
        if (template) {
          element.html(template);
          $compile(element.contents())(scope);
        }
      });
    }

    //endregion
  }

})();

/**
 * Validation form attribute.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'validationForm';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    fnDirective
  );

  /**
   * Validation form attribute.
   * Usage:
   *
   * Creates:
   *
   * @returns {{
   *    restrict: string,
   *    scope: boolean,
   *    controller: function,
   *    link: function
   * }}
   */
  function fnDirective() {

    var directive = {
      restrict: 'A',
      scope: true,
      controller: fnController,
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnController($scope, $element, $attrs) {

      var self = this;
      self.formComponents = {};

      self.registerFormComponent = function (name, ngModel) {
        self.formComponents[name] = ngModel;
      };

      self.hasFormComponent = function (name) {
        return self.formComponents[name] !== undefined;
      };

      self.getFormComponent = function (name) {
        return self.formComponents[name];
      };

      self.resetServerValidity = function () {
        angular.forEach(self.formComponents, function (component) {
          component.$setValidity('server', true);
        });
      };

      self.compareFormComponents = function (targetName, sourceName) {
        var target = self.getFormComponent(targetName),
            source = self.getFormComponent(sourceName);
        if (target.$dirty && target.$valid && source.$dirty) {
          source.$setValidity('compare', target.$modelValue === source.$modelValue);
        } else {
          source.$setValidity('compare', true);
        }
      };
    }

    function fnLink(scope, element, attrs, ctrl) {

      attrs.$set('name', attrs.validationForm || 'form');
      attrs.$set('novalidate', '');

      // Listen to server errors.
      scope.$watch('serverErrors', function (serverErrors) {
        if (!serverErrors) {
          return;
        }

        ctrl.resetServerValidity();

        for (var componentName in serverErrors) {
          if (ctrl.hasFormComponent(componentName)) {
            ctrl.getFormComponent(componentName).$setValidity('server', false);
          }
        }
      });
    }

    //endregion
  }

})();

/**
 * Validation source attribute.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'validationSource';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$i18next', fnDirective]
  );

  /**
   * Validation source attribute.
   * Usage:
   *
   * Creates:
   *
   * @param $i18next
   * @returns {{
   *    restrict: string,
   *    require: string[],
   *    compile: function
   * }}
   */
  function fnDirective($i18next) {

    var directive = {
      restrict: 'A',
      require: [
        '^validationForm',
        'ngModel'
      ],
      compile: fnCompile
    };

    return directive;

    //region Public methods

    function fnCompile(tElement, tAttrs) {

      var element = tElement[0],
          last = element,
          model = tAttrs.ngModel,
          source = (tAttrs.validationSource || 'form') + '.' + tAttrs.name,
          validationList = [],
          i;

      // Gather validation directives.
      for (i = 0; i < element.attributes.length; i++) {
        var name = element.attributes[i].name;
        switch (name) {
          case 'required':
            validationList.push(name);
            break;
          case 'ng-maxlength':
          case 'ng-minlength':
          case 'ng-max':
          case 'ng-min':
          case 'ng-pattern':
          case 'ng-email':
            validationList.push(name.substr(3));
            break;
          case 'compare-to':
            validationList.push('compare');
            break;
          default:
            if (name.indexOf('unique-') === 0) {
              validationList.push('unique');
            }
        }
      }

      // Find message namespace.
      var ns = '';
      var form = element;
      do {
        form = form.parentElement;
      } while (form && !form.hasAttribute('validation-form'));
      if (form && form.hasAttribute('validation-form')) {
        ns = form.attributes['validation-form'].value;
        if (ns) ns += ':';
      }

      // Create client validation error messages.
      for (i = 0; i < validationList.length; i++) {
        var validation = validationList[i];
        var condition = '§.$dirty && §.$invalid && §.$error.@'.replace(/§/g, source).replace(/@/, validation);
        var error = document.createElement('span');
        error.setAttribute('class', 'help-block');
        error.setAttribute('ng-show', condition);
        error.textContent = $i18next(ns + model + '.' + validation);
        element.parentNode.insertBefore(error, last.nextSibling);
        last = error;
      }

      // Create server validation error messages.
      var server = document.createElement('span');
      server.setAttribute('class', 'help-block');
      server.setAttribute('ng-show', source + '.$error.server');
      server.setAttribute('ng-repeat', "msg in serverErrors['" + model + "']");
      server.textContent = "{{ msg | i18next }}";
      element.parentNode.insertBefore(server, last.nextSibling);

      // Return the linking function.
      return function (scope, element, attrs, ctrls) {
        var formCtrl = ctrls[0];
        var ngModel = ctrls[1];

        // Register the component.
        formCtrl.registerFormComponent(attrs.ngModel, ngModel);

        // Clear server errors on change.
        element.bind('blur keyup change', function () {
          ngModel.$setValidity('server', true);
        });

        // Find group container.
        var formGroup = element;
        do {
          formGroup = formGroup.parent();
        } while (formGroup && !formGroup.hasClass('form-group'));

        // Apply validation style for error.
        if (formGroup) {
          scope.$watch(
            function () {
              return ngModel.$dirty && ngModel.$invalid;
            },
            // This is the change handler
            function (newValue, oldValue) {
              if (newValue !== oldValue) {
                //alert('has-error: ' + newValue);
                if (newValue)
                  formGroup.addClass('has-error');
                else
                  formGroup.removeClass('has-error');
              }
            }
          );
        }
      };
    }

    //endregion
  }

})();

/**
 * YouTube player element.
 * See: https://github.com/poxrud/youtube-directive-example
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'youtube';

  //region Constants

  // Define YouTube player events.
  angular.module(MODULES.Directives)
  .constant(
    'YT_event',
    {
      STOP: 0,
      PLAY: 1,
      PAUSE: 2,
      STATUS_CHANGE: 3
    }
  );

  //endregion

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    ['$window', 'YT_event', fnDirective]
  );

  /**
   * YouTube player element.
   * Usage:
   *
   * Creates:
   *
   * @param $window
   * @param YT_event
   * @returns {{
   *    restrict: string,
   *    scope: {
   *        height: string,
   *        width: string,
   *        videoid: string
   *    },
   *    template: string,
   *    link: function
   * }}
   */
  function fnDirective($window, YT_event) {

    var directive = {
      restrict: "E",
      scope: {
        height: "@",
        width: "@",
        videoid: "@"
      },
      template: '<div></div>',
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs, $rootScope) {

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      $window.onYouTubeIframeAPIReady = function() {

        player = new YT.Player(element.children()[0], {
          playerVars: {
            autoplay: 0,
            html5: 1,
            theme: "light",
            modesbranding: 0,
            color: "white",
            iv_load_policy: 3,
            showinfo: 1,
            controls: 1
          },

          height: scope.height,
          width: scope.width,
          videoId: scope.videoid,

          events: {
            'onStateChange': function(event) {

              var message = {
                event: YT_event.STATUS_CHANGE,
                data: ""
              };

              switch(event.data) {
                case YT.PlayerState.PLAYING:
                  message.data = "PLAYING";
                  break;
                case YT.PlayerState.ENDED:
                  message.data = "ENDED";
                  break;
                case YT.PlayerState.UNSTARTED:
                  message.data = "NOT PLAYING";
                  break;
                case YT.PlayerState.PAUSED:
                  message.data = "PAUSED";
                  break;
              }

              scope.$apply(function() {
                scope.$emit(message.event, message.data);
              });
            }
          }
        });
      };

      scope.$watch('height + width', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }
        player.setSize(scope.width, scope.height);
      });

      scope.$watch('videoid', function(newValue, oldValue) {
        if (newValue == oldValue) {
          return;
        }
        player.cueVideoById(scope.videoid);
      });

      scope.$on(YT_event.STOP, function () {
        player.seekTo(0);
        player.stopVideo();
      });

      scope.$on(YT_event.PLAY, function () {
        player.playVideo();
      });

      scope.$on(YT_event.PAUSE, function () {
        player.pauseVideo();
      });
    }

    //endregion
  }

})();

/**
 * Comparing validation attribute.
 */
(function () {
  'use strict';

  // Directive name is handy for logging.
  var directiveName = 'compareTo';

  // Define the directive and its dependencies.
  angular.module(MODULES.Directives)
  .directive(
    directiveName,
    fnDirective
  );

  /**
   * Comparing validation attribute.
   * Usage:
   *
   * Creates:
   *
   * @returns {{
   *    restrict: string,
   *    require: string[],
   *    link: function
   * }}
   */
  function fnDirective() {

    var directive = {
      restrict: 'A',
      require: ['^validationForm'],
      link: fnLink
    };

    return directive;

    //region Public methods

    function fnLink(scope, element, attrs, ctrls) {

      var targetName = attrs.compareTo;
      var sourceName = attrs.ngModel;
      var formCtrl = ctrls[0];

      if (formCtrl.hasFormComponent(targetName) && formCtrl.hasFormComponent(sourceName)) {
        scope.$watch(targetName, function () {
          formCtrl.compareFormComponents(targetName, sourceName);
        });
        scope.$watch(sourceName, function () {
          formCtrl.compareFormComponents(targetName, sourceName);
        });
      }
    }

    //endregion
  }

})();

/**
 * Definition of the filters module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Filters, [
    // Angular modules
    // 3rd Party Modules
    // Custom modules
  ])

  /**
   * Execute bootstrapping code and any dependencies.
   */
  .run(function() {
    console.log('Applying ' + MODULES.Filters + '...');
  });
})();

/**
 * Divides a collection into more collections.
 */
(function () {
  'use strict';

  // Filter name is handy for logging.
  var filterName = 'partition';

  // Define the filter and its dependencies.
  angular.module(MODULES.Filters)
  .filter(
    filterName,
    fnFilter
  );

  /**
   * Divides a collection into more collections.
   * Usage:
   *    <div class="row" ng-repeat="rows in table | partition:3">
   *      <div class="span4" ng-repeat="item in rows">{{item}}</div>
   *    </div>
   * Creates:
   *
   * @returns {filter}
   */
  function fnFilter() {

    var cache = {};

    var filter = function(arr, size) {

      if (!arr) { return; }

      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      var arrString = JSON.stringify(arr);

      var fromCache = cache[arrString + size];
      if (JSON.stringify(fromCache) === JSON.stringify(newArr)) {
        return fromCache;
      }
      cache[arrString+size] = newArr;

      return newArr;
    };

    return filter;
  }
})();

/**
 * Controller for main page.
 */
(function () {
  'use strict';

  angular.module(MODULES.App)
  .controller(
    CONTROLLERS.Main,
    ['$scope', 'Messenger', fnController]
  );

  function fnController($scope, Messenger) {

    $scope.notifications = Messenger;

    $scope.removeNotification = function (notification) {
      Messenger.remove(notification);
    };

    $scope.$on('$routeChangeError', function (event, current, previous, rejection) {
      Messenger.errorForCurrentRoute('route.changeError', {}, { rejection: rejection });
    });
  }
})();

angular.module('jm.i18next', ['ng']);

angular.module('jm.i18next').provider('$i18next', function () {

  'use strict';

  var self = this,
    /**
     * This will be our translation function (see code below)
     */
    t = null,
    translations = {},
    globalOptions = null;

  self.options = {};

  self.$get = ['$rootScope', function ($rootScope) {

    function init(options) {

      window.i18n.init(options, function (localize) {

        translations = {};

        t = localize;

        if (!$rootScope.$$phase) {
          $rootScope.$digest();
        }

        $rootScope.$broadcast('i18nextLanguageChange');

      });

    }

    function optionsChange (newOptions, oldOptions) {

      $i18nextTanslate.debugMsg.push(['i18next options changed:', oldOptions, newOptions]);

      globalOptions = newOptions;

      init(globalOptions);

    }

    /**
     * Translates `key` with given options and puts the translation into `translations`.
     * @param {Boolean} hasOwnOptions hasOwnOptions means that we are passing options to
     *                                $i18next so we can't use previous saved translation.
     */
    function translate(key, options, hasOwnOptions) {

      var lng = options.lng || 'auto';

      if (!translations[lng]) {
        translations[lng] = {};
      }

      if (!t) {
        translations[lng][key] = key;
      } else if (!translations[lng][key] || hasOwnOptions) {
        translations[lng][key] = t(key, options);
      }

    }

    function $i18nextTanslate(key, options) {

      var optionsObj = options || {},
        mergedOptions = options ? angular.extend({}, optionsObj, options) : optionsObj;

      translate(key, mergedOptions, !!options);

      return (options && options.lng) ? translations[options.lng][key] :
        !!optionsObj.lng ? translations[optionsObj.lng][key] : translations['auto'][key];

    }

    $i18nextTanslate.debugMsg = [];

    $i18nextTanslate.options = self.options;

    if (self.options !== globalOptions) {
      optionsChange(self.options, globalOptions);
    }

    $rootScope.$watch(function () { return $i18nextTanslate.options; }, function (newOptions, oldOptions) {
      // Check whether there are new options and whether the new options are different from the old options.
      if (!!newOptions && oldOptions !== newOptions) {
        optionsChange(newOptions, oldOptions);
      }
    }, true);

    return $i18nextTanslate;

  }];

});

angular.module('jm.i18next').directive('ngI18next', ['$rootScope', '$i18next', '$compile', '$parse', function ($rootScope, $i18next, $compile, $parse) {

  'use strict';

  function parse(scope, element, key) {

    var attr = 'text',
      attrs = [attr],
      string;

    /*
     * Check if we want to translate an attribute
     */
    if (key.indexOf('[') === 0) {
      var parts = key.split(']');
      key = parts[1];
      attr = parts[0].substr(1, parts[0].length - 1);
    }
    /*
     * Cut of the ";" that might be at the end of the string
     */
    if (key.indexOf(';') === key.length - 1) {
      key = key.substr(0, key.length - 2);
    }
    /*
     * If passing options, split attr
     */
    if (attr.indexOf(':') >= 0) {
      attrs = attr.split(':');
      attr = attrs[0];
    } else if (attr === 'i18next') {
      attrs[1] = 'i18next';
      attr = 'text';
    }

    if (attr !== 'i18next' && attrs[1] !== 'i18next') {

      string = $i18next(key);

    } else {

      var options = {},
        strippedKey = key;

      if (key.indexOf('(') >= 0 && key.indexOf(')') >= 0) {

        var keys = key.split(')');

        keys[0] = keys[0].substr(1, keys[0].length);

        if (keys.length > 2) {

          strippedKey = keys.pop();

          options = $parse(keys.join(')'))();

        } else {

          options = $parse(keys[0])();
          strippedKey = keys[1];

        }

      }

      string = $i18next(strippedKey, options);

    }

    if (attr === 'html') {

      element.empty().append(string);

    } else if (attr === 'text') {

      element.text(string);

    } else {

      element.attr(attr, string);

    }
    /*
     * Now compile the content of the element and bind the variables to
     * the scope
     */
    $compile(element.contents())(scope);

    if (!$rootScope.$$phase) {
      $rootScope.$digest();
    }
  }


  function localize(scope, element, key) {

    if (key.indexOf(';') >= 0) {

      var keys = key.split(';');

      for (var i = 0; i < keys.length; i++) {
        if (keys[i] !== '') {
          parse(scope, element, keys[i]);
        }
      }

    } else {
      parse(scope, element, key);
    }

  }

  return {

    // 'A': only as attribute
    restrict: 'A',

    scope: false,

    link: function postLink(scope, element, attrs) {

      var translationValue;

      function observe (value) {

        if (value === '') {
          translationValue = element.text().replace(/^\s+|\s+$/g, ''); // RegEx removes whitespace
        } else {
          translationValue = value;
        }

        if (!translationValue) {
          // Well, seems that we don't have anything to translate...
          return;
        }

        localize(scope, element, translationValue);

      }

      attrs.$observe('ngI18next', observe);

      observe(attrs.ngI18next);

      scope.$on('i18nextLanguageChange', function () {
        localize(scope, element, translationValue);
      });
    }

  };

}]);

angular.module('jm.i18next').filter('i18next', ['$i18next', function ($i18next) {

  'use strict';

  return function (string, options) {

    return $i18next(string, options);

  };

}]);

/**
 * Definition of the shared services module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  var shared = angular.module(MODULES.Services.Base, [
    // Angular modules
    // 3rd Party Modules
    // Custom modules
  ]);
})();

/**
 * Service to compose URLs.
 */
(function () {
  'use strict';

  // Service name is handy for logging
  var serviceName = 'BuildUrl';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Base)
  .service(
    serviceName,
    fnConstructor
  );

  /**
   * Provide a method to compose URLs.
   * @returns {Function}
   */
  function fnConstructor() {

    // Define the function to reveal.
    return function() {
      var url = '';

      if (arguments.length) {
        var args = Array.prototype.slice.call(arguments);
        url = args.shift();
        var matches = url.match(/(\:\w+)/g);
        if (matches) {
          for (var i = 0; i < matches.length; i++) {
            var param = matches[i];
            var value = (i < args.length) ? args[i] : '--';
            url = url.replace(param, value);
          }
        }
      }
      return url || URLS.Root;
    };
  }

})();

/**
* Service to use storage components.
*/
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'Configuration';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Base)
  .provider(serviceName, fnProvider);

  function fnProvider() {

    var tplImageOnly;
    var tplImageLink;
    var storageBaseUrl;
    var service = {};

    this.Initialize = [
      '$q', 'SystemData', '$templateCache',
      function ($q, SystemData, $templateCache) {

        // Initialize only once.
        if (storageBaseUrl) return true;

        // Initialize the templates of storage components.
        tplImageOnly = $templateCache.get(VIEWS.Directives.Storage.ImageOnly);
        tplImageLink = $templateCache.get(VIEWS.Directives.Storage.ImageLink);

        var deferred = $q.defer();

        // Initialize server dependent parameters.
        SystemData.getConfiguration().then(function (data) {
          service.logger = data.logger;
          service.styles = data.styles;
          // Compose base URL.
          storageBaseUrl = '//' + data.hostName + ':' + data.port + data.path;

          console.log('Application is initialized.');
          deferred.resolve(true);
        }, function (response) {
          deferred.reject(false);
        });

        return deferred.promise;
      }
    ];

    this.$get = [
      '$interpolate',
      function ($interpolate) {

        // Get the template of the required storage element.
        function fnGetTemplate (type, code, css, action) {
          var url = storageBaseUrl + type + '/' + code;
          var html = action ? tplImageLink : tplImageOnly;
          var template = $interpolate(html)({ src: url, css: css });
          return template;
        }

        // Get the default template of the required storage element.
        function fnGetDefaultTemplate (imageType, size, css, action) {
          var url = '/images/default-' + imageType + '-' + size + '.jpg';
          var html = action ? tplImageLink : tplImageOnly;
          var template = $interpolate(html)({ src: url, css: css });
          return template;
        }

        // Define the functions and properties to reveal.
        service.getTemplate = fnGetTemplate;
        service.getDefaultTemplate = fnGetDefaultTemplate;

        return service;
      }
    ];
  }

})();

/**
 * Definition of the HTTP service module.
 * See also: http://www.codelord.net/2014/06/25/generic-error-handling-in-angularjs
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Services.Http, [
    // Angular modules
    // 3rd Party Modules
    // Custom modules
  ])

  /**
   * Execute configuring code before module loading.
   */
  .config([
    '$provide', '$httpProvider', 'Semaphore',
    function ($provide, $httpProvider, Semaphore) {

      $httpProvider.interceptors.push('RequestsErrorHandler');

      // --- Decorate $http to add a special header by default ---
      function addHeaderToConfig(config) {
        config = config || {};
        config.headers = config.headers || {};

        // Add the header unless user asked to handle errors himself
        if (!Semaphore.specificallyHandleInProgress) {
          config.headers[Semaphore.HEADER_NAME] = true;
        }

        return config;
      }

      // The rest here is mostly boilerplate needed to decorate $http safely
      $provide.decorator('$http', [
        '$delegate',
        function($delegate) {
          function decorateRegularCall(method) {
            return function(url, config) {
              return $delegate[method](url, addHeaderToConfig(config));
            };
          }

          function decorateDataCall(method) {
            return function(url, data, config) {
              return $delegate[method](url, data, addHeaderToConfig(config));
            };
          }

          function copyNotOverriddenAttributes(newHttp) {
            for (var attr in $delegate) {
              if (!newHttp.hasOwnProperty(attr)) {
                if (typeof($delegate[attr]) === 'function') {
                  newHttp[attr] = function() {
                    return $delegate.apply($delegate, arguments);
                  };
                } else {
                  newHttp[attr] = $delegate[attr];
                }
              }
            }
          }

          var newHttp = function(config) {
            return $delegate(addHeaderToConfig(config));
          };

          newHttp.get = decorateRegularCall('get');
          newHttp.delete = decorateRegularCall('delete');
          newHttp.head = decorateRegularCall('head');
          newHttp.jsonp = decorateRegularCall('jsonp');
          newHttp.post = decorateDataCall('post');
          newHttp.put = decorateDataCall('put');

          copyNotOverriddenAttributes(newHttp);

          return newHttp;
        }
      ]);
    }
  ]);
})();
/**
 * Service for handling HTTP requests.
 *
 * Making a call that will use the generic handling code:
 *
 * $http.get('some/url').then(
 *   function(response) {
 *     // Stuff here
 *   }
 * );
 *
 * And in cases that require different way to handle errors:
 *
 * RequestsErrorHandler.specificallyHandled(
 *   function() {
 *     $q.all({foo: FooService.fetch(), bar: BarService.fetch()}).then(
 *       function() { // Handle success },
 *       function() { // Handle specific errors }
 *     );
 *   }
 * );
 */
(function () {
  'use strict';

  // Service name is handy for logging
  var serviceName = 'RequestsErrorHandler';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Http)
  .factory(
    serviceName,
    ['$q', '$injector', '$rootScope', 'Semaphore', 'Messenger', 'ApplicationLogging', fnGet]
  );

  /**
   * Provide methods to manipulate HTTP communication.
   * @param $q
   * @param $injector
   * @param Semaphore
   * @param Messenger
   * @returns {{
   *    specificallyHandled: fnSpecificallyHandled,
   *    request: fnRequest,
   *    responseError: fnResponseError
   * }}
   */
  function fnGet($q, $injector, $rootScope, Semaphore, Messenger, ApplicationLogging) {

    // Define the functions and properties to reveal.
    var service = {
      specificallyHandled: fnSpecificallyHandled,
      request: fnRequest,
      responseError: fnResponseError
    };

    // Provide instance.
    return service;

    //region Public Methods

    // --- The user's API for claiming responsiblity for requests ---
    function fnSpecificallyHandled(specificallyHandledBlock) {
      Semaphore.specificallyHandleInProgress = true;
      try {
        return specificallyHandledBlock();
      } finally {
        Semaphore.specificallyHandleInProgress = false;
      }
    }

    // --- Request interceptor for sending authorization ---
    function fnRequest(config) {
      if (config.url.substr(0, 5) === API.Root + '/') {
        var Security = $injector.get('Security');
        if (Security.userToken) {
          config.headers = config.headers || {};
          config.headers.Authorization = 'Bearer ' + Security.userToken;
        }
      }
      return config || $q.when(config);
    }

    // --- Response interceptor for handling errors generically ---
    function fnResponseError(rejection) {
      var logErrorOnServer = true;
      var shouldHandle = (
        rejection &&
        rejection.config &&
        rejection.config.headers &&
        rejection.config.headers[Semaphore.HEADER_NAME]
        );

      if (shouldHandle) {
        // --- Your generic error handling goes here ---

        if (rejection.status === 422) {
          logErrorOnServer = false;
          var ve = rejection.data.error;
          if (ve.data && ve.count) {
            if (ve.data.$error) {
              ve.data.$error.forEach(function (message) {
                Messenger.errorForCurrentRoute(message);
                ve.count--;
              });
              delete ve.data.$error;
            }
            $rootScope.serverErrors = ve.data;
          } else
            Messenger.errorForCurrentRoute(ve.message);
        } else {
          var msg = rejection.status < 500 ? 'http.error4xx' : 'http.error5xx';
          if (rejection.data && rejection.data.error)
            msg = rejection.data.error.message;
          Messenger.errorForCurrentRoute(msg);
        }
      }

      // Send error to server.
      if (logErrorOnServer) {
        var error = {
          method: rejection.config.method,
          url: rejection.config.url,
          message: rejection.data,
          status: rejection.status
        };
        ApplicationLogging.error(JSON.stringify(error));
      }

      return $q.reject(rejection);
    }

    //endregion
  }
})();
/**
 * Define constants and variables for HTTP service.
 */
(function () {
  'use strict';

  // Service name is handy for logging
  var serviceName = 'Semaphore';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Http)
  .constant(
    serviceName,
    {
      HEADER_NAME: 'Krigli-Handle-Errors-Generically',
      specificallyHandleInProgress: false
    }
  );

})();
/**
 * Service to get localized messages.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'LocalizedMessage';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Base)
  .service(
    serviceName,
    ['$interpolate', '$i18next', fnConstructor]
  );

  /**
   * Provide a method to get localized messages.
   * @param $interpolate
   * @param $i18next
   * @returns {Function}
   */
  function fnConstructor($interpolate, $i18next) {

    // Define the function to reveal.
    return function (msgKey, interpolateParams) {

      var msg = $i18next(msgKey);
      if (msg && msg != msgKey) {
        return $interpolate(msg)(interpolateParams);
      } else {
        return '» ' + msgKey + ' «';
      }
    };
  }

})();

/**
 * Definition of the logging services module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Services.Logging, [
    // Angular modules
    // Custom modules
    // 3rd Party Modules
  ])
})();

/**
 * Application logging service to give us a way of logging
 * error / debug statements from the client to the server.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'ApplicationLogging';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Logging)
  .factory(
    serviceName,
    ['$log', '$window', fnGet]
  );

  /**
   *
   * @param $log
   * @param $window
   * @returns {{error: fnError, debug: fnDebug}}
   */
  function fnGet($log, $window) {

    // Define the functions and properties to reveal.
    var service = {
      error: fnError,
      debug: fnDebug
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnError (message) {

      // Preserve default behaviour.
      $log.error.apply($log, arguments);

      // Send to server side.
      $.ajax({
        type: "POST",
        url: "/client-logger",
        contentType: "application/json",
        data: angular.toJson({
          url: $window.location.href,
          message: message,
          type: "error"
        })
      });
    }

    function fnDebug (message) {

      // Preserve default behaviour.
      $log.log.apply($log, arguments);

      // Send to server side.
      $.ajax({
        type: "POST",
        url: "/client-logger",
        contentType: "application/json",
        data: angular.toJson({
          url: $window.location.href,
          message: message,
          type: "debug"
        })
      });
    }

    //endregion
  }

})();

/**
 * Exception Logging Service, currently only used by the $exceptionHandler
 * it preserves the default behaviour ( logging to the console) but
 * also posts the error server side after generating a stacktrace.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'ExceptionLogging';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Logging)
  .factory(
    serviceName,
    ['$log', '$window', 'TraceService', fnGet]
  );

  /**
   * Povide a method to post a client side error to the server.
   * @param $log
   * @param $window
   * @param TraceService
   * @returns {*}
   */
  function fnGet($log, $window, TraceService) {

    // Define the function to reveal.
    var service = fnError;

    // Provide instance.
    return service;

    //region Public Methods

    function fnError (exception, cause){

      // Preserve the default behaviour which will log the error
      // to the console, and allow the application to continue running.
      $log.error.apply($log, arguments);

      // Now try to log the error to the server side.
      try{
        var errorMessage = exception.toString();

        // Use our TraceService to generate a stack trace.
        var stackTrace = TraceService.print({e: exception});

        // Use AJAX (in this example jQuery) and
        // NOT an angular service such as $http.
        $.ajax({
          type: 'POST',
          url: '/client-logger',
          contentType: 'application/json',
          data: angular.toJson({
            url: $window.location.href,
            message: errorMessage,
            type: 'exception',
            stackTrace: stackTrace,
            cause: ( cause || '')
          })
        });
      } catch (loggingError){
        $log.warn('Error server-side logging failed.');
        $log.log(loggingError);
      }
    }

    //endregion
  }

})();

/**
 * Override Angular's built in exception handler, and tell it to
 * use our new exceptionLoggingService which is defined below
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = '$exceptionHandler';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Logging)
  .provider(
    serviceName,
    {
      $get: ['ExceptionLogging', fnGet]
    }
  );

  //region Public Methods

  /**
   * Provide the new $exceptionHandler.
   * @param ExceptionLogging
   * @returns {*}
   */
  function fnGet (ExceptionLogging) {
    return(ExceptionLogging);
  }

  //endregion

})();

///**
//* Usage of the application logging service in a module
//* that needs it and call error() or debug().
//*/
//(function () {
//  'use strict';
//
//  angular.module('example', [])
//  .factory(
//    'example',
//    ['$http', 'ApplicationLogging', fnGet]
//  );
//
//  function fnGet($rootScope, ApplicationLogging) {
//
//    var instance = function () {};
//
//    instance.get = function (url, callback) {
//      $http.get(url)
//      .success(function (response) {
//        ApplicationLogging.debug({
//          message: "retrieved data successfully"
//        });
//        callback(null, response);
//      })
//      .error(function (response) {
//        ApplicationLogging.error({
//          message: "error retrieving data",
//          data: response.body
//        });
//        callback(response, null);
//      });
//    };
//
//    return instance;
//  }
//
//})();

/**
 * Service that gives us a nice Angular-esque wrapper
 * around the stackTrace.js pintStackTrace() method.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'TraceService';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Logging)
  .factory(
    serviceName,
    fnGet
  );

  /**
   * Provide pintStackTrace method of stackTrace.js
   * @returns {{
   *    print: (Window.printStackTrace|*)
   * }}
   */
  function fnGet() {

    return({
      print: printStackTrace
    });
  }

})();

/**
 * Wrapper service to use notifications with localized messages.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'Messenger';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Base)
  .service(
    serviceName,
    ['LocalizedMessage', 'Notifications', fnConstructor]
  );

  /**
   * Provide methods to manage localized notifications.
   * @param LocalizedMessage
   * @param Notifications
   * @returns {{
   *    successToStick: function,
   *    infoToStick: function,
   *    warningToStick: function,
   *    errorToStick: function,
   *
   *    successForCurrentRoute: function,
   *    infoForCurrentRoute: function,
   *    warningForCurrentRoute: function,
   *    errorForCurrentRoute: function,
   *
   *    successForNextRoute: function,
   *    infoForNextRoute: function,
   *    warningForNextRoute: function,
   *    errorForNextRoute: function,
   *
   *    getCurrent: function,
   *    remove: function,
   *    removeAll: function
   * }}
   */
  function fnConstructor(LocalizedMessage, Notifications) {

    // Define the functions and properties to reveal.
    var service = {
      successToStick: fnSuccessToStick,
      infoToStick: fnInfoToStick,
      warningToStick: fnWarningToStick,
      errorToStick: fnErrorToStick,

      successForCurrentRoute : fnSuccessForCurrentRoute,
      infoForCurrentRoute : fnInfoForCurrentRoute,
      warningForCurrentRoute : fnWarningForCurrentRoute,
      errorForCurrentRoute : fnErrorForCurrentRoute,

      successForNextRoute: fnSuccessForNextRoute,
      infoForNextRoute: fnInfoForNextRoute,
      warningForNextRoute: fnWarningForNextRoute,
      errorForNextRoute: fnErrorForNextRoute,

      getCurrent: fnGetCurrent,
      remove: fnRemove,
      removeAll: fnRemoveAll
    };

    // Provide instance.
    return service;

    //region Public methods

    function fnSuccessToStick (msgKey, interpolateParams, otherProperties) {
      return pushSticky (msgKey, 'success', interpolateParams, otherProperties);
    }
    function fnInfoToStick (msgKey, interpolateParams, otherProperties) {
      return pushSticky (msgKey, 'info', interpolateParams, otherProperties);
    }
    function fnWarningToStick (msgKey, interpolateParams, otherProperties) {
      return pushSticky (msgKey, 'warning', interpolateParams, otherProperties);
    }
    function fnErrorToStick (msgKey, interpolateParams, otherProperties) {
      return pushSticky (msgKey, 'danger', interpolateParams, otherProperties);
    }

    function fnSuccessForCurrentRoute (msgKey, interpolateParams, otherProperties) {
      return pushForCurrentRoute (msgKey, 'success', interpolateParams, otherProperties);
    }
    function fnInfoForCurrentRoute (msgKey, interpolateParams, otherProperties) {
      return pushForCurrentRoute (msgKey, 'info', interpolateParams, otherProperties);
    }
    function fnWarningForCurrentRoute (msgKey, interpolateParams, otherProperties) {
      return pushForCurrentRoute (msgKey, 'warning', interpolateParams, otherProperties);
    }
    function fnErrorForCurrentRoute (msgKey, interpolateParams, otherProperties) {
      return pushForCurrentRoute (msgKey, 'danger', interpolateParams, otherProperties);
    }

    function fnSuccessForNextRoute (msgKey, interpolateParams, otherProperties) {
      return pushForNextRoute (msgKey, 'success', interpolateParams, otherProperties);
    }
    function fnInfoForNextRoute (msgKey, interpolateParams, otherProperties) {
      return pushForNextRoute (msgKey, 'info', interpolateParams, otherProperties);
    }
    function fnWarningForNextRoute (msgKey, interpolateParams, otherProperties) {
      return pushForNextRoute (msgKey, 'warning', interpolateParams, otherProperties);
    }
    function fnErrorForNextRoute (msgKey, interpolateParams, otherProperties) {
      return pushForNextRoute (msgKey, 'danger', interpolateParams, otherProperties);
    }

    function fnGetCurrent() {
      return Notifications.getCurrent();
    }

    function fnRemove (notification) {
      return Notifications.remove(notification);
    }

    function fnRemoveAll () {
      return Notifications.removeAll();
    }

    //endregion

    //region Private methods

    function pushSticky (msgKey, type, interpolateParams, otherProperties) {
      return Notifications.pushSticky(
        prepareNotification (msgKey, type, interpolateParams, otherProperties)
      );
    }

    function pushForCurrentRoute (msgKey, type, interpolateParams, otherProperties) {
      return Notifications.pushForCurrentRoute(
        prepareNotification (msgKey, type, interpolateParams, otherProperties)
      );
    }

    function pushForNextRoute (msgKey, type, interpolateParams, otherProperties) {
      return Notifications.pushForNextRoute(
        prepareNotification (msgKey, type, interpolateParams, otherProperties)
      );
    }

    function prepareNotification (msgKey, type, interpolateParams, otherProperties) {
      return angular.extend({
        message: LocalizedMessage (msgKey, interpolateParams),
        type: type
      }, otherProperties);
    }

    //endregion
  }
})();

/**
 * Service to manage notifications.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'Notifications';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Base)
  .factory(
    serviceName,
    ['$rootScope', fnGet]
  );

  /**
   * Provide methods to manage notifications.
   * @param $rootScope
   * @returns {{}}
   */
  function fnGet($rootScope) {

    var notifications = {
      'STICKY': [],
      'ROUTE_CURRENT': [],
      'ROUTE_NEXT': []
    };
    var notificationsService = {};

    var addNotification = function (notificationsArray, notificationObj) {
      if (!angular.isObject(notificationObj)) {
        throw new Error("Only object can be added to the notification service");
      }
      notificationsArray.push(notificationObj);
      return notificationObj;
    };

    $rootScope.$on('$routeChangeSuccess', function () {
      notifications.ROUTE_CURRENT.length = 0;

      notifications.ROUTE_CURRENT = angular.copy(notifications.ROUTE_NEXT);
      notifications.ROUTE_NEXT.length = 0;
    });

    notificationsService.getCurrent = function () {
      return [].concat(notifications.STICKY, notifications.ROUTE_CURRENT);
    };

    notificationsService.pushSticky = function (notification) {
      return addNotification(notifications.STICKY, notification);
    };

    notificationsService.pushForCurrentRoute = function (notification) {
      return addNotification(notifications.ROUTE_CURRENT, notification);
    };

    notificationsService.pushForNextRoute = function (notification) {
      return addNotification(notifications.ROUTE_NEXT, notification);
    };

    notificationsService.remove = function (notification) {
      angular.forEach(notifications, function (notificationsByType) {
        var idx = notificationsByType.indexOf(notification);
        if (idx > -1) {
          notificationsByType.splice(idx, 1);
        }
      });
    };

    notificationsService.removeAll = function () {
      angular.forEach(notifications, function (notificationsByType) {
        notificationsByType.length = 0;
      });
    };

    // Provide instance.
    return notificationsService;
  }

})();

/**
 * Definition of the repository services module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Services.Repository, [
    // Angular modules
    // Custom modules
    // 3rd Party Modules
  ])

  /**
   * Execute configuring code before module loading.
   */
  .config([
    'RestangularProvider',
    function (RestangularProvider) {

      // Configure Restangular service.
      RestangularProvider.setBaseUrl(API.Root);
    }
  ]);
})();

/**
 * Repository for account data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'AccountData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for user maintenance.
   * @param Restangular
   * @returns {{
   *    register: fnRegister,
   *    confirmRegistration: fnConfirmRegistration,
   *    fetch: fnFetch,
   *    read: fnRead,
   *    update: fnUpdate,
   *    changePassword: fnChangePassword,
   *    changeEmail: fnChangeEmail,
   *    confirmEmail: fnConfirmEmail,
   *    forgottenPassword: fnForgottenPassword,
   *    newPassword: fnNewPassword
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'account';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      register: fnRegister,
      confirmRegistration: fnConfirmRegistration,
      fetch: fnFetch,
      read: fnRead,
      update: fnUpdate,
      changePassword: fnChangePassword,
      changeEmail: fnChangeEmail,
      confirmEmail: fnConfirmEmail,
      forgottenPassword: fnForgottenPassword,
      newPassword: fnNewPassword
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnRegister(entity) {
      return collection.customPOST(entity, '');
    }

    function fnConfirmRegistration(code, token) {
      var credentials = { userCode: code, emailToken: token };
      return collection.customPUT(credentials, 'registration');
    }

    function fnFetch() {
      return restAngular.one(route, 'view').get();
    }

    function fnRead() {
      return restAngular.one(route, '').get();
    }

    function fnUpdate(entity) {
      return collection.customPUT(entity, '');
    }

    function fnChangePassword(data) {
      return collection.customPUT(data, 'password');
    }

    function fnChangeEmail(data) {
      return collection.customPUT(data, 'email');
    }

    function fnConfirmEmail(code, token) {
      var credentials = { userCode: code, emailToken: token };
      return collection.customPUT(credentials, 'set-email');
    }

    function fnForgottenPassword(data) {
      return collection.customPUT(data, 'forgotten');
    }

    function fnNewPassword(credentials) {
      return collection.customPUT(credentials, 'recover');
    }

    //endregion
  }
})();

/**
 * Repository for beer data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'BeerData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for beer maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'beers';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, entity) {
      return collection.customPUT(entity, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for beer type data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'BeerTypeData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for beer type maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'beer-types';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, entity) {
      return collection.customPUT(entity, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for beer type view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'BeerTypeViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for beer type views.
   * @param Restangular
   * @returns {{
   *    select: fnSelect,
   *    count: fnCount,
   *    fetch: fnFetch
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'beer-type-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      select: fnSelect,
      count: fnCount,
      fetch: fnFetch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnSelect(settings) {
      var filter = settings.initFilter()
        .$like('beerTypeName')
        .$fields(['beerTypeKey', 'beerTypeName'])
        .getFilter();
      return collection.getList(filter);
    }

    function fnCount(settings) {
      var where = settings.initWhere()
        .$like('beerTypeName')
        .getWhere();
      return collection.customGET('count', where);
    }

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    //endregion
  }
})();

/**
 * Repository for beer view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'BeerViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for beer views.
   * @param Restangular
   * @returns {{
   *    select: function,
   *    count: function,
   *    fetch: function,
   *    search: function
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'beer-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      select: fnSelect,
      count: fnCount,
      fetch: fnFetch,
      search: fnSearch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnSelect(settings) {
      var filter = settings.initFilter()
        .$like('beerName')
        .$like('email')
        .$fields(['beerKey', 'beerName', 'breweryName'])
        .getFilter();
      return collection.getList(filter);
    }

    function fnCount(settings) {
      var where = settings.initWhere()
        .$like('beerName')
        .getWhere();
      return collection.customGET('count', where);
    }

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    function fnSearch(settings) {
      var filter = settings.initFilter()
        .$like('beerName')
        .$fields(['beerKey', 'beerName', 'breweryName', 'labelKey'])
        .getFilter();
      return collection.customGETLIST('search', filter);
    }

    //endregion
  }
})();

/**
 * Repository for brewery data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'BreweryData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for brewery maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'breweries';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, entity) {
      return collection.customPUT(entity, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for brewery view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'BreweryViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for brewery views.
   * @param Restangular
   * @returns {{
   *    select: function,
   *    count: function,
   *    fetch: function,
   *    search: function
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'brewery-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      select: fnSelect,
      count: fnCount,
      fetch: fnFetch,
      search: fnSearch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnSelect(settings) {
      var filter = settings.initFilter()
        .$like('breweryName')
        .$fields(['breweryKey', 'breweryName', 'regionName'])
        .getFilter();
      return collection.getList(filter);
    }

    function fnCount(settings) {
      var where = settings.initWhere()
        .$like('breweryName')
        .getWhere();
      return collection.customGET('count', where);
    }

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    function fnSearch(settings) {
      var filter = settings.initFilter()
        .$like('breweryName')
        .$fields(['breweryKey', 'breweryName', 'regionName', 'logoKey'])
        .getFilter();
      return collection.customGETLIST('search', filter);
    }

    //endregion
  }
})();

/**
 * Repository for hop data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'HopData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for hop maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'hops';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, entity) {
      return collection.customPUT(entity, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for hop view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'HopViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for hop views.
   * @param Restangular
   * @returns {{
   *    select: fnSelect,
   *    count: fnCount,
   *    fetch: fnFetch
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'hop-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      select: fnSelect,
      count: fnCount,
      fetch: fnFetch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnSelect(settings) {
      var filter = settings.initFilter()
        .$like('hopName')
        .$fields(['hopKey', 'hopName'])
        .getFilter();
      return collection.getList(filter);
    }

    function fnCount(settings) {
      var where = settings.initWhere()
        .$like('hopName')
        .getWhere();
      return collection.customGET('count', where);
    }

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    //endregion
  }
})();

/**
 * Repository for image data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'ImageData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for image maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'images';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, data) {
      return collection.customPUT(data, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for image view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'ImageViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for image views.
   * @param Restangular
   * @returns {{
   *    fetch: fnFetch
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'image-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      fetch: fnFetch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    //endregion
  }
})();

/**
 * Repository for malt data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'MaltData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for malt maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'malts';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, entity) {
      return collection.customPUT(entity, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for malt view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'MaltViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for malt views.
   * @param Restangular
   * @returns {{
   *    select: fnSelect,
   *    count: fnCount,
   *    fetch: fnFetch
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'malt-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      select: fnSelect,
      count: fnCount,
      fetch: fnFetch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnSelect(settings) {
      var filter = settings.initFilter()
        .$like('maltName')
        .$fields(['maltKey', 'maltName'])
        .getFilter();
      return collection.getList(filter);
    }

    function fnCount(settings) {
      var where = settings.initWhere()
        .$like('maltName')
        .getWhere();
      return collection.customGET('count', where);
    }

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    //endregion
  }
})();

/**
 * Repository for region data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'RegionData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for region maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'regions';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, entity) {
      return collection.customPUT(entity, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for region view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'RegionViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', 'Settings', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for region views.
   * @param Restangular
   * @param Settings
   * @returns {{
   *    select: fnSelect,
   *    all: fnAll,
   *    fetch: fnFetch
   * }}
   */
  function fnConstructor(Restangular, Settings) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'region-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      select: fnSelect,
      all: fnAll,
      fetch: fnFetch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnSelect(parentKey) {
      var settings = new Settings({ parentKey: parentKey ? parentKey : 'null' });
      var filter = settings.initSettings()
        .$eq('parentKey')
        .$fields(['regionKey', 'regionName'])
        .getFilter();
      return collection.getList(filter);
    }

    function fnAll() {
      return collection.customGETLIST('all');
    }

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    //endregion
  }
})();

/**
 * Repository for system data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'SystemData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for system functions.
   * @param Restangular
   * @returns {{
   *    getConfiguration: fnGetConfiguration,
   *    getModels: fnGetModels,
   *    getSchema: fnGetSchema,
   *    getSchemaAll: fnGetSchemaAll,
   *    getSystemInfo: fnGetSystemInfo,
   *    sendTestMessage: fnSendTestMessage
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'system';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      getConfiguration: fnGetConfiguration,
      getModels: fnGetModels,
      getSchema: fnGetSchema,
      getSchemaAll: fnGetSchemaAll,
      getSystemInfo: fnGetSystemInfo,
      sendTestMessage: fnSendTestMessage
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnGetConfiguration() {
      return restAngular.one(route, 'get-configuration').get();
    }

    function fnGetModels() {
      return restAngular.one(route, 'get-models').get();
    }

    function fnGetSchema(name) {
      return restAngular.one(route, 'get-schema').get({ name: name });
    }

    function fnGetSchemaAll() {
      return restAngular.one(route, 'get-schema-all').get();
    }

    function fnGetSystemInfo() {
      return restAngular.one(route, 'get-system-info').get();
    }

    function fnSendTestMessage(address) {
      return collection.customPOST(address, 'send-test-message');
    }

    //endregion
  }
})();

/**
 * Repository for user data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'UserData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for user maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'users';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, entity) {
      return collection.customPUT(entity, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for user view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'UserViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for user views.
   * @param Restangular
   * @returns {{
   *    select: fnSelect,
   *    count: fnCount,
   *    fetch: fnFetch
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'user-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      select: fnSelect,
      count: fnCount,
      fetch: fnFetch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnSelect(settings) {
      var filter = settings.initFilter()
        .$like('userName')
        .$like('email')
        .$fields(['userKey', 'userName', 'email', 'userState'])
        .getFilter();
      return collection.getList(filter);
    }

    function fnCount(settings) {
      var where = settings.initWhere()
        .$like('userName')
        .$like('email')
        .getWhere();
      return collection.customGET('count', where);
    }

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    //endregion
  }
})();

/**
 * Repository for yeast data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'YeastData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for yeast maintenance.
   * @param Restangular
   * @returns {{
   *    construct: fnConstruct,
   *    create: fnCreate,
   *    read: fnRead,
   *    update: fnUpdate,
   *    remove: fnRemove
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'yeasts';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      construct: fnConstruct,
      create: fnCreate,
      read: fnRead,
      update: fnUpdate,
      remove: fnRemove
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnConstruct() {
      return restAngular.one(route, 'new').get();
    }

    function fnCreate(entity) {
      return collection.customPOST(entity, '');
    }

    function fnRead(key) {
      return restAngular.one(route, key).get();
    }

    function fnUpdate(key, entity) {
      return collection.customPUT(entity, key);
    }

    function fnRemove(key) {
      return restAngular.one(route, key).remove();
    }

    //endregion
  }
})();

/**
 * Repository for yeast view data.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'YeastViewData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Repository)
  .service(
    serviceName,
    ['Restangular', fnConstructor]
  );

  /**
   * Wrapper methods of the public API for yeast views.
   * @param Restangular
   * @returns {{
   *    select: fnSelect,
   *    count: fnCount,
   *    fetch: fnFetch
   * }}
   */
  function fnConstructor(Restangular) {

    var restAngular = Restangular.withConfig(function (Configurer) {
      //Configurer.setBaseUrl(API.RootV2);
    });

    var route = 'yeast-views';
    var collection = restAngular.all(route);

    // Define the functions and properties to reveal.
    var service = {
      select: fnSelect,
      count: fnCount,
      fetch: fnFetch
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnSelect(settings) {
      var filter = settings.initFilter()
        .$like('yeastName')
        .$fields(['yeastKey', 'yeastName'])
        .getFilter();
      return collection.getList(filter);
    }

    function fnCount(settings) {
      var where = settings.initWhere()
        .$like('yeastName')
        .getWhere();
      return collection.customGET('count', where);
    }

    function fnFetch(key) {
      return restAngular.one(route, key).get();
    }

    //endregion
  }
})();

/**
 * Definition of the shared services module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Services.Security, [
    // Angular modules
    // 3rd Party Modules
    // Custom modules
  ]);
})();
/**
 * Security authorization service.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'Authorization';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Security)
  .provider(
    serviceName,
    {
      requireSupervisor: [serviceName, fnRequireSupervisor],
      requireEditor: [serviceName, fnRequireEditor],
      requireAuthenticatedUser: [serviceName, fnRequireAuthenticatedUser],
      $get: ['Security', 'RetryQueue', fnGet]
    }
  );

  //region Public Methods

  function fnRequireSupervisor(Authorization) {
    return Authorization.requireSupervisor();
  }

  function fnRequireEditor (Authorization) {
    return Authorization.requireEditor();
  }

  function fnRequireAuthenticatedUser (Authorization) {
    return Authorization.requireAuthenticatedUser();
  }

  function fnGet (Security, RetryQueue) {
    var service = {

      // Require that there is an authenticated user
      // (use this in a route resolve to prevent non-authenticated users from entering that route)
      requireAuthenticatedUser: function () {
        var promise = Security.requestCurrentUser().then(function (userInfo) {
          if (!Security.isAuthenticated()) {
            return RetryQueue.pushRetryFn('unauthenticated-client', service.requireAuthenticatedUser);
          }
        });
        return promise;
      },

      // Require that there is an editor logged in
      // (use this in a route resolve to prevent non-editors from entering that route)
      requireEditor: function () {
        var promise = Security.requestCurrentUser().then(function (userInfo) {
          if (!Security.isEditor()) {
            return RetryQueue.pushRetryFn('unauthorized-client', service.requireEditor);
          }
        });
        return promise;
      },

      // Require that there is a supervisor logged in
      // (use this in a route resolve to prevent non-supervisors from entering that route)
      requireSupervisor: function () {
        var promise = Security.requestCurrentUser().then(function (userInfo) {
          if (!Security.isSupervisor()) {
            return RetryQueue.pushRetryFn('unauthorized-client', service.requireSupervisor);
          }
        });
        return promise;
      }

    };

    return service;
  }

  //endregion

})();

/**
 * Security retry queue service.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'RetryQueue';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Security)
  .factory(
    serviceName,
    ['$q', '$log', fnGet]
  );

  /**
   * Define a queue with supporting methods to repeat client requests.
   * @param $q
   * @param $log
   * @returns {{
   *    hasMore: fnHasMore,
   *    push: fnPush,
   *    pushRetryFn: fnPushRetryFn,
   *    retryReason: fnRetryReason,
   *    cancelAll: fnCancelAll,
   *    retryAll: fnRetryAll,
   *    onItemAddedCallbacks: Array
   * }}
   */
  function fnGet($q, $log) {

    var retryQueue = [];

    // Define the functions and properties to reveal.
    var service = {
      hasMore: fnHasMore,
      push: fnPush,
      pushRetryFn: fnPushRetryFn,
      retryReason: fnRetryReason,
      cancelAll: fnCancelAll,
      retryAll: fnRetryAll,

      // The security service puts its own handler in here!
      onItemAddedCallbacks: []
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnHasMore() {
      return retryQueue.length > 0;
    }

    function fnPush (retryItem) {
      retryQueue.push(retryItem);
      // Call all the onItemAdded callbacks
      angular.forEach(service.onItemAddedCallbacks, function (cb) {
        try {
          cb(retryItem);
        } catch (e) {
          $log.error('retryQueue.push(retryItem): callback threw an error' + e);
        }
      });
    }

    function fnPushRetryFn (reason, retryFn) {
      // The reason parameter is optional
      if (arguments.length === 1) {
        retryFn = reason;
        reason = undefined;
      }

      // The deferred object that will be resolved or rejected by calling retry or cancel.
      var deferred = $q.defer();
      var retryItem = {
        reason: reason,
        retry: function () {
          // Wrap the result of the retryFn into a promise if it is not already.
          $q.when(retryFn()).then(function (value) {
            // If it was successful then resolve our deferred.
            deferred.resolve(value);
          }, function (value) {
            // Otherwise reject it.
            deferred.reject(value);
          });
        },
        cancel: function () {
          // Give up on retrying and reject our deferred.
          deferred.reject();
        }
      };
      service.push(retryItem);
      return deferred.promise;
    }

    function fnRetryReason () {
      return service.hasMore() && retryQueue[0].reason;
    }

    function fnCancelAll () {
      while (service.hasMore()) {
        retryQueue.shift().cancel();
      }
    }

    function fnRetryAll () {
      while (service.hasMore()) {
        retryQueue.shift().retry();
      }
    }

    //endregion
  }
})();

/**
 * Security service.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'Security';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Security)
  .factory(
    serviceName,
    ['$http', '$q', '$location', 'RetryQueue', '$modal', 'LocalData', fnGet]
  );

  /**
   * Authentication and authorization methods.
   * @param $http
   * @param $q
   * @param $location
   * @param queue
   * @param $modal
   * @returns {{
   *    getLoginReason: function --- Get the first reason for needing a login,
   *    showLogin: function --- Show the modal login dialog,
   *    login: function --- Attempt to authenticate a user by the given email and password,
   *    cancelLogin: function --- Give up trying to login and clear the retry queue,
   *    register: function --- Create a new account,
   *    logout: function --- Logout the current user and redirect,
   *    requestCurrentUser: function --- Ask the backend to see if a user is already authenticated,
   *    setUserInfo: function --- Saves information about the authenticated user,
   *    currentUser: object --- Information about the current user,
   *    userToken: object --- User information for the Web APIs,
   *    isAuthenticated: {function --- Check the current user is authenticated,
   *    isEditor: function --- Check the current user an editor,
   *    isSupervisor: function --- Check the current user a supervisor
   * }}
   */
  function fnGet($http, $q, $location, queue, $modal, LocalData) {

    // Define the functions and properties to reveal.
    var service = {
      getLoginReason: fnGetLoginReason,
      showLogin: fnShowLogin,
      login: fnLogin,
      cancelLogin: fnCancelLogin,
      register: fnRegister,
      logout: fnLogout,
      requestCurrentUser: fnRequestCurrentUser,
      setUserInfo: fnSetUserInfo,

      currentUser: null,  // Information about the current user
      userToken: null,    // User information for the Web APIs

      isAuthenticated: fnIsAuthenticated,
      isEditor: fnIsEditor,
      isSupervisor: fnIsSupervisor
    };

    // Try to authenticate with saved user token.
    service.userToken = LocalData.getToken();
    service.requestCurrentUser();

    // Register a handler for when an item is added to the retry queue
    queue.onItemAddedCallbacks.push(function (retryItem) {
      if (queue.hasMore()) {
        service.showLogin();
      }
    });

    // Provide instance.
    return service;

    //region Public methods

    // Get the first reason for needing a login.
    function fnGetLoginReason() {
      return queue.retryReason();
    }

    // Show the modal login dialog.
    function fnShowLogin() {
      openLoginDialog();
    }

    // Attempt to authenticate a user by the given email and password.
    function fnLogin(account) {
      var request = $http.post(API.Account.Login, account);
      return request.then(function (response) {
        service.setUserInfo(response.data);
        if (service.isAuthenticated()) {
          // User has logged in.
          closeLoginDialog(true);
          return true;
        } else
          // Attempt to log in has failed.
          return false;
      });
    }

    // Give up trying to login and clear the retry queue.
    function fnCancelLogin() {
      closeLoginDialog(false);
    }

    // Create a new account.
    function fnRegister(redirectTo) {
      closeLoginDialog(redirectTo);
    }

    // Logout the current user and redirect.
    function fnLogout(redirectTo) {
      $http.post(API.Account.Logout).then(function () {
        service.currentUser = null;
        service.userToken = null;
        LocalData.removeToken();
        redirect(redirectTo);
      });
    }

    // Ask the backend to see if a user is already authenticated,
    // this may be from a previous session.
    function fnRequestCurrentUser() {
      if (service.isAuthenticated()) {
        return $q.when(service.currentUser);
      } else if (service.userToken) {
        return $http.get(API.Account.CurrentUser).then(function (response) {
          if (response.data) {
            // User is already authenticated.
            service.currentUser = response.data;
          } else {
            // The stored access token is invalid.
            service.userToken = null;
            LocalData.removeToken();
          }
          return service.currentUser;
        });
      }
    }

    // Saves information about the authenticated user.
    function fnSetUserInfo (data) {
      if (data.user && data.token) {
        service.currentUser = data.user;
        service.userToken = data.token;
        LocalData.setToken(service.userToken);
        return true;
      } else
        return false;
    }

    // Is the current user authenticated?
    function fnIsAuthenticated() {
      return !!service.currentUser;
    }

    // Is the current user an editor?
    function fnIsEditor() {
      return service.currentUser &&
            (service.currentUser.role == ROLE.Editor ||
             service.currentUser.role == ROLE.Supervisor);
    }

    // Is the current user a supervisor?
    function fnIsSupervisor() {
      return service.currentUser && service.currentUser.role == ROLE.Supervisor;
    }

    //endregion

    //region Private methods

    // Redirect to the given url (defaults to '/')
    function redirect(url) {
      url = url || '/';
      $location.path(url);
    }

    // Login form dialog stuff
    var loginDialog = null;
    function openLoginDialog() {
      if (loginDialog) {
        throw new Error('Trying to open a dialog that is already open!');
      }
      loginDialog = $modal.open({
        templateUrl: VIEWS.Account.Login,
        controller: CONTROLLERS.Account.Login
      });
      loginDialog.result.then(onLoginDialogClose, onLoginDialogDismiss);
    }
    function closeLoginDialog(success) {
      if (loginDialog) {
        loginDialog.close(success);
      }
    }

    function onLoginDialogClose(success) {
      loginDialog = null;
      if (typeof success === 'string') {
        // Success is an URL.
        queue.cancelAll();
        redirect(success);
      } else if (success) {
        if (queue.hasMore()) {
          // There are request(s) to retry.
          queue.retryAll();
        } else {
          // Retry queue is empty.
          if (service.currentUser.role === ROLE.Editor ||
              service.currentUser.role === ROLE.Supervisor)
            redirect(URLS.Dashboard.Home);
          else
            redirect(URLS.Home);
        }
      } else {
        queue.cancelAll();
        redirect();
      }
    }
    function onLoginDialogDismiss() {
      loginDialog = null;
      queue.cancelAll();
      redirect();
    }

    //endregion
  }
})();
/**
 * Definition of the shared services module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Services.Shared, [
    // Angular modules
    // 3rd Party Modules
    // Custom modules
  ]);
})();
/**
 * Service to manage selection dialogs.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'ChooseDialog';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .service(
    serviceName,
    ['$modal', fnConstructor]
  );

  /**
   * Provide methods to manage selection dialogs.
   * @param $modal
   * @returns {{
   *    open: function,
   *    close: function
   * }}
   */
  function fnConstructor($modal) {

    var cb = null;

    // Define the functions and properties to reveal.
    var service = {
      open: fnOpen,
      close: fnClose
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnOpen(template, controller, defaultValue, callback) {
      if (chooseDialog) {
        throw new Error('Trying to open a dialog that is already open!');
      }
      cb = callback;
      chooseDialog = $modal.open({
        templateUrl: template,
        controller: controller,
        resolve: {
          defaultValue: function() {
            return defaultValue;
          }
        }
      });
      chooseDialog.result.then(onDeleteDialogClose, onDeleteDialogDismiss);
    }

    function fnClose(result) {
      chooseDialog.close(result);
    }

    //endregion

    //region Private Methods

    var chooseDialog = null;

    function onDeleteDialogClose(result) {
      chooseDialog = null;
      if (result && cb && typeof cb === 'function') {
        cb(result);
      }
    }

    function onDeleteDialogDismiss() {
      chooseDialog = null;
    }

    //endregion
  }

})();
/**
 * Service to manage delete dialogs.
 */
(function () {
  'use strict';

  // Service name is handy for logging
  var serviceName = 'DeleteDialog';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .service(
    serviceName,
    ['$modal', '$location', 'BuildUrl', fnConstructor]
  );

  /**
   * Provide methods to manage delete dialogs.
   * @param $modal
   * @param $location
   * @param BuildUrl
   * @returns {{
   *    open: function,
   *    close: function
   * }}
   */
  function fnConstructor($modal, $location, BuildUrl) {

    // Define the functions and properties to reveal.
    var service = {
      open: fnOpen,
      close: fnClose
    };

    // Provide instance.
    return service;

    //region Public Methods

    function fnOpen(template, controller, callback) {
      if (deleteDialog) {
        throw new Error('Trying to open a dialog that is already open!');
      }
      deleteDialog = $modal.open({
        templateUrl: template,
        controller: controller
      });
      deleteDialog.result.then(onDeleteDialogClose, onDeleteDialogDismiss);
      successCb = callback;
    }

    function fnClose() {
      if (deleteDialog) {
        if (arguments.length)
          deleteDialog.close(BuildUrl.apply(this, arguments));
        else
          deleteDialog.close();
      }
    }

    //endregion

    //region Private Methods

    var deleteDialog = null;
    var successCb = null;

    function onDeleteDialogClose() {
      deleteDialog = null;
      if (arguments.length && arguments[0]) {
        $location.path(BuildUrl.apply(this, arguments));
      }
      if (successCb) successCb();
    }

    function onDeleteDialogDismiss() {
      deleteDialog = null;
    }

    //endregion
  }

})();
/**
 * Service for redirection.
 */
(function () {
  'use strict';

  // Service name is handy for logging
  var serviceName = 'Display';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .service(
    serviceName,
    ['$location', 'BuildUrl', fnConstructor]
  );

  /**
   * Provide a method to rewrite the location.
   * @param $location
   * @param BuildUrl
   * @returns {Function}
   */
  function fnConstructor($location, BuildUrl) {

    // Define the function to reveal.
    return function() {
      $location.path(BuildUrl.apply(this, arguments));
    };
  }

})();
/**
 * Sends files using AJAX request.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'fileSender';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .factory(
    serviceName,
    ['$rootScope', '$q', '$injector', fnGet]
  );

  /**
   * Sends files using AJAX request.
   * @param $rootScope
   * @param $q
   * @param $injector
   * @returns {{
   *    post: function
   * }}
   */
  function fnGet($rootScope, $q, $injector) {

    // Define the functions and properties to reveal.
    var service = {
      post: postFile
    };

    // Provide instance.
    return service;

    //region Public Methods

    function postFile(files, data, progressCb) {

      return {
        to: function (uploadUrl) {
          var deferred = $q.defer();
          if (!files || !files.length) {
            deferred.reject("No files to upload");
            return;
          }

          var xhr = new XMLHttpRequest();
          xhr.upload.onprogress = function (e) {
            $rootScope.$apply(function () {
              var percentCompleted;
              if (e.lengthComputable) {
                percentCompleted = Math.round(e.loaded / e.total * 100);
                if (progressCb) {
                  progressCb(percentCompleted);
                } else if (deferred.notify) {
                  deferred.notify(percentCompleted);
                }
              }
            });
          };

          xhr.onload = function (e) {
            $rootScope.$apply(function () {
              var ret = {
                files: files,
                data: angular.fromJson(xhr.responseText)
              };
              deferred.resolve(ret);
            })
          };

          xhr.upload.onerror = function (e) {
            var msg = xhr.responseText ? xhr.responseText : "An unknown error occurred posting to '" + uploadUrl + "'";
            $rootScope.$apply(function () {
              deferred.reject(msg);
            });
          };

          var formData = new FormData();

          if (data) {
            Object.keys(data).forEach(function (key) {
              formData.append(key, data[key]);
            });
          }

          for (var idx = 0; idx < files.length; idx++) {
            formData.append(files[idx].name, files[idx]);
          }

          xhr.open("POST", uploadUrl);
          var Security = $injector.get('Security');
          if (Security.userToken) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + Security.userToken);
          }
          xhr.send(formData);

          return deferred.promise;
        }
      };
    }

    //endregion
  }

})();

/**
 * Object factory for list settings.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'ListSettings';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .factory(
    serviceName,
    ['Settings', fnGet]
  );

  /**
   * Returns a constructor function for list settings.
   * @param Settings
   * @returns {ListSettings}
   */
  function fnGet(Settings) {

    // Constructor for the ListSettings class.
    var ListSettings = function (pageSize, sortColumn, sortFunction) {

      var sortDesc = false;

      // Evaluate parameters.
      if (typeof pageSize === 'string') {
        sortFunction = sortColumn;
        sortColumn = pageSize;
        pageSize = 10;
      }
      if (!sortColumn)
        throw new Error('Default sort column must be defined for list settings.');
      if (sortColumn[0] === '-') {
        sortColumn = sortColumn.slice(1);
        sortDesc = true;
      }

      // Define the properties to reveal.
      Settings.call(this, {
        currentPage: 1,
        pageSize: pageSize,
        maxSize: 11,
        sortColumn: sortColumn,
        sortDesc: sortDesc,
        sortFunction: sortFunction
      });
    };

    // Inherit the properties and methods of Settings.
    ListSettings.prototype = new Settings();

    // Set the prototype to be a  ListSettings.
    ListSettings.prototype.constructor = ListSettings;

    // Define methods to build the filter object for LoopBack REST API find() function.

    //region Initialization methods

    /**
     * Initializes filter object.
     * @returns {ListSettings}
     */
    ListSettings.prototype.initFilter = function() {
      this._conditionBase = 'filter[where]';
      this._condition = { };

      this._condition['filter[order]'] = this.sortColumn + (this.sortDesc ? ' DESC' : ' ASC');
      this._condition['filter[limit]'] = this.pageSize;
      if (this.currentPage > 1) {
        this._condition['filter[skip]'] = (this.currentPage - 1) * this.pageSize;
      }
      return this;
    };

    //endregion

    // Provide constructor.
    return ListSettings;
  }

})();
/**
 * Data service for local storage.
 */
(function () {
  'use strict';

  // Service name is handy for logging
  var serviceName = 'LocalData';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .service(
    serviceName,
    ['$window', fnConstructor]
  );

  /**
   * Returns the LocalData service object.
   * @param $window
   * @returns {{
   *    getToken: fnGetToken,
   *    setToken: fnSetToken,
   *    removeToken: fnRemoveToken
   * }}
   */
  function fnConstructor($window) {

    // Define the functions and properties to reveal.
    var service = {
      getToken: fnGetToken,
      setToken: fnSetToken,
      removeToken: fnRemoveToken
    };

    // Provide instance.
    return service;

    //region Public methods

    var TOKEN_KEY = 'Krigli-token';

    function fnGetToken() {
      var token = null;
      if ($window.localStorage) {
        token = $window.localStorage.getItem(TOKEN_KEY);
      }
      return token;
    }

    function fnSetToken(token) {
      if (token && $window.localStorage) {
        $window.localStorage.setItem(TOKEN_KEY, token);
      }
    }

    function fnRemoveToken() {
      if ($window.localStorage) {
        $window.localStorage.removeItem(TOKEN_KEY);
      }
    }

    //endregion
  }

})();

/**
 * Data service for local storage.
 */
(function () {
  'use strict';

  // Service name is handy for logging
  var serviceName = 'Search';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .service(
    serviceName,
    ['$rootScope', '$window', '$location', fnConstructor]
  );

  function fnConstructor($rootScope, $window, $location) {

    var svcWindow = $window;
    var svcLocation = $location;
    var rootScope = $rootScope;

    var PHRASE_KEY = 'searchPhrase';
    var PARAM_NAME = 'phrase';

    // Define the functions and properties to reveal.
    var service = {
      setup: fnSetup,
      search: fnSearch,
      getPhrase: fnGetPhrase
    };

    return service;

    //region Public methods

    var viewTarget = null;
    var viewAction = null;

    function fnSetup(target, action) {
      if (typeof target === 'number' && typeof action === 'function') {
        viewTarget = target;
        viewAction = action;
      } else {
        viewTarget = null;
        viewAction = null;
      }
    }

    function fnSearch(target, phrase) {
      if (viewTarget === target)
        viewAction(phrase);
      else {
        setPhrase(target, phrase);
      }
    }

    function fnGetPhrase() {
      var phrase;

      if (svcWindow.sessionStorage) {
        phrase = svcWindow.sessionStorage.getItem(PHRASE_KEY);
        if (phrase)
          svcWindow.sessionStorage.removeItem(PHRASE_KEY);
        return phrase || '';
      } else {
        phrase = svcLocation.search()[PARAM_NAME];
        //if (phrase)
        //  svcLocation.search(PARAM_NAME, undefined);
        return phrase || '';
      }
    }

    //endregion

    //region Private methods

    function setPhrase(target, phrase) {
      var url = getTargetUrl(target);

      if (svcWindow.sessionStorage) {
        svcWindow.sessionStorage.setItem(PHRASE_KEY, phrase);
        rootScope.$apply(svcLocation.path(url));
      } else {
        rootScope.$apply(svcLocation.path(url).search(PARAM_NAME, phrase).url());
      }
    }

    function getTargetUrl(target) {
      switch (target) {
        case SEARCH_TARGET.Brewery:
          return URLS.Brewery.Search;
          break;
        default: // SEARCH_TARGET.Beer
          return URLS.Beer.Search;
      }
    }

    //endregion
  }

})();

/**
 * Object factory for settings.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'Settings';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .factory(
    serviceName,
    fnGet
  );

  /**
   * Returns a constructor function for settings.
   * @returns {Settings}
   */
  function fnGet() {

    var self = null;

    // Constructor for the Settings class.
    var Settings = function (params) {

      // Initialize settings.
      if (params && typeof params == 'object') {
        angular.extend(this, params);
      }

      this._condition = null;
      this._conditionBase = null;
      self = this;
    };

    // Define methods to build the filter object for LoopBack REST API find() function.

    var msgNoInit = 'First call an init() method!';
    var msgFields = 'Fields can be added to a filter object only!';

    //region Initialization methods

    /**
     * Initializes settings object.
     * @returns {Settings}
     */
    Settings.prototype.initSettings = function() {
      self._conditionBase = 'filter[where]';
      self._condition = { };
      return self;
    };

    /**
     * Initializes where object.
     * @returns {Settings}
     */
    Settings.prototype.initWhere = function() {
      self._conditionBase = 'where';
      self._condition = { };
      return self;
    };

    /**
     * Initializes include object.
     * @returns {Settings}
     */
    Settings.prototype.initInclude = function() {
      self._conditionBase = 'filter[include]';
      self._condition = { };
      return self;
    };

    //endregion

    //region Equal method

    /**
     * Adds an EQUAL expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$eq = function(propertyName) {
      if (!self._conditionBase)
        throw new Error(msgNoInit);

      if (typeof propertyName === 'string' && self[propertyName]) {
        var paramName = self._conditionBase + '[' + propertyName + ']';
        var paramValue = self[propertyName];
        self._condition[paramName] = paramValue;
        return self;
      }
    };

    //endregion

    //region Like methods

    /**
     * Adds a LIKE expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$like = function(propertyName) {
      addLike(propertyName, 'like');
      return self;
    };

    /**
     * Adds a NOT LIKE expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$nlike = function(propertyName) {
      addLike(propertyName, 'nlike');
      return self;
    };

    function addLike(propertyName, operator) {
      if (!self._conditionBase)
        throw new Error(msgNoInit);

      if (typeof propertyName === 'string' && self[propertyName]) {
        var paramName = self._conditionBase + '[' + propertyName + '][' + operator + ']';
        var paramValue = self[propertyName];
        if (paramValue.substr(0, 1) != '%')
          paramValue = '%' + paramValue;
        if (paramValue.substr(paramValue.length) != '%')
          paramValue = paramValue + '%';
        self._condition[paramName] = paramValue;
      }
    }

    //endregion

    //region Comparing methods

    /**
     * Adds a GREATER THAN expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$gt = function(propertyName) {
      addCompare(propertyName, 'gt');
      return self;
    };

    /**
     * Adds a GREATER THAN OR EQUAL expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$gte = function(propertyName) {
      addCompare(propertyName, 'gte');
      return self;
    };

    /**
     * Adds a LESS THAN expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$lt = function(propertyName) {
      addCompare(propertyName, 'lt');
      return self;
    };

    /**
     * Adds a LESS THAN OR EQUAL expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$lte = function(propertyName) {
      addCompare(propertyName, 'lte');
      return self;
    };

    /**
     * Adds a NOT EQUAL expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$neq = function(propertyName) {
      addCompare(propertyName, 'neq');
      return self;
    };

    /**
     * Adds an IN expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$in = function(propertyName) {
      addCompare(propertyName, 'inq');
      return self;
    };

    /**
     * Adds a NOT IN expression to WHERE clause.
     * @param propertyName
     * @returns {Settings}
     */
    Settings.prototype.$nin = function(propertyName) {
      addCompare(propertyName, 'nin');
      return self;
    };

    function addCompare(propertyName, operator) {
      if (!self._conditionBase)
        throw new Error(msgNoInit);

      if (typeof propertyName === 'string' && self[propertyName]) {
        var paramName = self._conditionBase + '[' + propertyName + '][' + operator + ']';
        var paramValue = self[propertyName];
        self._condition[paramName] = paramValue;
      }
    }

    //endregion

    //region Between method

    /**
     * Adds a BETWEEN expression to WHERE clause.
     * Optionally adds a GTE or LTE expression.
     * @param propertyName1
     * @param propertyName2
     * @returns {Settings}
     */
    Settings.prototype.$between = function(propertyName1, propertyName2) {
      if (!self._conditionBase)
        throw new Error(msgNoInit);

      var hasLower = typeof propertyName1 === 'string' && self[propertyName1];
      var hasUpper = typeof propertyName2 === 'string' && self[propertyName2];
      if (hasLower && hasUpper) {
        var paramName = self._conditionBase + '[' + propertyName + '][between]';
        var paramValue = self[propertyName1].toString() + ',' + self[propertyName2].toString();
        self._condition[paramName] = paramValue;
      } else if (hasLower) {
        addCompare(propertyName1, 'gte');
      } else if (hasUpper) {
        addCompare(propertyName2, 'lte');
      }
      return self;
    };

    //endregion

    //region Include method

    /**
     * Adds the list of included relations to filer.
     * @param relations
     * @returns {Settings}
     */
    Settings.prototype.$include = function(relations) {
      if (!self._conditionBase)
        throw new Error(msgNoInit);

      if (relations) {
        addIncludeLevel(relations, null);
      }
      return self;
    };

    function addIncludeLevel(relations, parents) {
      if (relations) {
        if (typeof relations === 'string') {
          addIncludeItem(relations, parents);
        } else if (Array.isArray(relations)) {
          relations.forEach(function(relation) {
            addIncludeItem(relation, parents);
          });
        } else if (typeof relations === 'object') {
          for (var prop in relations) {
            if (relations.hasOwnProperty(prop)) {
              var propParents = '[' + prop + ']';
              if (parents)
                propParents = parents + propParents;
              addIncludeLevel(relations[prop], propParents);
            }
          }
        }
      }
    }

    function addIncludeItem(value, parents) {
      //var paramName = self._conditionBase + '[include]' + (parents ? parents : '');
      var paramName = self._conditionBase + (parents ? parents : '');
      var paramValue = value;
      self._condition[paramName] = paramValue;
    }

    //endregion

    //region Fields method

    /**
     * Adds the included/excluded list of fields to filter.
     * @param fields
     * @returns {Settings}
     */
    Settings.prototype.$fields = function(fields) {
      if (!self._conditionBase)
        throw new Error(msgNoInit);
      if (self._conditionBase != 'filter[where]')
        throw new Error(msgFields);

      if (typeof fields === 'string') {
        addField(fields, true);
      } else if (fields instanceof Array) {
        fields.forEach(function(field) {
          addField(field, true);
        });
      } else if (typeof fields === 'object') {
        Object.getOwnPropertyNames(fields).forEach(function(field) {
          addField(field, fields[field]);
        });
      }
      return self;
    };

    function addField(fieldName, enabled) {
      if (typeof fieldName === 'string') {
        var paramName = 'filter[fields][' + fieldName + ']';
        var paramValue = enabled ? 1 : 0;
        self._condition[paramName] = paramValue;
      }
    }

    //endregion

    //region Result methods

    /**
     * Gets the settings in LoopBack format.
     * @returns {object} The filter object for REST API methods.
     */
    Settings.prototype.getFilter = function() {
      return self._condition;
    };

    /**
     * Gets the settings in LoopBack format.
     * @returns {object} The where object for REST API methods.
     */
    Settings.prototype.getWhere = function() {
      return self._condition;
    };

    //endregion

    // Provide constructor.
    return Settings;
  }

})();

/**
 * Options factory for TinyMCE configuration.
 */
(function () {
  'use strict';

  // Service name is handy for logging
  var serviceName = 'TinymceConfig';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .service(
    serviceName,
    ['Configuration', fnConstructor]
  );

  function fnConstructor(Configuration) {

    //region Public configurations

    var defaultOptions = {
      handle_event_callback: function (e) {
        // put logic here for keypress
      },
      content_css: '/library/bootstrap/3.1.1/css/bootstrap.min.css,' + Configuration.styles,
      language: 'hu', // 'hu_HU' is not on CDN!
      plugins: 'autoresize anchor code table contextmenu nonbreaking paste visualchars visualblocks',
      //toolbar: "anchor nonbreaking visualchars",
      tools: "inserttable",
      contextmenu: "anchor inserttable | cell row column deletetable",
      nonbreaking_force_tab: true,
      paste_as_text: false,
      paste_word_valid_elements: "b,strong,i,em,h1,h2"
    };

    console.log('TinyMCE configuration is set.');

    //endregion

    // Define the functions and properties to reveal.
    var service = {
      Default: defaultOptions
    };

    // Provide instance.
    return service;
  }

})();
/**
 * Service to generate globally unique identifiers.
 */
(function () {
  'use strict';

  // Service name is handy for logging.
  var serviceName = 'uuid';

  // Define the service and its dependencies.
  angular.module(MODULES.Services.Shared)
  .factory(
    serviceName,
    fnGet
  );

  /**
   * Provides methods to generate globally unique identifiers.
   * @returns {{
   *    new: getNew,
   *    empty: getEmpty
   * }}
   */
  function fnGet() {

    // Define the functions and properties to reveal.
    var service = {
      new: getNew,
      empty: getEmpty
    };

    // Provide instance.
    return service;

    //region Public Methods

    function getNew() {
      function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
      }
      return _p8() + _p8(true) + _p8(true) + _p8();
    }

    function getEmpty() {
      return '00000000-0000-0000-0000-000000000000';
    }

    //endregion
  }

})();

/**
 * Binds a TinyMCE widget to <textarea> elements.
 */
angular.module('ui.tinymce', [])
  .value('uiTinymceConfig', {})
  .directive('uiTinymce', ['uiTinymceConfig', function (uiTinymceConfig) {
    uiTinymceConfig = uiTinymceConfig || {};
    var generatedIds = 0;
    return {
      priority: 10,
      require: 'ngModel',
      link: function (scope, elm, attrs, ngModel) {
        var expression, options, tinyInstance,
          updateView = function () {
            ngModel.$setViewValue(elm.val());
            if (!scope.$root.$$phase) {
              scope.$apply();
            }
          };

        // generate an ID if not present
        if (!attrs.id) {
          attrs.$set('id', 'uiTinymce' + generatedIds++);
        }

        if (attrs.uiTinymce) {
          expression = scope.$eval(attrs.uiTinymce);
        } else {
          expression = {};
        }

        // make config'ed setup method available
        if (expression.setup) {
          var configSetup = expression.setup;
          delete expression.setup;
        }

        options = {
          // Update model when calling setContent (such as from the source editor popup)
          setup: function (ed) {
            var args;
            ed.on('init', function(args) {
              ngModel.$render();
              ngModel.$setPristine();
            });
            // Update model on button click
            ed.on('ExecCommand', function (e) {
              ed.save();
              updateView();
            });
            // Update model on keypress
            ed.on('KeyUp', function (e) {
              ed.save();
              updateView();
            });
            // Update model on change, i.e. copy/pasted text, plugins altering content
            ed.on('SetContent', function (e) {
              if (!e.initial && ngModel.$viewValue !== e.content) {
                ed.save();
                updateView();
              }
            });
            ed.on('blur', function(e) {
              elm.blur();
            });
            // Update model when an object has been resized (table, image)
            ed.on('ObjectResized', function (e) {
              ed.save();
              updateView();
            });
            if (configSetup) {
              configSetup(ed);
            }
          },
          mode: 'exact',
          elements: attrs.id
        };
        // extend options with initial uiTinymceConfig and options from directive attribute value
        angular.extend(options, uiTinymceConfig, expression);
        setTimeout(function () {
          tinymce.init(options);
        });

        ngModel.$render = function() {
          if (!tinyInstance) {
            tinyInstance = tinymce.get(attrs.id);
          }
          if (tinyInstance) {
            tinyInstance.setContent(ngModel.$viewValue || '');
          }
        };

        scope.$on('$destroy', function() {
          if (!tinyInstance) { tinyInstance = tinymce.get(attrs.id); }
          if (tinyInstance) {
            tinyInstance.remove();
            tinyInstance = null;
          }
        });
      }
    };
  }]);
angular.module('common.tpls', ['directives/account-toolbar.html', 'directives/search-toolbar.html', 'directives/storage/image-link.html', 'directives/storage/image-only.html']);

angular.module('directives/account-toolbar.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('directives/account-toolbar.html',
    '<ul class="nav navbar-nav navbar-right">\n' +
    '  <li ng-if="isAuthenticated()" class="dropdown">\n' +
    '    <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{currentUser.name}} <b class="caret"></b></a>\n' +
    '    <ul class="dropdown-menu">\n' +
    '      <li><a href="/account">Felhasználói fiók</a></li>\n' +
    '      <li class="divider"></li>\n' +
    '      <li><a href="/account/edit">Módosítás</a></li>\n' +
    '      <li><a href="/account/change-password">Jelszócsere</a></li>\n' +
    '      <li><a href="/account/change-email">Új e-posta cím</a></li>\n' +
    '      <li class="divider"></li>\n' +
    '      <li><a href="" ng-click="logout()">Kilépés</a></li>\n' +
    '    </ul>\n' +
    '  </li>\n' +
    '  <li ng-if="!isAuthenticated()"><a href="/account/register"">Jelentkezés</a></li>\n' +
    '  <li ng-if="!isAuthenticated()"><a href="#" ng-click="login()">Belépés</a></li>\n' +
    '</ul>');
}]);

angular.module('directives/search-toolbar.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('directives/search-toolbar.html',
    '<div class="input-group">\n' +
    '  <div class="input-group-btn">\n' +
    '    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>\n' +
    '    <ul class="dropdown-menu" role="menu">\n' +
    '      <li data-target="beer"><a href="#">Sör</a></li>\n' +
    '      <li data-target="brewery"><a href="#">Sörfőzde</a></li>\n' +
    '    </ul>\n' +
    '  </div>\n' +
    '  <span class="input-group-addon">@</span>\n' +
    '  <input type="text" class="form-control"/>\n' +
    '  <span class="input-group-btn">\n' +
    '    <button class="btn btn-success" type="button"><span class="glyphicon glyphicon-search"></span></button>\n' +
    '  </span>\n' +
    '</div>\n' +
    '');
}]);

angular.module('directives/storage/image-link.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('directives/storage/image-link.html',
    '<a href="" ng-click="action()"><img src="{{src}}" alt="" class="{{css}}" /></a>');
}]);

angular.module('directives/storage/image-only.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('directives/storage/image-only.html',
    '<img src="{{src}}" alt="" class="{{css}}" />');
}]);

/**
 * Definition of the root module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Root, [

    // Angular modules
    MODULES.Bootstrap.Pagination,
    MODULES.Bootstrap.Tabs,
    MODULES.Bootstrap.Modal,
    MODULES.Bootstrap.ProgressBar,
    MODULES.Bootstrap.Templates,
    MODULES.TinyMCE,

    // 3rd Party Modules
    MODULES.I18Next,

    // Custom modules
    MODULES.RootTemplates,
    MODULES.Shared,
    MODULES.Account,
    MODULES.Beers,
    MODULES.Breweries,
    MODULES.Dashboard.Home
  ])

  /**
   * Defines routes for root.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider', 'ConfigurationProvider',
    function ($routeProvider, AuthorizationProvider, ConfigurationProvider) {
      console.log('Configuring ' + MODULES.Root + ' routes...');

      $routeProvider.when(URLS.Root, {
        redirectTo: StartPage,
        resolve: {
          isInitialized: ConfigurationProvider.Initialize
        }
      });
      $routeProvider.when(URLS.Home, {
        templateUrl: VIEWS.Home,
        controller: CONTROLLERS.Home
      });
      $routeProvider.when(URLS.About, {
        templateUrl: VIEWS.About,
        controller: CONTROLLERS.About
      });
      $routeProvider.when(URLS.NotFound, {
        templateUrl: VIEWS.NotFound
      });
    }]);

  /**
   * Configure the translation provider.
   */
  angular.module(MODULES.I18Next)
  .config([
    '$i18nextProvider',
    function ($i18nextProvider) {
      console.log('Configuring ' + MODULES.I18Next + ' translations...');

      $i18nextProvider.options = {
        lng: 'hu',
        useCookie: false,
        useLocalStorage: false,
        fallbackLng: 'hu',
        resGetPath: '/locales/__lng__/__ns__.json',
        ns: {
          namespaces: [
            'krigli', 'images', 'account',
            'malts', 'yeasts', 'hops', 'beer-types',
            'breweries', 'beers', 'users', 'regions'
          ],
          defaultNs: 'krigli'
        }
      };
    }
  ]);

  function StartPage (params, path, search) {
    var url = URLS.Home;
    if (search && search.url) {
      url = search.url;
    }
    return url;
  }
})();

/**
 * Controller for introduction.
 */
(function () {
  'use strict';

  angular.module(MODULES.Root)
    .controller(
      CONTROLLERS.About,
      ['$scope', fnController]
    );

  function fnController($scope) {

    $scope.info = '';
  }
})();

/**
 * Controller for cover content.
 */
(function () {
  'use strict';

  angular.module(MODULES.Root)
  .controller(
    CONTROLLERS.Home,
    ['$scope', 'Search', 'YT_event', fnController]
  );

  function fnController($scope, Search, YT_event) {

    // YouTube player initial settings.
    $scope.yt = {
      width: 600,
      height: 480,
      videoid: 'rpOCoMGNJfA',
      playerStatus: 'NOT PLAYING'
    };

    $scope.YT_event = YT_event;

    $scope.sendControlEvent = function (ctrlEvent) {
      this.$broadcast(ctrlEvent);
    };

    $scope.$on(YT_event.STATUS_CHANGE, function(event, data) {
      $scope.yt.playerStatus = data;
    });

    $scope.videos = [
      { id: 'rpOCoMGNJfA', title: 'Red Fang - Prehistoric Dog' },
      { id: 'CEnLwMVxjkM', title: 'Joe Bonamassa - If Heartaches Were Nickels - Live at the Beacon Theatre' },
      { id: 'R2I2mK_3_ns', title: 'Corrosion Of Conformity - Vote with a Bullet' }
    ];

    $scope.set = function (videoId) {
      $scope.yt.videoid = videoId;
    };

    // Initialize the view.
    Search.setup();
  }
})();

/**
 * Definition of the account module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Account, [
    // Angular modules
    // 3rd Party Modules
    // Custom modules
  ])

  /**
   * Defines routes for dashboard root.
   */
    .config([
      '$routeProvider', 'AuthorizationProvider',
      function ($routeProvider, AuthorizationProvider) {
        console.log('Configuring ' + MODULES.Account + ' routes...');

        $routeProvider.when(URLS.Account.Register, {
          templateUrl: VIEWS.Account.Register,
          controller: CONTROLLERS.Account.Register
        });
        $routeProvider.when(URLS.Account.ConfirmRegistration, {
          templateUrl: VIEWS.Account.ConfirmRegistration,
          controller: CONTROLLERS.Account.ConfirmRegistration
        });
        $routeProvider.when(URLS.Account.ForgottenPassword, {
          templateUrl: VIEWS.Account.ForgottenPassword,
          controller: CONTROLLERS.Account.ForgottenPassword
        });
        $routeProvider.when(URLS.Account.NewPassword, {
          templateUrl: VIEWS.Account.NewPassword,
          controller: CONTROLLERS.Account.NewPassword
        });
        $routeProvider.when(URLS.Account.Home, {
          templateUrl: VIEWS.Account.Home,
          controller: CONTROLLERS.Account.Home,
          resolve: {
            authenticatedUser: AuthorizationProvider.requireAuthenticatedUser
          }
        });
        $routeProvider.when(URLS.Account.Edit, {
          templateUrl: VIEWS.Account.Edit,
          controller: CONTROLLERS.Account.Edit,
          resolve: {
            authenticatedUser: AuthorizationProvider.requireAuthenticatedUser
          }
        });
        $routeProvider.when(URLS.Account.ChangePassword, {
          templateUrl: VIEWS.Account.ChangePassword,
          controller: CONTROLLERS.Account.ChangePassword,
          resolve: {
            authenticatedUser: AuthorizationProvider.requireAuthenticatedUser
          }
        });
        $routeProvider.when(URLS.Account.ChangeEmail, {
          templateUrl: VIEWS.Account.ChangeEmail,
          controller: CONTROLLERS.Account.ChangeEmail,
          resolve: {
            authenticatedUser: AuthorizationProvider.requireAuthenticatedUser
          }
        });
        $routeProvider.when(URLS.Account.ConfirmEmail, {
          templateUrl: VIEWS.Account.ConfirmEmail,
          controller: CONTROLLERS.Account.ConfirmEmail
        });
      }
    ]);
})();

/**
 * Controller for e-mail change.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.ChangeEmail,
    ['$scope', 'Security', 'Display', 'AccountData', fnController]
  );

  function fnController($scope, Security, Display, AccountData) {

    $scope.formTitle = Security.currentUser.name;
    $scope.account = {};
    $scope.success = false;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid;
    };

    // Change action.
    $scope.change = function () {
      AccountData.changeEmail($scope.account).then(function (data) {
        // Show what to do next.
        $scope.success = data;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show account details.
      Display(URLS.Account.Home);
    };
  }
})();

/**
 * Controller for password change.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.ChangePassword,
    ['$scope', 'Security', 'Display', 'AccountData', 'Messenger', fnController]
  );

  function fnController($scope, Security, Display, AccountData, Messenger) {

    $scope.formTitle = Security.currentUser.name;
    $scope.account = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid;
    };

    // Change action.
    $scope.change = function () {
      AccountData.changePassword($scope.account).then(function (data) {
        Messenger.successForNextRoute('account:changePassword.success');
        // Show account details.
        Display(URLS.Account.Home);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show account details.
      Display(URLS.Account.Home);
    };
  }
})();

/**
 * Controller for confirmation of new e-mail.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.ConfirmEmail,
    ['$scope', '$routeParams', 'Security', 'AccountData', 'Display', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Security, AccountData, Display, Messenger) {

    $scope.failure = false;

    // Check confirmation data.
    AccountData.confirmEmail($routeParams.code, $routeParams.token).then(function (data) {
      if (Security.setUserInfo(data)) {
        // Show success message.
        Messenger.successForNextRoute('account:confirmEmail.success');
        Display(URLS.Account.Home);
      } else {
        // Show that something went wrong.
        $scope.failure = true;
      }
    }, function () {
      // Show that something went wrong.
      $scope.failure = true;
    });
  }
})();

/**
 * Controller for confirmation of registration.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.ConfirmRegistration,
    ['$scope', '$routeParams', 'Security', 'AccountData', 'Display', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Security, AccountData, Display, Messenger) {

    $scope.failure = false;

    // Check confirmation data.
    AccountData.confirmRegistration($routeParams.code, $routeParams.token).then(function (data) {
      if (Security.setUserInfo(data)) {
        // Show success message.
        Messenger.successForNextRoute('account:confirmRegistration.success');
        Display(URLS.Home);
      } else {
        // Show that something went wrong.
        $scope.failure = true;
      }
    }, function () {
      // Show that something went wrong.
      $scope.failure = true;
    });
  }
})();

/**
 * Controller for account revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.Edit,
    ['$scope', '$routeParams', 'Display', 'AccountData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, AccountData, Messenger) {

    var master = {};
    $scope.formTitle = '';
    $scope.account = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.account, master);
    };

    // Retrieve account data.
    function readItem() {
      AccountData.read().then(function (data) {
        master = data;
        $scope.formTitle = data.name;
        $scope.account = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      AccountData.update($scope.account).then(function (data) {
        $scope.account = data;
        Messenger.successForNextRoute('account:edit.success');
        // Show account details.
        Display(URLS.Account.Home, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show account details.
      Display(URLS.Account.Home, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for forgotten password.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.ForgottenPassword,
    ['$scope', 'AccountData', fnController]
  );

  function fnController($scope, AccountData) {

    $scope.account = {};
    $scope.success = false;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid;
    };

    // Register action.
    $scope.continue = function () {
      AccountData.forgottenPassword($scope.account).then(function (data) {
        // Show what to do next.
        $scope.success = data;
      });
    };
  }
})();

/**
 * Controller for account details.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.Home,
    ['$scope', 'AccountData', 'Display', fnController]
  );

  function fnController($scope, AccountData, Display) {

    $scope.account = {};

    // Retrieve account data.
    function fetchItem() {
      AccountData.fetch().then(function (data) {
        $scope.account = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Account.Edit);
    };

    // Change password action.
    $scope.changePassword = function () {
      Display(URLS.Account.ChangePassword);
    };

    // Change email action.
    $scope.changeEmail = function () {
      Display(URLS.Account.ChangeEmail);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for entering credentials.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.Login,
    ['$scope', '$document', 'Security', 'LocalizedMessage', fnController]
  );

  function fnController($scope, $document, Security, LocalizedMessage) {

    // The model for this form.
    $scope.account = {};

    // Any error message from failing to login.
    $scope.authError = null;

    // The reason that we are being asked to login - for instance because
    // we tried to access something to which we are not authorized.
    // We could do something different for each reason here but to keep it simple...
    $scope.authReason = null;
    if (Security.getLoginReason()) {
      $scope.authReason = (Security.isAuthenticated()) ?
        LocalizedMessage('login.notAuthorized') :
        LocalizedMessage('login.notAuthenticated');
    }

    // Helper method.
    $scope.invalid = function () {
      return this.form.$invalid;
    };

    // Attempt to authenticate the user specified in the form's model
    $scope.login = function () {
      // Clear any previous security errors
      $scope.authError = null;

      // Try to login
      Security.login($scope.account).then(function (loggedIn) {
        if (!loggedIn) {
          // If we get here then the login failed due to bad credentials
          $scope.authError = LocalizedMessage('login.invalidCredentials');
        }
      }, function (response) {
        // If we get here then there was a problem with the login request to the server
        $scope.authError = LocalizedMessage(
          'login.serverError', { exception: response.data.error.message }
        );
      });
    };

    // Abandon login trial.
    $scope.cancel = function () {
      Security.cancelLogin();
    };

    // Create a new account.
    $scope.register = function () {
      Security.register(URLS.Account.Register);
    };

    // Case of forgotten password.
    $scope.forgotten = function () {
      Security.register(URLS.Account.ForgottenPassword);
    };

    // Fix auto-fill issues where Angular doesn't know about auto-filled inputs.
    setTimeout(function() {
      var form = angular.element($document[0].querySelector('#formLogin'));
      var fields = form.find('input[type="email"],input[type="password"]');
      fields.trigger('input').trigger('change').trigger('keydown');
      var groups = form.find('.form-group');
      groups.removeClass('has-error');
      var messages = form.find('.help-block');
      messages.addClass('ng-hide');
    }, 250);
  }
})();

/**
 * Controller for setting new password.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.NewPassword,
    ['$scope', '$routeParams', 'Security', 'Display', 'AccountData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Security, Display, AccountData, Messenger) {

    $scope.failure = false;
    $scope.account = {
      userCode: $routeParams.code,
      emailToken: $routeParams.token,
      newPassword: '',
      confirmNewPassword: ''
    };

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid;
    };

    // Save action.
    $scope.save = function () {
      AccountData.newPassword($scope.account).then(function (data) {
        if (data.user && data.token) {
          // Save authentication data.
          Security.currentUser = data.user;
          Security.userToken = data.token;
          // Show success message.
          Messenger.successForNextRoute('account:newPassword.success');
          Display(URLS.Account.Home);
        } else {
          // Show that something went wrong.
          $scope.failure = true;
        }
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show home page.
      Display(URLS.Home);
    };
  }
})();

/**
 * Controller for registration.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Account.Register,
    ['$scope', 'AccountData', fnController]
  );

  function fnController($scope, AccountData) {

    $scope.account = {};
    $scope.success = false;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid;
    };

    // Register action.
    $scope.register = function () {
      AccountData.register($scope.account).then(function (data) {
        $scope.account = data;
        // Show what to do next.
        $scope.success = true;
      });
    };
  }
})();

/**
 * Definition of the beer module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Beers, [])

  /**
   * Defines routes for beer pages.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Beers + ' routes...');

      $routeProvider.when(URLS.Beer.Home, {
        templateUrl: VIEWS.Beer.Home,
        controller: CONTROLLERS.Beer.Home
      });
      $routeProvider.when(URLS.Beer.Search, {
        templateUrl: VIEWS.Beer.Search,
        controller: CONTROLLERS.Beer.Search
      });
      $routeProvider.when(URLS.Beer.Show, {
        templateUrl: VIEWS.Beer.Show,
        controller: CONTROLLERS.Beer.Show
      });
    }
  ]);
})();

/**
 * Controller for beer index.
 */
(function () {
  'use strict';

  angular.module(MODULES.Beers)
  .controller(
    CONTROLLERS.Beer.Home,
    ['$scope', fnController]
  );

  function fnController($scope) {

  }
})();

/**
 * Controller for beer search.
 */
(function () {
  'use strict';

  angular.module(MODULES.Beers)
  .controller(
    CONTROLLERS.Beer.Search,
    ['$scope', 'Search', 'Display', 'BeerViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Search, Display, BeerViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItems = 0;

    // Create settings.
    $scope.settings = new ListSettings('beerName');
    $scope.settings.beerName = '';

    // Fetch malt list.
    function getList() {
      BeerViewData.search($scope.settings).then(function (data) {
        $scope.list = data;
        $scope.totalItems = data.length;
      });
//      BeerViewData.count($scope.settings).then(function (data) {
//        $scope.totalItems = data.count;
//      });
    }

    // Find action.
    $scope.find = function (phrase) {
      $scope.settings.beerName = phrase;
      $scope.settings.currentPage = 1;
      getList();
    };

//    // Sort action.
//    $scope.changeSort = function () {
//      $scope.settings.currentPage = 1;
//      getList();
//    };
//
//    // Pagination action.
//    $scope.selectPage = function (page) {
//      $scope.settings.currentPage = page;
//      getList();
//    };

    // Show action.
    $scope.show = function (beer) {
      // Show beer details.
      Display(URLS.Beer.Show, beer.beerCode);
    };

    // Initialize the view.
    Search.setup(SEARCH_TARGET.Beer, $scope.find);
  }
})();

/**
 * Controller for beer details.
 */
(function () {
  'use strict';

  angular.module(MODULES.Beers)
  .controller(
    CONTROLLERS.Beer.Show,
    ['$scope', '$routeParams', 'Display', 'BeerViewData', fnController]
  );

  function fnController($scope, $routeParams, Display, BeerViewData) {

    $scope.beer = {};

    // Retrieve beer data.
    function fetchItem() {
      BeerViewData.fetch($routeParams.key).then(function (data) {
        $scope.beer = data;
      });
    }

    // Upload image action.
    $scope.upload = function () {
      // Show beer image upload form.
//      Display(URLS.Beer.ImageUpload, $routeParams.key);
    };

    // Show image action.
    $scope.show = function (imageCode) {
      // Show beer image details.
//      Display(URLS.Beer.ImageShow, $routeParams.key, imageCode);
    };

    // Show references.
    $scope.showBrewery = function () {
      // Show brewery details.
//      Display(URLS.Brewery.Show, $scope.beer.breweryCode);
    };
    $scope.showBeerType = function () {
      // Show beer type details.
//      Display(URLS.BeerType.Show, $scope.beer.beerTypeCode);
    };
    $scope.showMalt = function (maltCode) {
      // Show malt details.
//      Display(URLS.Malt.Show, maltCode);
    };
    $scope.showYeast = function (yeastCode) {
      // Show yeast details.
//      Display(URLS.Yeast.Show, yeastCode);
    };
    $scope.showHop = function (hopCode) {
      // Show hop details.
//      Display(URLS.Hop.Show, hopCode);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Definition of the brewery module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Breweries, [])

  /**
   * Defines routes for brewery pages.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Breweries + ' routes...');

      $routeProvider.when(URLS.Brewery.Home, {
        templateUrl: VIEWS.Brewery.Home,
        controller: CONTROLLERS.Brewery.Home
      });
      $routeProvider.when(URLS.Brewery.Search, {
        templateUrl: VIEWS.Brewery.Search,
        controller: CONTROLLERS.Brewery.Search
      });
      $routeProvider.when(URLS.Brewery.Show, {
        templateUrl: VIEWS.Brewery.Show,
        controller: CONTROLLERS.Brewery.Show
      });
    }
  ]);
})();

/**
 * Controller for brewery index.
 */
(function () {
  'use strict';

  angular.module(MODULES.Breweries)
  .controller(
    CONTROLLERS.Brewery.Home,
    ['$scope', fnController]
  );

  function fnController($scope) {

  }
})();

/**
 * Controller for brewery search.
 */
(function () {
  'use strict';

  angular.module(MODULES.Breweries)
  .controller(
    CONTROLLERS.Brewery.Search,
    ['$scope', 'Search', 'Display', 'BreweryViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Search, Display, BreweryViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItems = 0;

    // Create settings.
    $scope.settings = new ListSettings('breweryName');
    $scope.settings.breweryName = '';

    // Fetch malt list.
    function getList() {
      BreweryViewData.search($scope.settings).then(function (data) {
        $scope.list = data;
        $scope.totalItems = data.length;
      });
//      BreweryViewData.count($scope.settings).then(function (data) {
//        $scope.totalItems = data.count;
//      });
    }

    // Find action.
    $scope.find = function (phrase) {
      $scope.settings.breweryName = phrase;
      $scope.settings.currentPage = 1;
      getList();
    };

//    // Sort action.
//    $scope.changeSort = function () {
//      $scope.settings.currentPage = 1;
//      getList();
//    };
//
//    // Pagination action.
//    $scope.selectPage = function (page) {
//      $scope.settings.currentPage = page;
//      getList();
//    };

    // Show action.
    $scope.show = function (brewery) {
      // Show malt details.
      Display(URLS.Brewery.Show, brewery.breweryCode);
    };

    // Initialize the view.
    Search.setup(SEARCH_TARGET.Brewery, $scope.find);
  }
})();

/**
 * Controller for brewery details.
 */
(function () {
  'use strict';

  angular.module(MODULES.Breweries)
  .controller(
    CONTROLLERS.Brewery.Show,
    ['$scope', '$routeParams', 'Display', 'BreweryViewData', fnController]
  );

  function fnController($scope, $routeParams, Display, BreweryViewData) {

    $scope.brewery = {};
    $scope.deleteDisabled = false;

    // Retrieve brewery data.
    function fetchItem() {
      BreweryViewData.fetch($routeParams.key).then(function (data) {
        $scope.brewery = data;
      });
    }

    // Upload image action.
    $scope.upload = function () {
      // Show brewery image upload form.
//      Display(URLS.Dashboard.Brewery.ImageUpload, $routeParams.key);
    };

    // Show image action.
    $scope.show = function (imageCode) {
      // Show brewery image details.
//      Display(URLS.Dashboard.Brewery.ImageShow, $routeParams.key, imageCode);
    };

    // Show references.
    $scope.showRegion = function () {
      // Show region details.
      var codes = $scope.brewery.regionCodes;
      switch (codes.length) {
        case 3:
          Display(URLS.Dashboard.Region.ProvinceShow, codes[0], codes[1], codes[2]);
          break;
        case 2:
          Display(URLS.Dashboard.Region.CountryShow, codes[0], codes[1]);
          break;
        case 1:
          Display(URLS.Dashboard.Region.Show, codes[0]);
          break;
        default:
      }
    };
    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Definition of the shared module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Shared, [
    // Angular modules
    // 3rd Party Modules
    // Custom modules
  ]);
})();

/**
 * Controller for beer type selection.
 */
(function () {
  'use strict';

  angular.module(MODULES.Shared)
  .controller(
    CONTROLLERS.Shared.ChooseBeerType,
    ['$scope', 'ChooseDialog', 'BeerTypeViewData', 'ListSettings', 'defaultValue', fnController]
  );

  function fnController($scope, ChooseDialog, BeerTypeViewData, ListSettings, defaultValue) {

    $scope.value = defaultValue;
    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('beerTypeName');
    $scope.settings.beerTypeName = '';

    // Fetch beer type list.
    function getList() {
      BeerTypeViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      BeerTypeViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Choose action.
    $scope.choose = function (beerType) {
      ChooseDialog.close(beerType);
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type details.
      ChooseDialog.close();
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for brewery selection.
 */
(function () {
  'use strict';

  angular.module(MODULES.Shared)
  .controller(
    CONTROLLERS.Shared.ChooseBrewery,
    ['$scope', 'ChooseDialog', 'BreweryViewData', 'ListSettings', 'defaultValue', fnController]
  );

  function fnController($scope, ChooseDialog, BreweryViewData, ListSettings, defaultValue) {

    $scope.value = defaultValue;
    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('breweryName');
    $scope.settings.breweryName = '';

    // Fetch brewery list.
    function getList() {
      BreweryViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      BreweryViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Choose action.
    $scope.choose = function (brewery) {
      ChooseDialog.close(brewery);
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type details.
      ChooseDialog.close();
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for hop selection.
 */
(function () {
  'use strict';

  angular.module(MODULES.Shared)
  .controller(
    CONTROLLERS.Shared.ChooseHops,
    ['$scope', 'ChooseDialog', 'HopViewData', 'ListSettings', 'defaultValue', fnController]
  );

  function fnController($scope, ChooseDialog, HopViewData, ListSettings, currentValues) {

    $scope.values = angular.copy(currentValues || []);
    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('hopName');
    $scope.settings.hopName = '';

    // Fetch hop list.
    function getList() {
      HopViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      HopViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Check if hop is selected yet.
    $scope.isSelected = function (hop) {
      return $scope.values.some(function (value) {
        return value.hopCode == hop.hopCode;
      });
    };

    // Choose action.
    $scope.choose = function (hop) {
      var value = {
        hopCode: hop.hopCode,
        hopName: hop.hopName
      };
      if (!$scope.isSelected(value)) {
        $scope.values.push(value);
      }
    };

    // Remove action.
    $scope.remove = function (value) {
      $scope.values = $scope.values.filter(function (item) {
        return item.hopCode != value.hopCode;
      });
    };

    // Finish action.
    $scope.finish = function () {
      ChooseDialog.close($scope.values);
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type details.
      ChooseDialog.close();
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for malt selection.
 */
(function () {
  'use strict';

  angular.module(MODULES.Shared)
  .controller(
    CONTROLLERS.Shared.ChooseMalts,
    ['$scope', 'ChooseDialog', 'MaltViewData', 'ListSettings', 'defaultValue', fnController]
  );

  function fnController($scope, ChooseDialog, MaltViewData, ListSettings, currentValues) {

    $scope.values = angular.copy(currentValues || []);
    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('maltName');
    $scope.settings.maltName = '';

    // Fetch malt list.
    function getList() {
      MaltViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      MaltViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Check if malt is selected yet.
    $scope.isSelected = function (malt) {
      return $scope.values.some(function (value) {
        return value.maltCode == malt.maltCode;
      });
    };

    // Choose action.
    $scope.choose = function (malt) {
      var value = {
        maltCode: malt.maltCode,
        maltName: malt.maltName
      };
      if (!$scope.isSelected(value)) {
        $scope.values.push(value);
      }
    };

    // Remove action.
    $scope.remove = function (value) {
      $scope.values = $scope.values.filter(function (item) {
        return item.maltCode != value.maltCode;
      });
    };

    // Finish action.
    $scope.finish = function () {
      ChooseDialog.close($scope.values);
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type details.
      ChooseDialog.close();
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for region selection.
 */
(function () {
  'use strict';

  angular.module(MODULES.Shared)
  .controller(
    CONTROLLERS.Shared.ChooseRegion,
    ['$scope', 'ChooseDialog', 'RegionViewData', 'defaultValue', fnController]
  );

  function fnController($scope, ChooseDialog, RegionViewData, defaultValue) {

    $scope.value = defaultValue;
    $scope.hasRegions = false;
    $scope.continents = {};
    $scope.country = null;

    var defaultHasFound = false;

    // Retrieve region data.
    function fetchAll() {
      RegionViewData.all().then(function (data) {
        // Set default tab.
        defaultHasFound = data.some(function(continent) {
          return continent.children.some(function(country) {
            if (country.regionCode == defaultValue) {
              continent.active = true;
              return true;
            } else if (country.children.length) {
              return country.children.some(function(region) {
                if (region.regionCode == defaultValue) {
                  continent.active = true;
                  $scope.hasRegions = true;
                  $scope.country = country;
                  return true;
                } else
                  return false;
              });
            } else
              return false;
          });
        });
        // Show data.
        $scope.continents = data;
      });
    }

    // Show regions action.
    $scope.showRegions = function(country) {
      $scope.hasRegions = true;
      $scope.country = country;
    };

    // Show countries action.
    $scope.showCountries = function() {
      if (defaultHasFound)
        defaultHasFound = false;
      else {
        $scope.hasRegions = false;
        $scope.country = null;
      }
    };

    // Choose action.
    $scope.choose = function (region) {
      ChooseDialog.close(region);
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type details.
      ChooseDialog.close();
    };

    // Initialize the view.
    fetchAll();
  }
})();

/**
 * Controller for yeast selection.
 */
(function () {
  'use strict';

  angular.module(MODULES.Shared)
  .controller(
    CONTROLLERS.Shared.ChooseYeasts,
    ['$scope', 'ChooseDialog', 'YeastViewData', 'ListSettings', 'defaultValue', fnController]
  );

  function fnController($scope, ChooseDialog, YeastViewData, ListSettings, currentValues) {

    $scope.values = angular.copy(currentValues || []);
    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('yeastName');
    $scope.settings.yeastName = '';

    // Fetch yeast list.
    function getList() {
      YeastViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      YeastViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Check if yeast is selected yet.
    $scope.isSelected = function (yeast) {
      return $scope.values.some(function (value) {
        return value.yeastCode == yeast.yeastCode;
      });
    };

    // Choose action.
    $scope.choose = function (yeast) {
      var value = {
        yeastCode: yeast.yeastCode,
        yeastName: yeast.yeastName
      };
      if (!$scope.isSelected(value)) {
        $scope.values.push(value);
      }
    };

    // Remove action.
    $scope.remove = function (value) {
      $scope.values = $scope.values.filter(function (item) {
        return item.yeastCode != value.yeastCode;
      });
    };

    // Finish action.
    $scope.finish = function () {
      ChooseDialog.close($scope.values);
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type details.
      ChooseDialog.close();
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for header.
 */
(function () {
  'use strict';

  angular.module(MODULES.Shared)
  .controller(CONTROLLERS.Shared.Header,
    ['$scope', '$location', '$http', 'Security', fnController]);
  //    ['$scope', '$location', '$route', 'security', 'breadcrumbs', 'notifications', 'httpRequestTracker',

  //    function ($scope, $location, $route, security, breadcrumbs, notifications, httpRequestTracker) {
  function fnController($scope, $location, $http, Security) {

    $scope.location = $location;
    //$scope.breadcrumbs = breadcrumbs;

    $scope.isAuthenticated = Security.isAuthenticated;
    $scope.isEditor = Security.isEditor;
    $scope.isSupervisor = Security.isSupervisor;

    $scope.home = function () {
      if (Security.isAuthenticated()) {
        $location.path('/dashboard');
      } else {
        $location.path('/');
      }
    };
    /*
     $scope.isNavbarActive = function (navBarPath) {
     return navBarPath === breadcrumbs.getFirst().name;
     };
     */
    $scope.hasPendingRequests = function () {
      //return httpRequestTracker.hasPendingRequests();
      return $http.pendingRequests.length > 0;
    };
  }
})();

angular.module('root.tpls', ['about.html', 'home.html', 'not-found.html', 'account/change-email.html', 'account/change-password.html', 'account/confirm-email.html', 'account/confirm-registration.html', 'account/edit.html', 'account/forgotten-password.html', 'account/index.html', 'account/login.html', 'account/new-password.html', 'account/register.html', 'beers/index.html', 'beers/search.html', 'beers/show.html', 'breweries/index.html', 'breweries/search.html', 'breweries/show.html', 'shared/choose-beer-type.html', 'shared/choose-brewery.html', 'shared/choose-hops.html', 'shared/choose-malts.html', 'shared/choose-region.html', 'shared/choose-yeasts.html', 'shared/header.html', 'shared/image-upload-1.html', 'shared/image-upload.html', 'shared/notifications.html']);

angular.module('about.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('about.html',
    '<h1>Névjegy</h1>\n' +
    '<p class="text-center">\n' +
    '    Mi folyik itt?\n' +
    '</p>\n' +
    '<p class="text-center">\n' +
    '  <img alt="" src="/images/krigli-large.png" />\n' +
    '</p>\n' +
    '<p class="text-center">\n' +
    '  Sör. Sör. Sör... És megint sör. Csak sör.\n' +
    '</p>\n' +
    '<p class="text-center">\n' +
    '    <a href="/">Csapjunk bele!</a>\n' +
    '</p>\n' +
    '');
}]);

angular.module('home.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('home.html',
    '<h1>Üdvözlünk a Krigli honlapon!</h1>\n' +
    '\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-offset-3 col-sm-6">\n' +
    '    <p><search-toolbar target="beer"></search-toolbar></p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<form validation-form name="form" class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <youtube width="{{yt.width}}" height="{{yt.height}}" videoid="{{yt.videoid}}"></youtube>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Videók:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="list-unstyled form-control-static">\n' +
    '          <li ng-repeat="video in videos">\n' +
    '            <a href="" ng-click="set(video.id)" ng-bind="video.title" ng-hide="video.id == yt.videoid"></a>\n' +
    '            <span ng-bind="video.title" ng-show="video.id == yt.videoid"></span>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('not-found.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('not-found.html',
    '<h1>404 Nem található</h1>\n' +
    '<p>\n' +
    '    A kért erőforrás nem található ezen a helyen.\n' +
    '</p>\n' +
    '');
}]);

angular.module('account/change-email.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/change-email.html',
    '<h1>E-posta cím módosítása</h1>\n' +
    '\n' +
    '<div ng-hide="success">\n' +
    '  <p>\n' +
    '    Az e-posta címe módosításához adja meg az újat:\n' +
    '  </p>\n' +
    '\n' +
    '  <form validation-form="account" name="form" novalidate class="form-horizontal">\n' +
    '    <fieldset>\n' +
    '      <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">E-posta:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="email" class="form-control width-5"\n' +
    '                 name="newEmail" ng-model="account.newEmail"\n' +
    '                 validation-source required ng-maxlength="100" ng-email autofocus>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <div class="col-sm-offset-2 col-sm-10">\n' +
    '          <button class="btn btn-primary" ng-click="change()" ng-disabled=\'invalid()\'>Módosítás</button>\n' +
    '          <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </fieldset>\n' +
    '  </form>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-show="success">\n' +
    '  <p>\n' +
    '    A megadott e-posta címre egy levelet küldtünk.\n' +
    '    A módosítás befejezéséhez kattintson a levélben található címre.\n' +
    '  </p>\n' +
    '</div>\n' +
    '');
}]);

angular.module('account/change-password.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/change-password.html',
    '<h1>Jelszócsere</h1>\n' +
    '\n' +
    '<p>\n' +
    '  A jelszava módosításához elősször adja meg a jelenlegi jelszavát, majd kétszer az újat:\n' +
    '</p>\n' +
    '\n' +
    '<form validation-form="account" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Jelenlegi jelszó:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="password" class="form-control width-5"\n' +
    '               name="oldPassword" ng-model="account.oldPassword"\n' +
    '               validation-source required autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Új jelszó:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="password" class="form-control width-5"\n' +
    '               name="newPassword" ng-model="account.newPassword"\n' +
    '               validation-source required ng-minlength="8">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Új jelszó ismét:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="password" class="form-control width-5"\n' +
    '               name="confirmNewPassword" ng-model="account.confirmNewPassword"\n' +
    '               validation-source required compare-to="account.newPassword">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="change()" ng-disabled=\'invalid()\'>Módosítás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('account/confirm-email.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/confirm-email.html',
    '<h1>E-posta cím megerősítése</h1>\n' +
    '\n' +
    '<div ng-show="failure">\n' +
    '  <p>\n' +
    '    Az új e-posta cím megerősítése nem sikerült.\n' +
    '  </p>\n' +
    '</div>\n' +
    '');
}]);

angular.module('account/confirm-registration.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/confirm-registration.html',
    '<h1>Jelentkezés megerősítése</h1>\n' +
    '\n' +
    '<div ng-show="failure">\n' +
    '  <p>\n' +
    '    A jelentkezés megerősítése nem sikerült.\n' +
    '  </p>\n' +
    '</div>\n' +
    '');
}]);

angular.module('account/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/edit.html',
    '<h1>Felhasználói fiók módosítása</h1>\n' +
    '\n' +
    '<form validation-form="account" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="accountName" ng-model="account.name"\n' +
    '               validation-source required ng-maxlength="50" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">E-posta:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="account.email"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('account/forgotten-password.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/forgotten-password.html',
    '<h1>Elfelejtett jelszó</h1>\n' +
    '\n' +
    '<div ng-hide="success">\n' +
    '  <p>\n' +
    '    Az új jelszó megadása előtt adja meg az e-posta címét:\n' +
    '  </p>\n' +
    '\n' +
    '  <form validation-form="account" name="form" novalidate class="form-horizontal">\n' +
    '    <fieldset>\n' +
    '      <legend></legend>\n' +
    '\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">E-posta:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="email" class="form-control width-5"\n' +
    '                 name="email" ng-model="account.email"\n' +
    '                 validation-source required ng-maxlength="100" ng-email autofocus>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <div class="col-sm-offset-2 col-sm-10">\n' +
    '          <button class="btn btn-primary" ng-click="continue()" ng-disabled=\'invalid()\'>Tovább</button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </fieldset>\n' +
    '  </form>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-show="success">\n' +
    '  <p>\n' +
    '    A megadott e-posta címre egy levelet küldtünk.\n' +
    '    Az új jelszó megadásához kattintson a levélben található címre.\n' +
    '    Az adott címet csak egyszer használhatja új jelszó megadására.\n' +
    '  </p>\n' +
    '</div>');
}]);

angular.module('account/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/index.html',
    '<h1>Felhasználói fiók</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="account.name"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="account.name"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">E-posta cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="account.email"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="changePassword()">Jelszócsere</button>\n' +
    '        <button type="button" class="btn btn-warning" ng-click="changeEmail()">Új e-posta cím</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('account/login.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/login.html',
    '<form validation-form="account" name="form" novalidate class="form-horizontal" id="formLogin">\n' +
    '  <fieldset>\n' +
    '    <div class="modal-header">\n' +
    '      <h4>Belépés</h4>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '      <div class="alert alert-warning" ng-show="authReason">{{authReason}}</div>\n' +
    '      <div class="alert alert-danger" ng-show="authError">{{authError}}</div>\n' +
    '      <p>Adja meg a belépési adatait:</p>\n' +
    '\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-3 control-label required">E-posta cím:</label>\n' +
    '        <div class="col-sm-6">\n' +
    '          <input type="email" class="form-control"\n' +
    '                 name="email" ng-model="account.email"\n' +
    '                 validation-source required ng-email autofocus>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-3 control-label required">Jelszó:</label>\n' +
    '        <div class="col-sm-6">\n' +
    '          <input type="password" class="form-control"\n' +
    '                 name="wordpass" ng-model="account.password"\n' +
    '                 validation-source required>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-footer">\n' +
    '      <button class="btn btn-primary" ng-click="login()" ng-disabled="invalid()">Belépés</button>\n' +
    '      <button class="btn btn-warning" ng-click="cancel()">Mégsem</button>\n' +
    '      <div class="pull-left">\n' +
    '        <button class="btn btn-default" ng-click="register()">Jelentkezés</button> &nbsp; &nbsp;\n' +
    '        <a class="form-control-static" href="" ng-click="forgotten()">Elfelejtette a jelszavát?</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('account/new-password.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/new-password.html',
    '<h1>Új jelszó megadása</h1>\n' +
    '\n' +
    '<div ng-hide="failure">\n' +
    '  <p>\n' +
    '    Adja meg az új jelszavát, majd ismételje meg:\n' +
    '  </p>\n' +
    '\n' +
    '  <form validation-form="account" name="form" novalidate class="form-horizontal">\n' +
    '    <fieldset>\n' +
    '      <legend></legend>\n' +
    '\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">Új jelszó:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="password" class="form-control width-5"\n' +
    '                 name="newPassword" ng-model="account.newPassword"\n' +
    '                 validation-source required ng-minlength="8" autofocus>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">Új jelszó ismét:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="password" class="form-control width-5"\n' +
    '                 name="confirmNewPassword" ng-model="account.confirmNewPassword"\n' +
    '                 validation-source required compare-to="account.newPassword">\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <div class="col-sm-offset-2 col-sm-10">\n' +
    '          <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '          <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </fieldset>\n' +
    '  </form>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-show="failure">\n' +
    '  <p>\n' +
    '    Az új jelszó megadása nem sikerült.\n' +
    '  </p>\n' +
    '</div>\n' +
    '');
}]);

angular.module('account/register.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('account/register.html',
    '<h1>Jelentkezés</h1>\n' +
    '\n' +
    '<div ng-hide="success">\n' +
    '  <p>\n' +
    '    A jelentkezéshez adja meg az alábbi adatokat:\n' +
    '  </p>\n' +
    '\n' +
    '  <form validation-form="account" name="form" novalidate class="form-horizontal">\n' +
    '    <fieldset>\n' +
    '      <legend></legend>\n' +
    '\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">Név:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control width-5"\n' +
    '                 name="userName" ng-model="account.userName"\n' +
    '                 validation-source required ng-maxlength="50" autofocus>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">E-posta:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="email" class="form-control width-5"\n' +
    '                 name="email" ng-model="account.email"\n' +
    '                 validation-source required ng-maxlength="100" ng-email>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">Jelszó:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="password" class="form-control width-5"\n' +
    '                 name="password1" ng-model="account.password"\n' +
    '                 validation-source required ng-minlength="8">\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">Jelszó ismét:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="password" class="form-control width-5"\n' +
    '                 name="password2" ng-model="account.confirmPassword"\n' +
    '                 validation-source required compare-to="account.password">\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <div class="col-sm-offset-2 col-sm-10">\n' +
    '          <button class="btn btn-primary" ng-click="register()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </fieldset>\n' +
    '  </form>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-show="success">\n' +
    '  <p>\n' +
    '    A jelentkezését megkaptuk. A megadott e-posta címre egy levelet küldtünk.\n' +
    '    A jelentkezés befejezéséhez kattintson a levélben található címre.\n' +
    '  </p>\n' +
    '</div>');
}]);

angular.module('beers/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('beers/index.html',
    '<h1>Sörök</h1>\n' +
    '\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-offset-3 col-sm-6">\n' +
    '    <p><search-toolbar target="beer"></search-toolbar></p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('beers/search.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('beers/search.html',
    '<h1>Sörök keresése</h1>\n' +
    '\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-offset-3 col-sm-6">\n' +
    '    <search-toolbar target="beer"></search-toolbar>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <ul class="list-unstyled">\n' +
    '    <li ng-repeat="beer in list" class="clearfix col-sm-4">\n' +
    '      <ks1-thumbnail code="{{beer.labelCode}}" default="label"></ks1-thumbnail>\n' +
    '      <a href="" ng-click="show(beer)">{{beer.beerName}}</a><br/>\n' +
    '      {{beer.breweryName}}\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő sör.</p>\n' +
    '');
}]);

angular.module('beers/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('beers/show.html',
    '<h1 ng-bind="beer.beerName"></h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Sörfőzde:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="showBrewery()" ng-bind="beer.breweryName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Sörtípus:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="showBeerType()" ng-bind="beer.beerTypeName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Címke:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ks-thumbnail ng-show="beer.labelCode" code="{{beer.labelCode}}" action="label()"></ks-thumbnail>\n' +
    '        <p ng-hide="beer.labelCode" class="form-control-static">\n' +
    '          <a href="" ng-click="label()">Feltöltés...</a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="beer.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Alkohol:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static" ng-bind="beer.abv">\n' +
    '          <span ng-bind="beer.abv"> % V/V\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">IBU:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static" ng-bind="beer.ibu"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Szárazanyag:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="beer.extract"></span> °B\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Kalória:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="beer.calories"></span>\n' +
    '          <span ng-bind="beer.caloriesUnit"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Maláták:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="malt in beer.malts">\n' +
    '            <a href="" ng-click="showMalt(malt.maltCode)" ng-bind="malt.maltName"></a>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Élesztők:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="yeast in beer.yeasts">\n' +
    '            <a href="" ng-click="showYeast(yeast.yeastCode)" ng-bind="yeast.yeastName"></a>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Komlók:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="hop in beer.hops">\n' +
    '            <a href="" ng-click="showHop(hop.hopCode)" ng-bind="hop.hopName"></a>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="upload()">Új kép...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="beer.images">\n' +
    '          <span ng-repeat="image in beer.images">\n' +
    '            <ks-thumbnail code="{{image.imageCode}}" action="show(image.imageCode)"></ks-thumbnail>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <p ng-hide="beer.images" class="bg-info">Ehhez a sörhöz nem tartozik kép.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('breweries/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('breweries/index.html',
    '<h1>Sörfőzdék</h1>\n' +
    '\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-offset-3 col-sm-6">\n' +
    '    <search-toolbar target="brewery"></search-toolbar>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('breweries/search.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('breweries/search.html',
    '<h1>Sörfőzdék keresése</h1>\n' +
    '\n' +
    '<div class="row">\n' +
    '  <div class="col-sm-offset-3 col-sm-6">\n' +
    '    <search-toolbar target="brewery"></search-toolbar>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <ul class="list-unstyled">\n' +
    '    <li ng-repeat="brewery in list" class="clearfix col-sm-4">\n' +
    '      <ks1-thumbnail code="{{brewery.logoCode}}" default="label"></ks1-thumbnail>\n' +
    '      <a href="" ng-click="show(brewery)">{{brewery.breweryName}}</a><br/>\n' +
    '      {{brewery.regionName}}\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő sörfőzde.</p>\n' +
    '');
}]);

angular.module('breweries/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('breweries/show.html',
    '<h1 ng-bind="brewery.breweryName"></h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.typeName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Ország, régió:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="showRegion()" ng-bind="brewery.regionName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.address"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Telefon:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.phone"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Honlap:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.webSite"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">E-posta:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.email"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Facebook:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.facebook"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Twitter:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.twitter"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="upload()">Új kép...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="brewery.images">\n' +
    '          <span ng-repeat="image in brewery.images">\n' +
    '            <ks-thumbnail code="{{image.imageCode}}" action="show(image.imageCode)"></ks-thumbnail>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <p ng-hide="brewery.images" class="bg-info">Ehhez a sörfözdéhez nem tartozik kép.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('shared/choose-beer-type.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/choose-beer-type.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <div class="pull-right">\n' +
    '      <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '    </div>\n' +
    '    <h4>Sörtípus választása</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '\n' +
    '    <div class="filter-inline">\n' +
    '      <label>Megnevezés:</label>\n' +
    '      <input type="text" class="form-control width-1" ng-model="settings.beerTypeName">\n' +
    '      <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '    </p>\n' +
    '\n' +
    '    <div ng-show="totalItems">\n' +
    '      <table class="table table-condensed table-striped">\n' +
    '        <thead>\n' +
    '        <tr>\n' +
    '          <th sort-column="beerTypeName">Megnevezés</th>\n' +
    '        </tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '        <tr ng-repeat="beerType in list">\n' +
    '          <td>\n' +
    '            <span ng-if="beerType.beerTypeCode == value" class="badge" ng-bind="beerType.beerTypeName"></span>\n' +
    '            <span ng-if="beerType.beerTypeCode != value">\n' +
    '              <a href="" ng-click="choose(beerType)" ng-bind="beerType.beerTypeName"></a>\n' +
    '            </span>\n' +
    '          </td>\n' +
    '        </tr>\n' +
    '        </tbody>\n' +
    '      </table>\n' +
    '\n' +
    '      <p class="text-center">\n' +
    '        <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                    previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                    boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '      </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő sörtípus.</p>\n' +
    '\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('shared/choose-brewery.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/choose-brewery.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <div class="pull-right">\n' +
    '      <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '    </div>\n' +
    '    <h4>Sörfőzde választása</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '\n' +
    '    <div class="filter-inline">\n' +
    '      <label>Megnevezés:</label>\n' +
    '      <input type="text" class="form-control width-1" ng-model="settings.breweryName">\n' +
    '      <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '\n' +
    '      <div ng-show="totalItems">\n' +
    '        <table class="table table-condensed table-striped">\n' +
    '          <thead>\n' +
    '          <tr>\n' +
    '            <th sort-column="breweryName">Megnevezés</th>\n' +
    '            <th sort-column="regionName">Ország</th>\n' +
    '          </tr>\n' +
    '          </thead>\n' +
    '          <tbody>\n' +
    '          <tr ng-repeat="brewery in list">\n' +
    '            <td>\n' +
    '              <span ng-if="brewery.breweryCode == value" class="badge" ng-bind="brewery.breweryName"></span>\n' +
    '              <span ng-if="brewery.breweryCode != value">\n' +
    '                <a href="" ng-click="choose(brewery)" ng-bind="brewery.breweryName"></a>\n' +
    '              </span>\n' +
    '            </td>\n' +
    '            <td><span ng-bind="brewery.regionName"></span></td>\n' +
    '          </tr>\n' +
    '          </tbody>\n' +
    '        </table>\n' +
    '\n' +
    '        <p class="text-center">\n' +
    '          <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                      previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                      boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '\n' +
    '      <p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő sörfőzde.</p>\n' +
    '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('shared/choose-hops.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/choose-hops.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <div class="filter-inline pull-right">\n' +
    '      <input type="text" class="form-control width-1" ng-model="settings.hopName">\n' +
    '      <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '    </div>\n' +
    '    <h4>Komlók választása</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '\n' +
    '    <div ng-show="totalItems">\n' +
    '      <table class="table table-choose">\n' +
    '        <tbody>\n' +
    '        <tr ng-repeat="rows in list | partition:2">\n' +
    '          <td ng-repeat="hop in rows">\n' +
    '            <span ng-if="isSelected(hop)" class="badge" ng-bind="hop.hopName"></span>\n' +
    '              <span ng-if="!isSelected(hop)">\n' +
    '                <a href="" ng-click="choose(hop)" ng-bind="hop.hopName"></a>\n' +
    '              </span>\n' +
    '          </td>\n' +
    '        </tr>\n' +
    '        </tbody>\n' +
    '      </table>\n' +
    '\n' +
    '      <div class="text-center">\n' +
    '        <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                    previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                    boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő komló.</div>\n' +
    '\n' +
    '    <div class="form-control-static">\n' +
    '      <span class="pull-right">Egy komlót a nevére kattintva törölhet a listából.</span>\n' +
    '      <label class="control-label">Választott komlók:</label>\n' +
    '    </div>\n' +
    '    <div class="form-control-static">\n' +
    '      <ul class="list-inline">\n' +
    '        <li ng-repeat="value in values"><a href="" ng-click="remove(value)" ng-bind="value.hopName"></a></li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-success" ng-click="finish()">Kész</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('shared/choose-malts.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/choose-malts.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <div class="filter-inline pull-right">\n' +
    '      <input type="text" class="form-control width-1" ng-model="settings.maltName">\n' +
    '      <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '    </div>\n' +
    '    <h4>Maláták választása</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '\n' +
    '    <div ng-show="totalItems">\n' +
    '      <table class="table table-choose">\n' +
    '        <tbody>\n' +
    '          <tr ng-repeat="rows in list | partition:2">\n' +
    '            <td ng-repeat="malt in rows">\n' +
    '              <span ng-if="isSelected(malt)" class="badge" ng-bind="malt.maltName"></span>\n' +
    '              <span ng-if="!isSelected(malt)">\n' +
    '                <a href="" ng-click="choose(malt)" ng-bind="malt.maltName"></a>\n' +
    '              </span>\n' +
    '            </td>\n' +
    '          </tr>\n' +
    '        </tbody>\n' +
    '      </table>\n' +
    '\n' +
    '      <div class="text-center">\n' +
    '        <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                    previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                    boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő maláta.</div>\n' +
    '\n' +
    '    <div class="form-control-static">\n' +
    '      <span class="pull-right">Egy malátát a nevére kattintva törölhet a listából.</span>\n' +
    '      <label class="control-label">Választott maláták:</label>\n' +
    '    </div>\n' +
    '    <div class="form-control-static">\n' +
    '      <ul class="list-inline">\n' +
    '        <li ng-repeat="value in values"><a href="" ng-click="remove(value)" ng-bind="value.maltName"></a></li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-success" ng-click="finish()">Kész</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('shared/choose-region.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/choose-region.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <div class="pull-right">\n' +
    '      <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '    </div>\n' +
    '    <h4>Régió választása</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <tabset class="tabs-choose">\n' +
    '      <tab ng-repeat="continent in continents"\n' +
    '           heading="{{continent.regionName}}"\n' +
    '           active="continent.active"\n' +
    '           select="showCountries()">\n' +
    '        <div ng-if="!hasRegions">\n' +
    '          <div>&nbsp;</div>\n' +
    '          <table class="table table-choose">\n' +
    '            <tbody>\n' +
    '              <tr ng-repeat="rows in continent.children | partition:2">\n' +
    '                <td ng-repeat="country in rows">\n' +
    '                  <span ng-if="!country.children.length">\n' +
    '                    <span ng-if="country.regionCode == value" class="badge">{{country.regionName}}</span>\n' +
    '                    <span ng-if="country.regionCode != value">\n' +
    '                      <a href="" ng-click="choose(country)">{{country.regionName}}</a>\n' +
    '                    </span>\n' +
    '                  </span>\n' +
    '                  <span ng-if="country.children.length">\n' +
    '                    <a href="" ng-click="showRegions(country)">\n' +
    '                      {{country.regionName}}\n' +
    '                      <span class="glyphicon glyphicon-arrow-right"></span>\n' +
    '                    </a>\n' +
    '                  </span>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <div ng-if="hasRegions">\n' +
    '          <table class="table table-choose">\n' +
    '            <thead>\n' +
    '              <tr>\n' +
    '                <th colspan="2">\n' +
    '                  <a href="" ng-click="showCountries()">\n' +
    '                    <span class="glyphicon glyphicon-arrow-left"></span>\n' +
    '                    {{country.regionName}}\n' +
    '                  </a>\n' +
    '                </th>\n' +
    '              </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '              <tr ng-repeat="rows in country.children | partition: 2">\n' +
    '                <td ng-repeat="region in rows">\n' +
    '                  <span ng-if="region.regionCode == value" class="badge">{{region.regionName}}</span>\n' +
    '                  <span ng-if="region.regionCode != value">\n' +
    '                    <a href="" ng-click="choose(region)">{{region.regionName}}</a>\n' +
    '                  </span>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '      </tab>\n' +
    '    </tabset>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('shared/choose-yeasts.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/choose-yeasts.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <div class="filter-inline pull-right">\n' +
    '      <input type="text" class="form-control width-1" ng-model="settings.yeastName">\n' +
    '      <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '    </div>\n' +
    '    <h4>Élesztők választása</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '\n' +
    '    <div ng-show="totalItems">\n' +
    '      <table class="table table-choose">\n' +
    '        <tbody>\n' +
    '        <tr ng-repeat="rows in list | partition:2">\n' +
    '          <td ng-repeat="yeast in rows">\n' +
    '            <span ng-if="isSelected(yeast)" class="badge" ng-bind="yeast.yeastName"></span>\n' +
    '              <span ng-if="!isSelected(yeast)">\n' +
    '                <a href="" ng-click="choose(yeast)" ng-bind="yeast.yeastName"></a>\n' +
    '              </span>\n' +
    '          </td>\n' +
    '        </tr>\n' +
    '        </tbody>\n' +
    '      </table>\n' +
    '\n' +
    '      <div class="text-center">\n' +
    '        <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                    previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                    boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő élesztő.</div>\n' +
    '\n' +
    '    <div class="form-control-static">\n' +
    '      <span class="pull-right">Egy élesztőt a nevére kattintva törölhet a listából.</span>\n' +
    '      <label class="control-label">Választott élesztők:</label>\n' +
    '    </div>\n' +
    '    <div class="form-control-static">\n' +
    '      <ul class="list-inline">\n' +
    '        <li ng-repeat="value in values"><a href="" ng-click="remove(value)" ng-bind="value.yeastName"></a></li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-success" ng-click="finish()">Kész</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('shared/header.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/header.html',
    '<div ng-controller="ctrl.shared.header">\n' +
    '  <div class="navbar navbar-green navbar-fixed-top" role="navigation">\n' +
    '    <div class="container">\n' +
    '      <div class="row">\n' +
    '        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">\n' +
    '          <div class="navbar-header">\n' +
    '            <a class="navbar-brand" href="/">Krigli</a>\n' +
    '          </div>\n' +
    '          <div class="collapse navbar-collapse">\n' +
    '            <div class="nav navbar-nav">\n' +
    '              <img src="/images/krigli-avatar.png" width="42" height="50" alt="Krigli">\n' +
    '            </div>\n' +
    '            <ul class="nav navbar-nav">\n' +
    '              <li class="active"><a href="/">Címlap</a></li>\n' +
    '              <li><a href="/beers">Sörök</a></li>\n' +
    '              <li><a href="/breweries">Főzdék</a></li>\n' +
    '              <li ng-if="isEditor()" class="dropdown">\n' +
    '                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Vezérlőpult <b class="caret"></b></a>\n' +
    '                <ul class="dropdown-menu">\n' +
    '                  <li><a href="/dashboard">Start</a></li>\n' +
    '                  <li class="divider"></li>\n' +
    '                  <li><a href="/dashboard/malts">Maláták</a></li>\n' +
    '                  <li><a href="/dashboard/yeasts">Élesztők</a></li>\n' +
    '                  <li><a href="/dashboard/hops">Komlók</a></li>\n' +
    '                  <li><a href="/dashboard/beer-types">Sörtípusok</a></li>\n' +
    '                  <li class="divider"></li>\n' +
    '                  <li><a href="/dashboard/breweries">Sörfőzdék</a></li>\n' +
    '                  <li><a href="/dashboard/beers">Sörök</a></li>\n' +
    '                  <li ng-if="isSupervisor()" class="divider"></li>\n' +
    '                  <li ng-if="isSupervisor()"><a href="/dashboard/users">Felhasználók</a></li>\n' +
    '                  <li ng-if="isSupervisor()"><a href="/dashboard/regions">Régiók</a></li>\n' +
    '                </ul>\n' +
    '              </li>\n' +
    '              <li><a href="/about">Névjegy</a></li>\n' +
    '            </ul>\n' +
    '            <div account-toolbar></div>\n' +
    '            <ul class="nav pull-right" ng-show="hasPendingRequests()">\n' +
    '              <li><img class="spinner" src="/images/spinner.gif"></li>\n' +
    '            </ul>\n' +
    '          </div><!-- .navbar-collapse -->\n' +
    '        </div><!-- .col-10 -->\n' +
    '      </div><!-- .row -->\n' +
    '    </div><!-- .container -->\n' +
    '  </div><!-- .navbar -->\n' +
    '</div>\n' +
    '');
}]);

angular.module('shared/image-upload-1.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/image-upload-1.html',
    '<div class="form-group" ng-show="showUpload()">\n' +
    '  <div class="col-sm-10 col-sm-offset-2">\n' +
    '    <file-upload\n' +
    '        auto-upload=\'true\'\n' +
    '        choose-file-button-text=\'Képválasztás\'\n' +
    '        choose-file-button-style=\'btn btn-success\'\n' +
    '        upload-file-button-text=\'\'\n' +
    '        upload-file-button-style=\'\'\n' +
    '        upload-file-button-id=\'uploader\'\n' +
    '        max-files=\'1\'\n' +
    '        max-file-size-mb=\'5\'\n' +
    '        on-file-chosen=\'fileChosen(files)\'\n' +
    '        get-upload-url=\'getUploadUrl()\'\n' +
    '        get-additional-data=\'getData(files)\'\n' +
    '        on-done=\'done(files, data)\'\n' +
    '        on-progress=\'progress(percentDone)\'\n' +
    '        on-error=\'error(files, type, msg)\'\n' +
    '        />\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group" ng-show="showUpload()">\n' +
    '  <label class="control-label col-sm-2">Előrehaladás:</label>\n' +
    '  <div class="col-sm-10">\n' +
    '    <p class="form-control-static">\n' +
    '      <progressbar class="progress-striped" value="percentDone" type="warning">{{percentDone}}%</progressbar>\n' +
    '    </p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '  <div class="col-sm-10 col-sm-offset-2">\n' +
    '    <blockquote class="help">\n' +
    '      <div>5 MB-nál nagyobb képet nem lehet feltölteni.</div>\n' +
    '      <div>A feltöltött képek legfeljebb 600 képpont szélességűre vagy magasságúra lesznek átalakítva.</div>\n' +
    '      <div>Az eredeti képek nem őrződnek meg.</div>\n' +
    '    </blockquote>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '  <div class="col-sm-10 col-sm-offset-2">\n' +
    '    <button class="btn btn-primary" ng-click="change()" ng-show="showChange()">Csere</button>\n' +
    '    <button class="btn btn-danger" ng-click="remove()" ng-show="showChange()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()" ng-show="showCancel()">Mégsem</button>\n' +
    '    <button class="btn btn-default" ng-click="back()">Vissza</button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('shared/image-upload.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/image-upload.html',
    '<div class="form-group">\n' +
    '  <div class="col-sm-10 col-sm-offset-2">\n' +
    '    <file-upload\n' +
    '        auto-upload=\'false\'\n' +
    '        choose-file-button-text=\'Képválasztás\'\n' +
    '        choose-file-button-style=\'btn btn-success\'\n' +
    '        upload-file-button-text=\'\'\n' +
    '        upload-file-button-style=\'\'\n' +
    '        upload-file-button-id=\'uploader\'\n' +
    '        max-files=\'10\'\n' +
    '        max-file-size-mb=\'5\'\n' +
    '        on-file-chosen=\'fileChosen(files)\'\n' +
    '        get-upload-url=\'getUploadUrl()\'\n' +
    '        get-additional-data=\'getData(files)\'\n' +
    '        on-done=\'done(files, data)\'\n' +
    '        on-progress=\'progress(percentDone)\'\n' +
    '        on-error=\'error(files, type, msg)\'\n' +
    '        />\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '  <label class="control-label col-sm-2">Választott képek:</label>\n' +
    '  <div class="col-sm-10">\n' +
    '    <ul class="form-control-static list-unstyled">\n' +
    '      <li ng-repeat="file in fileList">\n' +
    '        <span ng-bind="file.name"></span>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '  <label class="control-label col-sm-2">Előrehaladás:</label>\n' +
    '  <div class="col-sm-10">\n' +
    '    <p class="form-control-static">\n' +
    '      <progressbar class="progress-striped" value="percentDone" type="warning">{{percentDone}}%</progressbar>\n' +
    '    </p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '  <div class="col-sm-10 col-sm-offset-2">\n' +
    '    <button class="btn btn-primary" ng-disabled="form.$invalid || !fileList.length"\n' +
    '            onclick="$(\'#uploader\')[0].click()">Feltöltés</button>\n' +
    '    <button class="btn btn-default" ng-click="back()">Vissza</button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '  <div class="col-sm-10 col-sm-offset-2">\n' +
    '    <blockquote class="help">\n' +
    '      <div>Egyszerre legfeljebb 10 képet lehet feltölteni.</div>\n' +
    '      <div>5 MB-nál nagyobb képet nem lehet feltölteni.</div>\n' +
    '      <div>A feltöltött képek legfeljebb 600 képpont szélességűre vagy magasságúra lesznek átalakítva.</div>\n' +
    '      <div>Az eredeti képek nem őrződnek meg.</div>\n' +
    '    </blockquote>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('shared/notifications.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/notifications.html',
    '<div ng-class="[\'alert\', \'alert-\'+notification.type, \'alert-dismissable\', \'notification\']"\n' +
    '     ng-repeat="notification in notifications.getCurrent()">\n' +
    '  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
    '  {{notification.message}}\n' +
    '</div>\n' +
    '');
}]);

/**
 * Definition of the dashboard module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.Home, [

    // Angular modules

    // 3rd Party Modules

    // Custom modules
    MODULES.DashboardTemplates,
    MODULES.Dashboard.Malts,
    MODULES.Dashboard.Yeasts,
    MODULES.Dashboard.Hops,
    MODULES.Dashboard.Regions,
    MODULES.Dashboard.BeerTypes,
    MODULES.Dashboard.Breweries,
    MODULES.Dashboard.Beers,
    MODULES.Dashboard.Users
  ])

  /**
   * Defines routes for dashboard root.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.Home + ' routes...');

      $routeProvider.when(URLS.Dashboard.Home, {
        templateUrl: VIEWS.Dashboard.Home,
        controller: CONTROLLERS.Dashboard.Home,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.MailerTest, {
        templateUrl: VIEWS.Dashboard.MailerTest,
        controller: CONTROLLERS.Dashboard.MailerTest,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.ModelDefinitions, {
        templateUrl: VIEWS.Dashboard.ModelDefinitions,
        controller: CONTROLLERS.Dashboard.ModelDefinitions,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.SystemInfo, {
        templateUrl: VIEWS.Dashboard.SystemInfo,
        controller: CONTROLLERS.Dashboard.SystemInfo,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
    }
  ]);
})();

/**
 * Definition of the beer type maintenance module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.BeerTypes, [])

  /**
   * Defines routes for beer type maintenance.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.BeerTypes + ' routes...');

      $routeProvider.when(URLS.Dashboard.BeerType.List, {
        templateUrl: VIEWS.Dashboard.BeerType.List,
        controller: CONTROLLERS.Dashboard.BeerType.List,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.BeerType.Create, {
        templateUrl: VIEWS.Dashboard.BeerType.Create,
        controller: CONTROLLERS.Dashboard.BeerType.Create,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.BeerType.Show, {
        templateUrl: VIEWS.Dashboard.BeerType.Show,
        controller: CONTROLLERS.Dashboard.BeerType.Show,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.BeerType.Edit, {
        templateUrl: VIEWS.Dashboard.BeerType.Edit,
        controller: CONTROLLERS.Dashboard.BeerType.Edit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
    }
  ]);
})();

/**
 * Controller for beer type creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.BeerTypes)
  .controller(
    CONTROLLERS.Dashboard.BeerType.Create,
    ['$scope', 'Display', 'BeerTypeData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, Display, BeerTypeData, TinymceConfig, Messenger) {

    var master = {};
    $scope.beerType = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.beerType, master);
    };

    // Get a new beer type.
    function constructNew() {
      BeerTypeData.construct().then(function (data) {
        master = data;
        $scope.beerType = angular.copy(data);
      });
    }

    // Create action.
    $scope.create = function () {
      BeerTypeData.create($scope.beerType).then(function (data) {
        $scope.beerType = data;
        Messenger.successForNextRoute('beer-types:create.success', { name: data.beerTypeName });
        // Show beer type details.
        Display(URLS.Dashboard.BeerType.Show, data.beerTypeCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type list.
      Display(URLS.Dashboard.BeerType.List);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for beer type deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.BeerTypes)
  .controller(
    CONTROLLERS.Dashboard.BeerType.Delete,
    ['$scope', '$routeParams', 'DeleteDialog', 'BeerTypeData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, BeerTypeData, Messenger) {

    $scope.beerType = null;

    // Retrieve beer type data.
    function fetchItem() {
      BeerTypeData.read($routeParams.key).then(function (data) {
        $scope.beerType = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      BeerTypeData.remove($scope.beerType.beerTypeCode).then(function (data) {
        Messenger.successForNextRoute('beer-types:delete.success', { name: $scope.beerType.beerTypeName });
        // Show beer type list.
        DeleteDialog.close(URLS.Dashboard.BeerType.List);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for beer type revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.BeerTypes)
  .controller(
    CONTROLLERS.Dashboard.BeerType.Edit,
    ['$scope', '$routeParams', 'Display', 'BeerTypeData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, BeerTypeData, TinymceConfig, Messenger) {

    var master = {};
    $scope.formTitle = '';
    $scope.beerType = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.beerType, master);
    };

    // Retrieve beer type data.
    function readItem() {
      BeerTypeData.read($routeParams.key).then(function (data) {
        master = data;
        $scope.formTitle = data.beerTypeName;
        $scope.beerType = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      BeerTypeData.update($routeParams.key, $scope.beerType).then(function (data) {
        $scope.beerType = data;
        Messenger.successForNextRoute('beer-types:edit.success', { name: data.beerTypeName });
        // Show beer type details.
        Display(URLS.Dashboard.BeerType.Show, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer type details.
      Display(URLS.Dashboard.BeerType.Show, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for beer type list.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.BeerTypes)
  .controller(
    CONTROLLERS.Dashboard.BeerType.List,
    ['$scope', 'Display', 'BeerTypeViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Display, BeerTypeViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('beerTypeName');
    $scope.settings.beerTypeName = '';

    // Fetch beer type list.
    function getList() {
      BeerTypeViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      BeerTypeViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Create action.
    $scope.create = function () {
      // Show beer type creation form.
      Display(URLS.Dashboard.BeerType.Create);
    };

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Show action.
    $scope.show = function (beerType) {
      // Show beer type details.
      Display(URLS.Dashboard.BeerType.Show, beerType.beerTypeCode);
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for beer type display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.BeerTypes)
  .controller(
    CONTROLLERS.Dashboard.BeerType.Show,
    ['$scope', '$routeParams', 'Display', 'BeerTypeViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, BeerTypeViewData, DeleteDialog) {

    $scope.beerType = {};
    $scope.deleteDisabled = false;

    // Retrieve beer type data.
    function fetchItem() {
      BeerTypeViewData.fetch($routeParams.key).then(function (data) {
        $scope.beerType = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.BeerType.Edit, $routeParams.key);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.BeerType.Delete, CONTROLLERS.Dashboard.BeerType.Delete);
    };

    // Back action.
    $scope.back = function () {
      // Show beer type list.
      Display(URLS.Dashboard.BeerType.List);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Definition of the beer maintenance module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.Beers, [])

  /**
   * Defines routes for beer maintenance.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.Beers + ' routes...');

      $routeProvider.when(URLS.Dashboard.Beer.List, {
        templateUrl: VIEWS.Dashboard.Beer.List,
        controller: CONTROLLERS.Dashboard.Beer.List,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Beer.Create, {
        templateUrl: VIEWS.Dashboard.Beer.Create,
        controller: CONTROLLERS.Dashboard.Beer.Create,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Beer.Show, {
        templateUrl: VIEWS.Dashboard.Beer.Show,
        controller: CONTROLLERS.Dashboard.Beer.Show,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Beer.Edit, {
        templateUrl: VIEWS.Dashboard.Beer.Edit,
        controller: CONTROLLERS.Dashboard.Beer.Edit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });

      $routeProvider.when(URLS.Dashboard.Beer.ImageUpload, {
        templateUrl: VIEWS.Dashboard.Beer.ImageUpload,
        controller: CONTROLLERS.Dashboard.Beer.ImageUpload,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Beer.ImageShow, {
        templateUrl: VIEWS.Dashboard.Beer.ImageShow,
        controller: CONTROLLERS.Dashboard.Beer.ImageShow,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Beer.ImageEdit, {
        templateUrl: VIEWS.Dashboard.Beer.ImageEdit,
        controller: CONTROLLERS.Dashboard.Beer.ImageEdit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Beer.Label, {
        templateUrl: VIEWS.Dashboard.Beer.Label,
        controller: CONTROLLERS.Dashboard.Beer.Label,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
    }
  ]);
})();

/**
 * Controller for beer creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.Create,
    ['$scope', 'Display', 'BeerData', 'TinymceConfig', 'ChooseDialog', 'Messenger', fnController]
  );

  function fnController($scope, Display, BeerData, TinymceConfig, ChooseDialog, Messenger) {

    var master = {};
    $scope.beer = {};
    $scope.tinymceOptions = TinymceConfig.Default;
    $scope.breweryName = '--- választás ---';
    $scope.beerTypeName = '--- választás ---';

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.beer, master);
    };

    // Get a new beer.
    function constructNew() {
      BeerData.construct().then(function (data) {
        master = data;
        $scope.beer = angular.copy(data);
      });
    }

    // Choose brewery action.
    $scope.chooseBrewery = function () {
      // Show breweries.
      ChooseDialog.open(
        VIEWS.Shared.ChooseBrewery,
        CONTROLLERS.Shared.ChooseBrewery,
        $scope.beer.breweryCode,
        setBrewery
      );
    };

    function setBrewery(brewery) {
      if (brewery) {
        $scope.beer.breweryCode = brewery.breweryCode;
        $scope.breweryName = brewery.breweryName;
      }
    }

    // Choose beer type action.
    $scope.chooseBeerType = function () {
      // Show beer types.
      ChooseDialog.open(
        VIEWS.Shared.ChooseBeerType,
        CONTROLLERS.Shared.ChooseBeerType,
        $scope.beer.beerTypeCode,
        setBeerType
      );
    };

    function setBeerType(beerType) {
      if (beerType) {
        $scope.beer.beerTypeCode = beerType.beerTypeCode;
        $scope.beerTypeName = beerType.beerTypeName;
      }
    }

    // Choose malts action.
    $scope.chooseMalts = function () {
      // Show malts.
      ChooseDialog.open(
        VIEWS.Shared.ChooseMalts,
        CONTROLLERS.Shared.ChooseMalts,
        $scope.beer.malts,
        setMalts
      );
    };

    function setMalts(malts) {
      if (malts && malts.length)
        $scope.beer.malts = malts;
      else
        $scope.beer.malts = [];
    }

    // Choose yeasts action.
    $scope.chooseYeasts = function () {
      // Show yeasts.
      ChooseDialog.open(
        VIEWS.Shared.ChooseYeasts,
        CONTROLLERS.Shared.ChooseYeasts,
        $scope.beer.yeasts,
        setYeasts
      );
    };

    function setYeasts(yeasts) {
      if (yeasts && yeasts.length)
        $scope.beer.yeasts = yeasts;
      else
        $scope.beer.yeasts = [];
    }

    // Choose hops action.
    $scope.chooseHops = function () {
      ChooseDialog.open(
        VIEWS.Shared.ChooseHops,
        CONTROLLERS.Shared.ChooseHops,
        $scope.beer.hops,
        setHops
      );
    };

    function setHops(hops) {
      if (hops && hops.length)
        $scope.beer.hops = hops;
      else
        $scope.beer.hops = [];
    }

    // Create action.
    $scope.create = function () {
      BeerData.create($scope.beer).then(function (data) {
        $scope.beer = data;
        Messenger.successForNextRoute('beers:create.success', { name: data.beerName });
        // Show beer details.
        Display(URLS.Dashboard.Beer.Show, data.beerCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer list.
      Display(URLS.Dashboard.Beer.List);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for beer deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.Delete,
    ['$scope', '$routeParams', 'DeleteDialog', 'BeerData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, BeerData, Messenger) {

    $scope.beer = null;

    // Retrieve beer data.
    function fetchItem() {
      BeerData.read($routeParams.key).then(function (data) {
        $scope.beer = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      BeerData.remove($scope.beer.beerCode).then(function (data) {
        Messenger.successForNextRoute('beers:delete.success', { name: $scope.beer.beerName });
        // Show beer list.
        DeleteDialog.close(URLS.Dashboard.Beer.List);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for beer revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.Edit,
    ['$scope', '$routeParams', 'Display', 'BeerData', 'TinymceConfig', 'ChooseDialog', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, BeerData, TinymceConfig, ChooseDialog, Messenger) {

    var master = {};
    $scope.formTitle = '';
    $scope.beer = {};
    $scope.tinymceOptions = TinymceConfig.Default;
    $scope.breweryName = '';
    $scope.beerTypeName = '';

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.beer, master);
    };

    // Retrieve beer data.
    function readItem() {
      BeerData.read($routeParams.key).then(function (data) {
        master = data;
        $scope.formTitle = data.beerName;
        $scope.breweryName = data.breweryName;
        $scope.beerTypeName = data.beerTypeName;
        $scope.beer = angular.copy(data);
      });
    }

    // Choose brewery action.
    $scope.chooseBrewery = function () {
      // Show breweries.
      ChooseDialog.open(
        VIEWS.Shared.ChooseBrewery,
        CONTROLLERS.Shared.ChooseBrewery,
        $scope.beer.breweryCode,
        setBrewery
      );
    };

    function setBrewery(brewery) {
      if (brewery) {
        $scope.beer.breweryCode = brewery.breweryCode;
        $scope.breweryName = brewery.breweryName;
      }
    }

    // Choose beer type action.
    $scope.chooseBeerType = function () {
      // Show beer types.
      ChooseDialog.open(
        VIEWS.Shared.ChooseBeerType,
        CONTROLLERS.Shared.ChooseBeerType,
        $scope.beer.beerTypeCode,
        setBeerType
      );
    };

    function setBeerType(beerType) {
      if (beerType) {
        $scope.beer.beerTypeCode = beerType.beerTypeCode;
        $scope.beerTypeName = beerType.beerTypeName;
      }
    }

    // Choose malts action.
    $scope.chooseMalts = function () {
      // Show malts.
      ChooseDialog.open(
        VIEWS.Shared.ChooseMalts,
        CONTROLLERS.Shared.ChooseMalts,
        $scope.beer.malts,
        setMalts
      );
    };

    function setMalts(malts) {
      if (malts && malts.length)
        $scope.beer.malts = malts;
      else
        $scope.beer.malts = [];
    }

    // Choose yeasts action.
    $scope.chooseYeasts = function () {
      // Show yeasts.
      ChooseDialog.open(
        VIEWS.Shared.ChooseYeasts,
        CONTROLLERS.Shared.ChooseYeasts,
        $scope.beer.yeasts,
        setYeasts
      );
    };

    function setYeasts(yeasts) {
      if (yeasts && yeasts.length)
        $scope.beer.yeasts = yeasts;
      else
        $scope.beer.yeasts = [];
    }

    // Choose hops action.
    $scope.chooseHops = function () {
      ChooseDialog.open(
        VIEWS.Shared.ChooseHops,
        CONTROLLERS.Shared.ChooseHops,
        $scope.beer.hops,
        setHops
      );
    };

    function setHops(hops) {
      if (hops && hops.length)
        $scope.beer.hops = hops;
      else
        $scope.beer.hops = [];
    }

    // Save action.
    $scope.save = function () {
      BeerData.update($routeParams.key, $scope.beer).then(function (data) {
        $scope.beer = data;
        Messenger.successForNextRoute('beers:edit.success', { name: data.beerName });
        // Show beer details.
        Display(URLS.Dashboard.Beer.Show, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer details.
      Display(URLS.Dashboard.Beer.Show, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for beer image deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.ImageDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'ImageData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, ImageData, Messenger) {

    $scope.image = {};

    // Retrieve beer image data.
    function getItem() {
      ImageData.read($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      ImageData.remove($scope.image.imageCode).then(function (data) {
        Messenger.successForNextRoute('beers:imageDelete.success', { title: $scope.image.title });
        // Show beer details.
        DeleteDialog.close(URLS.Dashboard.Beer.Show, $routeParams.key);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer image details.
      DeleteDialog.close();
    };

    // Initialize the dialog.
    getItem();
  }
})();

/**
 * Controller for beer image revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.ImageEdit,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'ImageData', 'BeerViewData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, ImageData, BeerViewData, TinymceConfig, Messenger) {

    var master = {};
    $scope.data = {};
    $scope.beer = {};
    $scope.image = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.data, master);
    };

    // Retrieve beer image data.
    function fetchItem() {
      ImageViewData.fetch($routeParams.key2).then(function (view) {
        master = {
          title: view.title,
          description: view.description
        };
        $scope.data = angular.copy(master);
        $scope.image = angular.copy(view);
      });
      BeerViewData.fetch($routeParams.key).then(function (view) {
        $scope.beer = view;
      });
    }

    // Save action.
    $scope.save = function () {
      ImageData.update($routeParams.key2, $scope.data).then(function (data) {
        $scope.image = data;
        Messenger.successForNextRoute('beers:imageEdit.success', { title: data.title });
        // Show beer image details.
        Display(URLS.Dashboard.Beer.ImageShow, $routeParams.key, $routeParams.key2);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer image details.
      Display(URLS.Dashboard.Beer.ImageShow, $routeParams.key, $routeParams.key2);
    };

    // Initialize the form.
    fetchItem();
  }
})();

/**
 * Controller for beer image display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.ImageShow,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'BeerData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, BeerData, DeleteDialog) {

    $scope.beer = {};
    $scope.image = {};

    // Retrieve beer data.
    function fetchItem() {
      BeerData.read($routeParams.key).then(function (data) {
        $scope.beer = data;
      });
      ImageViewData.fetch($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Beer.ImageEdit, $routeParams.key, $routeParams.key2);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(
        VIEWS.Dashboard.Beer.ImageDelete,
        CONTROLLERS.Dashboard.Beer.ImageDelete
      );
    };

    // Back action.
    $scope.back = function () {
      // Show beer list.
      Display(URLS.Dashboard.Beer.Show, $routeParams.key);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for beer image upload.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.ImageUpload,
    ['$scope', '$routeParams', '$location', 'Display', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, $location, Display, Messenger) {

    $scope.fileList = [];
    $scope.percentDone = 0;

    $scope.fileChosen = function (files) {
      $scope.fileList = files;
      if (files.length) {
        $scope.percentDone = 0;
        Messenger.removeAll();
      }
    };

    $scope.getUploadUrl = function () {
      return API.Images.Upload;
    };

    $scope.getData = function (files) {
      // This data will be sent to the server with the files.
      return {
        type: IMG__REF_TYPE.Beer,
        key: $routeParams.key
      };
    };

    $scope.progress = function (percentDone) {
      $scope.percentDone = percentDone;
    };

    $scope.done = function (files, data) {
      console.log("Upload complete.");
      console.log("Data: " + JSON.stringify(data));
      writeFiles(files);
      Messenger.successForCurrentRoute('beers:imageUpload.success', { count: files.length });
    };

    $scope.error = function (files, type, msg) {
      console.log("Upload error: " + msg);
      console.log("Error type: " + type);
      writeFiles(files);
      Messenger.errorForCurrentRoute('beers:imageUpload.failure');
    };

    function writeFiles(files) {
      console.log('Files:');
      for (var i = 0; i < files.length; i++) {
        console.log('\t' + files[i].name);
      }
    }

    // Back action.
    $scope.back = function () {
      // Show beer details.
      Display(URLS.Dashboard.Beer.Show, $routeParams.key);
    };
  }
})();

/**
 * Controller for beer list.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.List,
    ['$scope', 'Display', 'BeerViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Display, BeerViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('beerName');
    $scope.settings.beerName = '';

    // Fetch beer list.
    function getList() {
      BeerViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      BeerViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Create action.
    $scope.create = function () {
      // Show beer creation form.
      Display(URLS.Dashboard.Beer.Create);
    };

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Show action.
    $scope.show = function (beer) {
      // Show beer details.
      Display(URLS.Dashboard.Beer.Show, beer.beerCode);
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for beer label deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.LabelDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'BeerData', 'ImageData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, BeerData, ImageData, Messenger) {

    $scope.beer = {};

    // Retrieve beer data.
    function readItem() {
      BeerData.read($routeParams.key).then(function (data) {
        $scope.beer = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      ImageData.remove($scope.beer.labelCode).then(function (data) {
        Messenger.successForCurrentRoute('beers:labelDelete.success');
        // Show beer label upload.
        DeleteDialog.close();
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show beer label details.
      DeleteDialog.close();
    };

    // Initialize the dialog.
    readItem();
  }
})();

/**
 * Controller for beer label maintenance.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.Label,
    ['$scope', '$routeParams', 'Display', 'BeerViewData', 'Messenger', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, BeerViewData, Messenger, DeleteDialog) {

    $scope.beer = null;
    $scope.fileList = [];
    $scope.percentDone = 0;

    // Upload methods.
    $scope.fileChosen = function (files) {
      $scope.fileList = files;
      if (files.length) {
        $scope.percentDone = 0;
        Messenger.removeAll();
      }
    };

    $scope.getUploadUrl = function () {
      return API.Images.Upload;
    };

    $scope.getData = function (files) {
      // This data will be sent to the server with the files.
      return {
        type: IMG__REF_TYPE.Label,
        key: $routeParams.key
      };
    };

    $scope.progress = function (percentDone) {
      $scope.percentDone = percentDone;
    };

    $scope.done = function (files, data) {
      console.log("Upload complete.");
      console.log("Data: " + JSON.stringify(data));
      writeFiles(files);
      Messenger.successForCurrentRoute('beers:labelUpload.success');
      // Show the result.
      inChangeMode = false;
      fetchItem();
    };

    $scope.error = function (files, type, msg) {
      console.log("Upload error: " + msg);
      console.log("Error type: " + type);
      writeFiles(files);
      Messenger.errorForCurrentRoute('beers:labelUpload.failure');
    };

    function writeFiles(files) {
      console.log('Files:');
      for (var i = 0; i < files.length; i++) {
        console.log('\t' + files[i].name);
      }
    }

    // Helper methods.
    var inChangeMode = false;
    $scope.showUpload = function () {
      return $scope.beer && (!$scope.beer.labelCode || inChangeMode);
    };
    $scope.showChange = function () {
      return $scope.beer && $scope.beer.labelCode && !inChangeMode;
    };
    $scope.showCancel = function () {
      return inChangeMode;
    };

    // Retrieve beer data.
    function fetchItem() {
      BeerViewData.fetch($routeParams.key).then(function (data) {
        $scope.beer = data;
      });
    }

    // Change action.
    $scope.change = function () {
      inChangeMode = true;
    };

    // Cancel action.
    $scope.cancel = function () {
      inChangeMode = false;
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      var dlg = DeleteDialog.open(
        VIEWS.Dashboard.Beer.LabelDelete,
        CONTROLLERS.Dashboard.Beer.LabelDelete,
        function(data) { fetchItem(); }
      );
    };

    // Back action.
    $scope.back = function () {
      // Show beer details.
      Display(URLS.Dashboard.Beer.Show, $routeParams.key);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for beer display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Beers)
  .controller(
    CONTROLLERS.Dashboard.Beer.Show,
    ['$scope', '$routeParams', 'Display', 'BeerViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, BeerViewData, DeleteDialog) {

    $scope.beer = {};
    $scope.deleteDisabled = false;

    // Retrieve beer data.
    function fetchItem() {
      BeerViewData.fetch($routeParams.key).then(function (data) {
        $scope.beer = data;
      });
    }

    // Label action.
    $scope.label = function () {
      Display(URLS.Dashboard.Beer.Label, $routeParams.key);
    };

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Beer.Edit, $routeParams.key);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.Beer.Delete, CONTROLLERS.Dashboard.Beer.Delete);
    };

    // Back action.
    $scope.back = function () {
      // Show beer list.
      Display(URLS.Dashboard.Beer.List);
    };

    // Upload image action.
    $scope.upload = function () {
      // Show beer image upload form.
      Display(URLS.Dashboard.Beer.ImageUpload, $routeParams.key);
    };

    // Show image action.
    $scope.show = function (imageCode) {
      // Show beer image details.
      Display(URLS.Dashboard.Beer.ImageShow, $routeParams.key, imageCode);
    };

    // Show references.
    $scope.showBrewery = function () {
      // Show brewery details.
      Display(URLS.Dashboard.Brewery.Show, $scope.beer.breweryCode);
    };
    $scope.showBeerType = function () {
      // Show beer type details.
      Display(URLS.Dashboard.BeerType.Show, $scope.beer.beerTypeCode);
    };
    $scope.showMalt = function (maltCode) {
      // Show malt details.
      Display(URLS.Dashboard.Malt.Show, maltCode);
    };
    $scope.showYeast = function (yeastCode) {
      // Show yeast details.
      Display(URLS.Dashboard.Yeast.Show, yeastCode);
    };
    $scope.showHop = function (hopCode) {
      // Show hop details.
      Display(URLS.Dashboard.Hop.Show, hopCode);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Definition of the brewery maintenance module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.Breweries, [])

  /**
   * Defines routes for brewery maintenance.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.Breweries + ' routes...');

      $routeProvider.when(URLS.Dashboard.Brewery.List, {
        templateUrl: VIEWS.Dashboard.Brewery.List,
        controller: CONTROLLERS.Dashboard.Brewery.List,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Brewery.Create, {
        templateUrl: VIEWS.Dashboard.Brewery.Create,
        controller: CONTROLLERS.Dashboard.Brewery.Create,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Brewery.Show, {
        templateUrl: VIEWS.Dashboard.Brewery.Show,
        controller: CONTROLLERS.Dashboard.Brewery.Show,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Brewery.Edit, {
        templateUrl: VIEWS.Dashboard.Brewery.Edit,
        controller: CONTROLLERS.Dashboard.Brewery.Edit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });

      $routeProvider.when(URLS.Dashboard.Brewery.ImageUpload, {
        templateUrl: VIEWS.Dashboard.Brewery.ImageUpload,
        controller: CONTROLLERS.Dashboard.Brewery.ImageUpload,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Brewery.ImageShow, {
        templateUrl: VIEWS.Dashboard.Brewery.ImageShow,
        controller: CONTROLLERS.Dashboard.Brewery.ImageShow,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Brewery.ImageEdit, {
        templateUrl: VIEWS.Dashboard.Brewery.ImageEdit,
        controller: CONTROLLERS.Dashboard.Brewery.ImageEdit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Brewery.Logo, {
        templateUrl: VIEWS.Dashboard.Brewery.Logo,
        controller: CONTROLLERS.Dashboard.Brewery.Logo,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
    }
  ]);
})();

/**
 * Controller for brewery creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
  .controller(
    CONTROLLERS.Dashboard.Brewery.Create,
    ['$scope', 'Display', 'BreweryData', 'ChooseDialog', 'Messenger', fnController]
  );

  function fnController($scope, Display, BreweryData, ChooseDialog, Messenger) {

    var master = {};
    $scope.brewery = {};
    $scope.regionName = '--- választás ---';

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.brewery, master);
    };

    // Get a new brewery.
    function constructNew() {
      BreweryData.construct().then(function (data) {
        master = data;
        $scope.brewery = angular.copy(data);
      });
    }

    // Choose region action.
    $scope.chooseRegion = function () {
      // Show regions.
      ChooseDialog.open(
        VIEWS.Shared.ChooseRegion,
        CONTROLLERS.Shared.ChooseRegion,
        $scope.brewery.regionCode,
        setRegion
      );
    };

    function setRegion(region) {
      if (region) {
        $scope.brewery.regionCode = region.regionCode;
        $scope.regionName = region.regionName;
      }
    }

    // Create action.
    $scope.create = function () {
      BreweryData.create($scope.brewery).then(function (data) {
        $scope.brewery = data;
        Messenger.successForNextRoute('breweries:create.success', { name: data.breweryName });
        // Show brewery details.
        Display(URLS.Dashboard.Brewery.Show, data.breweryCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show brewery list.
      Display(URLS.Dashboard.Brewery.List);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for brewery deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
  .controller(
    CONTROLLERS.Dashboard.Brewery.Delete,
    ['$scope', '$routeParams', 'DeleteDialog', 'BreweryData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, BreweryData, Messenger) {

    $scope.brewery = null;

    // Retrieve brewery data.
    function fetchItem() {
      BreweryData.read($routeParams.key).then(function (data) {
        $scope.brewery = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      BreweryData.remove($scope.brewery.breweryCode).then(function (data) {
        Messenger.successForNextRoute('breweries:delete.success', { name: $scope.brewery.breweryName });
        // Show brewery list.
        DeleteDialog.close(URLS.Dashboard.Brewery.List);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show brewery details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for brewery revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
  .controller(
    CONTROLLERS.Dashboard.Brewery.Edit,
    ['$scope', '$routeParams', 'Display', 'BreweryData', 'RegionViewData', 'ChooseDialog', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, BreweryData, RegionViewData, ChooseDialog, Messenger) {

    var master = {};
    $scope.formTitle = '';
    $scope.brewery = {};
    $scope.regionName = '';

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.brewery, master);
    };

    // Retrieve brewery data.
    function readItem() {
      BreweryData.read($routeParams.key).then(function (data) {
        master = data;
        $scope.formTitle = data.breweryName;
        $scope.brewery = angular.copy(data);
        fetchRegion(data.regionCode);
      });
    }

    // Retrieve region data.
    function fetchRegion(regionCode) {
      RegionViewData.fetch(regionCode).then(function (data) {
        $scope.regionName = data.regionName;
      });
    }

    // Choose region action.
    $scope.chooseRegion = function () {
      // Show regions.
      ChooseDialog.open(
        VIEWS.Shared.ChooseRegion,
        CONTROLLERS.Shared.ChooseRegion,
        $scope.brewery.regionCode,
        setRegion
      );
    };

    function setRegion(region) {
      if (region) {
        $scope.brewery.regionCode = region.regionCode;
        $scope.regionName = region.regionName;
      }
    }

    // Save action.
    $scope.save = function () {
      BreweryData.update($routeParams.key, $scope.brewery).then(function (data) {
        $scope.brewery = data;
        Messenger.successForNextRoute('breweries:edit.success', { name: data.breweryName });
        // Show brewery details.
        Display(URLS.Dashboard.Brewery.Show, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show brewery details.
      Display(URLS.Dashboard.Brewery.Show, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for brewery image deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
    .controller(
    CONTROLLERS.Dashboard.Brewery.ImageDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'ImageData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, ImageData, Messenger) {

    $scope.image = {};

    // Retrieve brewery image data.
    function getItem() {
      ImageData.read($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      ImageData.remove($scope.image.imageCode).then(function (data) {
        Messenger.successForNextRoute('breweries:imageDelete.success', { title: $scope.image.title });
        // Show brewery details.
        DeleteDialog.close(URLS.Dashboard.Brewery.Show, $routeParams.key);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show brewery image details.
      DeleteDialog.close();
    };

    // Initialize the dialog.
    getItem();
  }
})();

/**
 * Controller for brewery image revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
    .controller(
    CONTROLLERS.Dashboard.Brewery.ImageEdit,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'ImageData', 'BreweryViewData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, ImageData, BreweryViewData, TinymceConfig, Messenger) {

    var master = {};
    $scope.data = {};
    $scope.brewery = {};
    $scope.image = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.data, master);
    };

    // Retrieve brewery image data.
    function fetchItem() {
      ImageViewData.fetch($routeParams.key2).then(function (view) {
        master = {
          title: view.title,
          description: view.description
        };
        $scope.data = angular.copy(master);
        $scope.image = angular.copy(view);
      });
      BreweryViewData.fetch($routeParams.key).then(function (view) {
        $scope.brewery = view;
      });
    }

    // Save action.
    $scope.save = function () {
      ImageData.update($routeParams.key2, $scope.data).then(function (data) {
        $scope.image = data;
        Messenger.successForNextRoute('breweries:imageEdit.success', { title: data.title });
        // Show brewery image details.
        Display(URLS.Dashboard.Brewery.ImageShow, $routeParams.key, $routeParams.key2);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show brewery image details.
      Display(URLS.Dashboard.Brewery.ImageShow, $routeParams.key, $routeParams.key2);
    };

    // Initialize the form.
    fetchItem();
  }
})();

/**
 * Controller for brewery image display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
    .controller(
    CONTROLLERS.Dashboard.Brewery.ImageShow,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'BreweryData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, BreweryData, DeleteDialog) {

    $scope.brewery = {};
    $scope.image = {};

    // Retrieve brewery data.
    function fetchItem() {
      BreweryData.read($routeParams.key).then(function (data) {
        $scope.brewery = data;
      });
      ImageViewData.fetch($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Brewery.ImageEdit, $routeParams.key, $routeParams.key2);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(
        VIEWS.Dashboard.Brewery.ImageDelete,
        CONTROLLERS.Dashboard.Brewery.ImageDelete
      );
    };

    // Back action.
    $scope.back = function () {
      // Show brewery list.
      Display(URLS.Dashboard.Brewery.Show, $routeParams.key);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for brewery image upload.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
    .controller(
    CONTROLLERS.Dashboard.Brewery.ImageUpload,
    ['$scope', '$routeParams', '$location', 'Display', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, $location, Display, Messenger) {

    $scope.fileList = [];
    $scope.percentDone = 0;

    $scope.fileChosen = function (files) {
      $scope.fileList = files;
      if (files.length) {
        $scope.percentDone = 0;
        Messenger.removeAll();
      }
    };

    $scope.getUploadUrl = function () {
      return API.Images.Upload;
    };

    $scope.getData = function (files) {
      // This data will be sent to the server with the files.
      return {
        type: IMG__REF_TYPE.Brewery,
        key: $routeParams.key
      };
    };

    $scope.progress = function (percentDone) {
      $scope.percentDone = percentDone;
    };

    $scope.done = function (files, data) {
      console.log("Upload complete.");
      console.log("Data: " + JSON.stringify(data));
      writeFiles(files);
      Messenger.successForCurrentRoute('breweries:imageUpload.success', { count: files.length });
    };

    $scope.error = function (files, type, msg) {
      console.log("Upload error: " + msg);
      console.log("Error type: " + type);
      writeFiles(files);
      Messenger.errorForCurrentRoute('breweries:imageUpload.failure');
    };

    function writeFiles(files) {
      console.log('Files:');
      for (var i = 0; i < files.length; i++) {
        console.log('\t' + files[i].name);
      }
    }

    // Back action.
    $scope.back = function () {
      // Show brewery details.
      Display(URLS.Dashboard.Brewery.Show, $routeParams.key);
    };
  }
})();

/**
 * Controller for brewery list.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
  .controller(
    CONTROLLERS.Dashboard.Brewery.List,
    ['$scope', 'Display', 'BreweryViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Display, BreweryViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('breweryName');
    $scope.settings.breweryName = '';

    // Fetch brewery list.
    function getList() {
      BreweryViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      BreweryViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Create action.
    $scope.create = function () {
      // Show brewery creation form.
      Display(URLS.Dashboard.Brewery.Create);
    };

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Show action.
    $scope.show = function (brewery) {
      // Show brewery details.
      Display(URLS.Dashboard.Brewery.Show, brewery.breweryCode);
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for brewery logo deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
  .controller(
    CONTROLLERS.Dashboard.Brewery.LogoDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'BreweryData', 'ImageData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, BreweryData, ImageData, Messenger) {

    $scope.beer = {};

    // Retrieve brewery data.
    function readItem() {
      BreweryData.read($routeParams.key).then(function (data) {
        $scope.brewery = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      ImageData.remove($scope.brewery.logoCode).then(function (data) {
        Messenger.successForCurrentRoute('breweries:logoDelete.success');
        // Show brewery logo upload.
        DeleteDialog.close();
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show brewery logo details.
      DeleteDialog.close();
    };

    // Initialize the dialog.
    readItem();
  }
})();

/**
 * Controller for brewery logo maintenance.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
  .controller(
    CONTROLLERS.Dashboard.Brewery.Logo,
    ['$scope', '$routeParams', 'Display', 'BreweryViewData', 'Messenger', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, BreweryViewData, Messenger, DeleteDialog) {

    $scope.brewery = null;
    $scope.fileList = [];
    $scope.percentDone = 0;

    // Upload methods.
    $scope.fileChosen = function (files) {
      $scope.fileList = files;
      if (files.length) {
        $scope.percentDone = 0;
        Messenger.removeAll();
      }
    };

    $scope.getUploadUrl = function () {
      return API.Images.Upload;
    };

    $scope.getData = function (files) {
      // This data will be sent to the server with the files.
      return {
        type: IMG__REF_TYPE.Logo,
        key: $routeParams.key
      };
    };

    $scope.progress = function (percentDone) {
      $scope.percentDone = percentDone;
    };

    $scope.done = function (files, data) {
      console.log("Upload complete.");
      console.log("Data: " + JSON.stringify(data));
      writeFiles(files);
      Messenger.successForCurrentRoute('breweries:logoUpload.success');
      // Show the result.
      inChangeMode = false;
      fetchItem();
    };

    $scope.error = function (files, type, msg) {
      console.log("Upload error: " + msg);
      console.log("Error type: " + type);
      writeFiles(files);
      Messenger.errorForCurrentRoute('breweries:logoUpload.failure');
    };

    function writeFiles(files) {
      console.log('Files:');
      for (var i = 0; i < files.length; i++) {
        console.log('\t' + files[i].name);
      }
    }

    // Helper methods.
    var inChangeMode = false;
    $scope.showUpload = function () {
      return $scope.brewery && (!$scope.brewery.logoCode || inChangeMode);
    };
    $scope.showChange = function () {
      return $scope.brewery && $scope.brewery.logoCode && !inChangeMode;
    };
    $scope.showCancel = function () {
      return inChangeMode;
    };

    // Retrieve brewery data.
    function fetchItem() {
      BreweryViewData.fetch($routeParams.key).then(function (data) {
        $scope.brewery = data;
      });
    }

    // Change action.
    $scope.change = function () {
      inChangeMode = true;
    };

    // Cancel action.
    $scope.cancel = function () {
      inChangeMode = false;
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      var dlg = DeleteDialog.open(
        VIEWS.Dashboard.Brewery.LogoDelete,
        CONTROLLERS.Dashboard.Brewery.LogoDelete,
        function(data) { fetchItem(); }
      );
    };

    // Back action.
    $scope.back = function () {
      // Show brewery details.
      Display(URLS.Dashboard.Brewery.Show, $routeParams.key);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for brewery display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Breweries)
  .controller(
    CONTROLLERS.Dashboard.Brewery.Show,
    ['$scope', '$routeParams', 'Display', 'BreweryViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, BreweryViewData, DeleteDialog) {

    $scope.brewery = {};
    $scope.deleteDisabled = false;

    // Retrieve brewery data.
    function fetchItem() {
      BreweryViewData.fetch($routeParams.key).then(function (data) {
        $scope.brewery = data;
      });
    }

    // Logo action.
    $scope.logo = function () {
      Display(URLS.Dashboard.Brewery.Logo, $routeParams.key);
    };

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Brewery.Edit, $routeParams.key);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.Brewery.Delete, CONTROLLERS.Dashboard.Brewery.Delete);
    };

    // Back action.
    $scope.back = function () {
      // Show brewery list.
      Display(URLS.Dashboard.Brewery.List);
    };

    // Upload image action.
    $scope.upload = function () {
      // Show brewery image upload form.
      Display(URLS.Dashboard.Brewery.ImageUpload, $routeParams.key);
    };

    // Show image action.
    $scope.show = function (imageCode) {
      // Show brewery image details.
      Display(URLS.Dashboard.Brewery.ImageShow, $routeParams.key, imageCode);
    };

    // Show references.
    $scope.showRegion = function () {
      // Show region details.
      var codes = $scope.brewery.regionCodes;
      switch (codes.length) {
        case 3:
          Display(URLS.Dashboard.Region.ProvinceShow, codes[0], codes[1], codes[2]);
          break;
        case 2:
          Display(URLS.Dashboard.Region.CountryShow, codes[0], codes[1]);
          break;
        case 1:
          Display(URLS.Dashboard.Region.Show, codes[0]);
          break;
        default:
      }
    };
    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Definition of the hop maintenance module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.Hops, [])

  /**
   * Defines routes for hop maintenance.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.Hops + ' routes...');

      $routeProvider.when(URLS.Dashboard.Hop.List, {
        templateUrl: VIEWS.Dashboard.Hop.List,
        controller: CONTROLLERS.Dashboard.Hop.List,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Hop.Create, {
        templateUrl: VIEWS.Dashboard.Hop.Create,
        controller: CONTROLLERS.Dashboard.Hop.Create,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Hop.Show, {
        templateUrl: VIEWS.Dashboard.Hop.Show,
        controller: CONTROLLERS.Dashboard.Hop.Show,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Hop.Edit, {
        templateUrl: VIEWS.Dashboard.Hop.Edit,
        controller: CONTROLLERS.Dashboard.Hop.Edit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });

      $routeProvider.when(URLS.Dashboard.Hop.ImageUpload, {
        templateUrl: VIEWS.Dashboard.Hop.ImageUpload,
        controller: CONTROLLERS.Dashboard.Hop.ImageUpload,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Hop.ImageShow, {
        templateUrl: VIEWS.Dashboard.Hop.ImageShow,
        controller: CONTROLLERS.Dashboard.Hop.ImageShow,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Hop.ImageEdit, {
        templateUrl: VIEWS.Dashboard.Hop.ImageEdit,
        controller: CONTROLLERS.Dashboard.Hop.ImageEdit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
    }
  ]);
})();

/**
 * Controller for hop creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.Create,
    ['$scope', 'Display', 'HopData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, Display, HopData, TinymceConfig, Messenger) {

    var master = {};
    $scope.hop = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.hop, master);
    };

    // Get a new hop.
    function constructNew() {
      HopData.construct().then(function (data) {
        master = data;
        $scope.hop = angular.copy(data);
      });
    }

    // Create action.
    $scope.create = function () {
      HopData.create($scope.hop).then(function (data) {
        $scope.hop = data;
        Messenger.successForNextRoute('hops:create.success', { name: data.hopName });
        // Show hop details.
        Display(URLS.Dashboard.Hop.Show, data.hopCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show hop list.
      Display(URLS.Dashboard.Hop.List);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for hop deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.Delete,
    ['$scope', '$routeParams', 'DeleteDialog', 'HopData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, HopData, Messenger) {

    $scope.hop = null;

    // Retrieve hop data.
    function fetchItem() {
      HopData.read($routeParams.key).then(function (data) {
        $scope.hop = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      HopData.remove($scope.hop.hopCode).then(function (data) {
        Messenger.successForNextRoute('hops:delete.success', { name: $scope.hop.hopName });
        // Show hop list.
        DeleteDialog.close(URLS.Dashboard.Hop.List);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show hop details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for hop revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.Edit,
    ['$scope', '$routeParams', 'Display', 'HopData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, HopData, TinymceConfig, Messenger) {

    var master = {};
    $scope.formTitle = '';
    $scope.hop = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.hop, master);
    };

    // Retrieve hop data.
    function readItem() {
      HopData.read($routeParams.key).then(function (data) {
        master = data;
        $scope.formTitle = data.hopName;
        $scope.hop = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      HopData.update($routeParams.key, $scope.hop).then(function (data) {
        $scope.hop = data;
        Messenger.successForNextRoute('hops:edit.success', { name: data.hopName });
        // Show hop details.
        Display(URLS.Dashboard.Hop.Show, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show hop details.
      Display(URLS.Dashboard.Hop.Show, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for hop image deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.ImageDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'ImageData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, ImageData, Messenger) {

    $scope.image = {};

    // Retrieve hop image data.
    function getItem() {
      ImageData.read($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      ImageData.remove($scope.image.imageCode).then(function (data) {
        Messenger.successForNextRoute('hops:imageDelete.success', { title: $scope.image.title });
        // Show hop details.
        DeleteDialog.close(URLS.Dashboard.Hop.Show, $routeParams.key);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show hop image details.
      DeleteDialog.close();
    };

    // Initialize the dialog.
    getItem();
  }
})();

/**
 * Controller for hop image revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.ImageEdit,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'ImageData', 'HopViewData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, ImageData, HopViewData, TinymceConfig, Messenger) {

    var master = {};
    $scope.data = {};
    $scope.hop = {};
    $scope.image = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.data, master);
    };

    // Retrieve hop image data.
    function fetchItem() {
      ImageViewData.fetch($routeParams.key2).then(function (view) {
        master = {
          title: view.title,
          description: view.description
        };
        $scope.data = angular.copy(master);
        $scope.image = angular.copy(view);
      });
      HopViewData.fetch($routeParams.key).then(function (view) {
        $scope.hop = view;
      });
    }

    // Save action.
    $scope.save = function () {
      ImageData.update($routeParams.key2, $scope.data).then(function (data) {
        $scope.image = data;
        Messenger.successForNextRoute('hops:imageEdit.success', { title: data.title });
        // Show hop image details.
        Display(URLS.Dashboard.Hop.ImageShow, $routeParams.key, $routeParams.key2);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show hop image details.
      Display(URLS.Dashboard.Hop.ImageShow, $routeParams.key, $routeParams.key2);
    };

    // Initialize the form.
    fetchItem();
  }
})();

/**
 * Controller for hop image display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.ImageShow,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'HopData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, HopData, DeleteDialog) {

    $scope.hop = {};
    $scope.image = {};

    // Retrieve hop data.
    function fetchItem() {
      HopData.read($routeParams.key).then(function (data) {
        $scope.hop = data;
      });
      ImageViewData.fetch($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Hop.ImageEdit, $routeParams.key, $routeParams.key2);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(
        VIEWS.Dashboard.Hop.ImageDelete,
        CONTROLLERS.Dashboard.Hop.ImageDelete
      );
    };

    // Back action.
    $scope.back = function () {
      // Show hop list.
      Display(URLS.Dashboard.Hop.Show, $routeParams.key);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for hop image upload.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.ImageUpload,
    ['$scope', '$routeParams', '$location', 'Display', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, $location, Display, Messenger) {

    $scope.fileList = [];
    $scope.percentDone = 0;

    $scope.fileChosen = function (files) {
      $scope.fileList = files;
      if (files.length) {
        $scope.percentDone = 0;
        Messenger.removeAll();
      }
    };

    $scope.getUploadUrl = function () {
      return API.Images.Upload;
    };

    $scope.getData = function (files) {
      // This data will be sent to the server with the files.
      return {
        type: IMG__REF_TYPE.Hop,
        key: $routeParams.key
      };
    };

    $scope.progress = function (percentDone) {
      $scope.percentDone = percentDone;
    };

    $scope.done = function (files, data) {
      console.log("Upload complete.");
      console.log("Data: " + JSON.stringify(data));
      writeFiles(files);
      Messenger.successForCurrentRoute('hops:imageUpload.success', { count: files.length });
    };

    $scope.error = function (files, type, msg) {
      console.log("Upload error: " + msg);
      console.log("Error type: " + type);
      writeFiles(files);
      Messenger.errorForCurrentRoute('hops:imageUpload.failure');
    };

    function writeFiles(files) {
      console.log('Files:');
      for (var i = 0; i < files.length; i++) {
        console.log('\t' + files[i].name);
      }
    }

    // Back action.
    $scope.back = function () {
      // Show hop details.
      Display(URLS.Dashboard.Hop.Show, $routeParams.key);
    };
  }
})();

/**
 * Controller for hop list.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.List,
    ['$scope', 'Display', 'HopViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Display, HopViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('hopName');
    $scope.settings.hopName = '';

    // Fetch hop list.
    function getList() {
      HopViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      HopViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Create action.
    $scope.create = function () {
      // Show hop creation form.
      Display(URLS.Dashboard.Hop.Create);
    };

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Show action.
    $scope.show = function (hop) {
      // Show hop details.
      Display(URLS.Dashboard.Hop.Show, hop.hopCode);
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for hop display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Hops)
  .controller(
    CONTROLLERS.Dashboard.Hop.Show,
    ['$scope', '$routeParams', 'Display', 'HopViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, HopViewData, DeleteDialog) {

    $scope.hop = {};
    $scope.deleteDisabled = false;

    // Retrieve hop data.
    function fetchItem() {
      HopViewData.fetch($routeParams.key).then(function (data) {
        $scope.hop = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Hop.Edit, $routeParams.key);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.Hop.Delete, CONTROLLERS.Dashboard.Hop.Delete);
    };

    // Back action.
    $scope.back = function () {
      // Show hop list.
      Display(URLS.Dashboard.Hop.List);
    };

    // Upload image action.
    $scope.upload = function () {
      // Show hop image upload form.
      Display(URLS.Dashboard.Hop.ImageUpload, $routeParams.key);
    };

    // Show image action.
    $scope.show = function (imageCode) {
      // Show hop image details.
      Display(URLS.Dashboard.Hop.ImageShow, $routeParams.key, imageCode);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for dashboard content.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Home)
  .controller(
    CONTROLLERS.Dashboard.Home,
    ['$scope', '$window', 'Security', fnController]
  );

  function fnController($scope, $window, Security) {

    // Helper property.
    $scope.isSupervisor = Security.isSupervisor();

    // Explore action.
    $scope.explore = function() {
      $window.open('/explorer', '_blank');
    };
  }
})();

/**
 * Controller for mailer test.
 */
(function () {
  'use strict';

  angular.module(MODULES.Account)
  .controller(
    CONTROLLERS.Dashboard.MailerTest,
    ['$scope', 'SystemData', fnController]
  );

  function fnController($scope, SystemData) {

    $scope.address = {};
    $scope.success = false;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid;
    };

    // Send action.
    $scope.send = function () {
      SystemData.sendTestMessage($scope.address).then(function (data) {
        // Show what to do next.
        $scope.success = data.result == 'sent';
      });
    };
  }
})();

/**
 * Definition of the malt maintenance module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.Malts, [])

  /**
   * Defines routes for malt maintenance.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.Malts + ' routes...');

      $routeProvider.when(URLS.Dashboard.Malt.List, {
        templateUrl: VIEWS.Dashboard.Malt.List,
        controller: CONTROLLERS.Dashboard.Malt.List,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Malt.Create, {
        templateUrl: VIEWS.Dashboard.Malt.Create,
        controller: CONTROLLERS.Dashboard.Malt.Create,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Malt.Show, {
        templateUrl: VIEWS.Dashboard.Malt.Show,
        controller: CONTROLLERS.Dashboard.Malt.Show,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Malt.Edit, {
        templateUrl: VIEWS.Dashboard.Malt.Edit,
        controller: CONTROLLERS.Dashboard.Malt.Edit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });

      $routeProvider.when(URLS.Dashboard.Malt.ImageUpload, {
        templateUrl: VIEWS.Dashboard.Malt.ImageUpload,
        controller: CONTROLLERS.Dashboard.Malt.ImageUpload,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Malt.ImageShow, {
        templateUrl: VIEWS.Dashboard.Malt.ImageShow,
        controller: CONTROLLERS.Dashboard.Malt.ImageShow,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Malt.ImageEdit, {
        templateUrl: VIEWS.Dashboard.Malt.ImageEdit,
        controller: CONTROLLERS.Dashboard.Malt.ImageEdit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
    }
  ]);
})();

/**
 * Controller for malt creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.Create,
    ['$scope', 'Display', 'MaltData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, Display, MaltData, TinymceConfig, Messenger) {

    var master = {};
    $scope.malt = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.malt, master);
    };

    // Get a new malt.
    function constructNew() {
      MaltData.construct().then(function (data) {
        master = data;
        $scope.malt = angular.copy(data);
      });
    }

    // Create action.
    $scope.create = function () {
      MaltData.create($scope.malt).then(function (data) {
        $scope.malt = data;
        Messenger.successForNextRoute('malts:create.success', { name: data.maltName });
        // Show malt details.
        Display(URLS.Dashboard.Malt.Show, data.maltCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show malt list.
      Display(URLS.Dashboard.Malt.List);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for malt deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.Delete,
    ['$scope', '$routeParams', 'DeleteDialog', 'MaltData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, MaltData, Messenger) {

    $scope.malt = null;

    // Retrieve malt data.
    function fetchItem() {
      MaltData.read($routeParams.key).then(function (data) {
        $scope.malt = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      MaltData.remove($scope.malt.maltCode).then(function (data) {
        Messenger.successForNextRoute('malts:delete.success', { name: $scope.malt.maltName });
        // Show malt list.
        DeleteDialog.close(URLS.Dashboard.Malt.List);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show malt details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for malt revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.Edit,
    ['$scope', '$routeParams', 'Display', 'MaltData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, MaltData, TinymceConfig, Messenger) {

    var master = {};
    $scope.formTitle = '';
    $scope.malt = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.malt, master);
    };

    // Retrieve malt data.
    function readItem() {
      MaltData.read($routeParams.key).then(function (data) {
        master = data;
        $scope.formTitle = data.maltName;
        $scope.malt = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      MaltData.update($routeParams.key, $scope.malt).then(function (data) {
        $scope.malt = data;
        Messenger.successForNextRoute('malts:edit.success', { name: data.maltName });
        // Show malt details.
        Display(URLS.Dashboard.Malt.Show, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show malt details.
      Display(URLS.Dashboard.Malt.Show, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for malt image deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.ImageDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'ImageData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, ImageData, Messenger) {

    $scope.image = {};

    // Retrieve malt image data.
    function getItem() {
      ImageData.read($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      ImageData.remove($scope.image.imageCode).then(function (data) {
        Messenger.successForNextRoute('malts:imageDelete.success', { title: $scope.image.title });
        // Show malt details.
        DeleteDialog.close(URLS.Dashboard.Malt.Show, $routeParams.key);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show malt image details.
      DeleteDialog.close();
    };

    // Initialize the dialog.
    getItem();
  }
})();

/**
 * Controller for malt image revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.ImageEdit,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'ImageData', 'MaltViewData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, ImageData, MaltViewData, TinymceConfig, Messenger) {

    var master = {};
    $scope.data = {};
    $scope.malt = {};
    $scope.image = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.data, master);
    };

    // Retrieve malt image data.
    function fetchItem() {
      ImageViewData.fetch($routeParams.key2).then(function (view) {
        master = {
          title: view.title,
          description: view.description
        };
        $scope.data = angular.copy(master);
        $scope.image = angular.copy(view);
      });
      MaltViewData.fetch($routeParams.key).then(function (view) {
        $scope.malt = view;
      });
    }

    // Save action.
    $scope.save = function () {
      ImageData.update($routeParams.key2, $scope.data).then(function (data) {
        $scope.image = data;
        Messenger.successForNextRoute('malts:imageEdit.success', { title: data.title });
        // Show malt image details.
        Display(URLS.Dashboard.Malt.ImageShow, $routeParams.key, $routeParams.key2);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show malt image details.
      Display(URLS.Dashboard.Malt.ImageShow, $routeParams.key, $routeParams.key2);
    };

    // Initialize the form.
    fetchItem();
  }
})();

/**
 * Controller for malt image display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.ImageShow,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'MaltData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, MaltData, DeleteDialog) {

    $scope.malt = {};
    $scope.image = {};

    // Retrieve malt data.
    function fetchItem() {
      MaltData.read($routeParams.key).then(function (data) {
        $scope.malt = data;
      });
      ImageViewData.fetch($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Malt.ImageEdit, $routeParams.key, $routeParams.key2);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(
        VIEWS.Dashboard.Malt.ImageDelete,
        CONTROLLERS.Dashboard.Malt.ImageDelete
      );
    };

    // Back action.
    $scope.back = function () {
      // Show malt list.
      Display(URLS.Dashboard.Malt.Show, $routeParams.key);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for malt image upload.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.ImageUpload,
    ['$scope', '$routeParams', '$location', 'Display', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, $location, Display, Messenger) {

    $scope.fileList = [];
    $scope.percentDone = 0;

    $scope.fileChosen = function (files) {
      $scope.fileList = files;
      if (files.length) {
        $scope.percentDone = 0;
        Messenger.removeAll();
      }
    };

    $scope.getUploadUrl = function () {
      return API.Images.Upload;
    };

    $scope.getData = function (files) {
      // This data will be sent to the server with the files.
      return {
        type: IMG__REF_TYPE.Malt,
        key: $routeParams.key
      };
    };

    $scope.progress = function (percentDone) {
      $scope.percentDone = percentDone;
    };

    $scope.done = function (files, data) {
      console.log("Upload complete.");
      console.log("Data: " + JSON.stringify(data));
      writeFiles(files);
      Messenger.successForCurrentRoute('malts:imageUpload.success', { count: files.length });
    };

    $scope.error = function (files, type, msg) {
      console.log("Upload error: " + msg);
      console.log("Error type: " + type);
      writeFiles(files);
      Messenger.errorForCurrentRoute('malts:imageUpload.failure');
    };

    function writeFiles(files) {
      console.log('Files:');
      for (var i = 0; i < files.length; i++) {
        console.log('\t' + files[i].name);
      }
    }

    // Back action.
    $scope.back = function () {
      // Show malt details.
      Display(URLS.Dashboard.Malt.Show, $routeParams.key);
    };
  }
})();

/**
 * Controller for malt list.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.List,
    ['$scope', 'Display', 'MaltViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Display, MaltViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('maltName');
    $scope.settings.maltName = '';

    // Fetch malt list.
    function getList() {
      MaltViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      MaltViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Create action.
    $scope.create = function () {
      // Show malt creation form.
      Display(URLS.Dashboard.Malt.Create);
    };

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Show action.
    $scope.show = function (malt) {
      // Show malt details.
      Display(URLS.Dashboard.Malt.Show, malt.maltCode);
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for malt display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Malts)
  .controller(
    CONTROLLERS.Dashboard.Malt.Show,
    ['$scope', '$routeParams', 'Display', 'MaltViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, MaltViewData, DeleteDialog) {

    $scope.malt = {};
    $scope.deleteDisabled = false;

    // Retrieve malt data.
    function fetchItem() {
      MaltViewData.fetch($routeParams.key).then(function (data) {
        $scope.malt = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Malt.Edit, $routeParams.key);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.Malt.Delete, CONTROLLERS.Dashboard.Malt.Delete);
    };

    // Back action.
    $scope.back = function () {
      // Show malt list.
      Display(URLS.Dashboard.Malt.List);
    };

    // Upload image action.
    $scope.upload = function () {
      // Show malt image upload form.
      Display(URLS.Dashboard.Malt.ImageUpload, $routeParams.key);
    };

    // Show image action.
    $scope.show = function (imageCode) {
      // Show malt image details.
      Display(URLS.Dashboard.Malt.ImageShow, $routeParams.key, imageCode);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for model definitions.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Home)
  .controller(
    CONTROLLERS.Dashboard.ModelDefinitions,
    ['$scope', 'SystemData', fnController]
  );

  function fnController($scope, SystemData) {

    $scope.name = '';
    $scope.models = null;
    $scope.definitions = null;

    SystemData.getModels().then(function (data) {
      // Set models to select.
      $scope.models = data;
    });

    $scope.find = function() {
      $scope.definitions = null;

      if ($scope.name) {
        SystemData.getSchema($scope.name).then(function (data) {
          // Show definition.
          $scope.definitions = JSON.stringify(data, null, 4);
        });
      } else {
        SystemData.getSchemaAll().then(function (data) {
          // Show definitions.
          $scope.definitions = JSON.stringify(data, null, 4);
        });
      }
    }
  }
})();

/**
 * Definition of the region maintenance module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.Regions, [])

  /**
   * Defines routes for region maintenance.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.Regions + ' routes...');

      $routeProvider.when(URLS.Dashboard.Region.List, {
        templateUrl: VIEWS.Dashboard.Region.List,
        controller: CONTROLLERS.Dashboard.Region.List,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.Region.Create, {
        templateUrl: VIEWS.Dashboard.Region.Create,
        controller: CONTROLLERS.Dashboard.Region.Create,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.Region.Show, {
        templateUrl: VIEWS.Dashboard.Region.Show,
        controller: CONTROLLERS.Dashboard.Region.Show,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.Region.Edit, {
        templateUrl: VIEWS.Dashboard.Region.Edit,
        controller: CONTROLLERS.Dashboard.Region.Edit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });

      $routeProvider.when(URLS.Dashboard.Region.CountryCreate, {
        templateUrl: VIEWS.Dashboard.Region.CountryCreate,
        controller: CONTROLLERS.Dashboard.Region.CountryCreate,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.Region.CountryShow, {
        templateUrl: VIEWS.Dashboard.Region.CountryShow,
        controller: CONTROLLERS.Dashboard.Region.CountryShow,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.Region.CountryEdit, {
        templateUrl: VIEWS.Dashboard.Region.CountryEdit,
        controller: CONTROLLERS.Dashboard.Region.CountryEdit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });

      $routeProvider.when(URLS.Dashboard.Region.ProvinceCreate, {
        templateUrl: VIEWS.Dashboard.Region.ProvinceCreate,
        controller: CONTROLLERS.Dashboard.Region.ProvinceCreate,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.Region.ProvinceShow, {
        templateUrl: VIEWS.Dashboard.Region.ProvinceShow,
        controller: CONTROLLERS.Dashboard.Region.ProvinceShow,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.Region.ProvinceEdit, {
        templateUrl: VIEWS.Dashboard.Region.ProvinceEdit,
        controller: CONTROLLERS.Dashboard.Region.ProvinceEdit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
    }
  ]);
})();

/**
 * Controller for country creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.CountryCreate,
    ['$scope', '$routeParams', 'Display', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, RegionData, Messenger) {

    var master = {};
    $scope.country = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.country, master);
    };

    // Get a new country.
    function constructNew() {
      RegionData.construct().then(function (data) {
        data.parentCode = $routeParams.key;
        data.regionType = REGION_TYPE.Country;
        data.hasChildren = false;
        master = data;
        $scope.country = angular.copy(data);
      });
    }

    // Create action.
    $scope.create = function () {
      RegionData.create($scope.country).then(function (data) {
        $scope.country = data;
        Messenger.successForNextRoute('regions:countryCreate.success', { name: data.regionName });
        // Show country details.
        Display(URLS.Dashboard.Region.CountryShow, $routeParams.key, data.regionCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show country list.
      Display(URLS.Dashboard.Region.Show, $routeParams.key);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for country deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.CountryDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, RegionData, Messenger) {

    $scope.region = null;

    // Retrieve country data.
    function fetchItem() {
      RegionData.read($routeParams.key2).then(function (data) {
        $scope.region = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      RegionData.remove($scope.region.regionCode).then(function (data) {
        Messenger.successForNextRoute('regions:countryDelete.success', { name: $scope.region.regionName });
        // Show region details.
        DeleteDialog.close(URLS.Dashboard.Region.Show, $routeParams.key);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show country details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for country revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.CountryEdit,
    ['$scope', '$routeParams', 'Display', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, RegionData, Messenger) {

    var master = {};
    $scope.country = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.country, master);
    };

    // Retrieve country data.
    function readItem() {
      RegionData.read($routeParams.key2).then(function (data) {
        master = data;
        $scope.country = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      RegionData.update($routeParams.key2, $scope.country).then(function (data) {
        $scope.country = data;
        Messenger.successForNextRoute('regions:countryEdit.success', { name: data.regionName });
        // Show country details.
        Display(URLS.Dashboard.Region.CountryShow, $routeParams.key, $routeParams.key2);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show country details.
      Display(URLS.Dashboard.Region.CountryShow, $routeParams.key, $routeParams.key2);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for country display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.CountryShow,
    ['$scope', '$routeParams', 'Display', 'RegionViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, RegionViewData, DeleteDialog) {

    $scope.region = {};
    $scope.canDelete = false;

    // Retrieve country data.
    function fetchItem() {
      RegionViewData.fetch($routeParams.key2).then(function (data) {
        $scope.region = data;
        $scope.canDelete = !(data.children && data.children.length);
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Region.CountryEdit, $routeParams.key, $routeParams.key2);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.Region.CountryDelete, CONTROLLERS.Dashboard.Region.CountryDelete);
    };

    // Back action.
    $scope.back = function () {
      // Show region details.
      Display(URLS.Dashboard.Region.Show, $routeParams.key);
    };

    // Create province action.
    $scope.create = function () {
      // Show province creation form.
      Display(URLS.Dashboard.Region.ProvinceCreate, $routeParams.key, $routeParams.key2);
    };

    // Show province action.
    $scope.show = function (province) {
      // Show country details.
      Display(URLS.Dashboard.Region.ProvinceShow, $routeParams.key, $routeParams.key2, province.regionCode);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for region creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.Create,
    ['$scope', 'Display', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, Display, RegionData, Messenger) {

    var master = {};
    $scope.region = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.region, master);
    };

    // Get a new region.
    function constructNew() {
      RegionData.construct().then(function (data) {
        data.parentCode = '';
        data.regionType = REGION_TYPE.Continent;
        data.hasChildren = false;
        master = data;
        $scope.region = angular.copy(data);
      });
    }

    // Create action.
    $scope.create = function () {
      RegionData.create($scope.region).then(function (data) {
        $scope.region = data;
        Messenger.successForNextRoute('regions:create.success', { name: data.regionName });
        // Show region details.
        Display(URLS.Dashboard.Region.Show, data.regionCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show region list.
      Display(URLS.Dashboard.Region.List);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for region deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.Delete,
    ['$scope', '$routeParams', 'DeleteDialog', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, RegionData, Messenger) {

    $scope.region = null;

    // Retrieve region data.
    function fetchItem() {
      RegionData.read($routeParams.key).then(function (data) {
        $scope.region = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      RegionData.remove($scope.region.regionCode).then(function (data) {
        Messenger.successForNextRoute('regions:delete.success', { name: $scope.region.regionName });
        // Show region list.
        DeleteDialog.close(URLS.Dashboard.Region.List);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show region details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for region revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.Edit,
    ['$scope', '$routeParams', 'Display', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, RegionData, Messenger) {

    var master = {};
    $scope.region = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.region, master);
    };

    // Retrieve region data.
    function readItem() {
      RegionData.read($routeParams.key).then(function (data) {
        master = data;
        $scope.region = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      RegionData.update($routeParams.key, $scope.region).then(function (data) {
        $scope.region = data;
        Messenger.successForNextRoute('regions:edit.success', { name: data.regionName });
        // Show region details.
        Display(URLS.Dashboard.Region.Show, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show region details.
      Display(URLS.Dashboard.Region.Show, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for region list.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.List,
    ['$scope', 'Display', 'RegionViewData', fnController]
  );

  function fnController($scope, Display, RegionViewData) {

    $scope.list = [];

    // Fetch region list.
    function getList() {
      RegionViewData.select().then(function (data) {
        $scope.list = data;
      });
    }

    // Create action.
    $scope.create = function () {
      // Show region creation form.
      Display(URLS.Dashboard.Region.Create);
    };

    // Show action.
    $scope.show = function (region) {
      // Show region details.
      Display(URLS.Dashboard.Region.Show, region.regionCode);
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for province creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.ProvinceCreate,
    ['$scope', '$routeParams', 'Display', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, RegionData, Messenger) {

    var master = {};
    $scope.province = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.province, master);
    };

    // Get a new province.
    function constructNew() {
      RegionData.construct().then(function (data) {
        data.parentCode = $routeParams.key2;
        data.regionType = REGION_TYPE.Province;
        data.hasChildren = false;
        master = data;
        $scope.province = angular.copy(data);
      });
    }

    // Create action.
    $scope.create = function () {
      RegionData.create($scope.province).then(function (data) {
        $scope.province = data;
        Messenger.successForNextRoute('regions:provinceCreate.success', { name: data.regionName });
        // Show province details.
        Display(URLS.Dashboard.Region.ProvinceShow, $routeParams.key, $routeParams.key2, data.regionCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show province list.
      Display(URLS.Dashboard.Region.CountryShow, $routeParams.key, $routeParams.key2);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for province deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.ProvinceDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, RegionData, Messenger) {

    $scope.region = null;

    // Retrieve province data.
    function fetchItem() {
      RegionData.read($routeParams.key3).then(function (data) {
        $scope.region = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      RegionData.remove($scope.region.regionCode).then(function (data) {
        Messenger.successForNextRoute('regions:provinceDelete.success', { name: $scope.region.regionName });
        // Show country details.
        DeleteDialog.close(URLS.Dashboard.Region.CountryShow, $routeParams.key, $routeParams.key2);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show province details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for province revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
    .controller(
    CONTROLLERS.Dashboard.Region.ProvinceEdit,
    ['$scope', '$routeParams', 'Display', 'RegionData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, RegionData, Messenger) {

    var master = {};
    $scope.province = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.province, master);
    };

    // Retrieve province data.
    function readItem() {
      RegionData.read($routeParams.key3).then(function (data) {
        master = data;
        $scope.province = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      RegionData.update($routeParams.key3, $scope.province).then(function (data) {
        $scope.province = data;
        Messenger.successForNextRoute('regions:provinceEdit.success', { name: data.regionName });
        // Show province details.
        Display(URLS.Dashboard.Region.ProvinceShow, $routeParams.key, $routeParams.key2, $routeParams.key3);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show province details.
      Display(URLS.Dashboard.Region.ProvinceShow, $routeParams.key, $routeParams.key2, $routeParams.key3);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for province display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.ProvinceShow,
    ['$scope', '$routeParams', 'Display', 'RegionViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, RegionViewData, DeleteDialog) {

    $scope.region = {};

    // Retrieve province data.
    function fetchItem() {
      RegionViewData.fetch($routeParams.key3).then(function (data) {
        $scope.region = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Region.ProvinceEdit, $routeParams.key, $routeParams.key2, $routeParams.key3);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.Region.ProvinceDelete, CONTROLLERS.Dashboard.Region.ProvinceDelete);
    };

    // Back action.
    $scope.back = function () {
      // Show country details.
      Display(URLS.Dashboard.Region.CountryShow, $routeParams.key, $routeParams.key2);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for region display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Regions)
  .controller(
    CONTROLLERS.Dashboard.Region.Show,
    ['$scope', '$routeParams', 'Display', 'RegionViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, RegionViewData, DeleteDialog) {

    $scope.region = {};
    $scope.canDelete = false;

    // Retrieve region data.
    function fetchItem() {
      RegionViewData.fetch($routeParams.key).then(function (data) {
        $scope.region = data;
        $scope.canDelete = !(data.children && data.children.length);
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Region.Edit, $routeParams.key);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.Region.Delete, CONTROLLERS.Dashboard.Region.Delete);
    };

    // Back action.
    $scope.back = function () {
      // Show region list.
      Display(URLS.Dashboard.Region.List);
    };

    // Create country action.
    $scope.create = function () {
      // Show country creation form.
      Display(URLS.Dashboard.Region.CountryCreate, $routeParams.key);
    };

    // Show country action.
    $scope.show = function (country) {
      // Show country details.
      Display(URLS.Dashboard.Region.CountryShow, $routeParams.key, country.regionCode);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for system information.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Home)
  .controller(
    CONTROLLERS.Dashboard.SystemInfo,
    ['$scope', 'SystemData', 'Display', fnController]
  );

  function fnController($scope, SystemData, Display) {

    $scope.info = null;

    // Retrieve system information.
    SystemData.getSystemInfo().then(function (data) {
      // Show what to do next.
      $scope.info = data;
    });

    // Go action.
    $scope.go = function() {
      Display(URLS.Home);
    };
  }
})();

/**
 * Definition of the user maintenance module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.Users, [])

  /**
   * Defines routes for user maintenance.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.Users + ' routes...');

      $routeProvider.when(URLS.Dashboard.User.List, {
        templateUrl: VIEWS.Dashboard.User.List,
        controller: CONTROLLERS.Dashboard.User.List,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.User.Create, {
        templateUrl: VIEWS.Dashboard.User.Create,
        controller: CONTROLLERS.Dashboard.User.Create,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.User.Show, {
        templateUrl: VIEWS.Dashboard.User.Show,
        controller: CONTROLLERS.Dashboard.User.Show,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.User.Edit, {
        templateUrl: VIEWS.Dashboard.User.Edit,
        controller: CONTROLLERS.Dashboard.User.Edit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
      $routeProvider.when(URLS.Dashboard.User.Photo, {
        templateUrl: VIEWS.Dashboard.User.Photo,
        controller: CONTROLLERS.Dashboard.User.Photo,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireSupervisor
        }
      });
    }
  ]);
})();

/**
 * Controller for user creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Users)
  .controller(
    CONTROLLERS.Dashboard.User.Create,
    ['$scope', 'Display', 'UserData', 'Messenger', fnController]
  );

  function fnController($scope, Display, UserData, Messenger) {

    var master = {};
    $scope.user = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.user, master);
    };

    // Get a new user.
    function constructNew() {
      UserData.construct().then(function (data) {
        master = data;
        $scope.user = angular.copy(data);
      });
    }

    // Create action.
    $scope.create = function () {
      UserData.create($scope.user).then(function (data) {
        $scope.user = data;
        Messenger.successForNextRoute('users:create.success', { name: data.userName });
        // Show user details.
        Display(URLS.Dashboard.User.Show, data.userCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show user list.
      Display(URLS.Dashboard.User.List);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for user deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Users)
  .controller(
    CONTROLLERS.Dashboard.User.Delete,
    ['$scope', '$routeParams', 'DeleteDialog', 'UserData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, UserData, Messenger) {

    $scope.user = null;

    // Retrieve user data.
    function fetchItem() {
      UserData.read($routeParams.key).then(function (data) {
        $scope.user = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      UserData.remove($scope.user.userCode).then(function (data) {
        Messenger.successForNextRoute('users:delete.success', { name: $scope.user.userName });
        // Show user list.
        DeleteDialog.close(URLS.Dashboard.User.List);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show user details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for user revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Users)
  .controller(
    CONTROLLERS.Dashboard.User.Edit,
    ['$scope', '$routeParams', 'Display', 'UserData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, UserData, Messenger) {

    var master = {};
    $scope.formTitle = '';
    $scope.user = {};

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.user, master);
    };

    // Retrieve user data.
    function readItem() {
      UserData.read($routeParams.key).then(function (data) {
        master = data;
        $scope.formTitle = data.userName;
        $scope.user = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      UserData.update($routeParams.key, $scope.user).then(function (data) {
        $scope.user = data;
        Messenger.successForNextRoute('users:edit.success', { name: data.userName });
        // Show user details.
        Display(URLS.Dashboard.User.Show, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show user details.
      Display(URLS.Dashboard.User.Show, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for user list.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Users)
  .controller(
    CONTROLLERS.Dashboard.User.List,
    ['$scope', 'Display', 'UserViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Display, UserViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('userName');
    $scope.settings.userName = '';
    $scope.settings.email = '';

    // Fetch user list.
    function getList() {
      UserViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      UserViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Create action.
    $scope.create = function () {
      // Show user creation form.
      Display(URLS.Dashboard.User.Create);
    };

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Show action.
    $scope.show = function (user) {
      // Show user details.
      Display(URLS.Dashboard.User.Show, user.userCode);
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for user photo deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Users)
  .controller(
    CONTROLLERS.Dashboard.User.PhotoDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'UserData', 'ImageData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, UserData, ImageData, Messenger) {

    $scope.user = {};

    // Retrieve user data.
    function readItem() {
      UserData.read($routeParams.key).then(function (data) {
        $scope.user = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      ImageData.remove($scope.user.photoCode).then(function (data) {
        Messenger.successForCurrentRoute('users:photoDelete.success');
        // Show user photo upload.
        DeleteDialog.close();
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show user photo details.
      DeleteDialog.close();
    };

    // Initialize the dialog.
    readItem();
  }
})();

/**
 * Controller for user label maintenance.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Users)
  .controller(
    CONTROLLERS.Dashboard.User.Photo,
    ['$scope', '$routeParams', 'Display', 'UserViewData', 'Messenger', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, UserViewData, Messenger, DeleteDialog) {

    $scope.user = null;
    $scope.fileList = [];
    $scope.percentDone = 0;

    // Upload methods.
    $scope.fileChosen = function (files) {
      $scope.fileList = files;
      if (files.length) {
        $scope.percentDone = 0;
        Messenger.removeAll();
      }
    };

    $scope.getUploadUrl = function () {
      return API.Images.Upload;
    };

    $scope.getData = function (files) {
      // This data will be sent to the server with the files.
      return {
        type: IMG__REF_TYPE.Photo,
        key: $routeParams.key
      };
    };

    $scope.progress = function (percentDone) {
      $scope.percentDone = percentDone;
    };

    $scope.done = function (files, data) {
      console.log("Upload complete.");
      console.log("Data: " + JSON.stringify(data));
      writeFiles(files);
      Messenger.successForCurrentRoute('users:photoUpload.success');
      // Show the result.
      inChangeMode = false;
      fetchItem();
    };

    $scope.error = function (files, type, msg) {
      console.log("Upload error: " + msg);
      console.log("Error type: " + type);
      writeFiles(files);
      Messenger.errorForCurrentRoute('users:photoUpload.failure');
    };

    function writeFiles(files) {
      console.log('Files:');
      for (var i = 0; i < files.length; i++) {
        console.log('\t' + files[i].name);
      }
    }

    // Helper mthods.
    var inChangeMode = false;
    $scope.showUpload = function () {
      return $scope.user && (!$scope.user.photoCode || inChangeMode);
    };
    $scope.showChange = function () {
      return $scope.user && $scope.user.photoCode && !inChangeMode;
    };
    $scope.showCancel = function () {
      return inChangeMode;
    };

    // Retrieve user data.
    function fetchItem() {
      UserViewData.fetch($routeParams.key).then(function (data) {
        $scope.user = data;
      });
    }

    // Change action.
    $scope.change = function () {
      inChangeMode = true;
    };

    // Cancel action.
    $scope.cancel = function () {
      inChangeMode = false;
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      var dlg = DeleteDialog.open(
        VIEWS.Dashboard.User.PhotoDelete,
        CONTROLLERS.Dashboard.User.PhotoDelete,
        function(data) { fetchItem(); }
      );
    };

    // Back action.
    $scope.back = function () {
      // Show user details.
      Display(URLS.Dashboard.User.Show, $routeParams.key);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for user display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Users)
  .controller(
    CONTROLLERS.Dashboard.User.Show,
    ['$scope', '$routeParams', 'Display', 'UserViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, UserViewData, DeleteDialog) {

    $scope.user = {};
    $scope.deleteDisabled = false;

    // Retrieve user data.
    function fetchItem() {
      UserViewData.fetch($routeParams.key).then(function (data) {
        $scope.user = data;
      });
    }

    // Photo action.
    $scope.photo = function () {
      Display(URLS.Dashboard.User.Photo, $routeParams.key);
    };

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.User.Edit, $routeParams.key);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.User.Delete, CONTROLLERS.Dashboard.User.Delete);
    };

    // Back action.
    $scope.back = function () {
      // Show user list.
      Display(URLS.Dashboard.User.List);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Definition of the yeast maintenance module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.Dashboard.Yeasts, [])

  /**
   * Defines routes for yeast maintenance.
   */
  .config([
    '$routeProvider', 'AuthorizationProvider',
    function ($routeProvider, AuthorizationProvider) {
      console.log('Configuring ' + MODULES.Dashboard.Yeasts + ' routes...');

      $routeProvider.when(URLS.Dashboard.Yeast.List, {
        templateUrl: VIEWS.Dashboard.Yeast.List,
        controller: CONTROLLERS.Dashboard.Yeast.List,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Yeast.Create, {
        templateUrl: VIEWS.Dashboard.Yeast.Create,
        controller: CONTROLLERS.Dashboard.Yeast.Create,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Yeast.Show, {
        templateUrl: VIEWS.Dashboard.Yeast.Show,
        controller: CONTROLLERS.Dashboard.Yeast.Show,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Yeast.Edit, {
        templateUrl: VIEWS.Dashboard.Yeast.Edit,
        controller: CONTROLLERS.Dashboard.Yeast.Edit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });

      $routeProvider.when(URLS.Dashboard.Yeast.ImageUpload, {
        templateUrl: VIEWS.Dashboard.Yeast.ImageUpload,
        controller: CONTROLLERS.Dashboard.Yeast.ImageUpload,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Yeast.ImageShow, {
        templateUrl: VIEWS.Dashboard.Yeast.ImageShow,
        controller: CONTROLLERS.Dashboard.Yeast.ImageShow,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
      $routeProvider.when(URLS.Dashboard.Yeast.ImageEdit, {
        templateUrl: VIEWS.Dashboard.Yeast.ImageEdit,
        controller: CONTROLLERS.Dashboard.Yeast.ImageEdit,
        resolve: {
          authenticatedUser: AuthorizationProvider.requireEditor
        }
      });
    }
  ]);
})();

/**
 * Controller for yeast creation.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.Create,
    ['$scope', 'Display', 'YeastData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, Display, YeastData, TinymceConfig, Messenger) {

    var master = {};
    $scope.yeast = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.yeast, master);
    };

    // Get a new yeast.
    function constructNew() {
      YeastData.construct().then(function (data) {
        master = data;
        $scope.yeast = angular.copy(data);
      });
    }

    // Create action.
    $scope.create = function () {
      YeastData.create($scope.yeast).then(function (data) {
        $scope.yeast = data;
        Messenger.successForNextRoute('yeasts:create.success', { name: data.yeastName });
        // Show yeast details.
        Display(URLS.Dashboard.Yeast.Show, data.yeastCode);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show yeast list.
      Display(URLS.Dashboard.Yeast.List);
    };

    // Initialize the view.
    constructNew();
  }
})();

/**
 * Controller for yeast deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.Delete,
    ['$scope', '$routeParams', 'DeleteDialog', 'YeastData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, YeastData, Messenger) {

    $scope.yeast = null;

    // Retrieve yeast data.
    function fetchItem() {
      YeastData.read($routeParams.key).then(function (data) {
        $scope.yeast = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      YeastData.remove($scope.yeast.yeastCode).then(function (data) {
        Messenger.successForNextRoute('yeasts:delete.success', { name: $scope.yeast.yeastName });
        // Show yeast list.
        DeleteDialog.close('/dashboard/yeasts');
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show yeast details.
      DeleteDialog.close();
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for yeast revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.Edit,
    ['$scope', '$routeParams', 'Display', 'YeastData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, YeastData, TinymceConfig, Messenger) {

    var master = {};
    $scope.formTitle = '';
    $scope.yeast = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.yeast, master);
    };

    // Retrieve yeast data.
    function readItem() {
      YeastData.read($routeParams.key).then(function (data) {
        master = data;
        $scope.formTitle = data.yeastName;
        $scope.yeast = angular.copy(data);
      });
    }

    // Save action.
    $scope.save = function () {
      YeastData.update($routeParams.key, $scope.yeast).then(function (data) {
        $scope.yeast = data;
        Messenger.successForNextRoute('yeasts:edit.success', { name: data.yeastName });
        // Show yeast details.
        Display(URLS.Dashboard.Yeast.Show, $routeParams.key);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show yeast details.
      Display(URLS.Dashboard.Yeast.Show, $routeParams.key);
    };

    // Initialize the view.
    readItem();
  }
})();

/**
 * Controller for yeast image deletion.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.ImageDelete,
    ['$scope', '$routeParams', 'DeleteDialog', 'ImageData', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, DeleteDialog, ImageData, Messenger) {

    $scope.image = {};

    // Retrieve yeast image data.
    function getItem() {
      ImageData.read($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Delete action.
    $scope.remove = function () {
      ImageData.remove($scope.image.imageCode).then(function (data) {
        Messenger.successForNextRoute('yeasts:imageDelete.success', { title: $scope.image.title });
        // Show yeast details.
        DeleteDialog.close(URLS.Dashboard.Yeast.Show, $routeParams.key);
      }, function(response) {
        // Show error details.
        $scope.error = response.data.error.message;
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show yeast image details.
      DeleteDialog.close();
    };

    // Initialize the dialog.
    getItem();
  }
})();

/**
 * Controller for yeast image revision.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.ImageEdit,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'ImageData', 'YeastViewData', 'TinymceConfig', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, ImageData, YeastViewData, TinymceConfig, Messenger) {

    var master = {};
    $scope.data = {};
    $scope.yeast = {};
    $scope.image = {};
    $scope.tinymceOptions = TinymceConfig.Default;

    // Helper methods.
    $scope.invalid = function () {
      return this.form.$invalid || angular.equals($scope.data, master);
    };

    // Retrieve yeast image data.
    function fetchItem() {
      ImageViewData.fetch($routeParams.key2).then(function (view) {
        master = {
          title: view.title,
          description: view.description
        };
        $scope.data = angular.copy(master);
        $scope.image = angular.copy(view);
      });
      YeastViewData.fetch($routeParams.key).then(function (view) {
        $scope.yeast = view;
      });
    }

    // Save action.
    $scope.save = function () {
      ImageData.update($routeParams.key2, $scope.data).then(function (data) {
        $scope.image = data;
        Messenger.successForNextRoute('yeasts:imageEdit.success', { title: data.title });
        // Show yeast image details.
        Display(URLS.Dashboard.Yeast.ImageShow, $routeParams.key, $routeParams.key2);
      });
    };

    // Cancel action.
    $scope.cancel = function () {
      // Show yeast image details.
      Display(URLS.Dashboard.Yeast.ImageShow, $routeParams.key, $routeParams.key2);
    };

    // Initialize the form.
    fetchItem();
  }
})();

/**
 * Controller for yeast image display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.ImageShow,
    ['$scope', '$routeParams', 'Display', 'ImageViewData', 'YeastData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, ImageViewData, YeastData, DeleteDialog) {

    $scope.yeast = {};
    $scope.image = {};

    // Retrieve yeast data.
    function fetchItem() {
      YeastData.read($routeParams.key).then(function (data) {
        $scope.yeast = data;
      });
      ImageViewData.fetch($routeParams.key2).then(function (data) {
        $scope.image = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Yeast.ImageEdit, $routeParams.key, $routeParams.key2);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(
        VIEWS.Dashboard.Yeast.ImageDelete,
        CONTROLLERS.Dashboard.Yeast.ImageDelete
      );
    };

    // Back action.
    $scope.back = function () {
      // Show yeast list.
      Display(URLS.Dashboard.Yeast.Show, $routeParams.key);
    };

    // Initialize the view.
    fetchItem();
  }
})();

/**
 * Controller for yeast image upload.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.ImageUpload,
    ['$scope', '$routeParams', '$location', 'Display', 'Messenger', fnController]
  );

  function fnController($scope, $routeParams, $location, Display, Messenger) {

    $scope.fileList = [];
    $scope.percentDone = 0;

    $scope.fileChosen = function (files) {
      $scope.fileList = files;
      if (files.length) {
        $scope.percentDone = 0;
        Messenger.removeAll();
      }
    };

    $scope.getUploadUrl = function () {
      return API.Images.Upload;
    };

    $scope.getData = function (files) {
      // This data will be sent to the server with the files.
      return {
        type: IMG__REF_TYPE.Yeast,
        key: $routeParams.key
      };
    };

    $scope.progress = function (percentDone) {
      $scope.percentDone = percentDone;
    };

    $scope.done = function (files, data) {
      console.log("Upload complete.");
      console.log("Data: " + JSON.stringify(data));
      writeFiles(files);
      Messenger.successForCurrentRoute('yeasts:imageUpload.success', { count: files.length });
    };

    $scope.error = function (files, type, msg) {
      console.log("Upload error: " + msg);
      console.log("Error type: " + type);
      writeFiles(files);
      Messenger.errorForCurrentRoute('yeasts:imageUpload.failure');
    };

    function writeFiles(files) {
      console.log('Files:');
      for (var i = 0; i < files.length; i++) {
        console.log('\t' + files[i].name);
      }
    }

    // Back action.
    $scope.back = function () {
      // Show yeast details.
      Display(URLS.Dashboard.Yeast.Show, $routeParams.key);
    };
  }
})();

/**
 * Controller for yeast list.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.List,
    ['$scope', 'Display', 'YeastViewData', 'ListSettings', fnController]
  );

  function fnController($scope, Display, YeastViewData, ListSettings) {

    $scope.list = [];
    $scope.totalItens = 0;

    // Create settings.
    $scope.settings = new ListSettings('yeastName');
    $scope.settings.yeastName = '';

    // Fetch yeast list.
    function getList() {
      YeastViewData.select($scope.settings).then(function (data) {
        $scope.list = data;
      });
      YeastViewData.count($scope.settings).then(function (data) {
        $scope.totalItems = data.count;
      });
    }

    // Create action.
    $scope.create = function () {
      // Show yeast creation form.
      Display(URLS.Dashboard.Yeast.Create);
    };

    // Find action.
    $scope.find = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Sort action.
    $scope.changeSort = function () {
      $scope.settings.currentPage = 1;
      getList();
    };

    // Pagination action.
    $scope.selectPage = function (page) {
      $scope.settings.currentPage = page;
      getList();
    };

    // Show action.
    $scope.show = function (yeast) {
      // Show yeast details.
      Display(URLS.Dashboard.Yeast.Show, yeast.yeastCode);
    };

    // Initialize the view.
    getList();
  }
})();

/**
 * Controller for yeast display.
 */
(function () {
  'use strict';

  angular.module(MODULES.Dashboard.Yeasts)
  .controller(
    CONTROLLERS.Dashboard.Yeast.Show,
    ['$scope', '$routeParams', 'Display', 'YeastViewData', 'DeleteDialog', fnController]
  );

  function fnController($scope, $routeParams, Display, YeastViewData, DeleteDialog) {

    $scope.yeast = {};
    $scope.deleteDisabled = false;

    // Retrieve yeast data.
    function fetchItem() {
      YeastViewData.fetch($routeParams.key).then(function (data) {
        $scope.yeast = data;
      });
    }

    // Edit action.
    $scope.edit = function () {
      Display(URLS.Dashboard.Yeast.Edit, $routeParams.key);
    };

    // Remove action.
    $scope.remove = function () {
      // Show delete confirmation.
      DeleteDialog.open(VIEWS.Dashboard.Yeast.Delete, CONTROLLERS.Dashboard.Yeast.Delete);
    };

    // Back action.
    $scope.back = function () {
      // Show yeast list.
      Display(URLS.Dashboard.Yeast.List);
    };

    // Upload image action.
    $scope.upload = function () {
      // Show yeast image upload form.
      Display(URLS.Dashboard.Yeast.ImageUpload, $routeParams.key);
    };

    // Show image action.
    $scope.show = function (imageCode) {
      // Show yeast image details.
      Display(URLS.Dashboard.Yeast.ImageShow, $routeParams.key, imageCode);
    };

    // Initialize the view.
    fetchItem();
  }
})();

angular.module('dashboard.tpls', ['dashboard/beer-types/create.html', 'dashboard/beer-types/delete.html', 'dashboard/beer-types/edit.html', 'dashboard/beer-types/index.html', 'dashboard/beer-types/show.html', 'dashboard/beers/create.html', 'dashboard/beers/delete.html', 'dashboard/beers/edit.html', 'dashboard/beers/image-delete.html', 'dashboard/beers/image-edit.html', 'dashboard/beers/image-show.html', 'dashboard/beers/image-upload.html', 'dashboard/beers/index.html', 'dashboard/beers/label-delete.html', 'dashboard/beers/label.html', 'dashboard/beers/show.html', 'dashboard/breweries/create.html', 'dashboard/breweries/delete.html', 'dashboard/breweries/edit.html', 'dashboard/breweries/image-delete.html', 'dashboard/breweries/image-edit.html', 'dashboard/breweries/image-show.html', 'dashboard/breweries/image-upload.html', 'dashboard/breweries/index.html', 'dashboard/breweries/logo-delete.html', 'dashboard/breweries/logo.html', 'dashboard/breweries/show.html', 'dashboard/hops/create.html', 'dashboard/hops/delete.html', 'dashboard/hops/edit.html', 'dashboard/hops/image-delete.html', 'dashboard/hops/image-edit.html', 'dashboard/hops/image-show.html', 'dashboard/hops/image-upload.html', 'dashboard/hops/index.html', 'dashboard/hops/show.html', 'dashboard/index.html', 'dashboard/mailer-test.html', 'dashboard/malts/create.html', 'dashboard/malts/delete.html', 'dashboard/malts/edit.html', 'dashboard/malts/image-delete.html', 'dashboard/malts/image-edit.html', 'dashboard/malts/image-show.html', 'dashboard/malts/image-upload.html', 'dashboard/malts/index.html', 'dashboard/malts/show.html', 'dashboard/model-definitions.html', 'dashboard/regions/country-create.html', 'dashboard/regions/country-delete.html', 'dashboard/regions/country-edit.html', 'dashboard/regions/country-show.html', 'dashboard/regions/create.html', 'dashboard/regions/delete.html', 'dashboard/regions/edit.html', 'dashboard/regions/index.html', 'dashboard/regions/province-create.html', 'dashboard/regions/province-delete.html', 'dashboard/regions/province-edit.html', 'dashboard/regions/province-show.html', 'dashboard/regions/show.html', 'dashboard/system-info.html', 'dashboard/users/create.html', 'dashboard/users/delete.html', 'dashboard/users/edit.html', 'dashboard/users/index.html', 'dashboard/users/photo-delete.html', 'dashboard/users/photo.html', 'dashboard/users/show.html', 'dashboard/yeasts/create.html', 'dashboard/yeasts/delete.html', 'dashboard/yeasts/edit.html', 'dashboard/yeasts/image-delete.html', 'dashboard/yeasts/image-edit.html', 'dashboard/yeasts/image-show.html', 'dashboard/yeasts/image-upload.html', 'dashboard/yeasts/index.html', 'dashboard/yeasts/show.html']);

angular.module('dashboard/beer-types/create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beer-types/create.html',
    '<h1>Új sörtípus</h1>\n' +
    '\n' +
    '<form validation-form="beer-types" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="beerTypeName" ng-model="beerType.beerTypeName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="beerType.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beer-types/delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beer-types/delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Sörtípus törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{beerType.beerTypeName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt a sörtípust?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beer-types/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beer-types/edit.html',
    '<h1>Sörtípus szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="beer-types" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5 required"\n' +
    '               name="beerTypeName" ng-model="beerType.beerTypeName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="beerType.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beer-types/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beer-types/index.html',
    '<h1>Sörtípusok</h1>\n' +
    '\n' +
    '<form class="form-inline">\n' +
    '  <div class="pull-right">\n' +
    '    <button class="btn btn-link" ng-click="create()">Új sörtípus...</button>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Megnevezés:</label>\n' +
    '    <input type="text" class="form-control input-sm width-1" ng-model="settings.beerTypeName">\n' +
    '  </div>\n' +
    '  <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '</form>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <table class="table table-condensed table-striped">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '      <th sort-column="beerTypeName">Megnevezés</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="beerType in list">\n' +
    '      <td><a href="" ng-click="show(beerType)" ng-bind="beerType.beerTypeName"></a></td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <p class="text-center">\n' +
    '    <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '  </p>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő sörtípus.</p>\n' +
    '');
}]);

angular.module('dashboard/beer-types/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beer-types/show.html',
    '<h1>Sörtípus adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="beerType.beerTypeName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="beerType.beerTypeName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="beerType.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Létrehozás:</label>\n' +
    '      <div class="col-sm-6">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="beerType.creationDate"></span>\n' +
    '          <span ng-bind="beerType.creatorName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Állapot:</label>\n' +
    '      <div class="col-sm-2">\n' +
    '        <p class="form-control-static" ng-bind="beerType.stateName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Utolsó módosítás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="beerType.lastRevisionDate"></span>\n' +
    '          <span ng-bind="beerType.lastReviserName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/create.html',
    '<h1>Új sör</h1>\n' +
    '\n' +
    '<form validation-form="beers" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="beerName" ng-model="beer.beerName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Sörfőzde:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="chooseBrewery()" ng-bind="breweryName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Sörtípus:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="chooseBeerType()" ng-bind="beerTypeName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="beer.description" ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Alkohol:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <input type="text" class="form-control width-1 inline" name="abv" ng-model="beer.abv"> % V/V\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">IBU:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <input type="text" class="form-control width-1 inline" name="ibu" ng-model="beer.ibu">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Szárazanyag:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <input type="text" class="form-control width-1 inline" name="extract" ng-model="beer.extract"> °B\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Kalória:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <input type="text" class="form-control width-1 inline" name="calories" ng-model="beer.calories">\n' +
    '        <span ng-bind="beer.caloriesUnit"></span>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Maláták:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="malt in beer.malts" ng-bind="malt.maltName"></li>\n' +
    '          <li><a href="" ng-click="chooseMalts()">Módosítás</a></li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Élesztők:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="yeast in beer.yeasts" ng-bind="yeast.yeastName"></li>\n' +
    '          <li><a href="" ng-click="chooseYeasts()">Módosítás</a></li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Komlók:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="hop in beer.hops" ng-bind="hop.hopName"></li>\n' +
    '          <li><a href="" ng-click="chooseHops()">Módosítás</a></li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Sör törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{beer.beerName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt a sört?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/edit.html',
    '<h1>Sör szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="beers" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="beerName" ng-model="beer.beerName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Sörfőzde:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="chooseBrewery()" ng-bind="breweryName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Sörtípus:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="chooseBeerType()" ng-bind="beerTypeName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="beer.description" ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Alkohol:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <input type="text" class="form-control width-1 inline" name="abv" ng-model="beer.abv"> % V/V\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">IBU:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <input type="text" class="form-control width-1 inline" name="ibu" ng-model="beer.ibu">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Szárazanyag:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <input type="text" class="form-control width-1 inline" name="extract" ng-model="beer.extract"> °B\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Kalória:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <input type="text" class="form-control width-1 inline" name="calories" ng-model="beer.calories">\n' +
    '        <span ng-bind="beer.caloriesUnit"></span>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Maláták:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="malt in beer.malts" ng-bind="malt.maltName"></li>\n' +
    '          <li><a href="" ng-click="chooseMalts()">Módosítás</a></li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Élesztők:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="yeast in beer.yeasts" ng-bind="yeast.yeastName"></li>\n' +
    '          <li><a href="" ng-click="chooseYeasts()">Módosítás</a></li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Komlók:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="hop in beer.hops" ng-bind="hop.hopName"></li>\n' +
    '          <li><a href="" ng-click="chooseHops()">Módosítás</a></li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/image-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/image-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Sörkép törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote ng-bind="image.fileName"></blockquote>\n' +
    '    <p><ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail></p>\n' +
    '    <p>Valóban törölni akarja ezt a sörképet?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/image-edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/image-edit.html',
    '<h1>Sörkép szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="images" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="beer.beerName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="beerName" ng-model="data.title"\n' +
    '               validation-source required maxlength="255" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="data.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'form.$invalid || isUnchanged()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/image-show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/image-show.html',
    '<h1>Sörkép</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="beer.beerName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-image code="{{image.imageCode}}"></ks-image>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.title"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="image.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/image-upload.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/image-upload.html',
    '<h1>Sörkép feltöltése</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="beer.beerName"></legend>\n' +
    '\n' +
    '    <div ng-include="\'shared/image-upload.html\'"></div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/index.html',
    '<h1>Sörök</h1>\n' +
    '\n' +
    '<form class="form-inline">\n' +
    '  <div class="pull-right">\n' +
    '    <button class="btn btn-link" ng-click="create()">Új sör...</button>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Megnevezés:</label>\n' +
    '    <input type="text" class="form-control input-sm width-1" ng-model="settings.beerName">\n' +
    '  </div>\n' +
    '  <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '</form>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <table class="table table-condensed table-striped">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '      <th sort-column="beerName">Megnevezés</th>\n' +
    '      <th sort-column="breweryName">Sörfőzde</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="beer in list">\n' +
    '      <td><a href="" ng-click="show(beer)" ng-bind="beer.beerName"></a></td>\n' +
    '      <td><span ng-bind="beer.breweryName"></span></td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <p class="text-center">\n' +
    '    <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '  </p>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő sör.</p>\n' +
    '');
}]);

angular.module('dashboard/beers/label-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/label-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Címke törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote ng-bind="beer.beerName"></blockquote>\n' +
    '    <p><ks-thumbnail code="{{beer.labelCode}}"></ks-thumbnail></p>\n' +
    '    <p>Valóban törölni akarja ezt a sörcímkét?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/label.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/label.html',
    '<h1>Sör címkéje</h1>\n' +
    '\n' +
    '<form validation-form="beers" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="beer.beerName"></legend>\n' +
    '\n' +
    '    <div class="form-group" ng-show="beer.labelCode">\n' +
    '      <div class="col-sm-10 col-sm-offset-2">\n' +
    '        <ks-label code="{{beer.labelCode}}"></ks-label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div ng-include="\'shared/image-upload-1.html\'"></div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/beers/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/beers/show.html',
    '<h1>Sör adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="beer.beerName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="beer.beerName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Sörfőzde:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="showBrewery()" ng-bind="beer.breweryName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Sörtípus:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="showBeerType()" ng-bind="beer.beerTypeName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Címke:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ks-thumbnail ng-show="beer.labelCode" code="{{beer.labelCode}}" action="label()"></ks-thumbnail>\n' +
    '        <p ng-hide="beer.labelCode" class="form-control-static">\n' +
    '          <a href="" ng-click="label()">Feltöltés...</a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="beer.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Alkohol:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static" ng-bind="beer.abv">\n' +
    '          <span ng-bind="beer.abv"> % V/V\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">IBU:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static" ng-bind="beer.ibu"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Szárazanyag:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="beer.extract"></span> °B\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Kalória:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="beer.calories"></span>\n' +
    '          <span ng-bind="beer.caloriesUnit"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Maláták:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="malt in beer.malts">\n' +
    '            <a href="" ng-click="showMalt(malt.maltCode)" ng-bind="malt.maltName"></a>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Élesztők:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="yeast in beer.yeasts">\n' +
    '            <a href="" ng-click="showYeast(yeast.yeastCode)" ng-bind="yeast.yeastName"></a>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Komlók:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ul class="form-control-static list-inline">\n' +
    '          <li ng-repeat="hop in beer.hops">\n' +
    '            <a href="" ng-click="showHop(hop.hopCode)" ng-bind="hop.hopName"></a>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Létrehozás:</label>\n' +
    '      <div class="col-sm-6">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="beer.creationDate"></span>\n' +
    '          <span ng-bind="beer.creatorName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Állapot:</label>\n' +
    '      <div class="col-sm-2">\n' +
    '        <p class="form-control-static" ng-bind="beer.stateName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Utolsó módosítás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="beer.lastRevisionDate"></span>\n' +
    '          <span ng-bind="beer.lastReviserName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="upload()">Új kép...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="beer.images">\n' +
    '          <span ng-repeat="image in beer.images">\n' +
    '            <ks-thumbnail code="{{image.imageCode}}" action="show(image.imageCode)"></ks-thumbnail>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <p ng-hide="beer.images" class="bg-info">Ehhez a sörhöz nem tartozik kép.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/create.html',
    '<h1>Új sörfőzde</h1>\n' +
    '\n' +
    '<form validation-form="breweries" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="breweryName" ng-model="brewery.breweryName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="breweryType" ng-model="brewery.breweryType" value="1"> sörgyár\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="breweryType" ng-model="brewery.breweryType" value="2"> sörfőzde\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="breweryType" ng-model="brewery.breweryType" value="3"> söröző\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="breweryType" ng-model="brewery.breweryType" value="3"> bérfőző\n' +
    '        </label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Ország, régió:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="chooseRegion()" ng-bind="regionName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="address" ng-model="brewery.address"\n' +
    '               validation-source ng-maxlength="100">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Telefon:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="phone" ng-model="brewery.phone"\n' +
    '               validation-source ng-maxlength="50">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Honlap:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="webSite" ng-model="brewery.webSite"\n' +
    '               validation-source ng-maxlength="50">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">E-posta:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="email" class="form-control width-5"\n' +
    '               name="email" ng-model="brewery.email"\n' +
    '               validation-source ng-maxlength="50" ng-email>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Facebook:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="facebook" ng-model="brewery.facebook"\n' +
    '               validation-source ng-maxlength="50">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Twitter:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="twitter" ng-model="brewery.twitter"\n' +
    '               validation-source ng-maxlength="50">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid() || !brewery.regionCode\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Sörfőzde törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{brewery.breweryName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt a sörfőzdét?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/edit.html',
    '<h1>Sörfőzde szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="breweries" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="breweryName" ng-model="brewery.breweryName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="breweryType" ng-model="brewery.breweryType" value="1"> sörgyár\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="breweryType" ng-model="brewery.breweryType" value="2"> sörfőzde\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="breweryType" ng-model="brewery.breweryType" value="3"> söröző\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="breweryType" ng-model="brewery.breweryType" value="3"> bérfőző\n' +
    '        </label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Ország, régió:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="chooseRegion()" ng-bind="regionName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="address" ng-model="brewery.address"\n' +
    '               validation-source ng-maxlength="100">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Telefon:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="phone" ng-model="brewery.phone"\n' +
    '               validation-source ng-maxlength="50">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Honlap:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="webSite" ng-model="brewery.webSite"\n' +
    '               validation-source ng-maxlength="50">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">E-posta:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="email" class="form-control width-5"\n' +
    '               name="email" ng-model="brewery.email"\n' +
    '               validation-source ng-maxlength="50" ng-email>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Facebook:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="facebook" ng-model="brewery.facebook"\n' +
    '               validation-source ng-maxlength="50">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Twitter:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="twitter" ng-model="brewery.twitter"\n' +
    '               validation-source ng-maxlength="50">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/image-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/image-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Sörfőzdekép törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote ng-bind="image.fileName"></blockquote>\n' +
    '    <p><ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail></p>\n' +
    '    <p>Valóban törölni akarja ezt a sörfőzdeképet?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/image-edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/image-edit.html',
    '<h1>Sörfőzdekép szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="images" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="malt.maltName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="maltName" ng-model="data.title"\n' +
    '               validation-source required maxlength="255" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="data.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/image-show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/image-show.html',
    '<h1>Sörfőzdekép</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="brewery.breweryName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-image code="{{image.imageCode}}"></ks-image>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.title"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="image.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/image-upload.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/image-upload.html',
    '<h1>Sörfőzdekép feltöltése</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="brewery.breweryName"></legend>\n' +
    '\n' +
    '    <div ng-include="\'shared/image-upload.html\'"></div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/index.html',
    '<h1>Sörfőzdék</h1>\n' +
    '\n' +
    '<form class="form-inline">\n' +
    '  <div class="pull-right">\n' +
    '    <button class="btn btn-link" ng-click="create()">Új sörfőzde...</button>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Megnevezés:</label>\n' +
    '    <input type="text" class="form-control input-sm width-1" ng-model="settings.breweryName">\n' +
    '  </div>\n' +
    '  <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '</form>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <table class="table table-condensed table-striped">\n' +
    '    <thead>\n' +
    '      <tr>\n' +
    '        <th sort-column="breweryName">Megnevezés</th>\n' +
    '        <th sort-column="regionName">Ország</th>\n' +
    '      </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '      <tr ng-repeat="brewery in list">\n' +
    '        <td><a href="" ng-click="show(brewery)" ng-bind="brewery.breweryName"></a></td>\n' +
    '        <td><span ng-bind="brewery.regionName"></span></td>\n' +
    '      </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <p class="text-center">\n' +
    '    <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '  </p>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő sörfőzde.</p>\n' +
    '');
}]);

angular.module('dashboard/breweries/logo-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/logo-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Logó törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote ng-bind="brewery.breweryName"></blockquote>\n' +
    '    <p><ks-thumbnail code="{{brewery.logoCode}}"></ks-thumbnail></p>\n' +
    '    <p>Valóban törölni akarja ezt a logót?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/logo.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/logo.html',
    '<h1>Sörfőzde logója</h1>\n' +
    '\n' +
    '<form validation-form="breweries" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="brewery.breweryName"></legend>\n' +
    '\n' +
    '    <div class="form-group" ng-show="brewery.logoCode">\n' +
    '      <div class="col-sm-10 col-sm-offset-2">\n' +
    '        <ks-label code="{{brewery.logoCode}}"></ks-label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div ng-include="\'shared/image-upload-1.html\'"></div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/breweries/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/breweries/show.html',
    '<h1>Sörfőzde adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="brewery.breweryName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.breweryName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.typeName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Ország, régió:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <a href="" ng-click="showRegion()" ng-bind="brewery.regionName"></a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Logó:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ks-thumbnail ng-show="brewery.logoCode" code="{{brewery.logoCode}}" action="logo()"></ks-thumbnail>\n' +
    '        <p ng-hide="brewery.logoCode" class="form-control-static">\n' +
    '          <a href="" ng-click="logo()">Feltöltés...</a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.address"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Telefon:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.phone"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Honlap:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.webSite"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">E-posta:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.email"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Facebook:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.facebook"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Twitter:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="brewery.twitter"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Létrehozás:</label>\n' +
    '      <div class="col-sm-6">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="brewery.creationDate"></span>\n' +
    '          <span ng-bind="brewery.creatorName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Állapot:</label>\n' +
    '      <div class="col-sm-2">\n' +
    '        <p class="form-control-static" ng-bind="brewery.stateName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Utolsó módosítás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="brewery.lastRevisionDate"></span>\n' +
    '          <span ng-bind="brewery.lastReviserName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="upload()">Új kép...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="brewery.images">\n' +
    '          <span ng-repeat="image in brewery.images">\n' +
    '            <ks-thumbnail code="{{image.imageCode}}" action="show(image.imageCode)"></ks-thumbnail>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <p ng-hide="brewery.images" class="bg-info">Ehhez a sörfözdéhez nem tartozik kép.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/hops/create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/create.html',
    '<h1>Új komló</h1>\n' +
    '\n' +
    '<form validation-form="hops" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="hopName" ng-model="hop.hopName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="hop.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/hops/delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Komló törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{hop.hopName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt a komlót?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/hops/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/edit.html',
    '<h1>Komló szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="hops" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="hopName" ng-model="hop.hopName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="hop.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/hops/image-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/image-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Komlókép törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote ng-bind="image.fileName"></blockquote>\n' +
    '    <p><ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail></p>\n' +
    '    <p>Valóban törölni akarja ezt a komlóképet?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/hops/image-edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/image-edit.html',
    '<h1>Malátakép szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="images" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="hop.hopName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control"\n' +
    '               name="title" ng-model="data.title"\n' +
    '               validation-source required maxlength="255" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="data.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/hops/image-show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/image-show.html',
    '<h1>Komlókép</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="hop.hopName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-image code="{{image.imageCode}}"></ks-image>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.title"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="image.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/hops/image-upload.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/image-upload.html',
    '<h1>Komlókép feltöltése</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="hop.hopName"></legend>\n' +
    '\n' +
    '    <div ng-include="\'shared/image-upload.html\'"></div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/hops/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/index.html',
    '<h1>Komlók</h1>\n' +
    '\n' +
    '<form class="form-inline">\n' +
    '  <div class="pull-right">\n' +
    '    <button class="btn btn-link" ng-click="create()">Új komló...</button>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Megnevezés:</label>\n' +
    '    <input type="text" class="form-control input-sm width-1" ng-model="settings.hopName">\n' +
    '  </div>\n' +
    '  <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '</form>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <table class="table table-condensed table-striped">\n' +
    '    <thead>\n' +
    '      <tr>\n' +
    '        <th sort-column="hopName">Megnevezés</th>\n' +
    '      </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '      <tr ng-repeat="hop in list">\n' +
    '        <td><a href="" ng-click="show(hop)" ng-bind="hop.hopName"></a></td>\n' +
    '      </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <p class="text-center">\n' +
    '    <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '  </p>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő komló.</p>\n' +
    '');
}]);

angular.module('dashboard/hops/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/hops/show.html',
    '<h1>Komló adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="hop.hopName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="hop.hopName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="hop.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Létrehozás:</label>\n' +
    '      <div class="col-sm-6">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="hop.creationDate"></span>\n' +
    '          <span ng-bind="hop.creatorName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Állapot:</label>\n' +
    '      <div class="col-sm-2">\n' +
    '        <p class="form-control-static" ng-bind="hop.stateName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Utolsó módosítás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="hop.lastRevisionDate"></span>\n' +
    '          <span ng-bind="hop.lastReviserName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="upload()">Új kép...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="hop.images">\n' +
    '          <span ng-repeat="image in hop.images">\n' +
    '            <ks-thumbnail code="{{image.imageCode}}" action="show(image.imageCode)"></ks-thumbnail>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <p ng-hide="hop.images" class="bg-info">Ehhez a komlóhoz nem tartozik kép.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/index.html',
    '<h1>Vezérlőpult</h1>\n' +
    '\n' +
    '<p>Válasszon funkciót:</p>\n' +
    '\n' +
    '<ul>\n' +
    '  <li><a href="/dashboard/malts">Maláták</a></li>\n' +
    '  <li><a href="/dashboard/yeasts">Élesztők</a></li>\n' +
    '  <li><a href="/dashboard/hops">Komlók</a></li>\n' +
    '  <li><a href="/dashboard/beer-types">Sörtípusok</a></li>\n' +
    '</ul>\n' +
    '<ul>\n' +
    '  <li><a href="/dashboard/breweries">Sörfőzdék</a></li>\n' +
    '  <li><a href="/dashboard/beers">Sörök</a></li>\n' +
    '</ul>\n' +
    '<ul ng-if="isSupervisor">\n' +
    '  <li><a href="/dashboard/users">Felhasználók</a></li>\n' +
    '  <li><a href="/dashboard/regions">Régiók ♦ Országok ♦ Tartományok / államok</a></li>\n' +
    '</ul>\n' +
    '<ul>\n' +
    '  <li><a href="/dashboard/system-info">Rendszer információk</a></li>\n' +
    '  <li><a href="/dashboard/mailer-test">Levélküldés tesztelése</a></li>\n' +
    '</ul>\n' +
    '<ul ng-if="isSupervisor">\n' +
    '  <li><a href="" target="_blank" ng-click="explore()">REST API lista</a></li>\n' +
    '  <li><a href="/dashboard/model-definitions">Modell-definíciók</a></li>\n' +
    '</ul>\n' +
    '');
}]);

angular.module('dashboard/mailer-test.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/mailer-test.html',
    '<h1>Levélküldés tesztelése</h1>\n' +
    '\n' +
    '<div ng-hide="success">\n' +
    '  <p>\n' +
    '    Adja meg a tesztlevél címzettjét:\n' +
    '  </p>\n' +
    '\n' +
    '  <form validation-form="krigli" name="form" novalidate class="form-horizontal">\n' +
    '    <fieldset>\n' +
    '      <legend></legend>\n' +
    '\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label">Név:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control width-5"\n' +
    '                 name="userName" ng-model="address.name"\n' +
    '                 validation-source autofocus>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <label class="col-sm-2 control-label required">E-posta:</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="email" class="form-control width-5"\n' +
    '                 name="email" ng-model="address.email"\n' +
    '                 validation-source required ng-email>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <div class="col-sm-offset-2 col-sm-10">\n' +
    '          <button class="btn btn-primary" ng-click="send()" ng-disabled=\'invalid()\'>Küldés</button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </fieldset>\n' +
    '  </form>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-show="success">\n' +
    '  <p>\n' +
    '    A tesztüzenet a megadott e-posta címre elment.\n' +
    '  </p>\n' +
    '</div>');
}]);

angular.module('dashboard/malts/create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/create.html',
    '<h1>Új maláta</h1>\n' +
    '\n' +
    '<form validation-form="malts" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="maltName" ng-model="malt.maltName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="malt.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/malts/delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Maláta törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{malt.maltName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt a malátát?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/malts/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/edit.html',
    '<h1>Maláta szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="malts" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="maltName" ng-model="malt.maltName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="malt.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/malts/image-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/image-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Malátakép törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote ng-bind="image.fileName"></blockquote>\n' +
    '    <p><ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail></p>\n' +
    '    <p>Valóban törölni akarja ezt a malátaképet?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/malts/image-edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/image-edit.html',
    '<h1>Malátakép szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="images" name="form" novalidate class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="malt.maltName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control"\n' +
    '               name="title" ng-model="data.title"\n' +
    '               validation-source required maxlength="255" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="data.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/malts/image-show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/image-show.html',
    '<h1>Malátakép</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="malt.maltName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-image code="{{image.imageCode}}"></ks-image>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.title"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="image.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/malts/image-upload.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/image-upload.html',
    '<h1>Malátakép feltöltése</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="malt.maltName"></legend>\n' +
    '\n' +
    '    <div ng-include="\'shared/image-upload.html\'"></div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/malts/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/index.html',
    '<h1>Maláták</h1>\n' +
    '\n' +
    '<form class="form-inline">\n' +
    '  <div class="pull-right">\n' +
    '    <button class="btn btn-link" ng-click="create()">Új maláta...</button>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Megnevezés:</label>\n' +
    '    <input type="text" class="form-control input-sm width-1" ng-model="settings.maltName">\n' +
    '  </div>\n' +
    '  <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '</form>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <table class="table table-condensed table-striped">\n' +
    '    <thead>\n' +
    '      <tr>\n' +
    '        <th sort-column="maltName">Megnevezés</th>\n' +
    '      </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '      <tr ng-repeat="malt in list">\n' +
    '        <td><a href="" ng-click="show(malt)" ng-bind="malt.maltName"></a></td>\n' +
    '      </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <p class="text-center">\n' +
    '    <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '  </p>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő maláta.</p>\n' +
    '');
}]);

angular.module('dashboard/malts/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/malts/show.html',
    '<h1>Maláta adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="malt.maltName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="malt.maltName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="malt.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Létrehozás:</label>\n' +
    '      <div class="col-sm-6">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="malt.creationDate"></span>\n' +
    '          <span ng-bind="malt.creatorName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Állapot:</label>\n' +
    '      <div class="col-sm-2">\n' +
    '        <p class="form-control-static" ng-bind="malt.stateName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Utolsó módosítás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="malt.lastRevisionDate"></span>\n' +
    '          <span ng-bind="malt.lastReviserName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="upload()">Új kép...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="malt.images">\n' +
    '          <span ng-repeat="image in malt.images">\n' +
    '            <ks-thumbnail code="{{image.imageCode}}" action="show(image.imageCode)"></ks-thumbnail>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <p ng-hide="malt.images" class="bg-info">Ehhez a malátához nem tartozik kép.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/model-definitions.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/model-definitions.html',
    '<h1>Modell definíciók</h1>\n' +
    '\n' +
    '<p>\n' +
    '  Az adatbázis séma lekérdezése LoopBack modell-definíció formátumban.\n' +
    '</p>\n' +
    '\n' +
    '<form class="form-inline">\n' +
    '  <div class="form-group">\n' +
    '    <label>Modell:</label>\n' +
    '    <select class="form-control width-4" ng-model="name" ng-change="find()">\n' +
    '      <option value="">--- mind ---</option>\n' +
    '      <option ng-repeat="model in models" value="{{model.name}}">\n' +
    '        {{model.owner}}.{{model.name}} ({{model.type}})\n' +
    '      </option>\n' +
    '    </select>\n' +
    '  </div>\n' +
    '  <button class="btn btn-primary" data-clipboard-target="clipboard_pre">Másolás</button>\n' +
    '</form>\n' +
    '\n' +
    '<p><pre id="clipboard_pre">{{definitions}}</pre></p>\n' +
    '\n' +
    '<script type="text/javascript" src="/library/zeroclipboard/2.1.5/ZeroClipboard.js"></script>\n' +
    '<script type="text/javascript">\n' +
    '  ZeroClipboard.config( { swfPath: "/library/zeroclipboard/2.1.5/ZeroClipboard.swf" } );\n' +
    '  var client = new ZeroClipboard($(".btn-primary"));\n' +
    '</script>\n' +
    '');
}]);

angular.module('dashboard/regions/country-create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/country-create.html',
    '<h1>Új ország</h1>\n' +
    '\n' +
    '<form validation-form="regions" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-1"\n' +
    '               name="countryCode" ng-model="country.countryCode"\n' +
    '               validation-source required ng-maxlength="8" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="regionName" ng-model="country.regionName"\n' +
    '               validation-source required ng-maxlength="100">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-2"\n' +
    '               name="shortName" ng-model="country.shortName"\n' +
    '               validation-source ng-maxlength="25">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/country-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/country-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Ország törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{region.regionName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt az országot?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/country-edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/country-edit.html',
    '<h1>Ország szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="regions" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="region.regionName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-1"\n' +
    '               name="countryCode" ng-model="country.countryCode"\n' +
    '               validation-source required ng-maxlength="8" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="regionName" ng-model="country.regionName"\n' +
    '               validation-source required ng-maxlength="100">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-2"\n' +
    '               name="shortName" ng-model="country.shortName"\n' +
    '               validation-source ng-maxlength="25">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/country-show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/country-show.html',
    '<h1>Ország adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="region.regionName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.countryCode"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.regionName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.shortName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()" ng-show="canDelete">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="create()">Új tartomány/állam...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="region.children">\n' +
    '          <table class="table table-condensed table-striped">\n' +
    '            <thead>\n' +
    '              <tr>\n' +
    '                <th colspan="3">Tartomány/állam</th>\n' +
    '              </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '              <tr ng-repeat="rows in region.children | partition:3">\n' +
    '                <td ng-repeat="province in rows">\n' +
    '                  <a href="" ng-click="show(province)" ng-bind="province.regionName"></a>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <p ng-hide="region.children" class="bg-info">Ehhez az országhoz nem tartozik tartomány/állam.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/create.html',
    '<h1>Új régió</h1>\n' +
    '\n' +
    '<form validation-form="regions" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-1"\n' +
    '               name="countryCode" ng-model="region.countryCode"\n' +
    '               validation-source ng-maxlength="8" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="regionName" ng-model="region.regionName"\n' +
    '               validation-source required ng-maxlength="100">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-2"\n' +
    '               name="shortName" ng-model="region.shortName"\n' +
    '               validation-source ng-maxlength="25">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Régió törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{region.regionName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt a régiót?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/edit.html',
    '<h1>Régió szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="regions" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="region.regionName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-1"\n' +
    '               name="countryCode" ng-model="region.countryCode"\n' +
    '               validation-source ng-maxlength="8" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="regionName" ng-model="region.regionName"\n' +
    '               validation-source required ng-maxlength="100">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-2"\n' +
    '               name="shortName" ng-model="region.shortName"\n' +
    '               validation-source ng-maxlength="25">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/index.html',
    '<h1>Régiók</h1>\n' +
    '\n' +
    '<div class="col-lg-2 col-md-2 col-sm-2">\n' +
    '  <button class="btn btn-link" ng-click="create()">Új régió...</button>\n' +
    '</div>\n' +
    '\n' +
    '<div class="col-lg-8 col-md-8 col-sm-8">\n' +
    '  <div ng-show="list.length">\n' +
    '    <table class="table table-condensed table-striped">\n' +
    '      <thead>\n' +
    '        <tr>\n' +
    '          <th>Megnevezés</th>\n' +
    '        </tr>\n' +
    '      </thead>\n' +
    '      <tbody>\n' +
    '        <tr ng-repeat="region in list">\n' +
    '          <td><a href="" ng-click="show(region)" ng-bind="region.regionName"></a></td>\n' +
    '        </tr>\n' +
    '      </tbody>\n' +
    '    </table>\n' +
    '  </div>\n' +
    '\n' +
    '  <p ng-hide="list.length" class="bg-info">Nincs egy régió sem.</p>\n' +
    '</div>\n' +
    '');
}]);

angular.module('dashboard/regions/province-create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/province-create.html',
    '<h1>Új tartomány/állam</h1>\n' +
    '\n' +
    '<form validation-form="regions" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-1"\n' +
    '               name="countryCode" ng-model="province.countryCode"\n' +
    '               validation-source ng-maxlength="8" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="regionName" ng-model="province.regionName"\n' +
    '               validation-source required ng-maxlength="100">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-2"\n' +
    '               name="shortName" ng-model="province.shortName"\n' +
    '               validation-source ng-maxlength="25">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/province-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/province-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Tartomány/állam törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{region.regionName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt a tartományt/államot?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/province-edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/province-edit.html',
    '<h1>Tartomány/állam szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="regions" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="region.regionName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-1"\n' +
    '               name="countryCode" ng-model="province.countryCode"\n' +
    '               validation-source ng-maxlength="8" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="regionName" ng-model="province.regionName"\n' +
    '               validation-source required ng-maxlength="100">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-2"\n' +
    '               name="shortName" ng-model="province.shortName"\n' +
    '               validation-source ng-maxlength="25">\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/province-show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/province-show.html',
    '<h1>Tartomány/állam adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="region.regionName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.countryCode"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.regionName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.shortName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    ' </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/regions/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/regions/show.html',
    '<h1>Régió adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="region.regionName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Kód:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.countryCode"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.regionName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Rövid név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="region.shortName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()" ng-show="canDelete">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="create()">Új ország...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="region.children">\n' +
    '          <table class="table table-condensed table-striped">\n' +
    '            <thead>\n' +
    '              <tr>\n' +
    '                <th colspan="3">Ország</th>\n' +
    '              </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '              <tr ng-repeat="rows in region.children | partition:3">\n' +
    '                <td ng-repeat="country in rows">\n' +
    '                  <a href="" ng-click="show(country)" ng-bind="country.regionName"></a>\n' +
    '                </td>\n' +
    '              </tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <p ng-hide="region.children" class="bg-info">Ehhez a régióhoz nem tartozik ország.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/system-info.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/system-info.html',
    '<h1>Rendszer információk</h1>\n' +
    '\n' +
    '<p>\n' +
    '  <button type="reset" class="btn btn-danger" ng-click="go()">{{info.app.name}} v{{info.app.version}}</button>\n' +
    '</p>\n' +
    '\n' +
    '<dl class="dl-horizontal">\n' +
    '  <dt>Operating system:</dt>\n' +
    '  <dd>{{ info.server.opsys }} ({{ info.server.release }})</dd>\n' +
    '\n' +
    '  <dt>Host name:</dt>\n' +
    '  <dd>{{ info.server.hostname }}</dd>\n' +
    '\n' +
    '  <dt>Platform / architecture:</dt>\n' +
    '  <dd>{{ info.server.platform }} / {{info.server.arch }}</dd>\n' +
    '\n' +
    '  <dt>CPU/core installed:</dt>\n' +
    '  <dd>\n' +
    '    <ul>\n' +
    '      <li ng-repeat="cpu in info.server.cpus">{{ cpu.model }} ({{ cpu.speed }} MHz)</li>\n' +
    '    </ul>\n' +
    '  </dd>\n' +
    '\n' +
    '  <dt>Working directory:</dt>\n' +
    '  <dd>{{ info.server.cwd }}</dd>\n' +
    '\n' +
    '  <dt>Schema version:</dt>\n' +
    '  <dd>{{ info.db.schemaVersion }}</dd>\n' +
    '</dl>\n' +
    '\n' +
    '<table>\n' +
    '  <tr>\n' +
    '    <td>\n' +
    '      <em>Versions of node and its modules:</em>\n' +
    '    </td>\n' +
    '    <td>\n' +
    '      <em>Versions of node packages:</em>\n' +
    '    </td>\n' +
    '  </tr>\n' +
    '  <tr>\n' +
    '    <td style="width: 300px; vertical-align: top;">\n' +
    '      <dl class="dl-horizontal">\n' +
    '        <dt ng-repeat-start="module in info.modules">{{ module.name }}</dt>\n' +
    '        <dd ng-repeat-end>{{ module.version }}</dd>\n' +
    '      </dl>\n' +
    '    </td>\n' +
    '    <td style="width: 300px; vertical-align: top;">\n' +
    '      <dl class="dl-horizontal">\n' +
    '        <dt ng-repeat-start="package in info.packages" style="width:220px">{{ package.name }}</dt>\n' +
    '        <dd ng-repeat-end style="padding-left:60px">{{ package.version }}</dd>\n' +
    '      </dl>\n' +
    '    </td>\n' +
    '  </tr>\n' +
    '</table>\n' +
    '');
}]);

angular.module('dashboard/users/create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/users/create.html',
    '<h1>Új felhasználó</h1>\n' +
    '\n' +
    '<form validation-form="users" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="userName" ng-model="user.userName"\n' +
    '               validation-source required ng-maxlength="50" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">E-posta:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="email" class="form-control width-5"\n' +
    '               name="email" ng-model="user.email"\n' +
    '               validation-source required ng-maxlength="100" ng-email>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Jelszó:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="password" ng-model="user.password"\n' +
    '               validation-source required>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feladatkör:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="role" ng-model="user.role" value="1"> tag\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="role" ng-model="user.role" value="2"> szerkesztő\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="role" ng-model="user.role" value="3"> felügyelő\n' +
    '        </label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/users/delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/users/delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Felhasználó törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{user.userName}}<br/>{{user.email}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt a felhasználót?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/users/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/users/edit.html',
    '<h1>Felhasználó szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="users" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="userName" ng-model="user.userName"\n' +
    '               validation-source required ng-maxlength="50" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">E-posta:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="email" class="form-control width-5"\n' +
    '               name="email" ng-model="user.email"\n' +
    '               validation-source required ng-maxlength="100" ng-email>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feladatkör:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="role" ng-model="user.role" value="1"> tag\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="role" ng-model="user.role" value="2"> szerkesztő\n' +
    '        </label>\n' +
    '        <label class="radio-inline">\n' +
    '          <input type="radio" name="role" ng-model="user.role" value="3"> felügyelő\n' +
    '        </label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/users/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/users/index.html',
    '<h1>Felhasználók</h1>\n' +
    '\n' +
    '<form class="form-inline">\n' +
    '  <div class="pull-right">\n' +
    '    <button class="btn btn-link" ng-click="create()">Új felhasználó...</button>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Név:</label>\n' +
    '    <input type="text" class="form-control input-sm width-1" ng-model="settings.userName">\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>E-posta:</label>\n' +
    '    <input type="text" class="form-control input-sm width-1" ng-model="settings.email">\n' +
    '  </div>\n' +
    '  <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '</form>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <table class="table table-condensed table-striped">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '      <th sort-column="userName">Név</th>\n' +
    '      <th sort-column="email">E-posta</th>\n' +
    '      <th sort-column="userState">Állapot</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="user in list">\n' +
    '      <td><a href="" ng-click="show(user)" ng-bind="user.userName"></a></td>\n' +
    '      <td>{{user.email}}</td>\n' +
    '      <td>{{user.stateName}}</td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <p class="text-center">\n' +
    '    <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '  </p>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő felhasználó.</p>\n' +
    '');
}]);

angular.module('dashboard/users/photo-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/users/photo-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Fénykép törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote ng-bind="user.userName"></blockquote>\n' +
    '    <p><ks-thumbnail code="{{user.photoCode}}"></ks-thumbnail></p>\n' +
    '    <p>Valóban törölni akarja ezt a felhasználói fényképet?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/users/photo.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/users/photo.html',
    '<h1>Felhasználó fényképe</h1>\n' +
    '\n' +
    '<form validation-form="users" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="user.userName"></legend>\n' +
    '\n' +
    '    <div class="form-group" ng-show="user.photoCode">\n' +
    '      <div class="col-sm-10 col-sm-offset-2">\n' +
    '        <ks-photo code="{{user.photoCode}}"></ks-photo>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div ng-include="\'shared/image-upload-1.html\'"></div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/users/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/users/show.html',
    '<h1>Felhasználó adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="user.userName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Név:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="user.userName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">E-posta:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="user.email"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Fénykép:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <ks-thumbnail ng-show="user.photoCode" code="{{user.photoCode}}" action="photo()"></ks-thumbnail>\n' +
    '        <p ng-hide="user.photoCode" class="form-control-static">\n' +
    '          <a href="" ng-click="photo()">Feltöltés...</a>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Állapot:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="user.stateName"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-3 control-label">Létrehozás ideje:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static" ng-bind="user.creationDate"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feladatkör:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="user.roleName"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-3 control-label">Utolsó bejelentkezés:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static" ng-bind="user.lastLoginDate"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-8 control-label">Törlés ideje:</label>\n' +
    '      <div class="col-sm-4">\n' +
    '        <p class="form-control-static" ng-bind="user.deletionDate"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/yeasts/create.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/create.html',
    '<h1>Új élesztő</h1>\n' +
    '\n' +
    '<form validation-form="yeasts" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="yeastName" ng-model="yeast.yeastName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="yeast.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="create()" ng-disabled=\'invalid()\'>Létrehozás</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/yeasts/delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Élesztő törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote>{{yeast.yeastName}}</blockquote>\n' +
    '    <p>Valóban törölni akarja ezt az élesztőt?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/yeasts/edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/edit.html',
    '<h1>Élesztő szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="yeasts" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="formTitle"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control width-5"\n' +
    '               name="yeastName" ng-model="yeast.yeastName"\n' +
    '               validation-source required ng-maxlength="100" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="yeast.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/yeasts/image-delete.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/image-delete.html',
    '<form name="form" novalidate class="form-horizontal">\n' +
    '  <div class="modal-header">\n' +
    '    <h4>Élesztőkép törlése</h4>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <div class="alert alert-danger" ng-show="error">{{error}}</div>\n' +
    '    <blockquote ng-bind="image.fileName"></blockquote>\n' +
    '    <p><ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail></p>\n' +
    '    <p>Valóban törölni akarja ezt az élesztőképet?</p>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '    <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/yeasts/image-edit.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/image-edit.html',
    '<h1>Élesztőkép szerkesztése</h1>\n' +
    '\n' +
    '<form validation-form="images" name="form" novalidate class="form-horizontal">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="yeast.yeastName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-thumbnail code="{{image.imageCode}}"></ks-thumbnail>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label required">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <input type="text" class="form-control"\n' +
    '               name="title" ng-model="data.title"\n' +
    '               validation-source required maxlength="255" autofocus>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <textarea name="description" ng-model="data.description"\n' +
    '                  ui-tinymce="tinymceOptions"></textarea>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button class="btn btn-primary" ng-click="save()" ng-disabled=\'invalid()\'>Mentés</button>\n' +
    '        <button class="btn btn-default" ng-click="cancel()">Mégsem</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/yeasts/image-show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/image-show.html',
    '<h1>Élesztőkép</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="yeast.yeastName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <ks-image code="{{image.imageCode}}"></ks-image>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Eredeti fájlnév:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.fileName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Méret:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadSize"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Típus:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.mimeType"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Feltöltési idő:</label>\n' +
    '      <div class="col-sm-3">\n' +
    '        <p class="form-control-static" ng-bind="image.uploadDate"></p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Feltöltő:</label>\n' +
    '      <div class="col-sm-5">\n' +
    '        <p class="form-control-static" ng-bind="image.uploaderName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Cím:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="image.title"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="image.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/yeasts/image-upload.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/image-upload.html',
    '<h1>Élesztőkép feltöltése</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="yeast.yeastName"></legend>\n' +
    '\n' +
    '    <div ng-include="\'shared/image-upload.html\'"></div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);

angular.module('dashboard/yeasts/index.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/index.html',
    '<h1>Élesztők</h1>\n' +
    '\n' +
    '<form class="form-inline">\n' +
    '  <div class="pull-right">\n' +
    '    <button class="btn btn-link" ng-click="create()">Új élesztő...</button>\n' +
    '  </div>\n' +
    '  <div class="form-group">\n' +
    '    <label>Megnevezés:</label>\n' +
    '    <input type="text" class="form-control input-sm width-1" ng-model="settings.yeastName">\n' +
    '  </div>\n' +
    '  <button class="btn btn-primary" ng-click="find()">Keresés</button>\n' +
    '</form>\n' +
    '\n' +
    '<div ng-show="totalItems">\n' +
    '  <table class="table table-condensed table-striped">\n' +
    '    <thead>\n' +
    '      <tr>\n' +
    '        <th sort-column="yeastName">Megnevezés</th>\n' +
    '      </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '      <tr ng-repeat="yeast in list">\n' +
    '        <td><a href="" ng-click="show(yeast)" ng-bind="yeast.yeastName"></a></td>\n' +
    '      </tr>\n' +
    '    </tbody>\n' +
    '  </table>\n' +
    '\n' +
    '  <p class="text-center">\n' +
    '    <pagination total-items="totalItems" page="settings.currentPage" max-size="settings.maxSize"\n' +
    '                previous-text="&laquo;" next-text="&raquo;" first-text="első" last-text="utolsó"\n' +
    '                boundary-links="true" on-select-page="selectPage(page)"></pagination>\n' +
    '  </p>\n' +
    '</div>\n' +
    '\n' +
    '<p ng-hide="totalItems" class="bg-info">Nincs a keresési feltételeknek megfelelő élesztő.</p>\n' +
    '');
}]);

angular.module('dashboard/yeasts/show.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/yeasts/show.html',
    '<h1>Élesztő adatai</h1>\n' +
    '\n' +
    '<form class="form-horizontal" id="show">\n' +
    '  <fieldset>\n' +
    '    <legend ng-bind="yeast.yeastName"></legend>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Megnevezés:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind="yeast.yeastName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Leírás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static" ng-bind-html="yeast.description"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Létrehozás:</label>\n' +
    '      <div class="col-sm-6">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="yeast.creationDate"></span>\n' +
    '          <span ng-bind="yeast.creatorName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '      <label class="col-sm-2 control-label">Állapot:</label>\n' +
    '      <div class="col-sm-2">\n' +
    '        <p class="form-control-static" ng-bind="yeast.stateName"></p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">Utolsó módosítás:</label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <p class="form-control-static">\n' +
    '          <span ng-bind="yeast.lastRevisionDate"></span>\n' +
    '          <span ng-bind="yeast.lastReviserName"></span>\n' +
    '        </p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '      <div class="col-sm-offset-2 col-sm-10">\n' +
    '        <button type="button" class="btn btn-primary" ng-click="edit()">Módosítás</button>\n' +
    '        <button type="button" class="btn btn-danger" ng-click="remove()">Törlés</button>\n' +
    '        <button type="button" class="btn" ng-click="back()">Vissza</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group">\n' +
    '      <label class="col-sm-2 control-label">\n' +
    '        <button class="btn btn-link" ng-click="upload()">Új kép...</button>\n' +
    '      </label>\n' +
    '      <div class="col-sm-10">\n' +
    '        <div ng-show="yeast.images">\n' +
    '          <span ng-repeat="image in yeast.images">\n' +
    '            <ks-thumbnail code="{{image.imageCode}}" action="show(image.imageCode)"></ks-thumbnail>\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <p ng-hide="yeast.images" class="bg-info">Ehhez az élesztőhö nem tartozik kép.</p>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '\n' +
    '  </fieldset>\n' +
    '</form>\n' +
    '');
}]);


