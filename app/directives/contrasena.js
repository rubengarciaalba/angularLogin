/// <reference path="../../node_modules/@types/angular/index.d.ts" />
"user strict";
var PasswordMatch = (function () {
    function PasswordMatch($scope, elements, attrs, control) {
        this.restrict = 'E';
        this.require = 'ngModel';
        this.scope = true;
        console.log("assssdlfjalsdjflsjlfk");
        var checker = function () {
            //get the value of the first password
            var e1 = $scope.$eval(attrs.ngModel);
            //get the value of the second password  
            var e2 = $scope.$eval(attrs.passwordMatch);
            if (e1 !== e2) {
                $scope.showPassError = true;
            }
            else {
                $scope.showPassError = false;
            }
            // if(e2!=null)
            // return e1 == e2;
        };
        $scope.$watch(checker, function (n) {
            //set the form control to valid if both 
            //passwords are the same, else invalid
            // control.$setValidity("passwordNoMatch", n);
        });
    }
    PasswordMatch.instance = function () {
        var directive = function ($scope, elements, attrs, control) { return new PasswordMatch($scope, elements, attrs, control); };
        // return new PasswordMatch();
        directive.$inject = ['$scope', 'elements', 'attrs', 'control'];
        return directive;
    };
    // link(scope : ng.IScope, elements : ng.IAugmentedJQuery, attrs : ng.IAttributes, control: angular.INgModelController) {
    PasswordMatch.prototype.link = function ($scope, elements, attrs, control) {
        //your code
    };
    return PasswordMatch;
}());
PasswordMatch.$inject = ["$scope", "elements", "attrs", "control"];
angular.module('myApp').directive('passwordMatch', PasswordMatch.instance);
//# sourceMappingURL=contrasena.js.map