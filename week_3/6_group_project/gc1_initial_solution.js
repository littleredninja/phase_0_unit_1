// My role in the group is: Pseudocode into Code

// Here is my part of the challenge:

var sum = function(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		result += array[i];
		}
		return result;
}

var mean = function(array) {
	var sum = 0
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
		var result = sum / array.length; 
		}
		return result;
}

var median = function(array) {
	var half = (array.length / 2);
	array.sort(function(a, b) {
		return a-b});
	if (array.length % 2 === 0) {
	  var result = (array[half - 1] + array[half])/2;
	  return result;
	  }else {
	  return array[half - .5];
	  }
}
