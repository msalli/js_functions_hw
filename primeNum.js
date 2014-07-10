
// ##isPrime(num)
// Create a function to return `true` or `false` if a number 
// passed in a prime number.


var primeNum = function(xyz) {
  var output = []

  if (xyz % 2 === 0 ) {
  	console.log("This number is a composite: " + xyz);
  }

  else {
  	output.push(xyz);
  	console.log("This number is prime!")
  }

  // else (xyz  = SQuARE) {
  // 	false

return output

}

console.log(primeNum(100))