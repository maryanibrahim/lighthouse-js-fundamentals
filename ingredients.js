const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Print out contents of ingredients using a while loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Print out contents of ingredients using a for loop
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// Print out contents of ingredients backwards using a reverse loop
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
