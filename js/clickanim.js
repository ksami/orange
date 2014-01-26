var mark100 = false;
var mark200 = false;
var mark300 = false;
var mark400 = false;
var mark500 = false; 

var rotatePoint = view.center;

var arc1;
var arc2;
var arc3;
var arc4;

var arcl1;
var arcl2;
var arcl3;

function onResize(event) {
	rotatePoint = view.center;
}

function onFrame(event) {
	if(mark100==true) {
		arc1.rotate(1, rotatePoint);
	}
    else if(mark200==true) {
    	arc2.rotate(-2, rotatePoint);
    }
    else if(mark300==true) {
    	arc3.rotate(3, rotatePoint);
    }
    else if(mark400==true) {
    	arc4.rotate(-4, rotatePoint);
    } 
    else if(mark500==false && numClicks>50) {
    	mark500 = true;

    	arcl1 = arc1.clone();
		arcl1.scale(6, rotatePoint);
		arcl1.strokeColor = '#ff5340';

		arcl2 = arcl1.clone();
		arcl2.rotate(120, rotatePoint);

		arcl3 = arcl1.clone();
		arcl3.rotate(240, rotatePoint);

		arc1.strokeColor = '#8c40ff';
    	arc2.strokeColor = '#40cfff';
    	arc3.strokeColor = '#40ff79';
    	arc4.strokeColor = '#ffb640';
    }
    else if(mark500==true) {
    	arcl1.rotate(-3, rotatePoint);
    	arcl2.rotate(-3, rotatePoint);
    	arcl3.rotate(-3, rotatePoint);
    }
    else if(mark400==false && numClicks>40) {
    	arc4 = arc1.clone();
		arc4.scale(4, rotatePoint);
    }
    else if(mark300==false && numClicks>30) {
    	arc3 = arc1.clone();
		arc3.scale(3, rotatePoint);
    }
    else if(mark200==false && numClicks>20) {
    	arc2 = arc1.clone();
		arc2.scale(2, rotatePoint);
    }
    else if(mark100==false && numClicks>10) {
		arc1 = new Path.Arc({
		    from: rotatePoint.add(0,10),
		    through: rotatePoint.add(7,7),
		    to: rotatePoint.add(10,0),
		    strokeColor: 'black'
		})
	}
}