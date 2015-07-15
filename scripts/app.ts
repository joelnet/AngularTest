/// <reference path="typings/angularjs/angular.d.ts" />

module angulartest
{
    'use strict';

    export class Application
    {
        private ngApp: ng.IModule;

        constructor()
        {
            this.ngApp = angular.module('angulartest', [])
                .controller('GithubController', Controllers.GithubController)
                .service('GithubApiService', Services.GithubApiService);
        }
    }

    var app = new angulartest.Application();
}
