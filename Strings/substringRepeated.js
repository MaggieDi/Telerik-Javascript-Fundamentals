//Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).

var example = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
function findSubstr(text,substring){
	var count =0,
		lowCaseText = text.toLowerCase();
		occ = lowCaseText.indexOf(substring);
		while(occ!== -1){
			count +=1;
			occ = lowCaseText.indexOf(substring, occ+1);
		}
	console.log('Substring ' + '\''+substring +'\'' + ' is repeated '+ count + ' times.');
}
	findSubstr(example,'we');
