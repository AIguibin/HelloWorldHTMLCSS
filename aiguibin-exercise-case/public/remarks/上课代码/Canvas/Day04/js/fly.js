var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

/*
 定义构造方法创建飞机对象
 */
function Fly(image) {
	this.image = image;
	//存储飞机出事的左上角坐标位置和飞机的宽高
	this.x = myCanvas.width / 2 - 33;
	this.y = myCanvas.height - 82;
	this.w = 66;
	this.h = 82;
	//获取初始飞机图片截取的位置
	this.positionX = 0;
	//定义一个数组存储飞机绘制的子弹
	this.bullets = [];
	//标记当前子弹的类别,1代表单排子弹,2代表双排子弹
	this.kind = 1;
	//代表双排子弹的总量
	this.num = 0;
	//代表当前飞机是否正在执行清屏操作,false代表当前未执行清屏操作
	this.clear = false
}

//添加绘制当前飞机对象的操作
Fly.prototype.draw = function() {
		ctx.drawImage(this.image, this.positionX, 0, this.w, this.h, this.x, this.y, this.w, this.h);
	}
	//添加绘制子弹的功能,image存储的是子弹图片
Fly.prototype.drawBullet = function(image) {
		if(this.kind == 1) {
			//绘制单发子弹
			var bullet = new Bullet(image, this.x + this.w / 2 - 3, this.y - 14);
		} else {
			//控制双发子弹
			var bullet1 = new Bullet(image, this.x + this.w / 2 - 24, this.y - 14);
			this.bullets.push(bullet1);
			var bullet = new Bullet(image, this.x + this.w / 2 + 18, this.y - 14);
			this.num--;
			if(this.num == 0) {
				this.kind = 1;
			}
		}
		this.bullets.push(bullet); //存储子弹对象
	}
	//为飞机添加一个功能用来进行道具的捕获
Fly.prototype.adjustFPCollision = function(props) {
		var centerX1 = this.x + this.w / 2;
		var centerY1 = this.y + this.h / 2;
		for(var i = 0; i < props.length; i++) {
			var centerX2 = props[i].x + props[i].w / 2;
			var centerY2 = props[i].y + props[i].h / 2;
			var disX = Math.abs(centerX1 - centerX2);
			var disY = Math.abs(centerY1 - centerY2);
			if(disX <= (this.w + props[i].w) / 2 && disY <= (this.h + props[i].h) / 2) {
				//说明飞机和道具相撞了
				//判断相撞的道具是哪种道具
				if(props[i].positionX == 0) {
					//炸弹执行清屏操作
					this.clear = true;
				} else if(props[i].positionX == props[i].w) {
					//双排子弹
					this.kind = 2;
					this.num += 500;
				} else {
					//增加一条命
				}
				//删除碰撞到的道具
				props.splice(i, 1);
				i--;
			}
		}
	}
	//为飞机添加一个功能完成子弹的移动
Fly.prototype.moveBullets = function() {
	for(var i = 0; i < this.bullets.length; i++) {
		this.bullets[i].move();
		if(this.bullets[i].y <= -14) {
			//此时已经移出界面
			this.bullets.splice(i, 1);
			i--;
		} else {
			this.bullets[i].draw(); //绘制子弹
		}
	}
}


//添加碰撞敌机游戏结束
Fly.prototype.adjustEPCollision = function(enemys) {
		var centerX1 = this.x + this.w / 2;
		var centerY1 = this.y + this.h / 2;
		for(var i = 0; i < enemys.length; i++) {
			var centerX2 = enemys[i].x + enemys[i].w / 2;
			var centerY2 = enemys[i].y + enemys[i].h / 2;
			var disX = Math.abs(centerX1 - centerX2);
			var disY = Math.abs(centerY1 - centerY2);
			if(disX <= (this.w + enemys[i].w) / 2 && disY <= (this.h + enemys[i].h) / 2) {
				if(enemys[i].positionX == 0) {
					//执行游戏结束
					this.clear = true;
				} 
			}
		}
	}
















