'use strict';

angular.module('hackathonApp')
  .controller('EmployeeListController', ['$scope', 'Employees', function ($scope, Employees) {

    $scope.employees = Employees.getAllEmployees();

}]);