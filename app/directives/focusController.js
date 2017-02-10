"use strict";
var FocusController = (function () {
    function FocusController($scope, $log) {
        this.$scope = $scope;
        this.$log = $log;
        $scope.element[0].focus();
    }
    return FocusController;
}());
FocusController.id = "focusController";
FocusController.$inject = ["$scope", "$timeout", "$rootScope", "$log"];
angular.module("cv.directives")
    .controller(FocusController.id, FocusController);
//# sourceMappingURL=focusController.js.map