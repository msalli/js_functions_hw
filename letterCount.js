//##letterCount(word)

//Write a function that takes a string that finds out 
//how many times a character occurs.  For example, 
//the string "apple" would print the following:
/*
```
a - 1
p - 2
l - 1
e - 1
```
*/

//__BONUS__: Make sure that lower case letters and upper case letters 
//count for the same character.  Also, ignore spaces and punctuation.



var word = "bubble";
var countArr = []


var letterCount = function(x) {
	var string = x.toLowerCase();
    var count = 0

	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === string.charAt(i++)) {
		  count++;
		  countArr.push(string.charAt(i) + "  -  " + count)
	    };
	}

return countArr
}

console.log(letterCount(word))




