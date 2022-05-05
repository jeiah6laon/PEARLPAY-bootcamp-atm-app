//PIN CONTROLLERS
atmApp.controller('bpinController', ['$scope', '$http', '$window', '$timeout', function ($scope, $http, $window, $timeout) {
    $scope.invalidMsg = $scope.invalidMsg = false;
    $http.get('http://localhost:8080/getusers/1').
        then(function (response) {
            var dbPin = response.data.pinCode;
            var dbCode = angular.toJson(dbPin);
            console.log(dbCode); //check if able to get the value
   
            $scope.response = function () {
                var code = ($scope.d1 + $scope.d2 + $scope.d3 + $scope.d4 + $scope.d5 + $scope.d6);
                
                console.log(code); //check
                if (dbCode == code) {
                    $window.location.href = "#!/b-scc"
                } else {
                    $scope.invalidMsg = $scope.invalidMsg = true;
                    $timeout(function () { $scope.invalidMsg = false; }, 1500);
                    $scope.d1 = '';
                    $scope.d2 = '';
                    $scope.d3 = '';
                    $scope.d4 = '';
                    $scope.d5 = '';
                    $scope.d6 = '';
                }
            }
        });
}]);

atmApp.controller('wpinController', ['$scope', '$http', '$window', '$timeout', function ($scope, $http, $window, $timeout) {
    $scope.invalidMsg = $scope.invalidMsg = false;
    $http.get('http://localhost:8080/getusers/1').
        then(function (response) {
            var dbPin = response.data.pinCode;
            var dbCode = angular.toJson(dbPin);
            console.log(dbCode); //check if able to get the value
   
            $scope.response = function () {
                var code = ($scope.d1 + $scope.d2 + $scope.d3 + $scope.d4 + $scope.d5 + $scope.d6);
                
                console.log(code); //check
                if (dbCode == code) {
                    $window.location.href = "#!/w-scc"
                } else {
                    $scope.invalidMsg = $scope.invalidMsg = true;
                    $timeout(function () { $scope.invalidMsg = false; }, 1500);
                    $scope.d1 = '';
                    $scope.d2 = '';
                    $scope.d3 = '';
                    $scope.d4 = '';
                    $scope.d5 = '';
                    $scope.d6 = '';
                }
            }
        });
}]);


atmApp.controller('opinController', ['$scope', '$http', '$window', '$timeout', function ($scope, $http, $window, $timeout) {
    $scope.invalidMsg = $scope.invalidMsg = false;
    $scope.successMsg = $scope.successMsg = false;
    $http.get('http://localhost:8080/getusers/1').
        then(function (response) {
            var dbPin = response.data.pinCode;
            var dbCode = angular.toJson(dbPin);
            console.log(dbCode); //check if able to get the value
   
            $scope.response = function () {
                var code = ($scope.d1 + $scope.d2 + $scope.d3 + $scope.d4 + $scope.d5 + $scope.d6);
            
                console.log(code); //check
                if (code == dbCode) {
                    $scope.successMsg = $scope.successMsg = true;
                    $timeout(function () { $scope.successMsg = false; }, 3000);
                    $timeout(function () { $window.location.href = "#!/receipt"; }, 3000);
                    
                } else {
                    $scope.invalidMsg = $scope.invalidMsg = true;
                    $timeout(function () { $scope.invalidMsg = false; }, 1500);
                    $scope.d1 = '';
                    $scope.d2 = '';
                    $scope.d3 = '';
                    $scope.d4 = '';
                    $scope.d5 = '';
                    $scope.d6 = '';
                }
            }
        });
}]);

