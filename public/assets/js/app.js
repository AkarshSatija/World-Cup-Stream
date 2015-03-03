var app = angular.module('Twitter', ['ngResource']);

app.controller('StreamController', function($scope, $resource) {
    $scope.stream = [];


    $scope.load=function () {
    	console.log("loading");
        $resource("/stream").query({}, function(data) {
            $scope.stream = $scope.stream.concat(data);
            console.log(data);
        });

    }


$scope.load();
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});