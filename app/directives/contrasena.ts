"use strict";

interface IDirectiveScope {
    element?: ng.IAugmentedJQuery;
}

let passwordmatchProvider = (directivesPath) => {
    return {
        restrict: "AE",
        replace: true,
        require: ["passwordmatch"],
        $scope: {
            data: "=data",
            model: "=ngModel"
          
        },
        controller: PasswordMatchController2.id,
        // controllerAs: "vm",
        
        link: ($scope: any, element: ng.IAugmentedJQuery, attrs, controller: PasswordMatchController2) => {
            $scope.element = element;  
            var checker = (): boolean => {
 
                //get the value of the first password
                var e1 = $scope.$eval(attrs.ngModel); 
 
                //get the value of the other password  
                var e2 = $scope.$eval(attrs.passwordMatch);
                if(e2!=null)
                return e1 == e2;
            };        
            $scope.$watch(checker, function (oldValue,newValue) {
                controller[0].displayMessage();            
            });
        }
    };
}

angular.module("myApp").directive("passwordmatch", ["directivesPath", passwordmatchProvider]);