//Write a script that finds the maximal increasing sequence of equal elements in an array.
	var arr = [3, 1, 2, 3, 4, 2, 2, 4, 1, 2, 3,5,6],
		  temp = [],
		  result = [];

	for(var i =0, n =arr.length; n >= i; i+=1){

   	if (arr[i] < arr[i+1] || (arr[i] > arr[i-1] && i == n-1)){
      temp.push(arr[i]);

    } else if (arr[i] > arr[i+1]){
      temp = [];
   	}
    
    if(result.length < temp.length){
      result = temp;
    }
}
console.log(result);
