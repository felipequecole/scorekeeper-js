var p1score = 0;
var p2score = 0; 
var nroOfRounds = 5;

var p1button = document.querySelector("#p1"); 
var p2button = document.querySelector("#p2"); 
var resetbutton = document.querySelector("#r");
var rdInput = document.querySelector("#nroRounds");

var isOver = false; 

var p1display = document.querySelector("#p1score");
var p2display = document.querySelector("#p2score");
var wscore = document.querySelector("#wscore");

p1button.addEventListener("click", function(){
	if (!isOver){
		p1score++;
		p1display.textContent = p1score;
		if (p1score >= nroOfRounds){
			isOver = true; 
			p1display.classList.add("winner");
			p2display.classList.add("loser");
		}
	}
});

p2button.addEventListener("click", function(){
	if(!isOver) {
		p2score++;
		p2display.textContent = p2score;
		if(p2score >= nroOfRounds){
			isOver = true; 
			p2display.classList.add("winner");
			p1display.classList.add("loser");
		}
	}
});

resetbutton.addEventListener("click", reset);

function reset(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p1display.classList.remove("loser");
	p2display.classList.remove("winner");
	p2display.classList.remove("loser");
	isOver = false; 
}

rdInput.addEventListener("change", function(){
	var newMax = Number(this.value);
	wscore.textContent = newMax; 
	if (newMax < nroOfRounds) {
		reset();
	}
	nroOfRounds = Number(this.value); 		
})
