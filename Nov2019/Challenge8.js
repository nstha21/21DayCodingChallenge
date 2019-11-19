
const smartGarbage = (trash, bins) => {
  
    // trash, is a string that will tell our function what type of item is being submitted
    //bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value
    //Our function must increase the correct value in the bins object, and the return the newly updated object
    // Code here!
    //short method
    /*
 if(bins.hasOwnProperty(trash)) // checking if "trash" exists in bin first
 {
    bins[trash]+=1;   
  }
  return bins;
    */
    
  ///* long way
  
  if (trash === "waste"){
    bins.waste++;
  } else if (trash === "recycling"){
    bins.recycling++;
  }else if (trash === "compost"){
    bins.compost++;
  }
  return bins;
  
  
//  */
}
