
var app = angular.module("toursApp", []);

app.service("toursService", function ($http, $q)
{


  var deferred = $q.defer();
  $http.get("toursapi.json").then(function (data)
  {

    deferred.resolve(data);


  });

  this.getcollection = function ()
  {

    return deferred.promise;

  }

})


.controller("toursCtrl", function ($scope, toursService)

{
  var promise = toursService.getcollection();
  promise.then(function (data)
  {
    $scope.ArtistName = data;
    console.log($scope.ArtistName);
  });
})
