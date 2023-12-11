function book(flightNum, name) {
    console.log(`${name} booked with ${this.airline} as ${this.iataCode+flightNum}`)
    this.bookings.push({name: name, flightNum: this.iataCode+flightNum})
};

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
};


book.call(lufthansa, 123, 'houssam');
console.log(lufthansa.bookings)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};


//- Call method
//* since book functions is store in book variable
//* the this keyword wont have anything to refer to 
//* so we need a method to refer = call method

book.call(eurowings, 23, 'Sara');

//- Apply method
//* instead of taking multiple arguments, it takes an array of arguments in it
//! Not used anymore - you can use call method with spread operator

const flightData = [123, 'Asmae'];
book.apply(eurowings, flightData);
console.log(eurowings.bookings)

book.call(eurowings, ...flightData);

//- BIND method
//* creating a book method specific for an object

const bookEW = book.bind(eurowings);
bookEW(1337, 'youness')
console.log(eurowings.bookings)

const bookEW1337 = book.bind(eurowings, 1337);
bookEW1337('jhonas')
console.log(eurowings.bookings)