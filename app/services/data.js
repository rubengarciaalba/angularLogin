/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
var myApp;
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
(function (myApp) {
    var data = (function () {
        function data($http) {
            var _this = this;
            this.SERVICE_BASE = 'api/v1/';
            this.toast = function (data) {
                //toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
            };
            this.get = function (q) {
                return _this.$http.get(_this.SERVICE_BASE + q).then(function (results) {
                    return results.data;
                });
            };
            this.post = function (q, object) {
                return _this.$http.post(_this.SERVICE_BASE + q, object).then(function (results) {
                    return results.data;
                });
            };
            this.put = function (q, object) {
                return _this.$http.put(_this.SERVICE_BASE + q, object).then(function (results) {
                    return results.data;
                });
            };
            this.delete = function (q) {
                return _this.$http.delete(_this.SERVICE_BASE + q).then(function (results) {
                    return results.data;
                });
            };
            this.$http = $http;
        }
        return data;
    }());
    myApp.data = data;
    angular
        .module("myApp")
        .service("Data", myApp.data);
})(myApp || (myApp = {}));
//# sourceMappingURL=data.js.map