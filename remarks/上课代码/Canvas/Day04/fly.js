var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
//定义构造方法创建飞机对像
function Fly(image) {
	this.image =image ; //存储需要绘制的图片对象
	//存储飞机初始的左上角的坐标位置和飞机的宽高
	this.x = myCanvas.width / 2 - 33;
	this.y = myCanvas.height - 82;
	this.w = 66;
	this.h = 82;
	//获取初始飞机图片截取当位置
	this.positionX = 0;
	this.bullets = [];
}
//添加绘制当前飞机对象的操作
Fly.prototype.draw = function() {
ctx.drawImage(this.image,this.positionX,0,this.w,this.h,this.x,this.y,this.w,this.h);
}
//添加绘制的子弹对象
Fly.prototype.drawBullet = function(image){
	var bullet = new Bullet(image,this.x +this.w/2 - 3,this.y- 14);
	this.bullets.push(bullet);   //存储子弹对象
}
//为飞机添加一个功能完成子弹的移动
Fly.prototype.movebullets = function(){
  for (var i = 0; i < this.bullets.length; i++) {
  	this.bullets[i].move();
  	if (this.bullets[i].y <=-14) {
  		//此时子弹已经移除界面
  		this.bullets.splice(i,1);
  		i--;
  	}else{
  		this.bullets[i].draw();
  	}
  }
}
