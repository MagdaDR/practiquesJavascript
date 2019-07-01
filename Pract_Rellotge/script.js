const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// vars on hi tindrem els graus,
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;



function runTheCLock(){

	// Per evitar que les manetes tornin enrrera a l'arribar a zero
	hrPosition = hrPosition + (3/360); // 30/3600
	minPosition = minPosition + (6/60);
	secPosition =secPosition + 6;
	
	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotatse(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
	}	

// ejecuta el rellotge cada 1000 milisegons -> 1 segón
var interval = setInterval(runTheCLock, 1000);