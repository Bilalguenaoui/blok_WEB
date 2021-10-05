// JavaScript Document
var deEersteNavButton = document.querySelector("nav>ul li:nth-of-type(2) button");

deEersteNavButton.addEventListener("click", toggleEersteMenu);

function toggleEersteMenu() {
	var hetEersteMenu = document.querySelector("nav>ul li:nth-of-type(2) ul");
	
	hetEersteMenu.classList.toggle("hidden");
}


var deTweedeNavButton = document.querySelector("nav>ul li:nth-of-type(3) button");

deTweedeNavButton.addEventListener("click", toggleTweedeMenu);

function toggleTweedeMenu() {
	var hetTweedeMenu = document.querySelector("nav>ul li:nth-of-type(3) ul");
	
	hetTweedeMenu.classList.toggle("hidden");

}


var deDerdeNavButton = document.querySelector("nav>ul li:nth-of-type(4) button");

deDerdeNavButton.addEventListener("click", toggleDerdeMenu);

function toggleDerdeMenu() {
	var hetDerdeMenu = document.querySelector("nav>ul li:nth-of-type(4) ul");
	
	hetDerdeMenu.classList.toggle("hidden");

}