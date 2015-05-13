var PUApp = angular.module('PUApp', [
  'ngRoute'
]);

PUApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/views/home', {
		title : "PU community - Home",
        templateUrl: 'views/view.html',
        controller: 'noopController'
      }).
	  when('/views/add-article', {
		title : "PU community - Add article",
        templateUrl: 'views/add-article.html',
        controller: 'noopController'
      }).
	  when('/views/add-event', {
		title : "PU community - Add event",
        templateUrl: 'views/add-event.html',
        controller: 'noopController'
      }).
	  when('/views/my-article', {
		title : "PU community - Field report",
        templateUrl: 'views/my-article.html',
        controller: 'noopController'
      }).
	  when('/views/peoples', {
		title : "PU community - Peoples",
        templateUrl: 'views/peoples.html',
        controller: 'noopController'
      }).
	  when('/views/upload', {
		title : "PU community - Upload files",
        templateUrl: 'views/upload.html',
        controller: 'noopController'
      }).
      otherwise({
		title : "PU community - Home",
        redirectTo: '/views/home'
      });
  }
]);

// change Page Title based on the routers
PUApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

//PUApp.controller('loginMainController', loginMainController);
PUApp.controller('noopController', ['$scope', function ($scope) {}]);
PUApp.directive('mapEvent', mapEvent);
