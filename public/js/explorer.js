(function() {
    'use strict';

    angular.module('app')
    .config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state('explorer', {
            url: '/explorer',
            templateUrl: '/views/explorer.html',
            controller: 'ExplorerCtrl'
        });
    }]);
    
})();