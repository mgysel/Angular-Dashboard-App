'use strict';

describe('Controller: Part1Ctrl', function () {

  // load the controller's module
  beforeEach(module('udaciMealsApp'));

  var Part1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Part1Ctrl = $controller('Part1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Part1Ctrl.awesomeThings.length).toBe(3);
  });
});
