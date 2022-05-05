//MODULE
var atmApp = angular.module('atmApp', ['ngRoute', 'ngResource']);

atmApp.constant('SERVER_URL', '/getusers');


//SERVICES
atmApp.service('userService', ['$scope', '$http', function ($scope, $http) {

    this.changePin = function changePin(pinCode) {
        return $http({
            method: 'PATCH',
            url: 'localhost:8080/getusers/1',
            data: {
                pinCode: $scope.d1 + $scope.d2 + $scope.d3 + $scope.d4 + $scope.d5 + $scope.d6
            }

        });
    }

}]);




