

Array.prototype.remove = function(value){
	var i,
		l;
		for(i=0,l=this.length;i<=l;i+=1){
			if(this[i]===value){
				this.splice(i,1);
			} 
			
		}
};

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
	arr.remove(1);
console.log(arr);