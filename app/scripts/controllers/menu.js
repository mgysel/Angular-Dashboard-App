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
   		$scope.part1 = function() {
   			$(".part1Container").show();
   			$(".part2Container").hide();
   			$(".part3Container").hide();
        $(".nav-tab-part1").css({"font-weight": "bold", "color": "#333333", "background-color": "#f1f1f1"});
        $(".nav-tab-part2").css({"font-weight": "normal", "color": "#fff", "background-color": "#333333"});
        $(".nav-tab-part3").css({"font-weight": "normal", "color": "#fff", "background-color": "#333333"});
   		};
   		$scope.part2 = function() {
   			$(".part1Container").hide();
   			$(".part2Container").show();
   			$(".part3Container").hide();
        $(".nav-tab-part1").css({"font-weight": "normal", "color": "#fff", "background-color": "#333333"});
        $(".nav-tab-part2").css({"font-weight": "bold", "color": "#333333", "background-color": "#f1f1f1"});
        $(".nav-tab-part3").css({"font-weight": "normal", "color": "#fff", "background-color": "#333333"});
   		};
   		$scope.part3 = function() {
   			$(".part1Container").hide();
   			$(".part2Container").hide();
   			$(".part3Container").show();
        $(".nav-tab-part1").css({"font-weight": "normal", "color": "#fff", "background-color": "#333333"});
        $(".nav-tab-part2").css({"font-weight": "normal", "color": "#fff", "background-color": "#333333"});
        $(".nav-tab-part3").css({"font-weight": "bold", "color": "#333333", "background-color": "#f1f1f1"});
   		};
  });
