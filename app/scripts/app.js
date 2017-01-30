'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsApp
 * @description
 * # udaciMealsApp
 *
 * Main module of the application.
 */
angular
	.module('udaciMealsApp', ['chart.js', 'uiGmapgoogle-maps'])
	.config(function (uiGmapGoogleMapApiProvider) {
	    uiGmapGoogleMapApiProvider.configure({
	        //key: 'PUT YOUR KEY HERE',
	        v: '3.17',
	        //libraries: 'weather,geometry,visualization'
	    });
	});