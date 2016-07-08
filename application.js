"use strict";

angular.module("Main",[]);
angular.module("Main",
['ui.router',
"ngAnimate",
"ui.bootstrap",
"core",
"users",
"dashboard",
"tutorialspointUploadFile",
"general_journals",
"general_ledgers",
"trial_balance"]);


angular.module("Main")
.run(["$rootScope",function($rootScope){

    $rootScope
        .$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                console.log("State Change: transition begins!");
                $('.page-transition').toggleClass('loading');
        });

    $rootScope
        .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                console.log("State Change: State change success!");
                $('.page-transition').toggleClass('loading');

        });



}]);
