 'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:PartCtrl
 * @description
 * # PartCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp', ['uiGmapgoogle-maps'])
    .controller('PartCtrl', function($scope, $interval) {

        var map1 = {
            center: {
                latitude: 56.162939,
                longitude: -118.2437
            },
            zoom: 1,
            markers: [
            {
                id: 'Los Angeles',
                latitude:  -34.0522,
                longitude:-71.0363168884369,
                employees: 223
            },
            {
                id: 'New York City',
                latitude:  40.7128,
                longitude:-74.0059,
                employees: 123
            }, {
                id: 'Berlin',
                latitude:   52.5200,
                longitude: 13.4050,
                employees: 2123
            }, {
                id: 'Melbourne',
                latitude:  -37.8136,
                longitude: 144.9631,
                employees: 113
            }, {
                id: 'Barcelona',
                latitude:  41.3851,
                longitude: 2.1734,
                employees: 43
            }]
        };

        var map2 = {
            center: {
                latitude: 56.162939,
                longitude: -118.2437
            },
            zoom: 1,
            markers: [
            {
                id: 'Los Angeles',
                latitude:  -34.0522,
                longitude:-71.0363168884369,
                employees: 323
            },
            {
                id: 'New York City',
                latitude:  40.7128,
                longitude:-74.0059,
                employees: 203
            }, {
                id: 'Berlin',
                latitude:   52.5200,
                longitude: 13.4050,
                employees: 2223
            }, {
                id: 'Melbourne',
                latitude:  -37.8136,
                longitude: 144.9631,
                employees: 114
            }, {
                id: 'Barcelona',
                latitude:  41.3851,
                longitude: 2.1734,
                employees: 49
            }]
        };

        $scope.map = map1;
		$interval(function(){
			if ($scope.map == map1) {
		  		$scope.map = map2;
			} else {
		  		$scope.map = map1;
			}
		}, 2000);

	    $scope.marker = {
	        id: 1,
	        position: {
                latitude: 56.162939,
                longitude: 10.203921
            }
	    };

		angular.forEach($scope.map.markers, function (location) {

		});


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

    })