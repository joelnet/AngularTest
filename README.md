# AngularTest-CashCall

>This test uses the GitHub API (https://api.github.com/) as a json data source.
>1) Create a Single Page Application
>2) Provide a text box on the first page that loads, typically index.html.
>3) You should be able to type into this text box your favorite OSS project, when you tab out of it,
>    or with the addition of a button, under the covers this should then go out to GitHub and find all
>    the public repositories for that user (user) or organization (org).
>    (https://api.github.com/users/{user})  (https://api.github.com/orgs/{orgs})
>4) Provide some of the details of this response and put them on the screen.
>5) Enumerate all the repositories and provide links that are clickable to drill down into the repository
>    and then provide some of the details of this response.
>6) Feel free to embellish to impress.

## my notes:

* This was written in TypeScript, therefore TypeScript source should be viewed (as opposed to the JavaScript source).
* This application features a Data Model (GithubRepoModel) a Service (GithubApiService) and a Controller (GithubController). The Service is injected into the Controller using Angulars dependency injection.
* The Service methods are written using Angular's $q implementation.
* Data is pulled from both the users and orgs apis asynchronously.
* Data is them combined, distinctly selected and sorted by watchers.
* Formatting has intentionally been left plain since this is only a demonstration of angular.
