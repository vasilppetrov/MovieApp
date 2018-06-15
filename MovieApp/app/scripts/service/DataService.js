

movieApp.factory('DataService', function ($q, $http,$routeParams) {

    var getMovies = function (searchText, page, select) {
        var defer = $q.defer();
        var searchedPage;
        if (select === 'movie') {
            if (searchText) {
                $http.get('https://api.themoviedb.org/3/search/movie?api_key=8492c5b37075e30e7458dc87dfc217e2&query=' + searchText + '&page=' + page).then(function (responce) {
                     searchedPage = responce.data;
                    defer.resolve(searchedPage);
                });
            }
        }
        
        if (select === 'actor') {
            if (searchText) {
                $http.get('http://api.themoviedb.org/3/search/person?query=' + searchText + '&api_key=8492c5b37075e30e7458dc87dfc217e2&page=' + page).then(function (responce) {
                     searchedPage = responce.data;
                    defer.resolve(searchedPage);
                });
            }
        }      
       
        return defer.promise;
    }

    var getMovie = function () {
        var defer = $q.defer();
        var url = 'https://api.themoviedb.org/3/movie/' + $routeParams.id + '?api_key=8492c5b37075e30e7458dc87dfc217e2&append_to_response=credits';
        $http.get(url).then(function (respDetails) {
            console.log(respDetails);
            var movie = respDetails.data;
            if (movie.Type === "series") {
                var series = [];
                var seasons = seasonsCalculate(movie.Year)
                for (var i = 1; i <= seasons; i++) {
                    var urlSeries = 'http://www.omdbapi.com/?i=' + $routeParams.id + '&Season='+i
                    $http.get(urlSeries).then(function (respSeason) {
                        if (respSeason.data.Response === "True") {
                            series.push(respSeason.data);
                            console.log(series);
                        }                 
                    });
                }
            }
            defer.resolve(movie);
        });
        return defer.promise;
    }

    var getTrailer = function () {
        var defer = $q.defer();
        var url = 'http://api.themoviedb.org/3/movie/' + $routeParams.id + '/videos?api_key=8492c5b37075e30e7458dc87dfc217e2'
        $http.get(url).then(function (responce) {
            defer.resolve(responce.data);
        });
        return defer.promise
    };

    var getPopularM = function (page) {
        var defer = $q.defer();
        var page = page || 1;
        var url = 'https://api.themoviedb.org/3/movie/popular?api_key=8492c5b37075e30e7458dc87dfc217e2&language=en-US&page=' +page
        $http.get(url).then(function (response) {
            defer.resolve(response.data);
        });

        return defer.promise
    }

    function seasonsCalculate(years) {
        var splitetRange = years.split('–'),
            today = new Date().getFullYear(),
            result;

        if (splitetRange[1] === '') {
            result = today - parseInt(splitetRange[0]);
        }
        else {
            result = parseInt(splitetRange[1]) - parseInt(splitetRange[0]);
        }

        return result
    }

    function getActorDetails(id) {
        var defered = $q.defer(),
            url = 'https://api.themoviedb.org/3/person/'+id+'?api_key=8492c5b37075e30e7458dc87dfc217e2&language=en-US'
        $http.get(url).then(function (response) {
            defered.resolve(response)
        });
        return defered.promise
    }

    function getCredits(id){
        var defered = $q.defer(),
            url = 'http://api.themoviedb.org/3/person/'+id+'/combined_credits?api_key=8492c5b37075e30e7458dc87dfc217e2';
        $http.get(url).then(function (response) {
            defered.resolve(response)
        })

        return defered.promise
    }


    return {
        getSearchData: getMovies,
        getMovie: getMovie,
        getTrailer: getTrailer,
        getPopularM: getPopularM,
        getActorDetails: getActorDetails,
        getCredits : getCredits
    }
})