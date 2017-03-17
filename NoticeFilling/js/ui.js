var deviceH = $(window).height();
var deviceW = $(window).width();

function showPopWindow(){
	var popH = deviceH / 2;
	var popW = deviceW / 2;
	var top = popH / 2;
	var left = popW / 2;
	
	var $pWindow = $(document.createElement("div"));
	$pWindow.css({
		width:popW,
		height:popH,
		left:left,
		top:top
	})
	$pWindow.width(popH);
	$pWindow.width(popW);
	$pWindow.attr("class","pop-window");
	
	$($pWindow).appendTo("body");
}
