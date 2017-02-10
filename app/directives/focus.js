"use strict";
var focusProvider = function (directivesPath) {
    return {
        restrict: "AE",
        replace: true,
        require: ["focus"],
        scope: {
            data: "=data",
            model: "=ngModel"
        },
        controller: FocusController.id,
        controllerAs: "vm",
        link: function (scope, element, attrs, controller) {
            scope.element = element;
        }
    };
};
angular.module("myApp").directive("focus", ["directivesPath", focusProvider]);
//# sourceMappingURL=focus.js.map