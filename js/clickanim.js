var rotatePoint = view.center;

var arc1 = new Path.Arc({
    from: rotatePoint.add(0,10),
    through: rotatePoint.add(7,7),
    to: rotatePoint.add(10,0),
    strokeColor: 'black'
})

var arc2 = arc1.clone();
arc2.scale(2, rotatePoint);

var arc3 = arc1.clone();
arc3.scale(3, rotatePoint);

var arc4 = arc1.clone();
arc4.scale(4, rotatePoint);

var arc5 = arc1.clone();
arc5.scale(5, rotatePoint);

function onResize(event) {
	rotatePoint = view.center;
}

function onFrame(event) {
	arc1.rotate(1, rotatePoint);
    arc2.rotate(2, rotatePoint);
    arc3.rotate(3, rotatePoint);
    arc4.rotate(4, rotatePoint);
    arc5.rotate(5, rotatePoint);

    if(numClicks>5) {
    	arc1.strokeColor = 'red';
    }
}