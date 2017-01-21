'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:Part3Ctrl
 * @description
 * # Part3Ctrl
 * Controller of the udaciMealsApp
 */

angular.module('udaciMealsApp')
  .controller('Part3Ctrl', function ($scope, $http, $interval) {
  	$scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchFish   = '';     // set the default search/filter term
  	var self = this;
  	var data1;
  	var data2;
    $http.get("data/mock_data.json").then(function(response) {
		data1 = response.data;
	    $http.get("data/mock_data2.json").then(function(response) {
			data2 = response.data;
			$scope.data = data1;
		  	$interval(function(){
		        if ($scope.data == data1) {
		        	$scope.data = data2;
		        } else {
		        	$scope.data = data1;
		        }
		    }, 2000);
		});
	});
  });

// angular.module('udaciMealsApp', ['ngtable'])
//   .controller('Part3Ctrl', function ($scope, $filter, $http, $interval, NgTableParams) {
//     // $scope.clicked = function(){
//     //     displayServ.disp = true;
//     // };
//   	$scope.sortType     = 'name'; // set the default sort type
// 	$scope.sortReverse  = false;  // set the default sort order
// 	$scope.searchFish   = '';     // set the default search/filter term
//   	var self = this;
//   	var data1;
//   	var data2;
//     $http.get("data/mock_data.json").then(function(response) {
// 		data1 = response.data;
// 	    $http.get("data/mock_data2.json").then(function(response) {
// 			data2 = response.data;
// 			$scope.data = data1;
// 		  	$interval(function(){
// 		        if ($scope.data == data1) {
// 		        	$scope.data = data2;
// 		        } else {
// 		        	$scope.data = data1;
// 		        }
// 		    }, 2000);
// 		});
// 	});

// })
