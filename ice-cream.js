let iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...


// Add the flavour "root beer" to the array without modifying the original array
const newIceCreamFlavours = iceCreamFlavours.concat("root beer");
console.log(newIceCreamFlavours);

// Log the first flavour in the array
console.log(newIceCreamFlavours[0]);

// Log the last flavour in the array
console.log(newIceCreamFlavours[newIceCreamFlavours.length - 1]);

// Log the resulting number of flavours in the array
console.log(newIceCreamFlavours.length);
