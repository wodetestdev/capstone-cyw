(function() {
  'use strict';

  angular.module('app').directive('tripPlannerFooter', [
      '$http',
      function($http) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/views/footer.html',
        controller: ['$scope', function($scope) {
        }],
        link: function(scope, element, attrs) {}
      };
    }]);

})();