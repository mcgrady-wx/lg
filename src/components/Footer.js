import React, { Component } from 'react';
import './Footer.css';

 class Footer extends Component{
	constructor(){
		super();
		this.state={
			show:false,
			wechat:false
		};
		this.handleMouseOver=this.handleMouseOver.bind(this);
		this.handleMouseOut=this.handleMouseOut.bind(this);
		this.handleMouseOver1=this.handleMouseOver1.bind(this);
		this.handleMouseOut1=this.handleMouseOut1.bind(this);
	}
	render(){
		
		return (
		    <div className="footer">
		    	<div className="footerbox">
		    		<div class="footer_module_column">
		                <a class="footer_app" href="https://www.lagou.com/app/download.html" rel="nofollow">
		                	<i class="footer_app_icon"></i>下载拉勾APP 
		                </a>
		                <a class="footer_mina" href="javascript:;" rel="nofollow" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
		                	<i class="footer_mina_icon"></i> 微信小程序
		                	<img src="//www.lgstatic.com/lg-www-fed/common/widgets/footer_c/layout/img/lagou-mina-code_d70848a.png" style={{display:this.state.show?"block":"none"}}/>
		                </a>
		                <div class="footer_module_item">		                   
		                    <a class="footer_wechat" href="javascript:;" rel="nofollow" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}>
		                    	<i class="footer_wechat_icon"></i> 拉勾微信 
		                    	<img src="//www.lgstatic.com/lg-www-fed/common/widgets/footer_c/layout/img/lg_pic_weixin@2x_c372698.png" style={{display:this.state.wechat?"block":"none"}} />
		                    </a>
		                    <a class="footer_webo" href="http://e.weibo.com/lagou720" target="_blank" rel="nofollow">
		                    	<i class="footer_webo_icon"></i>拉勾微博
		                    </a>
		                </div>
		            </div>
		            <div class="footer_module_right">
		                <div class="footer_module_business">
		                    <p class="footer_module_title">企业服务</p>
		                    <a href="https://activity.lagou.com/activity/dist/business-2018/#/" target="_blank" rel="nofollow">招聘抢人宝典</a>
		                    <a href="https://www.lagou.com/gongsi/ " target="_blank" rel="nofollow">公司搜索</a>
		                    <a href="https://www.lagou.com/app/download.html " target="_blank" rel="nofollow">拉勾APP</a>
		                </div>
		                <div class="footer_module_business">
		                    <p class="footer_module_title">用户帮助</p>
		                    <a href="https://www.lagou.com/qa.html?t=1" target="_blank" rel="nofollow">帮助中心</a>
		                    <a href="https://www.lagou.com/privacy.html" target="_blank" rel="nofollow">用户服务协议</a>
		                    <a href="https://www.lagou.com/policy.html" target="_blank" rel="nofollow">隐私政策</a>
		                    <a href="https://yanzhi.lagou.com/topic/419.html " target="_blank" rel="nofollow">在线提问</a>
		                </div>
		                <div class="footer_module_business">
		                    <p class="footer_module_title">联系方式</p>
		                    <span class="tel">服务热线：<em>4006 2828 35 (9:00 -18:00)</em></span>
		                    <a class="tel" href="mailto:cc@lagou.com">企业服务邮箱：<em>cc@lagou.com</em></a>
		                    <a href="https://www.lagou.com/about.html" target="_blank" rel="nofollow">联系我们</a>
		                </div>
		            </div>
		    	</div>
		    	<div class="copyright">
		            <div class="copyright_main">
		                <div class="copyright_main_left">
		                    <span class="copyright_title"><em>©</em><span>2020</span> 拉勾网</span>
		                    <span>京ICP备14023790号-2</span>
		                    <a target="_blank" class="footer_gongan" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802024043" rel="nofollow">
		                    	<i class="footer_lagou_gongan"></i>京公网安备 11010802024043号
		                    </a>
		                    <div class="footer_lagou_jubao">
		                        <i class="lagou_jubao"></i>
		                        <p>
		                        <span>违法和不良信息举报</span>
		                        <span>电话: 4006 2828 35</span>
		                        <span>邮箱: cc@lagou.com</span>
		                        </p>
		                    </div>
		                </div>
		                <i class="footer_lagou_icon"></i>
		            </div>
		        </div>
		    </div>
		  )
	}
	handleMouseOver(){
		this.setState({
			show:!this.state.show
		})
	}
	handleMouseOut(){
		this.setState({
			show:!this.state.show
		})
	}
	handleMouseOver1(){
		this.setState({
			wechat:!this.state.wechat
		})
	}
	handleMouseOut1(){
		this.setState({
			wechat:!this.state.wechat
		})
	}
  
}

export default Footer;
