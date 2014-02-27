"use strict";

angular.module("hackathonApp").controller("EmployeeAddController", ['$scope', '$routeParams', '$location', '$filter', 'toaster', 'Employees', function ($scope, $routeParams, $location, $filter, toaster, Employees) {

    $scope.currentMode = "Add";
    $scope.editModeOn = true;
    $scope.employee = { name: "Full Name" };

    var isActive = true;

    $scope.isActive = function() {
        return isActive;
    }

    $scope.toggleStatus = function() {
        return !isActive;
    }

    $scope.cancel = function() {
        $location.path("#/");
    }

    //
    // Save the change to the employee record represented by the given employee object.
    //
    $scope.save = function(employee) {
        Employees.getEmployeeByEmail(employee).$promise.then(function(employee) {
            toaster.pop('error', 'Duplicate Employee', 'An employee with that email address already exists.');
        }, function(reason) {
            Employees.addEmployee(employee).$promise.then(function(newEmployee) {
                toaster.pop('success', 'Employee Added', 'New employee has been added to the database.');
                $location.path("#/employee/" + newEmployee._id);
            });
        });

    }

}]);
