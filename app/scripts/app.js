'use strict';

angular.module('hackathonApp', [
  'ngResource',
  'ngRoute'
]).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/employee-list/employeeList.html',
            controller: 'EmployeeListController'
        })
        .when('/employee-detail/:id', {
            templateUrl: 'views/employee-detail/employeeDetail.html',
            controller: 'EmployeeDetailController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
