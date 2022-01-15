console.log("Looping  a Traingle")
let count = "#";
while (count.length <= 7) {
    
    console.log(count);
    count = count += "#";
};

console.log("Fizz Buzz")
for (var i = 1; i <= 100; i++) {
    let name = "";
    if (i % 3 === 0) name += "Fizz";
    if (i % 5 === 0) name += "Buzz";
    console.log(name || i);
    } 

console.log("Chess Board")
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

