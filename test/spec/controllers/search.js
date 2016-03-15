'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('figViewApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('space holder', function () {
  });
});
