//Write a function that counts how many times given number appears in given array.
var arr =[4,8, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4,9,9,9, 3],
	i,
	l,
	number,
	result=[];
	


function repeatedNumber(number){
	for(prop in arr){
		if(arr[prop]===number){
			result.push(arr[prop]);	
		} 
	}
	console.log('This number is repeated: '+ result.length + ' times.');
	
}

repeatedNumber(1);

