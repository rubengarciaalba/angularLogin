"use strict";
var PasswordMatchController = (function () {
    function PasswordMatchController($scope, $log) {
        this.$scope = $scope;
        this.$log = $log;
    }
    return PasswordMatchController;
}());
PasswordMatchController.id = "passwordMatchController";
PasswordMatchController.$inject = ["$scope", "$timeout", "$rootScope", "$log"];
angular.module("cv.directives")
    .controller(PasswordMatchController.id, PasswordMatchController);
//# sourceMappingURL=passwordMatchController.js.map