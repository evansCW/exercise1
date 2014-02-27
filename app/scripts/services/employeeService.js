"use strict";

angular.module("hackathonApp").factory("Employees", ['$http', '$resource', function($http, $resource) {

    var Employees = $resource('/employees', {}, {
            getAll: {method: 'GET', isArray: true},
            update: {method: 'PUT'}
    });

    var Employee = $resource('/employee/:id');

    var updateEmployee = function(employee) {
        Employees.update(employee);
    }

    return {

        addEmployee: function(employee) {
            return $resource('/employee/add').save(employee);
        },

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

        //
        // Returns true if the user has an active status.
        //
        isActive: function(employee) {
            return employee.status === "ACTIVE";
        },

        //
        // Toggles the user's status from active to inactive or vis versa.
        //
        changeStatus: function(employee, isActive) {
            if ( isActive ) {
                employee.status = "INACTIVE";
            } else {
                employee.status = "ACTIVE";
            }
            updateEmployee(employee);
        },

        //
        // Save change to an employee.
        //
        saveEmployee: updateEmployee,

        //
        // Fetch an employee's data based on an email address match.
        //
        getEmployeeByEmail: function(employee) {
            return $resource('/employee/email/:email').get({email: employee.email});
        },

        //
        // Delete the given employee from the database.
        //
        deleteEmployee: function(id) {
            Employee.delete({id: id});
        }
    }
}]);
