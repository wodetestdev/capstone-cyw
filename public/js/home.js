(function() {
  	'use strict';
  
  	angular.module('app')
  	.config(['$stateProvider',
	    function($stateProvider) {
	    $stateProvider
      	.state('home', {
  	     	url: '/',
        	templateUrl: '/views/home.html',
        	controller: 'HomeCtrl'
      	});
    }]);
})();