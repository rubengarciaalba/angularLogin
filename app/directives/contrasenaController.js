"use strict";
var PasswordMatchController2 = (function () {
    function PasswordMatchController2($scope, $timeout, $rootScope, $log) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$rootScope = $rootScope;
        this.$log = $log;
        this.displayMessage = function () {
            console.log("adfsdfsadfdsf");
        };
        this.data = $scope.data;
    }
    return PasswordMatchController2;
}());
PasswordMatchController2.id = "passwordmatchController";
PasswordMatchController2.$inject = ["$scope", "$timeout", "$rootScope", "$log"];
angular.module("cv.directives")
    .controller(PasswordMatchController2.id, PasswordMatchController2);
//# sourceMappingURL=contrasenaController.js.map