//##numSquare(max)
//Create a function called `numSquare` 
//that will return an array of all perfect square numbers up to, 
//but not exceeding a max number.


// var numSquare = function(someArray) {
//   var newArray = []
  
//   for (var i = 0; i < 26; i++) {
//   	if (number === a square number) {
//   		newArray.push(number)
//   	}
//   }

// return newArray
// }

// console.log(numSquare())




var numSquare = function (zzz) {
  var maxNum = 26
  newArray = []
  
  for (var i = 0; i <= maxNum; i++) {
		if (Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
		newArray.push(Math.sqrt(i))
		}
	}
	return newArray
}

console.log(numSquare(100))