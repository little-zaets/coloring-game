let canvas = document.getElementById("canvas");
let colors = ["red", "darkgoldenrod", "orange", "yellow", "greenyellow", "lightgreen", "green", "aquamarine", "aqua", "lightskyblue", "steelblue", "blue", "darkblue", "indigo", "darkmagenta", "violet", "lightpink", "lightgrey", "dimgrey", "black", "white"];
let palette = document.getElementById("palette");
let pick = null;
let drawing = false;
let clear = document.getElementById("clear");
//Create grid canvas
function createCanvas() {
	for (let i = 0; i < (60 * 24); ++i) {
		let gridBox = document.createElement("div");
		gridBox.setAttribute("id", "gridBox");
		gridBox.setAttribute("class", "gridBox");
		gridBox.style.backgroundColor = "white";
		gridBox.style.border = "1px solid slategray";
		gridBox.addEventListener("mousedown", function () {
			drawing = true;
		});
		gridBox.addEventListener("mouseup", function () {
			drawing = false;
		});
		gridBox.addEventListener("mouseover", function () {
			if (drawing && pick) {
				gridBox.style.backgroundColor = pick;
			}
		});
		canvas.appendChild(gridBox);
	}
}
createCanvas();
clear.addEventListener("click", function () {
	pick = null;
	let gridArea = document.getElementsByClassName("gridBox");
	for (let box of gridBox) {
		box.style.backgroundColor = "white";
	}
});
//Create array of colors
function createColors() {
	for (let color of colors) {
		let box = document.createElement("div");
		box.setAttribute("id", "box");
		box.style.backgroundColor = color;
		box.style.border = "1px solid black";
		box.addEventListener("click", function () {
			pick = color;
		});
		palette.appendChild(box);
	}
}
createColors();

