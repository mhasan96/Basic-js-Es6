const numbers = [23, 35, 65, 99, 21, 44];
console.log(numbers);
//array extract kore number ber kora
console.log(...numbers);

const maxInArray = Math.max(...numbers);
console.log(maxInArray);

function getSum(a, b = 9) {
  return a + b;
}
console.log(getSum(2, 7));

const y = (x) => x * x;
const x = y(5);
console.log(x);

const getName = () => console.log("Brandon Sam");
const division = (num1, num2) => console.log(num1 / num2);
