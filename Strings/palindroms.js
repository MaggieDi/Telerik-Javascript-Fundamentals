

 var example = 'Otto abba lamal are palindromes';
 /*textLowerCase = text.toLowerCase(text);
 var splitText = textLowerCase.split(" ");
 console.log(splitText);

 var palindromes = '',
 reversed = '',
 result =' ',
 i,
 l,
 j;
 for(i=0,l=splitText.length;i<=l;i+=1){
  palindromes += splitText[i];
// console.log(palindromes);
  for(j=palindromes.length -1;j>=0;j-=1){
  reversed += palindromes.charAt(j);
}
//console.log(reversed);
if(palindromes===reversed){
    result += palindromes;
    result += ', ';
    palindromes ='';
    reversed ='';
   //console.log(result);
} else{
  palindromes ='';
    reversed ='';
}
 }
//console.log(result.replace(/, /g,"."));
console.log('Palindromes are:' + result.replace(/,/g,".")); */

function palindrome(text){
  textLowerCase = text.toLowerCase(text);
  splitText = textLowerCase.split(" ");
  var palindromes = '',
      reversed = '',
      temp ='',
      i,
      l,
      j;
 for(i=0,l=splitText.length;i<l;i+=1){
      temp += splitText[i];
  for(j=temp.length-1;j>=0;j-=1){
      reversed += temp.charAt(j);
   }
  if (temp==reversed) {
      palindromes += temp;
      palindromes += ',';
      temp = '';
      reversed = '';
  } else {
      temp = '';
      reversed = '';
    }
 }

 console.log('Palindromes in this text are: ' + palindromes.replace(/[,]$/g, '.'));
}
  

palindrome(example);
