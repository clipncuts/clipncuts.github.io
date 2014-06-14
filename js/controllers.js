angular.module("cncApp", [])
.controller("myController", ['$scope', function ($scope){
  $scope.homePillClass = "active";
  $scope.servicesPillClass = "";
  $scope.showHome = true;
  $scope.showServices = false;

  $scope.selectHome = function(){
    $scope.homePillClass = "active";
    $scope.servicesPillClass = "";
    $scope.showHome = true;
    $scope.showServices = false;
  }
  $scope.selectServices = function(){
    $scope.homePillClass = "";
    $scope.servicesPillClass = "active";
    $scope.showHome = false;
    $scope.showServices = true;
  }
  $scope.selectContact = function(){
    $scope.homePillClass = "";
    $scope.servicesPillClass = "";
    $scope.showHome = false;
    $scope.showServices = false;
  }
}]);
