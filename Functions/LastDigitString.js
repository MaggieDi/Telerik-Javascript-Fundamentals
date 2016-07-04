//Write a function that returns the last digit of given integer as an English word.
var n,
	m;
function digitString(n){
	m =n%10;
	//console.log(m);
	switch(m){
		case 0:
		m ='Zero';
		break;
		case 1:
		m ='One';
		break;
		case 2:
		m ='Two';
		break;
		case 3:
		m ='Three';
		break;
		case 4:
		m ='Four';
		break;
		case 5:
		m ='Five';
		break;
		case 6:
		m ='Six';
		break;
		case 7:
		m ='Seven';
		break;
		case 8:
		m ='Eight';
		break;
		case 9:
		m ='Nine';
		break;
	}
}
digitString(4,5165);
console.log(m);