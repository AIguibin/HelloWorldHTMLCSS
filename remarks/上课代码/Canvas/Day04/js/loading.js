/*
 参数说明:
 imgObj:对象类型,用来存储需要加载的图片的链接
 funObj:对象类型,用来存储当图片加载完成之后需要执行的函数操作
 */
var loading = function(imgObj, funObj) {
	var count = 0; //记录当前已经加载的图片数量
	var length = 0; //存储一共需要加载的图片数量
	for(var styleName in imgObj) {
		length++;
	}
	var loadImages = {}; //存储已经加载完成的图片对象
	for(var styleName in imgObj) {
		var img = new Image();
		//通过styleName中存储的键获取对应的值
		img.src = imgObj[styleName];
		img.onload = (function(name) {
			return function() {
				count++;
				loadImages[name] = this;
				if(funObj.progress) {
					funObj.progress(count / length.toFixed(2));
				}
				if(count == length) {
					if(funObj.success) {
						funObj.success(loadImages);
					}
				}
			}
		})(styleName)
	}
}