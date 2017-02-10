"use strict";

class PasswordMatchController2 {
    static id = "passwordmatchController";
    static $inject = ["$scope", "$timeout", "$rootScope", "$log"];

    data: any;

    constructor(private $scope, private $timeout: ng.ITimeoutService, private $rootScope: ICustomRootScope, private $log: ng.ILogService) {
        this.data = $scope.data;
    }
    
    public displayMessage = (): any => {
        console.log("adfsdfsadfdsf");
    }

}

angular.module("cv.directives")
    .controller(PasswordMatchController2.id, PasswordMatchController2);