//删除Cookie的函数
function deleteCookie(key) {
	//					addCookie("age","","-1")
	document.cookie = key + '=;max-age = -1';
}

//添加Cookie的函数
function addCookie(key, value, maxAge) {
	document.cookie = key + ' = ' + value + ';' + 'max-age =' + maxAge;
}

//取出key对应的value
function getValueByKey(key) {
	var cookie = document.cookie.split(";");
	for(i = 0; i < cookie.length; i++) {
		var str1 = cookie[i];
		var arr3 = str1.split("=");
		var name = arr3[0];
		if(name.trim() == key) {
			return arr3[1];
		}
	}
}

//判断是否有对应的name的Cookie
function hasKey(key) {
	var arr1 = document.cookie.split(";");
	var result = false;
	for(i = 0; i < arr1.length; i++) {
		var str = arr1[i];
		var arr2 = str.split("=");
		var name = arr2[0];
		if(name.trim() == key) {
			result = true;
		}
		
	}
	return result
//var arr1 = document.cookie.split(";");
//  var result = false;
//  for(var i = 0; i < arr1.length; i++) {
//      var str = arr1[i];
//      var arr2 = str.split("=");
//      var name = arr2[0];
//      if(name.trim() == key) {
//          result = true;
//      }
//  }
//  return result;
}