"use strict";

angular.module("hackathonApp").controller("EmployeeDetailController", ['$scope', '$routeParams', '$location', '$filter', 'Employees', function ($scope, $routeParams, $location, $filter, Employees) {

    var employeeCache;

    $scope.currentMode = "Edit";
    $scope.editModeOn = false;

    Employees.getEmployeeDetail($routeParams.id).$promise.then(function(employee) {
        $scope.employee = employee;
        $scope.employee.hireDate = $filter('date')($scope.employee.hireDate, 'longDate');
    });

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

    $scope.save = function() {
        Employees.saveEmployee($scope.employee);
        $location.path("#/");
    }

}]);
