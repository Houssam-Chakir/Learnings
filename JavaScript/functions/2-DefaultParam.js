const booking = function (flightNumber = 0, seat = 1, duration = 8, {firstName, lastName}) {
    
    const bookingInfo = {
        flightNumber,
        seat,
        duration,
        passenger: {firstName, lastName}
    };
    console.log(bookingInfo);
};

booking(1337, 64, 8, {firstName: "Houssam", lastName: "Chakir"});