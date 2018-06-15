movieApp.controller("LoginController", ['$scope', function ($scope) {
    $scope.login = function (user, loginForm) {
        if (!(loginForm.$valid)) {
            console.log("fill all data")
        }
        else {
             console.log(user)
        }

    }

}])