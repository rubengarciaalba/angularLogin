"use strict";

class FocusController {
    static id = "focusController";
    static $inject = ["$scope", "$timeout", "$rootScope", "$log"];

    constructor(private $scope, private $log: ng.ILogService) {
        $scope.element[0].focus();
    }
}

angular.module("cv.directives")
    .controller(FocusController.id, FocusController);