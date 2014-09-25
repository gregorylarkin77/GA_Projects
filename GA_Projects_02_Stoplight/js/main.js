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