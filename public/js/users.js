(function() {
    'use strict';

    angular.module('app')
    .config(['$stateProvider',
        function($stateProvider) {
        $stateProvider
        .state('users', {
            url: '/users'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: '/views/profile.html',
            controller: 'ProfileCtrl'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/views/dashboard.html',
            controller: 'ProfileCtrl'
        });
    }]);
})();