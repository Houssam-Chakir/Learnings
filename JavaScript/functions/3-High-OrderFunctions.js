//- CALL BACK FUNCTION

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const transformer = (str, func) => {
  return func(str);
};

console.log(transformer("Hello World", oneWord)); // helloworld

//- FUNCTIONS RETURNING FUNCTIONS

const greeter = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const sayHelloTo = greeter("Hello");

sayHelloTo("Houssam"); // Hello Houssam
greeter("Salam")("Sara"); // Salam Sara
