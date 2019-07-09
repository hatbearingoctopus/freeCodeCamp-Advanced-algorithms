// Design a cash register drawer function (checkCashRegister()) that accepts purchase price (price), payment (cash) and cash-in-drawer (cid). (cid) is a 2d array listing available currency. The checkCashReister() function should always return an object with a (status) key and a (change) key. Return {status: 'INSUFFICIENT_FUNDS', change:[]} if cid is less than the change due, or if you cannot return the exact change. Return {status: 'CLOSED', change:[...]} with cid as the value for the key (change) if it is equal to the change due. Otherwise, return {status: 'OPEN', change:[...]} with the change due in coins and bills, sorted highest to lowest order, as the value of the (change) key. 

//Value of coins/bills into pennies. Penny values are to avoid JS calculation rounding errors.
const DENOMINATIONS = [
  ["ONE HUNDRED", 10000],
  ["TWENTY", 2000],
  ["TEN", 1000],
  ["FIVE", 500],
  ["ONE", 100],
  ["QUARTER", 25],
  ["DIME", 10],
  ["NICKEL", 5],
  ["PENNY", 1]
];

function checkCashRegister(price, cash, cid) {
//100 turns cas into penny value
  let change = cash * 100 - price * 100; 
  let moneyGiven = {};
  let moneyRetained = {};
  let i = 0;

  //If given exact change, no change is required, you're done
  if (change === 0) {
    return {
      status: "CLOSED",
      change: cid
    };
  }

  //Switch array for an object 
  cid.forEach(money => {
    moneyRetained[money[0]] = parseInt(money[1] * 100);
  });
  
  //Give bills largest - smallest until change = 0 or fail
  while(i < DENOMINATIONS.length && change > 0) {
    let billName = DENOMINATIONS[i][0];
    let billValue = DENOMINATIONS[i][1];
    
    //Accept and give change
    if (change - billValue > 0 && moneyRetained[billName] > 0) {
      moneyGiven[billName] = 0;

      //Give as many of this bill as you can
      while(change - billValue >= 0 && moneyRetained[billName] > 0) {
        moneyGiven[billName] += billValue / 100;
        moneyRetained[billName] = parseInt(moneyRetained[billName] - billValue);
        change -= billValue;
      }
    }
    i++;
  }

  if (change === 0) {
    let hasMoney = false;

    Object.keys(moneyRetained).forEach(key => {
      if (moneyRetained[key] > 0) {
        hasMoney = true;
      }
    });

    if (hasMoney) {
      return {
        status: "OPEN",
        change: Object.keys(moneyGiven).map(key => {
        let obj = [key, moneyGiven[key]];
        return obj;
      })};

    } else {
      return {
        status: "CLOSED",
        change: cid
      };
    }
  }

  return {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
