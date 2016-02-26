'use strict';

app.controller('appCtrl', function($scope, dataSrvc){

  $scope.me = dataSrvc.me;
  $scope.accounts = dataSrvc.accounts;
  $scope.cards = dataSrvc.cards;

})
