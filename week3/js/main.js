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

console.log("Exercise: Create Calculator from Object Methods: this reading")
let calculator = {
  read() {
    this.num1 = +prompt("Enter a first number:" );
    this.num2 = +prompt("Enter a second number:" );
  },
  sum() {
    total = this.num1 + this.num2;
    return total;
  },
  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );