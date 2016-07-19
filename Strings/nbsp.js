//Write a function that replaces non breaking white-spaces in a text with &nbsp.


var example = 'The text is as follows: We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
function replaceNbsp(text, value){
	var pattern = / /g;
	
	console.log(text.replace(pattern, value));

}

replaceNbsp(example,'&nbsp');