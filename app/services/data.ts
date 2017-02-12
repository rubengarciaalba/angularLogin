/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />

module myApp {
    export class data {
        $http: ng.IHttpService;
        SERVICE_BASE = 'api/v1/';

        constructor($http: ng.IHttpService) {
            this.$http = $http;
        }

        toast = (data) => {
            //toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
        }
        public get = (q) => {
            return this.$http.get(this.SERVICE_BASE + q).then((results) => {
                return results.data;
            });
        };
        post = (q, object) => {
            return this.$http.post(this.SERVICE_BASE + q, object).then((results) => {
                return results.data;
            });
        };
        put = (q, object) => {
            return this.$http.put(this.SERVICE_BASE + q, object).then((results) => {
                return results.data;
            });
        };
        delete = (q) => {
            return this.$http.delete(this.SERVICE_BASE + q).then((results) => {
                return results.data;
            });
        };
    }

    angular
    .module("myApp")
    .service("Data", myApp.data);
}