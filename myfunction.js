function LoadLookups($scope,model,url,$http){
 $scope[model] = {
       availableOptions: null,
       selectedOption: null
     };
 $http({
         method: 'GET',
         url: url
       }).success(function(data, status) {
         $scope[model].availableOptions = data;
       });
 }
