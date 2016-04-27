/*global angular*/
angular
    .module('figViewApp')
    .controller('SearchCtrl', ['$scope', function SearchCtrl($scope) {
        'use strict';
        $scope.tab = 1;
    }]);