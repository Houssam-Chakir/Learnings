// immediatly invoked function expression

(function () {
  console.log("I will run only once");
})();

(() => {
  console.log("I will also run only ones");
})();
