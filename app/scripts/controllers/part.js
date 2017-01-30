'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:PartCtrl
 * @description
 * # PartCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
    .controller('PartCtrl', function($scope, $interval) {
    	$.get("data/map_data1.json", function(data) {
    		var map1 = data;
    		$scope.map = map1;
    		$.get("data/map_data2.json", function(data) {
    			var map2 = data;
				$interval(function(){
					if ($scope.map === map1) {
				  		$scope.map = map2;
					} else {
				  		$scope.map = map1;
					}
				}, 2000);
    		})
    	});

	    $scope.marker = {
	        id: 1,
	        position: {
                latitude: 56.162939,
                longitude: 10.203921
            }
	    };

    	var styles = [
		    {
		        'featureType': 'landscape',
		        'stylers': [
		            {
		                'hue': '#F1FF00'
		            },
		            {
		                'saturation': -27.4
		            },
		            {
		                'lightness': 9.4
		            },
		            {
		                'gamma': 1
		            }
		        ]
		    },
		    {
		        'featureType': 'road.highway',
		        'stylers': [
		            {
		                'hue': '#0099FF'
		            },
		            {
		                'saturation': -20
		            },
		            {
		                'lightness': 36.4
		            },
		            {
		                'gamma': 1
		            }
		        ]
		    },
		    {
		        'featureType': 'road.arterial',
		        'stylers': [
		            {
		                'hue': '#00FF4F'
		            },
		            {
		                'saturation': 0
		            },
		            {
		                'lightness': 0
		            },
		            {
		                'gamma': 1
		            }
		        ]
		    },
		    {
		        'featureType': 'road.local',
		        'stylers': [
		            {
		                'hue': '#FFB300'
		            },
		            {
		                'saturation': -38
		            },
		            {
		                'lightness': 11.2
		            },
		            {
		                'gamma': 1
		            }
		        ]
		    },
		    {
		        'featureType': 'water',
		        'stylers': [
		            {
		                'hue': '#00B6FF'
		            },
		            {
		                'saturation': 4.2
		            },
		            {
		                'lightness': -63.4
		            },
		            {
		                'gamma': 1
		            }
		        ]
		    },
		    {
		        'featureType': 'poi',
		        'stylers': [
		            {
		                'hue': '#9FFF00'
		            },
		            {
		                'saturation': 0
		            },
		            {
		                'lightness': 0
		            },
		            {
		                'gamma': 1
		            }
		        ]
		    }
		];

		$scope.options = {
			styles: styles
		};


    });