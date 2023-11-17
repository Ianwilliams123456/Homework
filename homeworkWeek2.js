let pizzaPlace = "Jim's Place";
let numberofToppings = 15;
console.log(pizzaPlace);
console.log(numberofToppings);
console.log(typeof pizzaPlace);
console.log(typeof numberofToppings);

console.log(`${pizzaPlace} has the greatest pizza because we have ${numberofToppings} toppings but no pineapple`);

if(numberofToppings<10) {
console.log("Quality, not Quanitity");
}
else {console.log("A whole lot of pizza");
}

let i = 0;
while(i < 15){
let numod=(i % 2);
if(numod==0){
  console.log(i);

}
i++;
}
