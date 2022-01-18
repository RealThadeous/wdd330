console.log("Exercise: Minimum")
let min = function(a, b) {
  if (a < b) {
    console.log(a);
  } else if (a > b) {
    console.log(b);
  }
}

min(0, 10);
min(0, -10);

console.log()

console.log("Exercise: Recursion")

console.log()

console.log("Exercise: Bean Counting")

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("GGG", "G"))
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
