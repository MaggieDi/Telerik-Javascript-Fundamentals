	//Write a script that finds the maximal sequence of equal elements in an array.
		var arr =[4, 1, 1,9,4, 2, 3, 4,9 ,4, 1, 2, 4,9,9,9,9, 3],
		i,
		l,
		temp=[],
		result=[];
		arr.sort(function(a, b){return a-b} );
		
		for(i=0,l=arr.length; i<l; i+=1 ) 
	{ 


		if (arr[i]==arr[i+1] ) {
			temp.push(arr[i]);
			    

		} else if (arr[i] == arr[i-1]){
			temp.push(arr[i]);
			
		} 


		if(result.length<temp.length){
			result=temp;
		}
		
		if ((arr[i] != arr[i+1])){
			temp=[]; 
			
		}
	} console.log(result);

