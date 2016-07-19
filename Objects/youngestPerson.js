
//Write a function that finds the youngest person in a given array of people and prints his/hers full name. 
//Each person has properties firstname, lastname and age.

var people = [
	{firstname:'Dragoliub', lastname:'Stoqnov',age:18},
	{firstname:'Dimitar', lastname:'Proletarov',age:20},
	{firstname:'Liubomir', lastname:'Chardonov',age:40},
	{firstname:'Petar', lastname:'Izmirliev;',age:10}
];

var myMan;
var min = Number.MAX_VALUE;

for(var human in people ){

if(min > people[human].age){
	min = people[human].age;
	myMan = human;
}
}

console.log(people[myMan].firstname +' '+ people[myMan].lastname);