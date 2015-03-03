var app = angular.module('Twitter', ['ngResource', 'ngClipboard']);

app.controller('StreamController', function($scope, $resource) {
    $scope.stream = [];

    $scope.load = function() {
        console.log("loading");
        $resource("/stream?" + (new Date().getTime())).query({}, function(data) {
            if ($scope.stream.length > 50)
                $scope.stream = $scope.stream.slice(20, $scope.stream.length); // will keep $scope.stream limited so as to prevent heavy data binding. as whole repeat set in binded again on update

            $scope.stream = $scope.stream.concat(data);
        });
    }

    $scope.fallback = function(copy) {
        window.prompt('Press cmd+c to copy the text below.', copy);
    };

    $scope.showMessage = function() {
        console.log("clip-click works!");
    };

    $scope.load();
});

// creating a filter for showing data in reverse order.
app.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});

app.config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.6/ZeroClipboard.swf");
}]);
