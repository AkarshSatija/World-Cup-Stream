var app = angular.module('Twitter', ['ngResource']);

app.controller('StreamController', function($scope, $resource) {
    $scope.stream = [];


    $scope.load=function () {
    	console.log("loading");
        $resource("/stream?"+(new Date().getTime())).query({}, function(data) {
        	
        	if($scope.stream.length>50)
        		$scope.stream=$scope.stream.slice(20,$scope.stream.length); // will keep $scope.stream limited so as to prevent heavy data binding. as whole repeat set in binded again on update

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