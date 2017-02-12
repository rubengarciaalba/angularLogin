"use strict"
class App {
    static identifier = "myApp";
    static modules = [
        'ngRoute',
        'toaster',
        'ngAnimate'
    ];
}

(() => {
    angular.module(App.identifier, App.modules)
        .config(['$routeProvider', ($routeProvider) => {
            //Routes.configureRoutes($routeProvider);
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
        }])
        .run(
        ($rootScope: ICustomRootScope, $location: ng.ILocationService, Data: myApp.data) => {
            $rootScope.$on("$routeChangeStart", (event, next, current) => {
                $rootScope.authenticated = false;
                Data.get('session').then((results: any) => {
                    if (results.uid) {
                        $rootScope.authenticated = true;
                        $rootScope.uid = results.uid;
                        $rootScope.name = results.name;
                        $rootScope.email = results.email;
                    } else {
                        var nextUrl: string = next.$$route.originalPath;
                        if (nextUrl == '/signup' || nextUrl == '/login') {

                        }
                        else {
                            $location.path("/login");
                        }
                    }
                });
            });
        }
        )
})();