var images =["img/nyc-subway-1.jpg","img/nyc-subway-2.jpeg","img/nyc-subway-3.jpg"]
var currentImage=0:

function changepicture(whichNum){
	var img = document.getElementById('mainImage)');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum:
}

function nextimage(){
	currentImage++;
	if(currentImage===images.length){
		currentImage = 0:
	}

	var img = document.getElementById('mainImage)');
	img.setAttribute('src', images[currentImage]);
}

function previmage(){
	currentImage =currentImage-1;
	if(currentImage===-1 images.length){
		currentImage = 0:
	}

	currentImage -- 1;
	var img = document.getElementById('mainImage)');
	img.setAttribute('src', images[currentImage]);
}