//Old Style to handle function if 1 parameter is missing.
function add(num1, num2 = 0) {
  // es6 rules
  //Option-1 >Old Style to handle function if 1 parameter is missing.
  //   if (num2 == undefined) {
  //     num2 = 0;
  //   }
  //Option 2
  // num2 = num2||0;
  const total = num1 + num2;
  return total;
}
const result = add(15);
console.log(result);
