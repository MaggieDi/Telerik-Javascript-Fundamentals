// Write a script that finds the max and min number from a sequence of numbers.

var sequence = [50,80,90,150,61,5,8],
	result,
	lastValue ,
	maxNumber,
	minNumber;

for(prop in sequence){
	
   result=sequence.sort(function(a,b){return b-a});
   lastValue = (result.length)-1,
   maxNumber = result[0];
   minNumber = result[lastValue];
} console.log('Max number is: '+ maxNumber + ' and ' + 'min number is: ' + minNumber + '.');
