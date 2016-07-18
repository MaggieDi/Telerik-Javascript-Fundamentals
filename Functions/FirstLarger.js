// Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.


var arr = [11,35,11,11,5],
	i,
	l,
	result;
function myFunction(arr){
	for(i=0,l=arr.length;i<=l;i+=1){
		if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
		result=i;
		console.log('Position of bigger number:' + ' ' + result);
		return result;
		}   
	}
	if (result===undefined) {
		console.log('-1');
	}
}
myFunction(arr);