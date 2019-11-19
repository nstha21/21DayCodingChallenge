/*
Challenge #18 - In It to Win It
There are a number of different stands and games at this year's festival where the townspeople of Codeville can win raffle tickets! There are three different kinds of tickets someone can win, and they each correspond to a raffle. There are red tickets for the Red Robin Raffle, green tickets for the Green Machine Raffle and blue tickets for the Deep Blue Sea Raffle. The people of Codeville love games and always end up with a large number of tickets. So this year, we'll build a machine that not only sorts and counts the number of each ticket, but also tells people which raffle they have the best odds of winning based on the current entries.

Instructions
Our first function, bestOdds(), will receive two parameters. The first parameter will be an array of strings that are either red, green, or blue, representing the tickets that a particular person has. The second parameter is an object that shows how many entries there currently are for each raffle. By looking at the tickets that the particular person has, your function should return a string that lets the person know which raffle they have the highest chance of winning. The format of the response should be as follows (without the square brackets): "You have the best odds of winning the [COLOUR] raffle."

While we could do this all within the bestOdds() function, we want to keep our code DRY, so we will also need to complete a helper function. This helper function countTickets() will be called from within bestOdds() and receive the array of strings that are either red, green, or blue. The function will count how many of each string there are, and then return an object with the individual counts.

Examples
Input:

// for bestOdds() function
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]

const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
}
Output:
"You have the best odds of winning the red raffle."

Input:

// for countVotes() helper function
const tickets = [
  'red',
  'red',
  'green',
  'blue',
  'green'
]
Output:
 
{
  red: 2,
  green: 2,
  blue: 1
}
//got help here... need to look further into this optimized solution
*/

const countTickets = (tickets) => {
  //Code here
  return tickets.reduce((acc, cv) => {
    return {...acc, [cv]: acc[cv] + 1 }
  }, { red: 0, green: 0, blue: 0 })
}

const bestOdds = (tickets, raffleEntries) => {
  //Code here
  const ticketCounts = countTickets(tickets);
  const winningColor = Object.keys(ticketCounts).reduce((acc, cv) => {
    return ticketCounts[cv] / raffleEntries[cv] > ticketCounts[acc] / raffleEntries[acc] ? cv : acc;
  });
  return `You have the best odds of winning the ${winningColor} raffle.`
}


/* Longer solution
const countTickets = (tickets) => {
  var tally = {red: 0, blue: 0, green : 0};
  if (!tickets || !Array.isArray(tickets) || !tickets.length) return tally;
  tickets.forEach( item => {
    tally[item] = (tally[item] || 0) + 1;    
  });
  return tally;
}
const bestOdds = (tickets, raffleEntries) => {
  var tally = countTickets(tickets);
  var bestColor = 'unknown', highestValue = Number.MAX_SAFE_INTEGER;
  for(var prop in raffleEntries) {
    if (prop in tally) raffleEntries[prop] += tally[prop];
    if (raffleEntries[prop] < highestValue) {
      bestColor = prop;
      highestValue = raffleEntries[prop];
    }
  }
  return 'You have the best odds of winning the ' + bestColor + ' raffle.';
};
*/
