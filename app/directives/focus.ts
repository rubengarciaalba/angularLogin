"use strict";

interface IDirectiveScope {
    element?: ng.IAugmentedJQuery;
}

let focusProvider = (directivesPath) => {
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
        link: (scope: any, element: ng.IAugmentedJQuery, attrs, controller: FocusController) => {
            scope.element = element;
        }
    };
}

angular.module("myApp").directive("focus", ["directivesPath", focusProvider]);