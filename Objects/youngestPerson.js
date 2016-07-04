










var people = [
	{firstname:'Dragoliub', lastname:'Stoqnov',age:18},
	{firstname:'Dimitar', lastname:'Proletarov',age:20},
	{firstname:'Liubomir', lastname:'Chardonov',age:40},
	{firstname:'Petar', lastname:'Izmirliev;',age:10}
];
//console.log(people);
var myMan;
var min = Number.MAX_VALUE;

for(var human in people ){

if(min > people[human].age){
	min = people[human].age;
	myMan = human;
}
}

console.log(people[myMan].firstname +' '+ people[myMan].lastname);