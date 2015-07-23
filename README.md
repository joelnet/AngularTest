# AngularTest

This was an Angular pre-employment test. The test was to consume a few github apis using Angular.

There would normally be XSS issues with consuming the api directly like this, but this was just a simple Angular test.

## my notes:

* This was written in TypeScript, therefore TypeScript source should be viewed (as opposed to the JavaScript source).
* This application features
  a [Data Model (`GithubRepoModel`)](https://github.com/joelnet/AngularTest/blob/master/scripts/models/GithubRepoModels.ts)
  a [Service (`GithubApiService`)](https://github.com/joelnet/AngularTest/blob/master/scripts/services/GithubApiService.ts) and
  a [Controller (`GithubController`)](https://github.com/joelnet/AngularTest/blob/master/scripts/controllers/GithubController.ts).
  The Service is injected into the Controller using Angulars dependency injection and can be viewed in [app.ts](https://github.com/joelnet/AngularTest/blob/master/scripts/app.ts).
* The Service's methods are written using Angular's $q implementation.
* Data is pulled from both the users and orgs apis asynchronously.
* Data is them combined, distinctly selected and sorted (descending) by the 'watchers' field using LINQ.
  [view at line 56](https://github.com/joelnet/AngularTest/blob/master/scripts/services/GithubApiService.ts)
* Formatting has intentionally been left plain since this is only a demonstration of angular.
* This has been tested with Chrome, Firefox, Internet Explorer.
* Users / Orgs tested: `angular` and `chrome`
* The request implementes a small delay (using angular's `$timeout`) to prevent simultaneous firing of both `blur` and `click` events.

