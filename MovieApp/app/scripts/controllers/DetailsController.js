movieApp.controller("DetailsController", function DetailsController($scope, $routeParams, $http, DataService,$sce) {

    DataService.getMovie().then(function (responce) {
        $scope.movie = responce;
    });

    DataService.getTrailer().then(function (responce) {
        var videoKey,
            url;
        $scope.video = responce
        if ($scope.video.results.length === 0) {
            url = 'img/nv.jpg';
            $scope.trailer = url;
        }
        else {
            videoKey = $scope.video.results[0].key
            url = 'https://www.youtube.com/embed/' + videoKey
            $scope.trailer = $sce.trustAsResourceUrl(url)
        }
    });
});