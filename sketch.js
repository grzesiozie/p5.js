var w = 500;
var h = 500;
var points = [];
var onepoint;
var a = 0;
var r = 1;

function setup() {
  //var width = 500;
  //var height = 500;
  createCanvas(w, h);
  frameRate(2000);
  //points.push(new drawPoint(1, 100));
}

function draw() {
  background(51);
  translate(w/2, h/2);
  strokeWeight(1);
  stroke(255);

  points.push(new drawPoint(a, r));
  r *= 1.002;
  a += 10;
  for(i = 0; i < points.length - 1; i++)
  {
    //strokeWeight(pow(i, 1/4));
    strokeWeight(i*0.001);
    points[i].show();
  }

  //strokeWeight(4);
  //stroke(255, 0, 0);
  //points[points.length - 1].show();
}

function drawPoint(a, r)
{
  this.x;
  this.y;

  this.a = a;
  this.r = r;

  this.calculate = function()
  {
    this.x = this.r * cos(radians(this.a));
    this.y = this.r * sin(radians(this.a));
  }

  this.show = function()
  {
    this.a += 1.3;
    this.calculate();
    point(this.x, this.y);
  }
}
