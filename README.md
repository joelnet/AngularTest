# AngularTest-CashCall

>This test uses the GitHub API (https://api.github.com/) as a json data source.
>
>1.  Create a Single Page Application
>2. Provide a text box on the first page that loads, typically index.html.
>3. You should be able to type into this text box your favorite OSS project, when you tab out of it,
>    or with the addition of a button, under the covers this should then go out to GitHub and find all
>    the public repositories for that user (user) or organization (org).
>    (https://api.github.com/users/{user})  (https://api.github.com/orgs/{orgs})
>4. Provide some of the details of this response and put them on the screen.
>5. Enumerate all the repositories and provide links that are clickable to drill down into the repository
>    and then provide some of the details of this response.
>6. Feel free to embellish to impress.

## my notes:

* This was written in TypeScript, therefore TypeScript source should be viewed (as opposed to the JavaScript source).
* This application features
  a [Data Model (GithubRepoModel)](https://github.com/joelnet/AngularTest-CashCall/blob/master/scripts/models/GithubRepoModels.ts)
  a [Service (GithubApiService)](https://github.com/joelnet/AngularTest-CashCall/blob/master/scripts/services/GithubApiService.ts) and
  a [Controller (GithubController)](https://github.com/joelnet/AngularTest-CashCall/blob/master/scripts/controllers/GithubController.ts).
  The Service is injected into the Controller using Angulars dependency injection and can be viewed in [app.ts](https://github.com/joelnet/AngularTest-CashCall/blob/master/scripts/app.ts).
* The Service's methods are written using Angular's $q implementation.
* Data is pulled from both the users and orgs apis asynchronously.
* Data is them combined, distinctly selected and sorted (descending) by the 'watchers' field using LINQ.
  [view at line 56](https://github.com/joelnet/AngularTest-CashCall/blob/master/scripts/services/GithubApiService.ts)
* Formatting has intentionally been left plain since this is only a demonstration of angular.
* This took 4 hours to complete.
