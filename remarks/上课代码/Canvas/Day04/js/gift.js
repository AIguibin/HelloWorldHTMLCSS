/*
 定义构造方法用来生成道具对象
 参数说明:image存储的是对应的道具图片
 kind存储的是对应的道具类型
      1.双排子弹
      2.炸弹
      3.加命
 */
function Prop(image,kind){
	this.image = image;//存储道具图片
	//存储道具的宽高
	this.w = 39;
	this.h = 68;
	this.x = random1(0,myCanvas.width - this.w);
	this.y = -this.h;
	if (kind == 1) {
		this.positionX = this.w;
	} else if(kind == 2){
		this.positionX = 0;
	}else{
		this.positionX = this.w * 2;
	}
	this.speed = 3//存储当前道具的移动速度
}
//为道具添加绘制功能
Prop.prototype.draw = function(){
	ctx.drawImage(this.image,this.positionX,0,this.w,this.h,this.x,this.y,this.w,this.h);
}
//为道具添加移动的功能
Prop.prototype.move = function(){
	this.y += this.speed;
}
