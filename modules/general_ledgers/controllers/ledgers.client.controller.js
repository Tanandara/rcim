angular.module("general_ledgers").controller("LedgersController",
["$scope","$http","$state",
function($scope,$http,$state){

  $scope.getLedgers = function(){
      $http({
        method: 'GET',
        url: 'http://localhost:3000/ledgers'
      }).success(function(data, status) {
        $scope.ledgers = data;
      });
  }

  $scope.goLedgerDetail = function(id){
    location.href = "#!/ledgers/" + id;
  }


}]);
