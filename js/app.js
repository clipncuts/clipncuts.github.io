var cncApp = angular.module('cncApp', ['ngRoute']);

cncApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
}]);
