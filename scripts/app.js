/// <reference path="typings/angularjs/angular.d.ts" />
var angulartest;
(function (angulartest) {
    'use strict';
    var Application = (function () {
        function Application() {
            this.ngApp = angular.module('angulartest', []).controller('GithubController', angulartest.Controllers.GithubController).service('GithubApiService', angulartest.Services.GithubApiService);
        }
        return Application;
    })();
    angulartest.Application = Application;
    var app = new angulartest.Application();
})(angulartest || (angulartest = {}));
//# sourceMappingURL=app.js.map