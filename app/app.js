(function () {
    var app = angular.module("myApp", ['ngRoute']);
    app.config(myApp.Routes.configureRoutes);
    app.run(function ($rootScope, $location, Data) {
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