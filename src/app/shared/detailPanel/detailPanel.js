'use strict';

app.directive('detailPanel', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'detailPanelCtrl',
    scope: {
      acct: '=',
      clearActive: '&',
      detailClicked: '&'
    },
    templateUrl:'shared/detailPanel/detailPanel.html',
  }
})
