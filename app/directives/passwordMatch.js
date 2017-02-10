"use strict";
var passwordMatchProvider = function (directivesPath) {
    return {
        restrict: "AE",
        replace: true,
        require: ["focus"],
        scope: {
            data: "=data",
            model: "=ngModel"
        },
        controller: PasswordMatchController.id,
        controllerAs: "vm",
        link: function (scope, element, attrs, controller, control) {
            scope.element = element;
            var checker = function () {
                //get the value of the first password
                var e1 = scope.$eval(attrs.ngModel);
                //get the value of the other password  
                var e2 = scope.$eval(attrs.passwordMatch);
                if (e2 != null)
                    return e1 == e2;
            };
            scope.$watch(checker, function (n) {
                //set the form control to valid if both 
                //passwords are the same, else invalid
                control.$setValidity("passwordNoMatch", n);
            });
        }
    };
};
angular.module("myApp").directive("passwordmatch", ["directivesPath", passwordMatchProvider]);
//# sourceMappingURL=passwordMatch.js.map