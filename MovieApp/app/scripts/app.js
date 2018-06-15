'use strict';

// Declare app level module which depends on views, and components
var movieApp = angular.module('movieApp', [
  'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/home', {
          templateUrl: 'templates/home.html',
      }).
      when('/home/:page?', {
          templateUrl: 'templates/home.html',
      }).
      when('/movie-details/:id', {
          templateUrl: 'templates/movie-details.html',
      }).
      when('/search/:searchText', {
          templateUrl: 'templates/search.html',
      }).
      when('/search/:searchText/:page?', {
          templateUrl: 'templates/search.html',
      }).
      when('/login', {
           templateUrl: 'templates/login.html',
       }).
      when('/register', {
          templateUrl: 'templates/register-form.html'
      }).
      when('/actor-details/:id', {
          templateUrl: 'templates/actor-details.html'
      }).
      when('/tv-shows', {
          templateUrl: 'templates/tv-shows.html'
      }).
      when('/people', {
          templateUrl: 'templates/people.html'
      })

      .otherwise({ redirectTo: '/home' });
}]);

