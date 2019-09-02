var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
//定义一个构造方法创建小球对象
var min = 5,
	max = 10; //记录晓求得最小半径和最大半径
function Ball() {
	this.centerX = random(max, myCanvas.width - max);
	this.centerY = random(max, myCanvas.height - max);
	//生成小球的半径
	this.radius = random(min, max);
	//生成小球的颜色
	this.color = randomColor();
	//生成小球随机速度,正负号代表运动方向
	var speed1 = random(1, 3);
	this.speedX = random(0, 1) == 0 ? -speed1 : speed1;
	var speed2 = random(1, 3);
	this.speedY = random(0, 1) == 0 ? -speed2 : speed2;

}

//为小球对象添加绘制的功能
Ball.prototype.draw = function() {
	ctx.beginPath();
	ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = this.color;	
	ctx.fill();
}
//定义方法控制小球的移动
Ball.prototype.move = function(){
	this.centerX += this.speedX;
	this.centerY += this.speedY;
}



//定义函数产生[min,max]范围的随机数
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
	var r = random(0, 255);
	var g = random(0, 255);
	var b = random(0, 255);
	return "rgb(" + r + "," + g + "," + b + ")"
}




















/*
var  myCanvas=document.getElementById('myCanvas')
var ctx=myCanvas.getContext('2d')
//定义构造方法创建小球对象;
var min=5,max=10;//记录小球的最小半径和最大半径;
function Ball(){
	//生成小球的中心点坐标;
	this.centerX=getRandom(max,myCanvas.width-max);
	this.centerY=getRandom(max,myCanvas.height-max);
	//生成小球的半径;
	this.radius=getRandom(min,max);
	//生成小球的颜色
	this.color=getRandmColor();
	//生成小球的随机速度,正负号代表方向;
	var speed1=getRandom(1,3);
	this.speedX=getRandom(0,1)==0?-speed1:speed1
	var speed2=getRandom(1,3);
	this.speedY=getRandom(0,1)==0?-speed1:speed1
	
}
//为小球对象添加绘制的功能
Ball.prototype.draw=function(){
	ctx.beginPath();
	ctx.arc(this.centerX,this.centerY,this.radius,0,360,false)
	ctx.closePath()
	ctx.fillStyle=this.color
	ctx.fill()	
}
//定义方法控制小球的移动
Ball.prototype.move=function(){
	this.centerX+=this.speedX;
	this.centerY+=this.speedY;
}

//定义函数产生[min max]范围的随机数
function  getRandom(min,max){
	return Math.floor(Math.random()*(max-min+1)+min)
}
//定义函数产生随机颜色
function getRandmColor(){
	var red=getRandom(0,255);
	var green=getRandom(0,255);
	var blue=getRandom(0,255);
	return "rgb("+red+','+green+','+blue+")"
}
*/