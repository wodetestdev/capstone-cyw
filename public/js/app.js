'use strict';

/**
 * @ngdoc overview
 * @name tripPlannerApp
 * @description
 * # tripPlannerApp
 *
 * Main module of the application.
 */
angular.module('app', ['ngAnimate', 'ui.router'])
  
 	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');
 	}
]);
