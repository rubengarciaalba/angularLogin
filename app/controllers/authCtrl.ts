/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />

module myApp {
    export class authCtrl {
        static $inject = ["$scope", "$location", "Data"];

        private login: any = {};
        private signup: any = {};

        constructor(private $scope: any, private $location: ng.ILocationService, private Data: any) {
            this.signup = {email:'',password:'',name:'',phone:'',address:''};
            
            $scope.doLogin = (customer: any) => {
                this.Data.post('login', {
                    customer: customer
                }).then((results: any) => {
                    this.Data.toast(results);
                    if (results.status == "success") {
                        this.$location.path('dashboard');
                    }
                });
            }

            $scope.signUp = (customer: any) => {
                this.Data.post('signUp', {
                    customer: customer
                }).then((results: any) => {
                    this.Data.toast(results);
                    if (results.status == "success") {
                        this.$location.path('dashboard');
                    }
                });
            }

            $scope.logout = () => {
                this.Data.get('logout').then((results: any) => {
                    this.Data.toast(results);
                    this.$location.path('login');
                });
            }
        }
    }    
    
    angular
       .module("myApp")
       .controller("authCtrl", authCtrl);
}