/// <reference path="../../node_modules/@types/angular/index.d.ts" />

"user strict"

class PasswordMatch implements ng.IDirective {
	static $inject: Array<string> = ["$scope", "elements", "attrs", "control"];
	constructor($scope : ICustomScope, elements : ng.IAugmentedJQuery, attrs : any, control: angular.INgModelController) {
		console.log("assssdlfjalsdjflsjlfk");

		var checker = () => {
			//get the value of the first password
			var e1 = $scope.$eval(attrs.ngModel); 

			//get the value of the second password  
			var e2 = $scope.$eval(attrs.passwordMatch);

			if(e1 !== e2){
				$scope.showPassError = true;
			}
			else{
				$scope.showPassError = false;
			}

			
			
			// if(e2!=null)
			// return e1 == e2;
		};
		$scope.$watch(checker, (n) => {

			//set the form control to valid if both 
			//passwords are the same, else invalid
			// control.$setValidity("passwordNoMatch", n);
		});
	}

	static instance(): ng.IDirective {
		var directive = ($scope: ICustomScope, elements: ng.IAugmentedJQuery, attrs: any, control: angular.INgModelController) => new PasswordMatch($scope, elements, attrs, control);
		// return new PasswordMatch();
		directive.$inject = ['$scope', 'elements', 'attrs', 'control'];
        return directive;
	}
  
	restrict = 'E';
	require = 'ngModel';
	scope = true;
	// link(scope : ng.IScope, elements : ng.IAugmentedJQuery, attrs : ng.IAttributes, control: angular.INgModelController) {
	link($scope : ng.IScope, elements : ng.IAugmentedJQuery, attrs : any, control: angular.INgModelController) {
		//your code
		
	}
}

angular.module('myApp').directive('passwordMatch', PasswordMatch.instance);