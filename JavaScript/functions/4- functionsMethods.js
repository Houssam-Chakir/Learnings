const lufthansa = {
    name: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked with ${this.name} as ${this.iataCode+flightNum}`)
        this.bookings.push({name: name, flightNum: flightNum})
    },
};

lufthansa.book(23, 'Houssam');
console.log(lufthansa.bookings);

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//* since book functions is store in book variable
//* the this keyword wont have anything to refer to 
//* so we need a method to refer = call method

book.call(eurowings, 23, 'Sara');