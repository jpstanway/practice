import myCurrentLocation, { getGreeting, message, name } from "./myModule";
import add, { subtract } from "./math";

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting("Jessica"));

console.log(add(5, 3));
console.log(subtract(999, 333));
