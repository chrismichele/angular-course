(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('LunchCheckController', function ($scope) {
  $scope.textBox = "What do you eat for lunch?";
  $scope.message = "Click button to test.";
  $scope.listLunch = "";
  $scope.message = "";

  $scope.displayMessage = function () {
    var mymessage = checkList($scope.listLunch);
    $scope.message = mymessage;
  };


  function checkList(string) {
    var myresult = "";
    var mylist = string.split(',');
    var listcount = mylist.length;

    // debug
    console.log('List: '+mylist);
    console.log(listcount+' items');

    // return result
    if(listcount>0 && listcount<=3) myresult='Enjoy!';
    else if(listcount>3) myresult='Too much!';
    else if(listcount==0) myresult='Please enter data first';

    return myresult;
  }

});

})();
