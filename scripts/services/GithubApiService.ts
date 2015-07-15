/// <reference path="../typings/linq/linq.d.ts" />

module angulartest.Services
{
    "use strict";

    export class GithubApiService
    {
        public static $inject = ['$http', '$q'];
     
        private _usersUrl = "https://api.github.com/users/{0}/repos";
        private _orgsUrl = "https://api.github.com/orgs/{0}/repos";

        constructor(private $http: ng.IHttpService, private $q: ng.IQService)
        {
            if ($http == null)
            {
                throw new Error(RESOURCES.Error_Argument_Null.replace(/\{0}/g, '$http'));
            }
        }

        /**
         * GetRepos calls the users and organizations api asyncronously
         * and returns the combined results.
         */
        public GetRepos(name: string): ng.IPromise<models.GithubRepoModel[]>
        {
            var errors = [null, null];

            return this.$q.all(
                [
                    this._GetRepos(this._usersUrl.replace(/\{0}/g, name))
                        .catch(err =>
                        {
                            if (err.status != 404)
                            {
                                err[0] = err;
                            }
                        }),
                    this._GetRepos(this._orgsUrl.replace(/\{0}/g, name))
                        .catch(err =>
                        {
                            if (err.status != 404)
                            {
                                err[1] = err;
                            }
                        }),
                ])
                .then(data =>
                {
                    if (errors[0] != null && errors[1] != null)
                    {
                        return this.$q.reject(errors);
                    }

                    return Enumerable
                        .From<models.GithubRepoModel>(data[0] || [])
                        .Concat(data[1] || [])
                        .Distinct((o: models.GithubRepoModel) => o.id)
                        .OrderByDescending((o: models.GithubRepoModel) => o.watchers)
                        .ToArray();
                });
        }

        private _GetRepos(url: string): ng.IPromise<models.GithubRepoModel[]>
        {
            return this.$http.get(url)
                .then(res => <models.GithubRepoModel[]>(res != null && res.data != null ? res.data : null));
        }
    }
}