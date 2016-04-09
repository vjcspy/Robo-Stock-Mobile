/**
 * Created by vjcspy on 09/04/2016.
 */
app
  .run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider
        .otherwise('/app/home');
      $stateProvider
        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'views/app/menu.html',
          controller: 'AppCtrl'
        })
        .state('app.home', {
          url: '/home',
          views: {
            'menuContent': {
              templateUrl: 'views/app/home.html'
            }
          }
        })
        .state('app.filter', {
          url: '/filter',
          views: {
            'menuContent': {
              templateUrl: 'views/app/filter.html'
            }
          }
        })
    }]);
