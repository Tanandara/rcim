angular.module("trial_balance").config([
  "$stateProvider",
  function($stateProvider){
    $stateProvider
    .state("searchtrial",{
      url:"/searchtrial",
      templateUrl:"/modules/trial_balance/views/search_trial_balance.html"
    })
    .state("trialbalance",{
      url:"/trialbalance",
      templateUrl:"/modules/trial_balance/views/trial_balance.html"
    })
  }
]);
