var app = angular.module('Twitter', ['ngResource']);

app.controller('StreamController', function($scope, $resource, $timeout) {


	$scope.stream=$resource("/stream").query({}, function (data) {

       
	console.log(data);
      });


});