/**
 * Created by MeirG on 03/04/2016.
 * https://www.youtube.com/watch?v=wz5G2A_enAk
 */
'use strict';

app.factory('loginService', function($http, $location, sessionService){
   return{
       login: function(user){
           var $promise = $http.post('api/login.php', user);
           $promise.then(function (msg) {
               var uid = msg.data;
               if(uid){
                   sessionService.set('uid', uid);
                   $location.path('/home');
               }
               else{
                   $location.path('/login');
               }
           }, function (msg) {
               console.error('Unable to perform');
               sessionService.set('uid', 1);
               $location.path('/home');
           });
       },
       logout: function () {
           sessionService.destroy('uid');
           $location.path('/login');
       },
       isLogged: function () {
           //var $promise = $http.post('api/checkSession.php', user);
           var retVal = false;
           if(sessionService.get('uid')){
               retVal = true;
           }
           return retVal;
       }
   }
});