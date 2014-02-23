"use strict";

angular.module("hackathonApp").factory("Employees", ['$http', '$resource', function($http, $resource) {

    var Employees = $resource('/employees', {}, {
            getAll: {method: 'GET', isArray: true}
    });

    var Employee = $resource('/employee/:id');

    return {

        //
        // Returns a promise which resolves to an array of employees.
        //
        getAllEmployees: function() {
            return Employees.getAll();
        },

        //
        // Returns a promise which resolves to an object containing the
        // requested employee's data.
        //
        getEmployeeDetail: function(id) {
            return Employee.get({id: id});
        },

        saveEmployee: function(employee) {

        }
    }
}]);
