var PUApp = angular.module('PUApp', [
  'ngRoute'
]);

PUApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/views/home', {
        templateUrl: 'views/view.html',
        controller: 'noopController'
      }).
	  when('/views/add-article', {
        templateUrl: 'views/add-article.html',
        controller: 'noopController'
      }).
	  when('/views/add-event', {
        templateUrl: 'views/add-event.html',
        controller: 'noopController'
      }).
	  when('/views/my-article', {
        templateUrl: 'views/my-article.html',
        controller: 'noopController'
      }).
	  when('/views/peoples', {
        templateUrl: 'views/peoples.html',
        controller: 'noopController'
      }).
	  when('/views/upload', {
        templateUrl: 'views/upload.html',
        controller: 'noopController'
      }).
      otherwise({
        redirectTo: '/views/home'
      });
  }
]);

//PUApp.controller('loginMainController', loginMainController);
PUApp.controller('noopController', ['$scope', function ($scope) {}]);
