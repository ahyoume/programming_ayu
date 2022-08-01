function reverseString(str) {
  let result = "";
  for (let idx = 0; idx < str.length; idx++) {
    const lastIndex = str.length - 1;
    result += str[lastIndex - idx];
  }
  return result;
};
console.log(reverseString("COFFEE"));

