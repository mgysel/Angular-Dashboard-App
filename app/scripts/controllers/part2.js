'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:Part2Ctrl
 * @description
 * # Part2Ctrl
 * Controller of the udaciMealsApp
 */
// angular.module('udaciMealsApp')
//   .controller('Part2Ctrl', function () {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });

angular.module('udaciMealsApp', ["chart.js"]).controller("Part2Ctrl", function ($scope, $interval) {

  // Open Issues
  var issues1 = 10;
  var issues2 = 14;
  $scope.openIssues = issues1;
  $interval(function(){
    if ($scope.openIssues == issues1) {
      $scope.openIssues = issues2;
    } else {
      $scope.openIssues = issues1;
    }
  }, 2000);

  // Line Graph
  $scope.labels1 = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series1 = ['Paying Customers'];
  var data1 = [
    [[1212, 1582, 2217, 3124, 4518, 4473, 4722]],
    [[802, 1082, 1217, 1124, 2518, 3473, 3722]]
  ];
  $scope.data1 = data1[0];
  $interval(function(){
    if ($scope.data1 == data1[0]) {
      $scope.data1 = data1[1];
    } else {
      $scope.data1 = data1[0];
    }
  }, 2000);
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride1 = [{ yAxisID: 'y-axis-1' }];
  $scope.options1 = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };

  // Bar Graph
  $scope.labels2 = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series2 = ['Reported Issues'];

  var data2 = [
    [[12, 25, 32, 32, 62, 48, 59]],
    [[8, 13, 22, 22, 42, 32, 38]]
  ];
  $scope.data2 = data2[0];
  $interval(function(){
    if ($scope.data2 == data2[0]) {
      $scope.data2 = data2[1];
    } else {
      $scope.data2 = data2[0];
    }
  }, 2000);
});