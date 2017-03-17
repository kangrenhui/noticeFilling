
var baseUrl = "http://localhost/notice";
//var baseUrl = "http://10.1.8.18:9102/notice/ws";
//var baseUrl = "http://10.10.17.7:8080/notice/ws";

// 登陆接口
var loginUrl = baseUrl + "/ws/mpreport/MpReportLogon";

// 进入一一申请界面接口
var judgeUrl = baseUrl + "/ws/simregcancel/VerifyRegcancel";

// 申请页面获取数据
var etpsInformationUrl = baseUrl + "/ws/simregcancel/rptRegcancel"

// 上传图片接口
var uploadImgUrl = baseUrl + "/ws/simregcancel/regcancelSave";

function appcation(){
	var obj = new Object();
	obj.companyInfo = "";
	obj.getCompanyInfo = function(){
		return this.companyInfo;
	}
	obj.setCompanyInfo = function(info){
		this.companyInfo = info;
	}
	
	return obj;
};

var appData = appcation();


/**
 * 登陆逻辑
 */
function login(){
	//有权限用户
	var loginBean = {LoginName:"石家庄市北江商贸中心",
		Password:"a1111111"};
	//没有权限用户
//	var loginBean = {LoginName:"河北省金帝贸易有限公司",
//		Password:"111111"};
//	
//	var loginBean = {LoginName:"130000600000021",
//		Password:"111111"};
//	var loginBean = {LoginName:"沧州市运东飞龙特钢加工厂",
//		Password:"111111"};
		
	$.post(loginUrl,
		loginBean,
		function(result,textstatus,jqXHR){
			if(result.resultCode == "200"){
				alert(loginBean.LoginName + "\n登陆成功,验证权限");
			   
				judgePower();
			}else{
				alert("登陆失败");
			}
	});
}

/**
 * 判断权限逻辑，必须要登陆
 */
function judgePower(){
	$.get(judgeUrl,function(data){
		if(data.message.indexOf("成功") != -1){
			alert("权限验证通过");
			
			$("#confirm_btn").click(function(){
				window.location.href="menu.html"; 
			})
		}else{
			alert("没有权限");
			
			$('#confirm_btn').click(function(){
				alert('没有填写权限');
			});
		}	
	});
}

/**
 * 得到企业的详细信息
 */
function getEtpsInfo(){
	$.get(etpsInformationUrl,function(data){
		var message = data.message;
		var result = data.result;
		var rptApp = result.rptApp;
		rptApp.rptSimRegcancel.commitment = null;
		rptApp.rptSimRegcancelSet[0].commitment = null;
		appData.setCompanyInfo(rptApp);
		var rptSimRegcancel = rptApp.rptSimRegcancel;
		
		fillingData(rptSimRegcancel); 
	});
}

/**
 * 填充数据工具
 * @param {Object} jsonData
 */
function fillingData(jsonData){	
	for(var key in jsonData){
		if ( $("#" + key).length > 0 ) { 
			$("#" + key).text(jsonData[key]); 
		} 
	}
}

function uploadImg(){
    var formData=new FormData();
    var json = JSON.stringify(appData.getCompanyInfo());
	formData.append("dataXml",json);
	formData.append("temp","submit");
	formData.append("files",$('#files')[0].files[0]);
	$.ajax({
		type:"post",
		url:uploadImgUrl,
		// 告诉jQuery不要去处理发送的数据
		processData : false, 
		cache: false,
		// 告诉jQuery不要去设置Content-Type请求头
		contentType : false,
		async:true,
		data:formData,
		success:function(data){
			alert(data);
		}
	});

}
