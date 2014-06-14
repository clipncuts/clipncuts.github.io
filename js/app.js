var cncApp = angular.module('cncApp', ['ngRoute']);

cncApp.config(function($routeProvider){
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'myController'});
}]);
