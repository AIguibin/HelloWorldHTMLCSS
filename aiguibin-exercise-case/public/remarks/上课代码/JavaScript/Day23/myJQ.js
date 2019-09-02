//对传入的字符串进行多余空格的删除
function deleteSpace(arg){
	//删除字符串两端的空格
	var txt = /^\s+|\s+$/g;
	arg = arg.replace(txt,"");
	//保留选择器之间的一个空格
	var txt1 = /\s+/g;
	arg = arg.replace(txt1," ");
	return arg;
}
//合并数组
function combineArray(sourceArray,desArray){
	for (var i = 0; i < sourceArray.length; i++) {
		desArray.push(sourceArray[i]);
	}
	return desArray;
}

//定义函数完成按照选择器查找所有的元素
function getElements(arg){
	//统一选择器格式
	arg = deleteSpace(arg);
	var selectors = arg.split(" ");
	var parents = [document];//存储每次查找所需要的父级元素
	var childs = [];//存储每次找到的子级标签
	for(var i = 0; i < selectors.length;i++){
		var selector = selectors[i];
		for(var j = 0; j < parents.length;j++){
			var parent = parents[j];
			var elements = []//存储找到的元素
			//判断应该使用哪种方法进行元素的获取
			//id
			if((/^#/).test(selector)){
				selector = selector.substr(1,selector.length - 1);
				elements.push(parent.getElementById(selector));
				//class
			}else if(/^[.]/.test(selector)){
				selector = selector.substr(1,selector.length - 1);
				elements = parent.getElementsByClassName(selector);
				//tag
			}else{
				elements = parent.getElementsByTagName(selector);
			}
			//合并数组
			childs = combineArray(elements,childs);
		}
		parents = [];
		parents = combineArray(childs,parents);
		childs = [];
	}
	return parents;
}



//定义返回JQ对象的方法
function $(arg){
	return new JQuery(arg);
}
function JQuery(arg){
	//声明一个属性存储找到的元素
	this.elements = [];
	if(typeof(arg) == "string"){
		//查找元素
		this.elements = getElements(arg);
		
	}else{
		//将对应的arg直接转化为jq对象
		this.elements.push(arg);
	}
	
}
JQuery.prototype.get = function(index){
	return this.elements[index];
}

//on
JQuery.prototype.on = function(eventName,fun){
	function callFun(e){
		var even = e || event;
		//都是函数对象的方法,每一个函数对象都有以下的两个方法,作用效果相同:将fun函数的执行绑定到对应的obj上.
		//fun.call(obj,参数一,参数二,...)
		//fun.apply(obj,[参数一,参数二,...])
		fun.call(this,even)
	}
	for(var i = 0;i < this.elements.length;i++){
		//主流浏览器的绑定事件方法
		if(this.elements[i].addEventListener){
			this.elements[i].addEventListener(eventName,fun,false);
		}else{
			//ie写法
			this.elements[i].attachEvent("on"+event,callfun);
		}
	}
}












