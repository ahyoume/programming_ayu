/* 

ALGORITHMS

Algorithms are just sets of instructions to perform a task.
A simple example, is a cooking recipe, or sorting a list.

Algortithm to make a pizza

1. Call Domino's pizza
2. Order a pizza
3. Tell your friends you made the pizza

Given a list [2,3,1], create an algorithm to sort it from lowest to highest (ascending)
PSEUDOCODE: Fake code that seems like plain English

Goal: sort a unordered list with 1,2,3 in ascending order.


*/

const unsortedList = [2, 3, 1];

// 1. Grab the 1 and put it in in a different location than the list

const differentLocation = [];

for (i = 0; i < 3; i++) {
  if (unsortedList[i] === 1) {
    differentLocation.push(unsortedList[i]);
  }
}

// 2. Grab the 2 and put it to the right side of number 1.

for (i = 0; i < 3; i++) {
  if (unsortedList[i] === 2) {
    differentLocation.push(unsortedList[i]);
  }
}

// 3. Grab the 3 and put it to the right side of nummber 2.

for (i = 0; i < 3; i++) {
  if (unsortedList[i] === 3) {
    differentLocation.push(unsortedList[i]);
  }
}

console.log({ unsortedList, differentLocation });

/* 

Problems with the above approach

- Too much repetition
- This program only works for a list with 1, 2, 3. I should be able to sort ANY list.

Homework: Refactor this code, focusing on the problems above. The second problem might be a bit difficult at your level, but still try. If you don't get it, we will solve it together.

*/
