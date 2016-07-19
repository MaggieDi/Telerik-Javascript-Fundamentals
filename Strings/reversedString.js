// Write a JavaScript function that reverses a string and returns it

var text = 'genesis';
function reversed(word){
	var i,
	result ='';
 for(i = word.length -1;i >= 0;i-=1){
 	
	result += word.charAt(i);
	}
	console.log(result);
}
reversed(text);
