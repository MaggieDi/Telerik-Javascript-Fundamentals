//Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

var example = 'Otto abba lamal are palindromes';
 

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

 console.log('Palindromes in this text are: ' + palindromes.replace(/[,]$/g, '. '));
}
  

palindrome(example);
