var PUApp = angular.module('PUApp', [
  'ngRoute'
]);

PUApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'login/views/index.html',
        controller: 'loginMainController'
      }).
	when('/partials', {
        templateUrl: 'partials/view.html',
        controller: 'noopController'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }
]);

PUApp.controller('loginMainController', loginMainController);
PUApp.controller('noopController', ['$scope', function ($scope) {}]);
