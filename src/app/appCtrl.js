'use strict';

app.controller('appCtrl', function($scope, dataSrvc){

  $scope.me = dataSrvc.me;
  $scope.accounts = dataSrvc.accounts;
  $scope.cards = dataSrvc.cards;

  $scope.activeAccount = null;

  $scope.accountClicked = function(acctId){
    $scope.activeAccount = $scope.accounts[acctId];
    console.log("acct clicked", $scope.activeAccount);
  };

  $scope.clearActive = function(){ $scope.activeAccount = null; };

})
