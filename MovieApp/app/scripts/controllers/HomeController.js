movieApp.controller("HomeController", function HomeController($scope, $routeParams, $http, DataService, $sce, $anchorScroll, $location) {

    DataService.getPopularM($routeParams.page).then(function (responce) {
        var url = 'https://image.tmdb.org/t/p/w500'
        $scope.totalPages = responce.total_pages;
        $scope.totalResult = responce.total_results;
        $scope.popularMovies = responce.results;
        
        var allPosters = $scope.popularMovies.map(function (el) {
            return { poster: (url + el.poster_path), title: el.original_title, id: el.id, rating: el.vote_average, plot: el.overview, release_date: el.release_date }
        });
        $scope.allUrls = allPosters

      

    });
    $scope.page = $routeParams.page || 1
    $scope.pager = {
        next: function myfunction() {
            if ($scope.page < $scope.totalResult) {
                $scope.page++;
                $location.path('/home/' + $scope.page)
            }
        },
        prev: function myfunction() {
            if ($scope.page > 1) {
                $scope.page--;
                $location.path('/home/' + $scope.page)
            }
        }
    }

    $scope.scroll = function () {
        $anchorScroll()
    }
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        var button = document.getElementById("scrBtn");
        if (button === null) {
            return
        }
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    $scope.imgHeight = function () {
        
        var imgs = $('.cardsHome')
        imgs.each(el => el.height())
      
    }

    $scope.imgHeight()



});