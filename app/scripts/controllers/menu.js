'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function ($scope) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
   		$scope.part1 = function() {
   			$(".part1Container").show();
   			$(".part2Container").hide();
   			$(".part3Container").hide();
   		};
   		$scope.part2 = function() {
   			$(".part1Container").hide();
   			$(".part2Container").show();
   			$(".part3Container").hide();
   		};
   		$scope.part3 = function() {
   			$(".part1Container").hide();
   			$(".part2Container").hide();
   			$(".part3Container").show();
   		};
  });
