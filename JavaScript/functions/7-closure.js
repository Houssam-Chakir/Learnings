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

//- without returning a function

let x;

const yyyy = function() {
    const a = 2;
    x = function() {
        console.log(a * 2);
    };
};

yyyy(); // after yyyy is executed, the a variable should be gone
// but because of asigning a function to x, it now has access to the environment variables (the a variable in this case)
x(); // 4
// will have it in closure of an object we can find using console.dir(x)

// changing an h1 color from red to blue after a click

(function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click', function() {header.style.color = 'blue'});
})();

// notice that this function is only executed once.
// even though after thqt we could still access the header variable and change the color
// because the function created a closure giving access to the fucntion variables even when they should be destroyed already
