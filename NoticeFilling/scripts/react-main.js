var TopBar = React.createClass({
	render: function(){
		return(
			<div id="topbar">
				<div className="navbar navbar-apps navbar-fixed-top">
						<span className="glyphicon glyphicon-menu-left" id="back_btn"></span>
						<span className="top_title">填报须知</span>
				</div>
			</div>
		);
	}
});

var NoticeText = React.createClass({
	render: function(){
		init:function(){
			
		},
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 ">
						<p className="readme">请确定您符合以下条件<br />
						一：简易注销适用范围<br />
						领取营业执照后未展开经营活动(未开业)，申请注销<br />
						登记前未发生债权债务或已将债权债务清算完结(无债<br />
						权债务)的如下企业：<br />
						1.有限责任公司；<br />
						2.非公司企业法人；
						3.个人独资企业；<br />
						4.合伙企业；<br />
						二：企业有下列情形之一的，不适用简易注销程序<br />
						1.涉及国家规定实施准入特别管理措施的外商投资企业；<br />
						2.被列入企业经营异常名录或严重违法失信企业名单；<br />
						3.存在股权（投资权益）被解冻，出质或动产抵押等情形；<br />
						4.有正在被立案调查或采取行政强制，司法协助，被予以<br />
						5.企业所属的非法人分支机构未办理注销登记<br />
						6.曾被终止简易注销程序的；<br />
						7.法律，行政法规或者国务院决定规定在注销登记前需经批准的；<br />
						8.不适用企业简易注销的其他企业；<br />
						三：适用简易注销的特殊情况<br />
						人民法院裁定强制清算或裁定宣告破产的，有关企业清算<br />
						组，企业管理人可持人民<br />
						法院终结强制清算程序的裁定宣告破产的，有关企业清算<br />
						组，企业管理人可持人民<br />
						法院终结强制清算程序的裁定或终结破产裁定程序的裁定，<br />
						可直接向被强制清算人或<br />
						破产人的原登记机关申请办理简易注销登记，无需进行简<br />
						易注销公告。<br />
						</p>
					</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
  	<TopBar />,
  	document.getElementById('header')
);

ReactDOM.render(
  	<NoticeText />,
  	document.getElementById('notice')
);