'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('okane', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    });
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/login'});
}]);

app.run(function ($rootScope, $location, loginService) {
    var routesPermissions = ['/home']; //only authenticated users
    $rootScope.$on('$routeChangeStart', function () {
        if(routesPermissions.indexOf($location.path()) != -1 && !loginService.isLogged()){
            $location.path('/login')
        }
    })
})
