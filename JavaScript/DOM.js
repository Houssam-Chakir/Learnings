//: DOM //////////////////////////////////////////
// ? always starts with the document object, for example thats why we use:
// ? document.querySelector(); its a method in document object for sleceting
// - DOM is part of WEB APIs //////////////////////////////////////////////

//: WEB APIs//////////////////////////////////////
// ? they are like libraries provided by the browsers for use
// ? and can be accessed by JavaScript

// - QUERY SELECTOR EXAMPLES //////////////////////////////
// to select an element by class and extract its text content
// add = to set desired text content
//! only selects the first match
// value of selected query
document.querySelector(".input").value = 1337;

document.querySelectorAll(".message").textContent = "Hello World";
// ! to selecet all use: querySelectorAll

// - EVENTS LISTENERS EXAMPLES ////////////////////////////

// TODO  select element > listen to event (type of event, a function with code desire to execute).
document.querySelector(".button").addEventListener("click", function () {
  console.log("button is clicked!");
});

//* Listening to a keypress
// keypresses are global events so we need to listen to them on the whole document

document.addEventListener("keyup",function(event) {
  // the event argument will contain all information about the recorded event
  // such as the pressed key
  console.log(event);
})