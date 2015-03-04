var app = angular.module('Twitter', ['ngResource', 'ngClipboard', 'infinite-scroll']);

app.controller('StreamController', function($scope, $resource) {
    $scope.stream = [];
    $scope.stream_trim = [];

    $scope.load = function() {
        console.log("loading");
        $scope.loadingStatus = true;
        $scope.loadButtonText = "Loading...";
        $resource("/stream?" + (new Date().getTime())).query({}, function(data) {
            if ($scope.stream.length > 500) {
                $scope.stream_trim = $scope.stream_trim.concat($scope.stream.slice(0, 200));
                console.log("trimmed");
                $scope.stream = $scope.stream.slice(200, $scope.stream.length); // will keep $scope.stream limited so as to prevent heavy data binding. as whole repeat set in binded again on update
                $scope.dataTrimmed = false;
            }

            $scope.stream = $scope.stream.concat(data);
            $scope.loadingStatus = false;
            $scope.loadButtonText = "Load More";
        });
    }

    $scope.fallback = function(copy) {
        window.prompt('Press cmd+c to copy the text below.', copy);
    };

    $scope.showMessage = function() {
        console.log("clip-click works!");
    };
    $scope.loadTrimmed = function() {

        $scope.stream = $scope.stream_trim.concat($scope.stream);


    }

    $scope.loadButtonText = "Load More";
    $scope.loadOnScroll = function() {
        if (!$scope.loadingStatus) $scope.load();
    };
    $scope.loadingStatus = false;
    $scope.load();
    $scope.dataTrimmed = true;
    $scope.scrolledToLast = false;
    $scope.boolChangeClass = true;

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
