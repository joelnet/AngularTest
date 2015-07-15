/// <reference path="../typings/linq/linq.d.ts" />
var angulartest;
(function (angulartest) {
    var Services;
    (function (Services) {
        "use strict";
        var GithubApiService = (function () {
            function GithubApiService($http, $q) {
                this.$http = $http;
                this.$q = $q;
                this._usersUrl = "https://api.github.com/users/{0}/repos";
                this._orgsUrl = "https://api.github.com/orgs/{0}/repos";
                if ($http == null) {
                    throw new Error(angulartest.RESOURCES.Error_Argument_Null.replace(/\{0}/g, '$http'));
                }
            }
            /**
             * GetRepos calls the users and organizations api asyncronously
             * and returns the combined results.
             */
            GithubApiService.prototype.GetRepos = function (name) {
                var _this = this;
                var errors = [null, null];
                return this.$q.all([
                    this._GetRepos(this._usersUrl.replace(/\{0}/g, name)).catch(function (err) {
                        if (err.status != 404) {
                            err[0] = err;
                        }
                    }),
                    this._GetRepos(this._orgsUrl.replace(/\{0}/g, name)).catch(function (err) {
                        if (err.status != 404) {
                            err[1] = err;
                        }
                    }),
                ]).then(function (data) {
                    if (errors[0] != null && errors[1] != null) {
                        return _this.$q.reject(errors);
                    }
                    return Enumerable.From(data[0] || []).Concat(data[1] || []).Distinct(function (o) { return o.id; }).OrderByDescending(function (o) { return o.watchers; }).ToArray();
                });
            };
            GithubApiService.prototype._GetRepos = function (url) {
                return this.$http.get(url).then(function (res) { return (res != null && res.data != null ? res.data : null); });
            };
            GithubApiService.$inject = ['$http', '$q'];
            return GithubApiService;
        })();
        Services.GithubApiService = GithubApiService;
    })(Services = angulartest.Services || (angulartest.Services = {}));
})(angulartest || (angulartest = {}));
//# sourceMappingURL=GithubApiService.js.map