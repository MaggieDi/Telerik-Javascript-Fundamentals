// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation

var num=169,
	hundreds = Math.floor(num/100),
	tens = Math.floor(num/10)%10;
	digits = num%10,
	special = 10 + digits,
	hundredsText = '',
    tensText = '',
	digitsText = '';
	switch (hundreds) {
        case 1:
            hundredsText = 'one hundred';
            break;
        case 2:
            hundredsText = 'two hundred';
            break;
        case 3:
            hundredsText = 'three hundred';
            break;
        case 4:
            hundredsText = 'four hundred';
            break;
        case 5:
            hundredsText = 'five hundred';
            break;
        case 6:
            hundredsText = 'six hundred';
            break;
        case 7:
            hundredsText = 'seven hundred';
            break;
        case 8:
            hundredsText = 'eight hundred';
            break;
        case 9:
            hundredsText = 'nine hundred';
            break;
        case 0:
            hundredsText = '';
            break;
    }
    

    switch (tens) {
        case 1:
            tensText = 'ten';
            break;
        case 2:
            tensText = 'twenty';
            break;
        case 3:
            tensText = 'thirty';
            break;
        case 4:
            tensText = 'forty';
            break;
        case 5:
            tensText = 'fifty';
            break;
        case 6:
            tensText = 'sixty';
            break;
        case 7:
            tensText = 'seventy';
            break;
        case 8:
            tensText = 'eighty';
            break;
        case 9:
            tensText = 'ninety';
            break;
        case 0:
            tensText = '';
            break;
    }

    switch (digits) {
        case 1:
            digitsText = 'one';
            break;
        case 2:
            digitsText = 'two';
            break;
        case 3:
            digitsText = 'three';
            break;
        case 4:
            digitsText = 'four';
            break;
        case 5:
            digitsText = 'five';
            break;
        case 6:
            digitsText = 'six';
            break;
        case 7:
            digitsText = 'seven';
            break;
        case 8:
            digitsText = 'eight';
            break;
        case 9:
            digitsText = 'nine';
            break;
        default:
            digitsText = '';
            break;
}
 switch (special) {
        case 11:
            specialText = "eleven";
            break;
        case 12:
            specialText = "twelve";
            break;
        case 13:
            specialText = "thirteen";
            break;
        case 14:
            specialText = "fourteen";
            break;
        case 15:
            specialText = "fifteen";
            break;
        case 16:
            specialText = "sixteen";
            break;
        case 17:
            specialText = "seventeen";
            break;
        case 18:
            specialText = "eighteen";
            break;
        case 19:
            specialText = "nineteen";
            break;
}
if (hundreds!==0 || hundreds!==0 && digits!==0 ) {
	console.log( hundredsText + ' and ' + tensText + ' ' + digitsText);
} else if(hundreds!==0  && (!(digits)) ){
	console.log( hundredsText + ' and ' + tensText);
} else if (!(hundreds ) && tens!==0 && digits===0) {
	console.log(tensText );
}  else if (!(hundreds) && tens!==0 && tens!==1 && digits!==0) {
	console.log(tensText + '-' + digitsText);
} else if (!(hundreds) && tens && special!==0) {
	console.log(specialText);
} else {
	console.log(digitsText);
}