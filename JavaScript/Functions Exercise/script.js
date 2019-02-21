//Determine whether a number is even (works)
//function isEven(number) {
//  if ((number % 2) != 0) {
//    return false;
//  }
//  else {
//    return true;
//  }
//}

//Evaluate whether number is even. More efficient to use evaluation
function isEven(number) {
  return number % 2 === 0;
}

//Find the factorial of given number
function factorial(number) {
  var result = 1;
  //i starts as 2 (since multiplying by 1 is redundant), for each time i = less than the number, increment i by 1
  for (var i = 2; i <= number; i++){
    result = result * i;
  }
  return result;
}

//factorial(4) = 4 x 3 x 2 x 1

//Replace hyphens with underscores (works)
function kebabToSnake(str) {
  output = str.replace("-", "_");
  return output;
}
