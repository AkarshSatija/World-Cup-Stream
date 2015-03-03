var app = angular.module('Twitter', ['ngResource']);

app.controller('StreamController', function($scope, $resource) {
	$scope.tweetsResult = [];

	$resource("/stream").query({}, function (data) {

    $scope.stream=data;
	console.log(data);


    });


});