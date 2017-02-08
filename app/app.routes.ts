/// <reference path="../node_modules/@types/angular/index.d.ts" />
/// <reference path="../node_modules/@types/angular-route/index.d.ts" />


    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider) {
            $routeProvider
                .when('/login', {
                    name: 'Login',
                    templateUrl: 'partials/login.html',
                    controller: 'authCtrl'
                })
                .when('/logout', {
                    name: 'Logout',
                    templateUrl: 'partials/login.html',
                    controller: 'logoutCtrl'
                })
                .when('/signup', {
                    name: 'Signup',
                    templateUrl: 'partials/signup.html',
                    controller: 'authCtrl'
                })
                .when('/dashboard', {
                    name: 'Dashboard',
                    templateUrl: 'partials/dashboard.html',
                    controller: 'authCtrl'
                })
                .when('/', {
                    name: 'Login',
                    templateUrl: 'partials/login.html',
                    controller: 'authCtrl'
                })
                .otherwise({
                    redirectTo: '/login'
                });

            // $routeProvider.when("/home", { controller: "angularWithTS.controllers.tsDemoController", templateUrl: "/app/views/playlist.html", controllerAs: "playList" });
            // $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
