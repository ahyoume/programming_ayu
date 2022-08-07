const width = 80;
const height = 40;

for (i = 0; i < height; i++) {
  let line = "";
  for (j = 0; j < width; j++) {
    if (j === width / 2) line += "#";
    else if (j > (width / 2) + i) line += " ";
    else if (j < (width / 2) - i) line += " ";
    else line += "#";
 }
console.log(line);
}
