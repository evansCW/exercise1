'use strict';

angular.module('exercise1App', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/person-detail', {
            templateUrl: 'views/person-detail/person-detail.html',
            controller: 'PersonDetailController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
