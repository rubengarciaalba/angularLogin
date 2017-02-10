"use strict";

class PasswordMatchController {
    static id = "passwordMatchController";
    static $inject = ["$scope", "$timeout", "$rootScope", "$log"];

    constructor(private $scope, private $log: ng.ILogService) {
        
    }
}

angular.module("cv.directives")
    .controller(PasswordMatchController.id, PasswordMatchController);