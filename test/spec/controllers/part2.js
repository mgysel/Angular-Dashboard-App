'use strict';

describe('Controller: Part2Ctrl', function () {

  // load the controller's module
  beforeEach(module('udaciMealsApp'));

  var Part2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Part2Ctrl = $controller('Part2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Part2Ctrl.awesomeThings.length).toBe(3);
  });
});
