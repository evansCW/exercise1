'use strict';

angular.module('exercise1App')
  .controller('MainCtrl', ['$scope', 'DataService', function ($scope, DataService) {
    $scope.persons = DataService.getData();
}]);