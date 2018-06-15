movieApp.controller('ActorDetailsController', ['$scope', 'DataService', '$routeParams', function ($scope, DataService, $routeParams) {

    $scope.baseUrl = 'https://image.tmdb.org/t/p/w500/';
    DataService.getActorDetails($routeParams.id).then(function (result) {
        $scope.actor = result.data
        $scope.actorPoster = $scope.baseUrl + $scope.actor.profile_path
    })

    DataService.getCredits($routeParams.id).then(function (credits) {
        $scope.credits = sortDate(credits.data.cast)
        console.log($scope.credits)


        var poster = $scope.credits.reverse().filter(a => a.media_type === 'movie').find(a => a.poster_path)
        console.log(poster)
        $scope.backgroundUrl = $scope.baseUrl + poster.poster_path;
    })

    $scope.limit = 12;
    $scope.resetLimit = function () {
        console.log($('#showHideResult'))
        if ($scope.limit === 12) {
            $scope.limit = ''
            $('#showHideResult').html("Hide")
        }
        else {
            $scope.limit = 12;
            $('#showHideResult').html('Show all')

        }
        
    }

}])

function sortDate(arr) {
    var min, tem;
    for (var i = 0; i < arr.length; i++) {
        min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (new Date(arr[min].release_date) > new Date(arr[j].release_date)) {
                min = j
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp
    }
  
    return arr
}