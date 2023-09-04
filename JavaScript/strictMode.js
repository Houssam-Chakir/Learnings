//: Strict mode
//* to activate strict mode use: "use strict";
//? use the string in the first line of the code
//- it helps with avoiding accidental errors and bugs
//- it will show use things tha faild that ususal it will ignore and make errors more visible
"use strict";

let hasDriversLicense = false;
const passedTest = true;

//! Without STRICT MODE the typo error in line 12 would be ignored
//- with STRICT MODE on, the error will be highlited in  the console as undefine variable

if (passedTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

//* Also used for reserved words for future updates

//! this will prompt an error of reserved word
const interface = "dashboard";