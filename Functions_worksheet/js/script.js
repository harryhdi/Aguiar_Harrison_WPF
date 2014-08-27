/*
Harrison Aguiar
WPF 1408 Section 01
Function Workshhet
8-26-14
*/

//Problem: Calculate the area of a rectangle given the width and height of the rectangle.

//Calculate the Area of a Rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The Area of the Rectangle is " + area);

function calculateArea(w, h )
{
     return w *h;
}

/*-------------------------------------------------------*/

//Circumference

//Calculate the circumference of a circle.

/*
Parameter(s) for function:
	Radius of the circle
Return:
	Circumference of the circle
Result to print to the console:
	“The circumference of the circle is X”;*/

var radius = 5;
var cicleCircumference = calculateCircumference(radius);
console.log("The circumference of the circle is " +cicleCircumference);

function calculateCircumference(r){
	return 2 * Math.PI * r;
}




/*-------------------------------------------------------*/

//Stung!

/*
It takes 8.666666667 bee stings per pound to kill an animal. 
//Calculate how many bee stings are needed to kill an animal in a function

Given:
	Victim’s weight (in pounds)     
Parameter(s) for function:
	Victim’s weight (in pounds)
Return:
	Number of Bee stings
Result to print to the console:
	“It takes X bee stings to kill this animal.*/


var victimWeight = 153; //Victim’s weight in pounds
var beeStings = 8.666666667; //bee stings per pound to kill an animal
var totalBeeStings = calculateBeeStings(victimWeight, beeStings)//invoking
console.log("It takes " +totalBeeStings+ " bee stings to kill this animal.")//print out result

function calculateBeeStings(v, b){//defining
	return v * b;//return
}

