import React, { Component } from 'react';
import './Footer.css';

 class Footer extends Component{
	constructor(){
		super();
		
	}
	render(){
		
		return (
		    <div className="footer">
		    	<div className="footerbox">
		    		<div class="footer_module_column">
		                <a class="footer_app" href="https://www.lagou.com/app/download.html" rel="nofollow">
		                	<i class="footer_app_icon"></i>下载拉勾APP 
		                </a>
		                <a class="footer_mina" href="javascript:;" rel="nofollow">
		                	<i class="footer_mina_icon"></i> 微信小程序
		                	<img src="//www.lgstatic.com/lg-www-fed/common/widgets/footer_c/layout/img/lagou-mina-code_d70848a.png" />
		                </a>
		                <div class="footer_module_item">		                   
		                    <a class="footer_wechat" href="javascript:;" rel="nofollow">
		                    	<i class="footer_wechat_icon"></i> 拉勾微信 
		                    	<img src="//www.lgstatic.com/lg-www-fed/common/widgets/footer_c/layout/img/lg_pic_weixin@2x_c372698.png" width="160" height="160" />
		                    </a>
		                    <a class="footer_webo" href="http://e.weibo.com/lagou720" target="_blank" rel="nofollow">
		                    	<i class="footer_webo_icon"></i>拉勾微博
		                    </a>
		                </div>
		            </div>
		    	</div>
		    </div>
		  )
	}
  
}

export default Footer;
