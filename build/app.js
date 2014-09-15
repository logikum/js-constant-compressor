/**
 * Definition of the app module.
 */
(function () {
  'use strict';

  // Create the module and define its dependencies.
  angular.module(MODULES.App, [

    // Angular modules
    'ngRoute',
    'ngSanitize',
    'ngAnimate',

    // 3rd Party Modules

    // Custom modules
    MODULES.CommonTemplates,
    MODULES.Directives,
    MODULES.Filters,
    MODULES.Services.Base,
    MODULES.Services.Http,
    MODULES.Root
  ])

  /**
   * Execute configuring code before module loading.
   */
  .config([
    '$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
      // Configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
      $routeProvider.otherwise({
        redirectTo: '/not-found'
      });
    }
  ])
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
