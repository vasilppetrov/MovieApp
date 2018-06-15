movieApp.controller('Testing', ['$scope', '$routeParams', 'DataService', '$location', function ($scope, $routeParams, DataService, $location) {
    var select = 'movie'
    $scope.testValue 
    console.log($scope.testValue)
    DataService.getSearchData($scope.testValue, 1, select).then(function (rest) {
        console.log(rest)
    })

    $scope.keyUp = function (value) {
        $scope.testValue = value
        console.log($scope.testValue)
        {
            if (value === '') {
                $scope.result = [];
            }
            console.log($scope.testValue)
            DataService.getSearchData($scope.testValue, 1, select).then(function (rest) {
                $scope.result = rest.results
                console.log($scope.result)
            })
        }
    }
    
}]);