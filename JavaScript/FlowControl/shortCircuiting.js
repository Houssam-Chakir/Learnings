//: OR (||)

//- so the OR (||) operator uses ANY data type, returns ANY
//- If a vlaue is falsy it wont return it and goes for the second value

console.log("" || "Houssam"); // Houssam
console.log(true || 0); // true
console.log(undefined || null); // null

//can also use multiple, so it keeps going until finding the first truthy value
console.log("" || undefined || 0 || null || true); //true

//: AND (&&)

//- works the opposite of or operator

console.log("" && "Houssam"); // ""
console.log(true && 0); // 0
console.log(undefined && null); // undifined

//can also use multiple, so it keeps going until finding the first truthy value
console.log("truthy  value" && 1 && 2 && false && true); //false

if (pizza.available) {
  pizza.order("vegetarian");
}
pizza.available && pizza.order("vegetarian");
//both do the same thing, if pizza is available then it will move to the next part after &&. if false it will return the first one

//: Nullish Coelescing Operator
//only for nullish: null and undefined

console.log(0 || 10); // 10
console.log(0 ?? 10); // 0

//: LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  food: "pizza",
  seats: 30,
  guests: 14,
}
const rest2 = {
  food: "pizza",
  guests: 0,
};

//- [OR] ASSIGNMENT OPERATOR
//instead of
rest2.seats = rest2.seats || 20;
//use
rest2.seats ||= 20; //20, stops at the first truthy value and returns it

//- [??] ASSIGNMENT OPERATOR
rest2.guests ??= 10; //will leave it 0, only effects null and undefiend

//- [&&] ASSIGNMENT OPERATOR
rest2.guests &&= 10; // 0, stops at the first faulsy value and returns it
