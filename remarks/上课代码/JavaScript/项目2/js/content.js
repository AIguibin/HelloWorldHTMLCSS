var mySwiper = new Swiper(".swiper-container", {
				//控制轮播图的滚动方向
				direction: "vertical",
				//循环播放
				loop: false,
				onSlideChangeEnd: function(swiper) {
					switch(swiper.activeIndex) {
						case 1:
							{
								$(".swiper-container .swiper-wrapper .swiper-slide #page2 > img:nth-child(2)").addClass("fontMove1");
								$(".swiper-container .swiper-wrapper .swiper-slide #page2 > img:nth-child(3)").addClass("fontMove2");
								break;
							}
							//滑动到页面四
						case 3:
							{
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 > img").addClass("bgMove");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 > p:nth-child(2)").addClass("p4FontMove1");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 > p:nth-child(3)").addClass("p4FontMove2");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 #peopleImage img:nth-child(1)").addClass("p4ImageMove1");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 #peopleImage img:nth-child(2)").addClass("p4ImageMove2");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 #peopleImage img:nth-child(3)").addClass("p4ImageMove3");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 #peopleImage img:nth-child(4)").addClass("p4ImageMove4");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 #peopleImage img:nth-child(5)").addClass("p4ImageMove5");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 #peopleImage img:nth-child(6)").addClass("p4ImageMove6");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 #peopleImage img:nth-child(7)").addClass("p4ImageMove7");
								$(".swiper-container .swiper-wrapper .swiper-slide #page4 #peopleImage img:nth-child(8)").addClass("p4ImageMove8");
								break;
							}
						default:
							break;
					}
				}
			})
//给每个图片添加点击事件
for (i = 0;i < $("#peopleImage img").length; i++) {
	$("#peopleImage img").click(function(){
		for (j = 0;j < $("#peopleImage img").length; j++){
		$("#bigPic").css("visibility","visible");
		$("#peopleImage").css("visibility","hidden");
	}
		
		
		$("#lunbo").animate({
					left:-$("#bigPic").width() * $(this).index()
				},100)
})
}
//轮播图
var num = 0;
 //记录当前是第几张图片
   //右按钮点击事件
			 $("#rightBtn").click(function(){
			 	num++;
			 	$("#lunbo").animate({					
					left: -$("#bigPic").width()*num,					
				},1000)
			 	if(num >= $("#lunbo img").length-1){
			 		num = -1;
			 	}
			 })
//左按钮点击事件
			$("#leftBtn").click(function(){
				
			 	num--;
			 	$("#lunbo").animate({					
					left: -$("#bigPic").width()*num,					
				},1000)
			 	if(num <= 0){
			 		num = $("#lunbo img").length;
			 	}
			 })
//点击图片删除轮播
$("#close").click(function(){
	$("#bigPic").css("visibility","hidden");
	$("#peopleImage").css("visibility","visible")
})
//点击音乐按钮切换效果

$(".music").click(function(){
	if($(".music").attr("src").match("musicoff")){
		$(".music").attr("src","img/music.png");
	}else{
		$(".music").attr("src","img/musicoff.png");
	}
})












