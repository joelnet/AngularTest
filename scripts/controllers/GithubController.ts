module angulartest.Controllers
{
    "use strict";

    export interface IGithubScope extends ng.IScope
    {
        ctrl: GithubController;
        model:
        {
            organizationName: string;
            loadingRepos: boolean;
            repos: models.GithubRepoModel[];
        }
    }

    export class GithubController
    {
        public static $inject = ['$scope', '$timeout', 'GithubApiService'];

        private _getRepositoriesPromise: ng.IPromise<void>;

        constructor(
            private $scope: IGithubScope,
            private $timeout: ng.ITimeoutService,
            private githubApiService: Services.GithubApiService
            )
        {
            if (githubApiService == null)
            {
                throw new Error(RESOURCES.Error_Argument_Null.replace(/\{0}/g, 'githubApiService'));
            }

            angular.extend(
                $scope,
                {
                    ctrl: this,
                    model: {
                        loadingRepos: false,
                        organizationName: 'angular'
                    }
                },
                false);
        }

        public GetRepositories(organizationName): void
        {
            if (this._getRepositoriesPromise != null)
            {
                this.$timeout.cancel(this._getRepositoriesPromise);
            }

            this._getRepositoriesPromise = this.$timeout(() => this._InternalGetRepositories(organizationName), 250);
        }

        private _InternalGetRepositories(organizationName): void
        {
            this.$scope.model.loadingRepos = true;

            this.githubApiService.GetRepos(organizationName)
                .then(repos =>
                {
                    console.log('repos', repos);
                    this.$scope.model.repos = repos;
                })
                .catch(err =>
                {
                    console.log('err', err);
                })
                .finally(() =>
                {
                    this.$scope.model.loadingRepos = false;
                });
        }

    }
}