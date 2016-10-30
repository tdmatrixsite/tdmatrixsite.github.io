var app=angular.module("tdmatrix",["ngRoute"]);

app.config(function($routeProvider)
{
  $routeProvider.when("/",
  {
    templateUrl:"Pages/Demo/Demo.html",
    controller:demoController
  });


  $routeProvider.when("/tutorial",
  {
    templateUrl:"Pages/Tutorials/Tutorial.html",
    controller:tutorialController
  });


  $routeProvider.when("/download",
  {
    templateUrl:"Pages/Download/Download.html",
    controller:downloadController
  });


  $routeProvider.when("/contact",
  {
    templateUrl:"Pages/Contact/Contact.html",
  });


  $routeProvider.when("/futureWork",
  {
    templateUrl:"Pages/FutureWork/FutureWork.html"
  });
});
