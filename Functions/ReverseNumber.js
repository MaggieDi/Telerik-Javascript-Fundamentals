//Write a function that reverses the digits of given decimal number.

var num,
    result;
function  reverseNum(num){
    if(num){
		num = num.toString();
		num = num.split("").reverse().join("");
		result=num;
		console.log(result);
	}else if(isNaN){
		console.log('Invalid number');
	} 

}
 reverseNum(159.12);
