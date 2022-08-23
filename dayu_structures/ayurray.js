/* Data types in JS

PRIMITIVES
- Strings
- Numbers
- Boolean
- null
- undefined 

COMPLEX
- Array [1,2,3] || ["Bob", "Vic", 5] 
- Object const vic = { age: 30, favoriteFood: "pizza" }  

[0] Jane, 
[1] Blob,
[2] Kiki,
[3] Lammy,
[4] Urgu,

QUEUE
Shape of a queue:
- It's a list where elements are in order.

Operations of a queue:
- Add new elements to the end.
- Remove elements from the beginning.

A data structure is defined by the shape AND the operations that you can perform on its data.
*/

// const queue = ["Jane", "Blob", "Kiki", "Lammy", "Urgu"];

// Operations
// queue.shift(); // allowed
// queue.push("Jomo"); // allowed
// queue.pop(); // NOT allowed
// queue.unshift(); // NOT allowed

// Is an array in JavaScript a queue?
// NO

// console.log(queue);

// In JS, everything is an object.
// Arrays are objects too.
// So you can visualize an array like this:
// { length: 8, shift: () => {}, push, pop, unshift... }

const Ayurray = {
  length: 0,
  push: (element) => {
    Ayurray[Ayurray.length] = element;
    Ayurray.length++;
  },
  shift: () => {
    // look for the first element
    // then replace it with nothing (same as removing it)
    Ayurray[0] = undefined;
  },
};

Ayurray.push("Leo");
console.log(Ayurray[0]);
Ayurray.push("Ayu");
console.log(Ayurray[1]);
Ayurray.shift();
console.log(Ayurray);
