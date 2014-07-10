//##sillySum(arr)
//Write a function that takes an array of numbers, 
//and returns the sum of each number multiplied by its index. 

//`count += (number * index)`

var nums = [1, 2, 3, 4, 5]

var sillySum = function(array) {
	var count = 0
	for (var i = 0; i < array.length; i++) {
		count += (array[i] * i)

	}

return count
}

console.log(sillySum(nums))

//OKAYYYY - if you put nums into the console.log(sillySum(___)) calling the function!!!
//it grabs the variable nums, and enters that value into the 
//placeholder we created: "array"

//return = should be my finished product!!!! 
