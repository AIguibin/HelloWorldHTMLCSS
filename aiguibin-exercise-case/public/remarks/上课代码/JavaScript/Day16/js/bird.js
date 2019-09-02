//获取元素
//开始按钮
var startBtn = document.getElementById("start");
//head
var head = document.getElementById("head");
//开始菜单
var menu = document.getElementById("menu");
//结束菜单
var end = document.getElementById("end");
//管道
var pipesUl = document.getElementById("pipes");
//小鸟
var bird = document.getElementById("bird");
//game Div
var gameDiv = document.getElementById("game");
//分数
var scoreDiv = document.getElementById("score");
//当前得分
var currentScore = document.getElementById("currentScore");
//最好得分
var bestScore = document.getElementById("bestScore");
//点击声音
var bulletMusic = document.getElementById("bullet");
//游戏进行声音
var gameMusic = document.getElementById("gameMusic");
//游戏结束声音
var gameOverMusic = document.getElementById("gameOverMusic");

//声明的变量
//得分
var num = 0;
//鸟上升的定时器
var birdUpTimer;
//鸟下降的定时器
var birdDownTimer;
//小鸟的速度
var speed = 0;

//点击开始按钮
startBtn.onclick = function(e) {
	//播音乐
	  gameMusic.loop = "loop";
	  gameMusic.play();
	//  取消事件冒泡
	var even = e || event;
	even.stopPropagation();
	//IE下阻止冒泡的方法
	even.cancelBubble = true;
	//隐藏开始菜单和head
	head.style.display = "none";
	menu.style.display = "none";
	//显示分数与小鸟
	scoreDiv.style.display = "block";
	bird.style.display = "block";
	//生成管道
	setInterval(creatPipe, 3000);
	//小鸟下落
	birdDownTimer = setInterval(birdDown, 20);
	//给游戏区域添加点击事件
	gameDiv.onclick = gameClick;
	//碰撞检测
	setInterval(function() {
		//获取到对应的li
		var lis = document.querySelectorAll("li");
		for(var i = 0; i < lis.length; i++) {
			//判断顶部桶是否与鸟发生碰撞
			collision(lis[i].firstElementChild);
			//判断底部桶是否与鸟发生碰撞
			collision(lis[i].lastElementChild);
		}
	}, 10);
}

//创建管道的函数
function creatPipe() {
	//创建li
	var li = document.createElement("li");
	li.className = "pipe";
	li.style.left = pipesUl.clientWidth + 'px';
	pipesUl.appendChild(li);
	//变量
	//小鸟通过的高度
	var passHeight = 120;
	//管道的最小高度
	var minHeight = 60;
	//随机区间 [minHeight, li.clientHeight - passHeight - minHeight]
	var topHeight = Math.floor(Math.random() * (li.clientHeight - passHeight - minHeight - minHeight + 1) + minHeight);
	var bottomHeight = li.clientHeight - passHeight - topHeight;
	//分别创建两个div
	var topDiv = document.createElement("div");
	topDiv.className = "upPipe";
	topDiv.style.height = topHeight + "px";
	li.appendChild(topDiv);

	var bottomDiv = document.createElement("div");
	bottomDiv.className = "downPipe";
	bottomDiv.style.height = bottomHeight + "px";
	li.appendChild(bottomDiv);

	//移动管道
	//声明一个变量存储不断修改的left值
	var x = pipesUl.clientWidth;
	var pipeMoveTimer = setInterval(function() {
		x--;
		li.style.left = x + "px";
		//当li从屏幕左侧完全移出时停止定时器,清除li
		if(x <= -li.clientWidth) {
			clearInterval(pipeMoveTimer);
			pipesUl.removeChild(li);
		}
		//是否得分
		if(x == 0) {
			//修改分数
			       	changeScore();
		}
	}, 10);
}
//小🐦上升的函数
function birdUp() {
	bird.src = "img/up_bird.png";
	speed -= 0.5;
	if(speed < 0) {
		clearInterval(birdUpTimer);
		speed = 0;
		birdDownTimer = setInterval(birdDown, 20);
	}
	//修改位置
	bird.style.top = bird.offsetTop - speed + "px";
	//判断是否到顶部
	if(bird.offsetTop <= 0) {
		  	   gameOver();
	}
}
//小鸟下落的函数
function birdDown() {
	bird.src = "img/down_bird.png";
	speed += 0.5;
	if(speed > 5) {
		speed = 5;
	}
	bird.style.top = bird.offsetTop + speed + "px";
	//判断小鸟是否坠地
	if(bird.offsetTop + bird.clientHeight >= 423) {
		//游戏结束
		      gameOver();
	}
}
//屏幕点击事件
function gameClick() {
	//播放声音
	bulletMusic.play();
	//清除当前时刻的定时器
	clearInterval(birdDownTimer);
	clearInterval(birdUpTimer);
	speed = 8;
	//再执行小鸟上升的操作
	birdUpTimer = setInterval(birdUp, 20);
}
//检测是否发生碰撞的函数
function collision(pipe) {
	//小鸟的位置
	var top1 = bird.offsetTop;
	var bottom1 = top1 + bird.offsetHeight;
	var left1 = bird.offsetLeft;
	var right1 = left1 + bird.offsetWidth;

	//管道的位置(上管道/下管道)
	var top2 = pipe.offsetTop;
	var bottom2 = top2 + pipe.offsetHeight;
	var left2 = pipe.offsetParent.offsetLeft;
	var right2 = left2 + pipe.offsetWidth;

	//判断碰撞
	if(!(bottom1 < top2 || left1 > right2 || top1 > bottom2 || right1 < left2)) {
			
		      gameOver();
	}
}

//结束游戏
function gameOver(){
	//清除所有计时器
	for(var i = setInterval("1") ; i > 0; i--){
		clearInterval(i);
	}
	//关闭音乐
	gameMusic.pause();
	//结束菜单显示
	end.style.display = "block";
	end.style.zIndex = "1"
	//清空点击函数
	gameDiv.onclick = null;
	//得分
	currentScore.innerHTML = num;
	//播放结束声音
	gameOverMusic.play()
}

var topscores = document.getElementsByClassName("topscore");
////改变分数
//function changeScore() {
//	num++;
//	topscores[1].src = "img/" + num % 10 + ".jpg";
//	if(num>9){
//		topscores[0].src = "img/" + Math.floor(num/10) + ".jpg";
//	}
//
//}




//改变分数
function changeScore(){
	num++;
	scoreDiv.innerHTML = "";
	//添加图片
	if(num < 10){
		var img = document.createElement("img");
		img.src = "img/" + num + ".jpg";
		scoreDiv.appendChild(img);
	}else{
		//十位
		var img1 = document.createElement("img");
		img1.src = "img/" + (Math.floor(num / 10)) + ".jpg";
		scoreDiv.appendChild(img1);
//		个位
		var img2 = document.createElement("img");
		img2.src = "img/" + (Math.floor(num / 10)) + ".jpg";
		scoreDiv.appendChild(img2);
	}
}


//游戏结束的方法
function gameOver(){
	//播放音乐
	gameMusic.pause();
	gameOverMusic.play();
	//停止所有定时器
	//注意:当网页加载完毕之后,所有的定时器的id是递增的,所以只要能拿到最后一个定时器的id,就可以一次得到所有的定时器的id
	var index = setInterval(function(){},1000);
	for(var i = 1; i <= index; i++){
		clearInterval(i);
	}
	//显示分数板
	end.style.display = "block";
	end.style.zIndex = 1;
	currentScore.innerHTML = num;
	gameDiv.onclick = null;
	
	
	
	
	
	
	
	
	
	
}
