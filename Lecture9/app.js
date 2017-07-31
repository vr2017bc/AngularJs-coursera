(function(){
  'use strict';
  angular.module('DependencyInjectionModule',[])
  .controller('DependencyInjectionController',diController);

  function diController($scope,$filter,$injector)
  {
    $scope.name="";

    $scope.upper=function(){
      var upper =  $filter('uppercase');
      $scope.name =  upper($scope.name);
    }

    console.log($injector.annotate(diController))
  }

  console.log(diController);
})();
