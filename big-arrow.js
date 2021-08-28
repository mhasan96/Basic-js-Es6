const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

// multi with arrow

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(22, 90, 5);
console.log(result);

// arrow with no parameters

const getName = () => "Brandon Sam";
const names = getName();
console.log(names);

// Math operation

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const output = result * 5;
  return output;
};

const total = doMath(12, 5);
console.log(total);
