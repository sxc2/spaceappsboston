'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {redirectTo: '/home'});
  $routeProvider.otherwise({redirectTo: '/home'});

  if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }

}]);
