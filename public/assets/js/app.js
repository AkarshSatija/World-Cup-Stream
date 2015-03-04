var app = angular.module('Twitter', ['ngResource', 'ngClipboard']);

app.controller('StreamController', function($scope, $resource) {
    $scope.stream = [];
    $scope.stream_trim = [];

    $scope.load = function() {
        console.log("loading");
        $scope.loadButtonText = "Loading...";
        $resource("/stream?" + (new Date().getTime())).query({}, function(data) {
            if ($scope.stream.length > 500) {
                $scope.stream_trim = $scope.stream_trim.concat($scope.stream.slice(0, 200));
                console.log("trimmed");
                $scope.stream = $scope.stream.slice(200, $scope.stream.length); // will keep $scope.stream limited so as to prevent heavy data binding. as whole repeat set in binded again on update
                $scope.dataTrimmed = false;
            }

            $scope.stream = $scope.stream.concat(data);

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

        $scope.stream=$scope.stream_trim.concat($scope.stream);


    }


    $scope.loadButtonText = "Load More";
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



app.directive("scroll", function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) // if at last of a page
            {
                //trigger loading new posts 
                // scope.$load();

            }

            if (this.pageYOffset <= 100) {
                //scope.boolChangeClass = false;
                //trigger back data if hidden
                console.log('Header is in view.');
                /*scope.boolChangeClass = true;
                console.log('Scrolled below header.');*/
            }
            scope.$apply();
        });
    };
});
