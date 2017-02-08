"use strict";
var App = (function () {
    function App() {
    }
    return App;
}());
App.identifier = "myApp";
App.modules = [
    'ngRoute'
];
(function () {
    angular.module(App.identifier, App.modules)
        .config(['$routeProvider', function ($routeProvider) {
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
        .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                }
                else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/signup' || nextUrl == '/login') {
                    }
                    else {
                        $location.path("/login");
                    }
                }
            });
        });
    });
})();
//# sourceMappingURL=app.js.map