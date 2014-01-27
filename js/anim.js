var textArr = [];
var charArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

// Create a centered text item at the center of the view:
var timer = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 30,
	fillColor: 'black'
});

for (var i = 0; i <9 ; i++) {
	textArr[i] = timer.clone();
	textArr[i].content = charArr[i];
	textArr[i].position += i*30;
};

var time = 0;
var count = 0;
timer.position = view.size - 50;
timer.fillColor = 'green';
timer.content = time;

// Define a random point in the view, which we will be moving
// the text item towards.
var destination = Point.random() * view.size;
var active = 0;
var lastActive = 0;
var flag = 0;
var activeText = textArr[active];
activeText.fillColor = 'red';

function onFrame(event) {
	count++;
	if(count == 60) {
		time++;
		count=0;
	}

	activeText = textArr[active];
	activeText.fillColor = 'red';
	activeText.rotate(3, activeText.position);

	var vector = destination - activeText.position;
	activeText.position += vector / 30;

	if (vector.length < 5) {
		destination = Point.random() * view.size;
	}

	timer.content = time;
	timer.fillColor.hue += 1;
}

function onKeyDown(event) {
	if(event.key == activeText.content.toLowerCase()) {
		activeText.fillColor = 'black';
		lastActive = active;
		active = Math.round(Math.random() * 8);
		while(active == lastActive) {
			active = Math.round(Math.random() * 8);
		}
		destination = Point.random() * view.size;
		console.log(active);
		flag=1;
	}
}