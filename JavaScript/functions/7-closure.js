//* this will note save the updated value because i blieve it doesnt access closures

const addCount2 = function() {
  let count = 0;
  count++;
  console.log(count);
};

addCount2(); // 1
addCount2(); // 1

//* the variable has access to the variable environment of the function birthplace (not sure exacttly how it works but i have an idea)

const addCount = function() {
  let counter = 0;
  return function () {
      counter++;
      console.log(counter);
  }
};

const caller = addCount();
caller(); // 1
caller(); // 2

console.dir(caller) // it will contain a closure object containing the updated count variable
