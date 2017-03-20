var deviceH = $(window).height();
var deviceW = $(window).width();
var popH = deviceH / 5;
var popW = deviceW / 5 * 4;

/**
 * 弹出一个提示框
 */
function showPopWindow(msg){
	if($("#alertDialog").length > 0){
		return;
	}
	
	mainDiv().appendTo("body");
	alertDialogDiv(msg).appendTo("body");

}

function mainDiv(){
	var $pWindow = $(document.createElement("div"));
	$pWindow.attr("id","alertDiv");
	$pWindow.css({
		"width":deviceW,
		"height":deviceH,
		"background-color":"rgb(153,153,153)",
		"z-index":"9999",
		"position":"absolute",
		"left":0,
		"top":0,
		"filter":"alpha(opacity=40)",
		"opacity": 0.4
	});
	
	return $pWindow;
}

function alertDialogDiv(msg){
	var $pDialog = $(document.createElement("div"));
	$pDialog.attr("id","alertDialog");
	$pDialog.css({
		"width":popW,
		"height":popH,
		"left":(deviceW - deviceW / 4 * 3) / 2,
		"top":(deviceH - popH) / 2,
		"background-color":"rgb(255,255,255)",
		"position":"absolute",
		"z-index":"10000"
	})
	
	// 提示内容
	var $title = $(document.createElement("div"));
	$title.css({
		"height": popH / 3 * 2,
		"text-align": "center",	
		"padding": popH / 4 + "px 10px"
	});
	
	$title.append(msg);
	
	// 分割线
	var $line = $(document.createElement("div"));
	$line.css({
		"height": "1px",
		"background-color":"rgb(222,222,222)"
	});
	
	// 交互栏
	var $bottomBar = $(document.createElement("div"));
	$bottomBar.css({
		"height": popH / 3 * 1 - 1,
		"position" : "relative"
		
	});
	var $okBtn = $(document.createElement("button"));
	$okBtn.append("确定");
	$okBtn.click(function(){
		$("#alertDiv").remove();
		$("#alertDialog").remove();
	});
	$okBtn.css({
		"position":"absolute",
		"right":20,
		"top":"50%",
		"transform":"translateY(-50%)",
		"background-color":"transparent",
		"border":0
	});
	$okBtn.appendTo($bottomBar);
	
	$pDialog.append($title,$line,$bottomBar);
	
	return $pDialog;
}


