var angulartest;
(function (angulartest) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        var GithubController = (function () {
            function GithubController($scope, githubApiService) {
                this.$scope = $scope;
                this.githubApiService = githubApiService;
                if (githubApiService == null) {
                    throw new Error(angulartest.RESOURCES.Error_Argument_Null.replace(/\{0}/g, 'githubApiService'));
                }
                angular.extend($scope, {
                    ctrl: this,
                    model: {
                        loadingRepos: false,
                        organizationName: 'angular'
                    }
                }, false);
                //$scope.$watch('model.organizationName', () => this.recalculateAmounts());
            }
            GithubController.prototype.GetRepositories = function (organizationName) {
                var _this = this;
                this.$scope.model.loadingRepos = true;
                this.githubApiService.GetRepos(organizationName).then(function (repos) {
                    console.log('repos', repos);
                    _this.$scope.model.repos = repos;
                }).catch(function (err) {
                    console.log('err', err);
                }).finally(function () {
                    _this.$scope.model.loadingRepos = false;
                });
            };
            GithubController.$inject = ['$scope', 'GithubApiService'];
            return GithubController;
        })();
        Controllers.GithubController = GithubController;
    })(Controllers = angulartest.Controllers || (angulartest.Controllers = {}));
})(angulartest || (angulartest = {}));
//# sourceMappingURL=GithubController.js.map