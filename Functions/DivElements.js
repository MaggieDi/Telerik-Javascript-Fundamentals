// Write a function to count the number of div elements on the web page
function divElements(type){
	var divCount = document.getElementsByTagName(type).length;
	alert('Number of div elements on this page is: ' + (divCount));
	

}
divElements('div');