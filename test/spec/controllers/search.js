describe('SearchCtrl', function () {
    'use strict';
    
    beforeEach(module('figViewApp'));

    var $scope;
    var $controller;
    
    beforeEach(inject(function(_$controller_, $rootScope) {
        $controller = _$controller_;
        $scope = $rootScope.$new();
    }));
    
    describe('$scope.tab', function() {
        it('tab is 1 (dummy test)', function() {
            var $scope = {};
            $controller('SearchCtrl', { $scope: $scope });
            console.error($scope.tab);
            expect($scope.tab).toEqual(1);
        });
    });
    
});