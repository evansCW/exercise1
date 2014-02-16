angular.module("hackathonApp").controller("EmployeeDetailController",
    ['$scope', '$routeParams ', 'Employees', function ($scope, $routeParams, Employees) {
    $scope.employee = Employees.getEmployeeDetail($routeParams.id);
}]);
