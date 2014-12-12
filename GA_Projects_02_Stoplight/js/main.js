function lightStop() {
	lightsOff();
	buttonsOn();
	document.getElementById('stoplight').style.background = 'rgb(220,20,60)';
	document.getElementById('button-stop').disabled = true;
}

function lightCaution() {
	lightsOff();
	buttonsOn();
	document.getElementById('cautionlight').style.background = 'rgb(255,255,0)';
	document.getElementById('button-caution').disabled = true;
}

function lightGo() {
	lightsOff();
	buttonsOn();
	document.getElementById('golight').style.background = 'rgb(0,139,139)';
	document.getElementById('button-go').disabled = true;
}

function lightsOff() { 
	document.getElementById('stoplight').style.background = 'rgb(25,25,112)';
	document.getElementById('cautionlight').style.background = 'rgb(25,25,112)';
	document.getElementById('golight').style.background = 'rgb(25,25,112)';
}

function buttonsOn() {
	document.getElementById('button-stop').disabled = false;
	document.getElementById('button-caution').disabled = false;
	document.getElementById('button-go').disabled = false;
}



// Very well coded! Functions perfectly. Code is a little redundent though. As a rule of thumb, a function should only have one job. Think of it like a tire-making machine. That machine's only job is to make tires. If your functions have multiple jobs, consider breaking out each job into a seperate function. This will help keep your code readable and maintainable.
// For example, you could write your function like this. (Uncomment the code to see it run. You can uncomment the code by highlighting the chunk and pressing COMMAND + / ).



// function buttonClick(lightToTurnOn){
// 	turnLightsOff();
// 	turnLightOn(lightToTurnOn);
// }

// function turnLightsOff(){
// 	var greenLight = document.getElementById('green');
// 	var yellowLight = document.getElementById('yellow');
// 	var redLight = document.getElementById('red');

// 	greenLight.style.backgroundColor = "black";
// 	yellowLight.style.backgroundColor = "black";
// 	redLight.style.backgroundColor = "black";
// }

// function turnLightOn(lightToTurnOn){
// 	var whichLight = document.getElementById(lightToTurnOn);
// 	whichLight.style.backgroundColor = lightToTurnOn;
// }



// Each function does one specific thing, and the name of our function describes what it does. Our turnLightsOff function can also be expanded to work with multiple traffic lights, and using that function we can display any color we want.

// It's always better not to "hard-code" values into our functions. When we hardcode, our functions become ridgid and can only be used for one specific job. If we keep out functions flexible by giving them parameters that can change based on our function call, then we can re-use our functions in many different situations. If we keep our functions flexible they'll be more helpful, and we'll be writing less code! 


