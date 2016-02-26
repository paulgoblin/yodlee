'use strict'

app.service('dataSrvc', function(){

  this.me = me;
  this.accounts = accounts;
  this.cards = cards;

})

var accounts = [
  {
    id:'0',
    name: "cash",
    amount: 2401,
  },
  {
    id:'1',
    name: "Credit Cards",
    amount: 2839,
    available: 5000
  },
  {
    id:'2',
    name: "Bills",
    amount: 1337,
  },
  {
    id:'3',
    name: "Investments",
    amount: 1000003,
  }
];

var me = {
  name: "Catherine Earnshaw",
}

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
