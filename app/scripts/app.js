'use strict';

angular.module('hackathonApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'toaster'
]).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/employee/employeeList.html',
            controller: 'EmployeeListController'
        })
        .when('/employee/add', {
            templateUrl: 'views/employee/employeeDetail.html',
            controller: 'EmployeeAddController'
        })
        .when('/employee/:id', {
            templateUrl: 'views/employee/employeeDetail.html',
            controller: 'EmployeeDetailController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
