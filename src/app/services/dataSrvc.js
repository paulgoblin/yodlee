'use strict'

app.service('dataSrvc', function(){

  this.me = me;
  this.accounts = accounts;
  this.cards = cards;

})

var cards = [
  {
    id: "1",
    name: "CampusEdge Credit",
    limit: 5000,
    balance: 2839.27,
    available: 2132.42,
    minimum: 0,
    due: 1456462889821,
    updated: 1456462889821,
    transactions: []
  },
  {
    id: "2",
    name: "Primary Credit Card",
    limit: 10000,
    balance: 3190.97,
    available: 6792.10,
    minimum: 0,
    due: 1456462889821,
    updated: 1456462889821,
    transactions: []
  },
];

var accounts = [
  {
    id:'0',
    name: "cash",
    balance: 2401,
    data: cards
  },
  {
    id:'1',
    name: "Credit Cards",
    balance: 2839,
    limit: 5000,
    data: cards
  },
  {
    id:'2',
    name: "Bills",
    balance: 1337,
    data: cards
  },
  {
    id:'3',
    name: "Investments",
    balance: 1000003,
    data: cards
  }
];

var me = {
  name: "Catherine Earnshaw",
}
