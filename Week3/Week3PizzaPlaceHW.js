// Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ["sausage", "pineapple", "bacon", "peppers"]



//greetCustomer(pizzaToppings);
// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer(toppings) {
    console.log("Welcome to Ian's Pizza, we cook one type of pizza, it has the following toppings");
for (let topping of toppings) {
    console.log(topping);
}
}
greetCustomer(pizzaToppings);
// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
let psize=prompt("please select from the following sizes: small, medium or large");
let pcrust=prompt("please select a crust: regular, thin or stuffed");
let unbaked = [];
function getPizzaOrder(size, crust, ...toppings){
console.log(`one ${size} pizza with ${crust} crust topped with ${toppings} coming right up`);
unbaked = [size, crust, ...toppings];
return unbaked;
}

getPizzaOrder(psize, pcrust, pizzaToppings);
console.log(unbaked);
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
let pizza = {}
function preparePizza(ovenready){
    console.log("...cooking pizza");
let ptoppings =[];
    for (let i=2; i < ovenready.length; i++) {
    ptoppings=ovenready[i];
    }
    pizza = {
    size: ovenready[0],
    crust: ovenready[1],
    toppings: ptoppings,   
}
return pizza;
}
preparePizza(unbaked);


// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
function servePizza(pizza) 
{
    console.log(`Order up!  Here is your ${pizza.size} pizza with ${pizza.crust} crust topped with ${pizza.toppings}.  Enjoy it!`);
   return pizza;
}

servePizza(pizza);

// outputs the same pizza Object that was passed in
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input

// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished