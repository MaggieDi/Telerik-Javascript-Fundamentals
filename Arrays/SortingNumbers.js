//Write a script to sort an array.
//Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
var arr =[91,28,59,60,30,18,4,7,6,15],
	i,
	j,
	l,
	temp;
for (i = 0, l=arr.length; i < l; i += 1) {

    for (j = i + 1, l=arr.length; j < l; j += 1) {

        if (arr[i] > arr[j]) 
        {
            temp = arr[i];
           
            arr[i] = arr[j];
            
            arr[j] = temp;
            
        }
       
    }
}

console.log('Sorted array is ' + arr.join(', '));

