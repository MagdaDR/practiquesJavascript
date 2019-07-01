function bigImg(x) {                
	x.style.height = "1.5em";
	x.style.width = "1.5em";
	x.style.color = "#fee327";

}

function normalImg(x) {
	x.style.height = "1.1em";
	x.style.width = "1.1em";
	x.style.color = "#fde74c";
}

function desmarcarStars() {
	
	for (var i=1; i<=5; i++) {
		/* document.getElementById("star" +i).classList.remove("starMarcada"); */
		document.getElementById("star" +i).classList.remove("fas"); // data-frefix = fas , solid star - omplerta
		document.getElementById("star" +i).classList.add("far");	// data-frefix = far , normal star
	}
}

function addStars(numStar) {	

	desmarcarStars();
	for(var i=1; i<=numStar; i++) {
		/* document.getElementById("star" + i).classList.add("starMarcada"); */
		document.getElementById("star" +i).classList.remove("far");	// data-frefix = far , normal star
		document.getElementById("star" +i).classList.add("fas");	// data-frefix = fas , solid star
	}
}

window.addEventListener("click", function(e) { //on faig el click?

	if(document.getElementById("starList").contains(e.target)) { //si el click NO està en alguna de les estrelles, netejar tot
	    desmarcarStars();
	}
})


