import React, { Component } from 'react';
import './Header.css';

 class Header extends Component{
	constructor(){
		super();
		
	}
	render(){
		
		return (
		    <div className="header">
		    	<div className="inner">
		    		<div className="lg_tbar_l">
		    			<a herf="#" className="logo"></a>
		    			<ul className="lg_tbar_tabs">
							<li className="suggestCity">
								<span>深圳站</span>
								<em id="changeCity_btn">[切换城市]</em>
							</li>
                            <li className="tab-active">
                    			<a href="#">首页</a>
                			</li>
			                <li>
			                    <a href="#" >公司</a>
			                </li>
			                <li>
			                    <a href="#">校园招聘</a>
			                </li>
			                <li>
			                    <a href="#">言职</a>
			                </li>
			                <li>
			                    <a href="#">课程<span className="tips-new">new</span></a>
			                </li>

		    			</ul>
		    		</div>
		    		<div className="lg_tbar_r">
                        <ul className="passport">
			                <li id="upload-resume">
			                    <a href="javascript: void 0;">上传简历</a>
			                </li>
			                <li id="quick-entrance">
			                    <a href="#" data-lg-webtj-_address_id="1nny">职位订阅</a>
			                </li>
			                <li>
			                    <a className="login">
			                    	登录
			                    </a>
			                </li>
			                <li>
			                    <span>|</span>
			                </li>
			                <li>
			                    <a className="register">注册</a>
			                </li>
			            </ul>
			            <a href="#" className="lg_app">拉勾APP</a>
			            <a href="#" className="lg_os">进入企业版</a>
			        </div>
		    	</div>
		        
		    </div>
		  )
	}
  
}

export default Header;
