(  function(){
    'use strict';
    angular.module('MyFirstApp',[])
    .controller('MyAppController',function($scope){
      $scope.name = "Vishnu";
      $scope.sayHello = function(){
        return "Hello!!! Says Vishnu";
      };
    });

  })();
