//Write a function that finds all the occurrences of word in a text.
var text ='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry unchanged. ';

function MyFunction(text,word){
 	var wordCount=0,
 		i,
	 	l;
	words = text.split(" ");
	for(i=0,l=words.length;i<=l;i+=1){
  		if(word==words[i]){
	 	wordCount+=1;
   		}

 	}
 	console.log(wordCount);
 
}

MyFunction(text,'Ipsum');

