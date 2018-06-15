/// <reference path="../../bower_components/jquery-2.2.3.js" />

movieApp.directive('search', ['$routeParams', '$location', function ($routeParams, $location) {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            doSearch: '&'
        },
        templateUrl: 'scripts/directives/search.html',
        link: function (scope, element, attrs, controller) {
            scope.dirSearch = function (txt) {
                scope.doSearch({ input: txt });
            }
        }
    }
}]);
