(function() {
  'use strict';

  angular.module('app').directive('tripPlannerHeader', [
      '$http',
      function($http) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/views/header.html',
        controller: [
          '$scope', '$state',
          function($scope, $state) {
            switch($state.current.name){
              case 'explorer': case 'profile': case 'dashboard':
                $scope.isLogin = true;
                break;
              default:
                $scope.isLogin = false;
                break;
            }
          }
        ],
        link: function(scope, element, attrs) {}
      };
    }]);

})();
