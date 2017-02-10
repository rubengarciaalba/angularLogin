/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
var myApp;
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
(function (myApp) {
    var authCtrl = (function () {
        function authCtrl($scope, $location, Data) {
            var _this = this;
            this.$scope = $scope;
            this.$location = $location;
            this.Data = Data;
            this.login = {};
            this.signup = {};
            this.signup = { email: '', password: '', name: '', phone: '', address: '' };
            $scope.doLogin = function (customer) {
                _this.Data.post('login', {
                    customer: customer
                }).then(function (results) {
                    _this.Data.toast(results);
                    if (results.status == "success") {
                        _this.$location.path('dashboard');
                    }
                });
            };
            $scope.signUp = function (customer) {
                _this.Data.post('signUp', {
                    customer: customer
                }).then(function (results) {
                    _this.Data.toast(results);
                    if (results.status == "success") {
                        _this.$location.path('dashboard');
                    }
                });
            };
            $scope.logout = function () {
                _this.Data.get('logout').then(function (results) {
                    _this.Data.toast(results);
                    _this.$location.path('login');
                });
            };
        }
        return authCtrl;
    }());
    authCtrl.$inject = ["$scope", "$location", "Data"];
    myApp.authCtrl = authCtrl;
    angular
        .module("myApp")
        .controller("authCtrl", authCtrl);
})(myApp || (myApp = {}));
//# sourceMappingURL=authCtrl.js.map