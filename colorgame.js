var numofsquare=6;
var colors=[]; 
var h1=document.querySelector("h1");

var squares=document.querySelectorAll(".square");
var pickedColor;
var colorDisplay=document.getElementById("colorDisplay");
var resetButtom=document.querySelector("#reset");
// var easybtn=document.querySelector("#easybtn");
// var hardbtn=document.querySelector("#hardbtn");
var modebuttoms=document.querySelectorAll(".mode");
var messageDisplay=document.querySelector("#message");
init();
function init(){
	setupmodeButton();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener("click",function(){
			var clickedcolor=this.style.backgroundColor;
			if(clickedcolor===pickedColor){
				messageDisplay.textContent="Correct";
				resetButtom.textContent="Play Again";
				changeColors(clickedcolor);
				h1.style.backgroundColor=clickedcolor;
			}else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="try Again";
			}

		})
	}
}
function setupmodeButton(){
	for(var i=0;i<modebuttoms.length;i++){
		modebuttoms[i].addEventListener("click",function(){
			modebuttoms[0].classList.remove("selected");
			modebuttoms[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"?numofsquare=3:numofsquare=6;
			reset();
		});
	}
}
function reset(){
	colors=generateRandomColors(numofsquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButtom.textContent="New Colors";
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}else{
			squares[i].style.display="none";
		}
		
	
	}
	h1.style.backgroundColor="steelblue";
}

resetButtom.addEventListener("click",function(){
	reset();
})
colorDisplay.textContent=pickedColor;



function changeColors(color){

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";

}