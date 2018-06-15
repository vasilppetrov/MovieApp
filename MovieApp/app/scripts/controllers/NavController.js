
movieApp.controller('NavController', function NavController($scope, DataService, $route, $location, $routeParams) {
    $scope.handleSearch = function (input) {
        var test = '/search/' + $('#inputValue')[0].value;
        $location.path(test)
    };

    $scope.resetInput = function ($event) {
        $('#inputValue')[0].value = '';
    };


    var select = 'movie'
    $scope.testValue
    console.log($scope.testValue)
    DataService.getSearchData($scope.testValue, 1, select).then(function (rest) {
        console.log(rest)
    })

    //$scope.keyUp = function (value) {
    //    console.log($location.path())
    //    $scope.testValue = value
    //    console.log($scope.testValue)
    //    {
    //        if (value === '') {
    //            $scope.result = [];
    //        }
    //        console.log($scope.testValue)
    //        DataService.getSearchData($scope.testValue, 1, select).then(function (rest) {
    //            $scope.result = rest.results
    //            console.log($scope.result)
    //        })
    //    }
    //}

    //$scope.clearResult = function () {
    //    $scope.result = []
    //}

});