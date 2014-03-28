'use strict';

/* Controllers */
var myAppControllers = angular.module('myApp.controllers', []);

function LandingCtrl($scope, $location) {
	$scope.isActive = function (viewLocation) {
       var active = (viewLocation === $location.path());
       return active;
	};

};

myAppControllers.controller('LandingCtrl', ['$scope', '$location', LandingCtrl]);

// angular.module('myApp.controllers', []).
//   controller('LandingCtrl', [function() {

//   }])
//   .controller('MyCtrl2', [function() {
//   }]);