// PIN CHANGE
atmApp.controller('pinchangeController', ['$scope', '$http', '$window', '$timeout', function ($scope, $http, $window, $timeout) {
    $scope.invalidMsg = $scope.invalidMsg = false;
    $http.get('http://localhost:8080/getusers/1').
        then(function (response) {
            var dbPin = response.data.pinCode;
            var dbCode = angular.toJson(dbPin);
            console.log(dbCode); //check if able to get the value
   
            $scope.response = function () {
                var code = ($scope.d1 + $scope.d2 + $scope.d3 + $scope.d4 + $scope.d5 + $scope.d6);
                
                console.log(code); //check
                if (dbCode == code) {
                    $window.location.href = "#!/newpin"
                } else {
                    $scope.invalidMsg = $scope.invalidMsg = true;
                    $timeout(function () { $scope.invalidMsg = false; }, 1500);
                    $scope.d1 = '';
                    $scope.d2 = '';
                    $scope.d3 = '';
                    $scope.d4 = '';
                    $scope.d5 = '';
                    $scope.d6 = '';
                }
            }
        });
}]);
atmApp.controller('newpinController', ['$scope', '$window', 'userService', function ($scope, $window, userService) {
    var code = $scope.d1 + $scope.d2 + $scope.d3 + $scope.d4 + $scope.d5 + $scope.d6;

    $scope.changePin = function () {
        userService.changePin(code)
            .then(function success(response) {
                $scope.message = 'PIN changed!';
                $scope.errorMessage = '';
            },
                function error(response) {
                    $scope.errorMessage = 'Error changing PIN!';
                    $scope.message = '';
                });


        //CHANGE DB VALUE
        //$window.location.href = "#!/reenter";
        //https://www.baeldung.com/angularjs-crud-with-spring-data-rest
    }
}]);
atmApp.controller('reenterController', ['$scope', '$window', '$timeout', function ($scope, $window, $timeout) {
    $scope.invalidMsg = false;
    $scope.successMsg = false;
    $scope.response = function () {
        var code = $scope.d1 + $scope.d2 + $scope.d3 + $scope.d4 + $scope.d5 + $scope.d6;
        if ((code) == 654321) { //COMPARE TO NEW DB VALUE
            $scope.successMsg = $scope.successMsg = true;
            $timeout(function () { $scope.successMsg = false; }, 3000);
            $timeout(function () { $window.location.href = "#!/receipt"; }, 3000)

        } else {
            $scope.invalidMsg = $scope.invalidMsg = true;
            $timeout(function () { $scope.invalidMsg = false; }, 1500);
            $scope.d1 = '';
            $scope.d2 = '';
            $scope.d3 = '';
            $scope.d4 = '';
            $scope.d5 = '';
            $scope.d6 = '';
        }
    }
}]);


//OK
atmApp.controller('activationController', ['$scope', '$window', '$timeout', function ($scope, $window, $timeout) {
    $scope.invalidMsg = false;
    $scope.response = function () {
        var code = $scope.d1 + $scope.d2 + $scope.d3 + $scope.d4 + $scope.d5 + $scope.d6;
        if ((code) == 654321) {
            console.log(code);
            $window.location.href = "#!/activation/pin";
        } else {
            $scope.invalidMsg = $scope.invalidMsg = true;
            $timeout(function () { $scope.invalidMsg = false; }, 1500);
            $scope.d1 = '';
            $scope.d2 = '';
            $scope.d3 = '';
            $scope.d4 = '';
            $scope.d5 = '';
            $scope.d6 = '';
        }
    }
}]);

atmApp.controller('wsccController', ['$scope', '$window', '$timeout', function ($scope, $window, $timeout) {
    $scope.popupMsg = false;
    $scope.response = function () {
        $scope.popupMsg = $scope.popupMsg = true;
        $timeout(function () { $scope.popupMsg = false; }, 5000);
        $timeout(function () { $window.location.href = "#!/receipt"; }, 5000);
    }
}]);

atmApp.controller('balanceController', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://localhost:8080/getusers/1').
        then(function (response) {
            $scope.user = response.data;
        });
}]);

atmApp.controller('receiptController', ['$scope', '$window', function ($scope, $window) {
    $scope.takeReceipt = function () {
        $window.location.href = "#!/take-receipt";
    }

}]);