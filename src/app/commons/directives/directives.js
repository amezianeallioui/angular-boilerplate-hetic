(function() {
  'use strict';

  angular.module('demo')
    .directive('demoCounter', function() {
      return {
        //template: '<div>HETIC Counter {{counter}} <button ng-click="counter = counter + 1">Up</button></div>',
        templateUrl: '/commons/directives/partials/demo-counter.html',
        restrict: 'E',
        replace: true,
        scope: {
          counter: '=counter'
        },
        link: function(scope) {
          console.log(scope.counter);

        }
      }
    });

}());
