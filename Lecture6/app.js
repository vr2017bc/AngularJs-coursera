(function(){
  'use strict';

  angular.module('Lecture6Module',[])
  .controller('Lecture6Controller', function($scope){
    $scope.name="";
    $scope.totalNameCount=0;

    $scope.calculateTotalNameCount=function()
    {
      var totalNameCount =  calucateNumericForString($scope.name);
      $scope.totalNameCount = totalNameCount;
    };

    function calucateNumericForString(string)
    {
      var totalStringValue=0;
      for(var i=0; i<string.length; i++)
      {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });
})();
