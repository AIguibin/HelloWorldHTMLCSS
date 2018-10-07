//定义一个构造方法用来生成对应的子弹对象
/*
 * 参数说明:
 * image存储对应的子弹绘制需要的图片对象
 */
function Bullet(image,x,y){
	this.image = image;
	this.x = x;
	this.y = y;
	this.w = 6;
	this.h = 14;
	this.speed = 3;
}

//定义一个功能用来绘制子弹
Bullet.prototype.draw = function(){
	ctx.drawImage(this.image,0,0,this.w,this.h,this.x,this.y,this.w,this.h)
}
//定义一个方法完成子弹对象的移动
Bullet.prototype.move = function(){
	this.y -= this.speed;
}


