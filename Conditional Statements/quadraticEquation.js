var a = -0.5,
b = 4,
c = -8,
d = b*b-4*a*c;

if(d > 0){
	console.log('First root is: ' + (-b + Math.sqrt(d)) / (2 * a));
	console.log('Second root is: ' + (-b - Math.sqrt(d)) / (2 * a));
} else if(!d){
	console.log('Root is: ' + (-b/2*a));
} else{
	console.log('No real roots.');
}   