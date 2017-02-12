/// <reference path="../../node_modules/@types/angular/index.d.ts" />
"user strict";
var PasswordMatch = (function () {
    function PasswordMatch() {
        this.restrict = 'EA';
        console.log("assssdlfjalsdjflsjlfk");
    }
    PasswordMatch.instance = function () {
        return new PasswordMatch();
    };
    return PasswordMatch;
}());
PasswordMatch.$inject = [''];
angular.module('myApp').directive('passwordMatch', PasswordMatch.instance);
//# sourceMappingURL=contrasena.js.map