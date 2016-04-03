/**
 * Created by MeirG on 03/04/2016.
 */
'use strict';

app.controller('homeCtrl', function($scope, loginService){
    $scope.txt = 'Home page';
    $scope.logout = function () {
        loginService.logout();
    }
});