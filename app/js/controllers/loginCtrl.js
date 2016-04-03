/**
 * Created by MeirG on 03/04/2016.
 */
'use strict';

app.controller('loginCtrl', function($scope, loginService){
   $scope.login = function(user){
       loginService.login(user);
   }
});