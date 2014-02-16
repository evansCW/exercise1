"use strict";

angular.module("hackathonApp").factory("Employees", ['$http', '$resource', function($http, $resource) {

    var Employees = $resource('/employees/:id', {}, {
            getAll: {method: 'GET', isArray: true},
            getOne: {method: 'GET'}
    });

    return {
        getAllEmployees: function() {
            return Employees.getAll();
        },
        getEmployeeDetail: function(id) {
            return Employees.getOne({id: id});
        }
    }
}]);
