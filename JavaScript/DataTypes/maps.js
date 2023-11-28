//MAPS
// data structer to map values to keys

const aMap = new Map();
aMap.set(true, "the key is a boolean").set(false, "this one is false");
console.log(aMap);
// Map(2) { true => 'the key is a boolean', false => 'this one is false' }

const qna = new Map([
  ["question", "what is th best programming language in the world"],
  [1, "Ruby"],
  [2, "Java"],
  [3, "Javascript"],
]);

console.log(qna);
// Map(4) {
//  'question' => 'what is th best programming language in the world',
//  1 => 'Ruby',
//  2 => 'Java',
//  3 => 'Javascript'
//}

for(const [key, value] of qna) {
    console.log(`the key (${key}) has the value ${value}.`)
}
// the key (question) has the value what is th best programming language in the world.
// the key (1) has the value Ruby.
// the key (2) has the value Java.
// the key (3) has the value Javascript.