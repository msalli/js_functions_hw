// ##merge(arr1, arr2)

// Write a function called ```merge```.  
// The function should take two sorted arrays of numbers as input 
// and return a merged array of the sorted numbers from the input.  
// For example, if the input arrays were 
// `var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9];`  
// Then the returned array would be: `[2,3,4,5,6,8,9,11]`.

var array1 = [1, 4, 9]
var array2 = [3, 7]

var merge = function(arr1, arr2) {
	var index1 = 0;
	var index2 = 0;
	var output = [];

	while (index1 < arr1.length && index2 < arr2.length) {
		if (arr1[index1] < arr2[index2]) {
			output.push(arr1[index1]);
			index1++ ;
			}	

		else {
			output.push(arr2[index2]);
			index2++;
			}	
	}

	if (index1 < arr1.length) {
		for (var i = index1; i < arr1.length; i++) {
			output.push(arr1[index1]);
		}
	}

	else	{
		for (var i = index2; i < arr2.length; i++) {
			output.push(arr2[index2]);
		}
	}
 
	return output 
}

console.log(merge(array1, array2))
