/**
 * Created by MeirG on 03/04/2016.
 */
'use strict';

app.factory('sessionService', function(){
   return{
       set: function(key, value){
           return sessionStorage.setItem(key, value);
       },
       get: function(key){
           return sessionStorage.getItem(key);
       },
       destroy: function(key){
           return sessionStorage.removeItem(key);
       }
   }
});