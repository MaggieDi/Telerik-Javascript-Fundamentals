//Write a function that extracts the content of a html page given as text.
//The function should return anything that is in a tag, without the tags.
var example = '';
var dom = document.body.innerHTML;
example += dom;

function extractHtml(text){
	var rep = text.replace(/<\/*[a-z][a-z]*>/g, ' ');
	console.log(rep.replace(/<[a-z]* [a-z]*="[a-zA-z]*.[a-z]*">/g, ' '));
}
extractHtml(example);