//Write a function that extracts the content of a html page given as text.
//The function should return anything that is in a tag, without the tags.
var example = '';
var dom = document.body.innerHTML;
example += dom;

function extractHtml(text){
	console.log(text.replace(/<\/*[a-z]*>|<*[a-z]*[\W][a-z]*="[^\>]*"*>/g, ' '));
}
extractHtml(example);