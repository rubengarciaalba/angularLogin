"use strict";
var passwordmatchProvider = function (directivesPath) {
    return {
        restrict: "AE",
        replace: true,
        require: ["passwordmatch"],
        $scope: {
            data: "=data",
            model: "=ngModel"
        },
        controller: PasswordMatchController2.id,
        // controllerAs: "vm",
        link: function ($scope, element, attrs, controller) {
            $scope.element = element;
            var checker = function () {
                //get the value of the first password
                var e1 = $scope.$eval(attrs.ngModel);
                //get the value of the other password  
                var e2 = $scope.$eval(attrs.passwordMatch);
                if (e2 != null)
                    return e1 == e2;
            };
            $scope.$watch(checker, function (oldValue, newValue) {
                controller[0].displayMessage();
            });
        }
    };
};
angular.module("myApp").directive("passwordmatch", ["directivesPath", passwordmatchProvider]);
//# sourceMappingURL=contrasena.js.map