function loginMainController ($scope, $routeParams, $location) {
   $scope.onClick = function() {
		alert("TOP");
   }
}

loginMainController.$inject = ['$scope', '$routeParams'];
