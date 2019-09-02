//创建构造方法,生成对应的敌机对象
/*
 参数说明:
 image:存储的是一个具体的图片对象
 kind:存储飞机的类别,1.代表小飞机,2.代表大飞机,3.中等飞机
 */
function Enemy(image,kind){
	this.image = image;
	if(kind == 1){
		this.w = 38;
		this.h = 34;
		this.blood = 3;
		this.speed = 2;
	}else if(kind == 2){
		this.w = 110;
		this.h = 164;
		this.blood = 8;
		this.speed = 0.5;
	}else if(kind == 3){
		this.w = 46;
		this.h = 84;
		this.blood = 5;
		this.speed = 1;
	}
	this.x = random1(0,myCanvas.width - this.w);
	this.y = -this.h;
	//存储初始的截取位置
	this.positionX = 0;
}
//定义方法用来进行敌机的绘制
Enemy.prototype.draw = function(){
	ctx.drawImage(this.image,this.positionX,0,this.w,this.h,this.x,this.y,this.w,this.h);
}
Enemy.prototype.move = function(){
	this.y += this.speed;
}
//定义一个产生min到max区间的随机函数
 function random1(min,max){
 	
 	return Math.floor(Math.random()*(max - min + 1) + min);
 }

