//: NEW data structer introduced: Objects
// Arrays
const houssamArray = [
    "Houssam",
    "Chakir",
    2023 - 1999,
    "Web Developer"
    ["JavaScript", "React", "NextJS", "ThreeJS"]
];
// Objects
const houssam = {
    firstName: "Houssam",
    lastName: "Chakir",
    age: 2023 - 1999,
    goal: "Web developer",
    futurLearnings: ["JavaScript", "React", "NextJS", "ThreeJS"]
};

houssam.firstName; // dot notation
houssam["firstName"]; // brackets notation
//? main difference is that the brackets notation can have expressions

const nameSTR = "Name";
houssam["first" + nameSTR]; // houssam["firstName"]
// also for variables
const goalKey = "goal";
houssam[goalKey]; //! houssam.goalkey wont work in this case, give undifined

// adding
houssam.bike = "NHT200";
houssam["bikeBrand"] = "SYM";