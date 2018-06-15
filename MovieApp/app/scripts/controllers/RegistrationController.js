movieApp.controller('RegistrationController', ['$scope', function ($scope) {
    $scope.user = {}
    $scope.createUser = function (user) {
        console.log(user)
    }

    $scope.validateEmail = function (user) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;       
        if (user.email === undefined) {
            return true;
        };
        return re.test(user.email);
    };
}]);
