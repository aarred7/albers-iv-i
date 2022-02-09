
let clrs = [
'#FFB6C1', //top 0
'#DC143C', //middle top 1
'#CD5C5C', //middle strip 2
'#AFEEEE', //middle bottom 3
'#00FF7F' //bottom 4
]


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
 background(220);
 canvasRect(clrs[4], height/2, height/2, false);
 canvasRect(clrs[0], height/2, 0, false);
 fill(clrs[2]); 
 rect(width * 1/3, height * 1/6, width * 1/3, height * 2/3); 
 canvasRect(clrs[1], height/6, height/3, true);
 canvasRect(clrs[3], height/6, height/2, true);


}

function canvasRect(clr, hgt, y_offset, clickable) {
	fill(clr);
	if((clickable == true) && (mouseIsPressed == false)){
		rect(0, y_offset, width, hgt);
	} 
	if(clickable == false){
		rect(0, y_offset, width, hgt);
	}
}
