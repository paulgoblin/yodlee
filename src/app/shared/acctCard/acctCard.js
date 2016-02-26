'use strict';

app.directive('acctCard', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl:'shared/acctCard/acctCard.html',
    scope: {
      acct: '=',
      clickHandler: '&',
    }
  }
})
