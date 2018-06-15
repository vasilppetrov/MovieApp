movieApp.controller('SearchController', function SearchController($scope, DataService, $routeParams, $location) {
    var select = $('#searchBy').val() || 'movie';

    DataService.getSearchData($routeParams.searchText, $routeParams.page, select).then(function (response) {
        var url = 'https://image.tmdb.org/t/p/w500/'
        $scope.searchedText = $routeParams.searchText;
        $scope.searchedResult = response.results;
        if (select === 'actor') {
            $scope.allData = response.results.map(function (el) {
                return { id: el.id, title: el.name, poster: url + el.profile_path, known: el.known_for }
            });
        }
        else {
            $scope.allData = response.results.map(function (el) {
                return { id: el.id, title: el.original_title, poster: url + el.poster_path, release: el.release_date, rating: el.vote_average }
            });
        }

        $scope.totalResult = response.total_results;
        $scope.totalPages = response.total_pages;
        $scope.poster = url
        $('#inputValue')[0].value = $scope.searchedText

        if ($routeParams.page === undefined) {
            $('#prevPage').addClass('disabled');
        }

        if ($routeParams.page === $scope.totalPages) {
            $('#nextPage').addClass('disabled');
        }
    });

    $scope.pager = {
        next: function () {
            var page = parseInt($routeParams.page || '1');
            var pageCount = $scope.totalPages;
            if (page < pageCount) {
                $location.path('/search/' + $routeParams.searchText + '/' + (page + 1));
            }
            else {
                alert('Should not be possible');
            }
        },
        prev: function () {
            var page = parseInt($routeParams.page || '1');
            if (page > 1) {
                $location.path('/search/' + $routeParams.searchText + '/' + (page - 1));
            }
            else {
                alert('Should not be possible');
            }
        }
    }

    $scope.pagerHidden = false;
});