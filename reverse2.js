
function reverseString(str) {
 let result = "";
 for (let ind = 0; ind < str.length; ind++) {
  const lastIndex = str.length - 1 - ind;
  result += str[lastIndex];
  } return result;
}

console.log(reverseString("AYUMI"));
 
