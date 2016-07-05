angular.module("general_journals").controller("JournalsController",
["$scope","$http",
function($scope,$http){

  $scope.getJournals = function(){
      $http({
        method: 'GET',
        url: 'http://localhost:3000/journals'
      }).success(function(data, status) {
        $scope.journals = data;
      });
  }


}]);
