((): void=> {
    var app = angular.module("myApp", ['ngRoute']);
    app.config(myApp.Routes.configureRoutes);
    app.run(
        ($rootScope: ICustomRootScope, $location: ng.ILocationService, Data: any) => {
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
    );
})() 