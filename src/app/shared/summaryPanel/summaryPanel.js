'use strict';

app.directive('summaryPanel', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'summaryPanelCtrl',
    scope: {
      acct: '=',
      clearActive: '&'
    },
    templateUrl:'shared/summaryPanel/summaryPanel.html',
  }
})
app.controller('summaryPanelCtrl', function($scope){

})
