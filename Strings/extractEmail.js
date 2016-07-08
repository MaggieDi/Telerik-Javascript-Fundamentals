//Write a function that extracts the content of a html page given as text.
//The function should return anything that is in a tag, without the tags.

var example = 'hello @du.de cheer up {no no} nick@yahoo.com opac@gmail.com gra[gra@] will@a som@e! real@mail.com';
function extractEmail(text){
	var realEmail = /[a-zA-Z0-9_-]+@[a-z]+[.][a-z]*/g,
		result = text.match(realEmail);
	console.log(result);
}
extractEmail(example);