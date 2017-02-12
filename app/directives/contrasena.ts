/// <reference path="../../node_modules/@types/angular/index.d.ts" />

"user strict"

class PasswordMatch implements ng.IDirective {
  static $inject: Array<string> = [''];
  constructor() {
    console.log("assssdlfjalsdjflsjlfk");
    //ToDo
    // - Instance staff for the directive here
  }

  static instance(): ng.IDirective {
    return new PasswordMatch();
  }
  restrict: string = 'EA';
}

angular.module('myApp').directive('passwordMatch', PasswordMatch.instance);