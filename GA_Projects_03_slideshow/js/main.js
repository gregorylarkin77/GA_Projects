images = ["img/nyc-subway-1.jpg","img/nyc-subway-2.jpeg","img/nyc-subway-3.jpg"];

var currentimage=0;

function changepicture(whichnum){
	var img=document.getElementById('mainImage');
	img.setAttribute('src',images[whichnum]);

	currentimage=whichnum;
}

function setimage() {
	var img=document.getElementById('mainImage');
	img.setAttribute('src',images[currentimage]);
}

function nextimage(){
	currentimage++;
	if (currentimage=== images.length) {
	currentimage =0;
	}

setimage();
}

function previmage(){
	currentimage=currentimage-1;
	if(currentimage== -1){
			currentimage=images.length-1;
	}

	setimage();

}