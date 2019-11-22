/*
Challenge #19 - Pumpkin Spice and Everything Nice
This is the Codeville Fall Festival, and nothing says fall more than pumpkin spice. At this year's festival, there will be three ways for the people of Codeville to get their pumpkin spice fix:

Pumpkin pie
Pumpkin spice lattes
Pumpkin spice macarons
Instructions
Each item differs in both cost and the grams of pumpkin spice per serving. To help festival-goers maximize their pumpkin spice consumption, help them determine the maximum amount of pumpkin spice they can ingest with the amount of money they are bringing to the festival.

A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin spice
Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

We need to write a function, pumpkinSpice(money) that will take in a number, or how much the festival-goer has to spend on treats, and return an array with the 4 elements as outlined below:

The first element should represent how many slices of pumpkin pie the client can buy
The second element should represent how many pumpkin spice lattes the client can buy
The third element should represent how many pumpkin spice macarons the client can buy
The fourth element should represent how many grams of pumpkin spice the client will be buying

Our function should start by calculating how many slices of pumpkin pie we can buy. Then, we'll want to use the remaining money to do the calculations for the lattes, followed lastly by the macarons.

Examples
Input:

    const money = 9
    
Output:
[1, 1, 1, 48]
*/
const pumpkinSpice = money => {
  //code here
   let spice = 0;

  const treats = {
    "pie": {
      "cost": 5,
      "spice": 30,
      "bought": 0
    },
    "latte": {
      "cost": 3,
      "spice": 15,
      "bought": 0
    },
    "macaron": {
      "cost": 1,
      "spice": 3,
      "bought": 0
    }
  }
  
  for (let i in treats) {
    while(money >= treats[i].cost) {
      money = money - treats[i].cost; 
      spice += treats[i].spice;
      treats[i].bought++;
    }
  }
  
  return [treats.pie.bought, treats.latte.bought, treats.macaron.bought, spice];

}


/*
variation1: 
const pumpkinSpice = money => {
  const C = {pie: {amt: 5, spice: 30},
           latte: {amt: 3, spice: 15},
             mac: {amt: 1, spice: 3}}
  var Tspice = 0
  let meal = Object.keys(C).reduce((acc,food) => {
      let count=Math.floor(money / C[food].amt)
      money %= C[food].amt
      Tspice += count * C[food].spice
      return [...acc, count]
  },[])
  return meal.concat(Tspice)
}

variation2: 

const pumpkinSpice = money => {
  
  // array of pies, lattes, macarons, total grams
  const pumpkinAmount = [0, 0, 0, 0];
  
  while (money >= 5) {
    pumpkinAmount[0]++;
    pumpkinAmount[3] += 30;
    money -= 5;
  }
  
  while (money >= 3) {
    pumpkinAmount[1]++;
    pumpkinAmount[3] += 15;
    money -= 3;
  }
  
  while (money >= 1) {
    pumpkinAmount[2]++;
    pumpkinAmount[3] += 3;
    money -= 1;
  }
  
  return pumpkinAmount;
  
}

variation3: 
const pumpkinSpice = money => {
      
      var pie=parseInt(money/5);

      var remainder = money%5;

      var latte = parseInt(remainder/3);

      remainder = remainder%3;

      var macaron = remainder

      var grams = pie*30+latte*15+macaron*3
      
      result = [pie, latte, macaron, grams];
      return result;
      
    }
*/
