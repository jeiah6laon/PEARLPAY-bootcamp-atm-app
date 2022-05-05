//ROUTES
atmApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
        })

        //balance
        .when('/b-pin', {
            templateUrl: 'pages/balance/pin.html',
            controller: 'bpinController'
        })
        .when('/b-scc', {
            templateUrl: 'pages/balance/scc.html',
        })
        .when('/receipt-note', {
            templateUrl: 'pages/balance/rwnote.html',
            controller: 'receiptController'
        })
        .when('/take-receipt', {
            templateUrl: 'pages/balance/takereceipt.html',
        })
        .when('/balance', {
            templateUrl: 'pages/balance/balance.html',
            controller: 'balanceController'
        })

        //withdraw
        .when('/w-pin', {
            templateUrl: 'pages/withdraw/pin.html',
            controller: 'wpinController'
        })
        .when('/w-scc', {
            templateUrl: 'pages/withdraw/scc.html',
            controller: 'wsccController'
        })

        //others
        .when('/others', {
            templateUrl: 'pages/others/others.html',
        })
        .when('/activation', {
            templateUrl: 'pages/others/activation.html',
            controller: 'activationController'
        })
        .when('/activation/pin', {
            templateUrl: 'pages/others/pin.html',
            controller: 'opinController'
        })

        //pin change
        .when('/pinchange', {
            templateUrl: 'pages/pin change/oldpin.html',
            controller: 'pinchangeController'
        })
        .when('/newpin', {
            templateUrl: 'pages/pin change/newpin.html',
            controller: 'newpinController'
        })
        .when('/reenter', {
            templateUrl: 'pages/pin change/reenter.html',
            controller: 'reenterController'
        })

        //constant
        .when('/receipt', {
            templateUrl: 'pages/rnonote.html',
            controller: 'receiptController'
        })
        .when('/take-receipt', {
            templateUrl: 'pages/takereceipt.html',
        })
        .when('/select', {
            templateUrl: 'pages/select.html',
        })
        .when('/thank-you', {
            templateUrl: 'pages/thankyou.html',
        })
}]);

