"use strict";

angular.module("hackathonApp").controller("EmployeeDetailController", ['$scope', '$routeParams', '$location', '$filter', 'toaster', 'Employees', function ($scope, $routeParams, $location, $filter, toaster, Employees) {

    var employeeCache;

    $scope.currentMode = "Edit";
    $scope.editModeOn = false;

    Employees.getEmployeeDetail($routeParams.id).$promise.then(function(employee) {
        $scope.employee = employee;
        $scope.employee.hireDate = $filter('date')($scope.employee.hireDate, 'longDate');
    });

    $scope.isActive = function() {
        return Employees.isActive($scope.employee);
    }

    $scope.toggleStatus = function() {
        var wasActive = $scope.isActive();
        Employees.changeStatus($scope.employee, wasActive);

        var message = "Employee has been marked as active.";
        if ( wasActive ) {
            message = "Employee has been marked as inactive.";
        }
        toaster.pop('success', "Employee Status Changed", message);
    }

    $scope.cancel = function() {
        $scope.editModeOn = false;
        $scope.deleteModeOn = false;
        $scope.currentMode = "Edit";
        $scope.employee = employeeCache;
    }

    $scope.takeAction = function(currentMode) {
        employeeCache = angular.copy($scope.employee);
        $scope.currentMode = currentMode;
        $scope.editModeOn = false;
        $scope.deleteModeOn = false;
        if ( currentMode === "Edit" ) {
            $scope.editModeOn = true;
        } else if ( currentMode === "Delete" ) {
            $scope.deleteModeOn = true;
        }
    }

    //
    // Save the change to the employee record represented by the given employee object.
    //
    $scope.save = function(employee) {
        Employees.saveEmployee(employee);
        $location.path("#/");
    }

    //
    // Delete the current employee from the database and return to the list view.
    //
    $scope.delete = function(id) {
        Employees.deleteEmployee(id);
        $location.path("#/");
    }

}]);
