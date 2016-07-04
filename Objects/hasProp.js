//Write a function that checks if a given object contains a given property.
var hasProperty = function(obj,b){
	
		if(obj.hasOwnProperty(b)){
				console.log('true');
				
			} else{
				console.log('false');
			}
		
	
};

var car = {
	brand:'Opel',
	model:'Insignia',
	color:'Gray'
};

hasProperty(car,'model');

