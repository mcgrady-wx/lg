import React, { Component } from 'react';
import { Carousel } from 'antd';
import $ from 'jquery';
import './Header.css';

 class Header extends Component{
	constructor(){
		super();
		this.state={
			login:false,
			cd:'0086',
			n:false,
			f:false,
			register:false,
		};
		this.login=this.login.bind(this);
		this.register=this.register.bind(this);
		this.guanbi=this.guanbi.bind(this);
		this.guanbi1=this.guanbi1.bind(this);
		this.handleMouseOver=this.handleMouseOver.bind(this);
		this.handleMouseOut=this.handleMouseOut.bind(this);
		this.handleMouseOver1=this.handleMouseOver1.bind(this);
		this.handleMouseOut1=this.handleMouseOut1.bind(this);
		this.handleMouseOver2=this.handleMouseOver2.bind(this);
		this.handleMouseOut2=this.handleMouseOut2.bind(this);
		this.handleMouseOver3=this.handleMouseOver3.bind(this);
		this.handleMouseOut3=this.handleMouseOut3.bind(this);
		this.handleMouseOver4=this.handleMouseOver4.bind(this);
		this.handleMouseOut4=this.handleMouseOut4.bind(this);
		this.bluer=this.bluer.bind(this);
		this.focus=this.focus.bind(this);
		this.bluer1=this.bluer1.bind(this);
		this.focus1=this.focus1.bind(this);
		this.bluer3=this.bluer3.bind(this);
		this.focus3=this.focus3.bind(this);
		this.bluer4=this.bluer4.bind(this);
		this.focus4=this.focus4.bind(this);
		this.clickphone=this.clickphone.bind(this);
		this.clickmima=this.clickmima.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.gotowx=this.gotowx.bind(this);
		this.gotozh=this.gotozh.bind(this);
		this.gotoregister=this.gotoregister.bind(this);
		this.gotoc=this.gotoc.bind(this);
		this.gotob=this.gotob.bind(this);
		this.gotologin=this.gotologin.bind(this);
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
			                    <a className="login" onClick={this.login}>
			                    	登录
			                    </a>
			                </li>
			                <li>
			                    <span>|</span>
			                </li>
			                <li>
			                    <a className="register" onClick={this.register}>注册</a>
			                </li>
			            </ul>
			            <a href="#" className="lg_app">拉勾APP</a>
			            <a href="#" className="lg_os">进入企业版</a>
			        </div>
		    	</div>
		    	
		        <div className="modal-content" style={{display:this.state.login?'block':'none'}}>
			    	<div className="modal-body">
			    		<i className="modal-close_icon" onClick={this.guanbi}>X</i>
			    		<div className="account">
			    			<a className="change-btn" href="#" onClick={this.gotowx}></a>
			    			<div className="logo"></div>
			    			<div className="forms-area">
			    				<div className="forms-top-wrapper">
			    					<Carousel ref='logins'>
			    					<div className="forms-top-password">
			    						<form className="active">                                 
		                                    <input type="text" className="login_enter_password zhanghao" name="" placeholder="请输入常用手机号/邮箱" autocomplete="off" onBlur={this.bluer} onFocus={this.focus}/>
											<input type="password" className="login_enter_password mima" name="" placeholder="请输入密码" autocomplete="off" onBlur={this.bluer1} onFocus={this.focus1}/>      
		                                </form>
			    					</div>
			    					<div>
			    						<div className="forms-top-password">
				    						<div className="phone-input">
								                <div className="input_border">
								                    <span className="area_code" onClick={this.handleClick}>{this.state.cd}</span>
								                    <div className="area_code_list" style={{display:this.state.n?'block':'none'}}>
								                        <dl className="code-list-main" >
								                        <dt>常用</dt>
								                        <dd data-id="0086" onClick={(e)=>this.handleCode(e)}>中国<span>0086</span></dd>
								                        <dd data-id="00852" onClick={(e)=>this.handleCode(e)}>中国香港<span>00852</span></dd>
								                        <dd data-id="00886" onClick={(e)=>this.handleCode(e)}>中国台湾<span>00886</span></dd>
								                        <dd data-id="00853" onClick={(e)=>this.handleCode(e)}>中国澳门<span>00853</span></dd>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>美国<span>001</span></dd>
								                        <dt>A</dt>
								                        <dd data-id="0061" onClick={(e)=>this.handleCode(e)}>澳大利亚<span>0061</span></dd>
								                        <dd data-id="00853" onClick={(e)=>this.handleCode(e)}>中国澳门<span>00853</span></dd>
								                        <dd data-id="00353" onClick={(e)=>this.handleCode(e)}>爱尔兰<span>00353</span></dd>
								                        <dt>B</dt>
								                        <dd data-id="0055" onClick={(e)=>this.handleCode(e)}>巴西<span>0055</span></dd>
								                        <dt>D</dt>
								                        <dd data-id="0049" onClick={(e)=>this.handleCode(e)}>德国<span>0049</span></dd>
								                        <dt>E</dt>
								                        <dd data-id="007" onClick={(e)=>this.handleCode(e)}>俄罗斯<span>007</span></dd>
								                        <dt>F</dt>
								                        <dd data-id="0033" onClick={(e)=>this.handleCode(e)}>法国<span>0033</span></dd>
								                        <dt>H</dt>
								                        <dd data-id="0082" onClick={(e)=>this.handleCode(e)}>韩国<span>0082</span></dd>
								                        <dt>J</dt>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>加拿大<span>001</span></dd>
								                        <dt>M</dt>
								                        <dd data-id="0060" onClick={(e)=>this.handleCode(e)}>马来西亚<span>0060</span></dd>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>美国<span>001</span></dd>
								                        <dt>R</dt>
								                        <dd data-id="0081" onClick={(e)=>this.handleCode(e)}>日本<span>0081</span></dd>
								                        <dt>T</dt>
								                        <dd data-id="00886" onClick={(e)=>this.handleCode(e)}>中国台湾<span>00886</span></dd>
								                        <dd data-id="0066" onClick={(e)=>this.handleCode(e)}>泰国<span>0066</span></dd>
								                        <dt>X</dt>
								                        <dd data-id="00852" onClick={(e)=>this.handleCode(e)}>中国香港<span>00852</span></dd>
								                        <dd data-id="0065" onClick={(e)=>this.handleCode(e)}>新加坡<span>0065</span></dd>
								                        <dd data-id="0064" onClick={(e)=>this.handleCode(e)}>新西兰<span>0064</span></dd>
								                        <dt>Y</dt>
								                        <dd data-id="0091" onClick={(e)=>this.handleCode(e)}>印度<span>0091</span></dd>
								                        <dd data-id="0044" onClick={(e)=>this.handleCode(e)}>英国<span>0044</span></dd>
								                        <dt>Z</dt>
								                        <dd data-id="0086" onClick={(e)=>this.handleCode(e)}>中国<span>0086</span></dd>
								                        </dl>
								                        <p className="tips">如果没有找到您的所在归属地，请拨打客服电话4006282835解决。</p>
								                    </div>
								                	<input className="login_enter_code" autocomplete="off" placeholder="输入手机号" name="phone" onBlur={this.bluer3} onFocus={this.focus3}/>
								                </div>	
								            </div>
								            <div className="input_group">
								                <input className="yzm-input" autocomplete="off" placeholder="验证码" name="yzm" onBlur={this.bluer4} onFocus={this.focus4}/>
								                <div className="yzm-btn" >获取验证码</div>
								            </div>
				    					</div>
			    					</div>
	                                </Carousel>
			    				</div>
			    				<div className="forms-bottom">
			    				<div className="forms-bottom-body">
		                            <div className="clearfix phone">
		                                <div className="change-login-type" onClick={this.clickphone}>手机验证码登录</div>
		                                <a rel="nofollow" href="#">忘记密码？</a>
		                            </div>
		                            <div className="clearfix zhang">
		                                <div className="change-login-type" onClick={this.clickmima}>密码登录</div>
		                            </div>
		                            <div className="login-btn">登录</div>
		                        </div>    
			    				</div>
			    				<div className="register-btn" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.gotoregister}>立即注册</div>
			    				<div className="third-login">
		                            <span>第三方账号登录</span>
		                            <div className="third-login-btns">
			                            <a className="weibo" rel="nofollow" href="https://passport.lagou.com/oauth20/auth_sinaWeiboProvider.html" title="使用新浪微博账号登录" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}></a>
			                            <a className="wechat" rel="nofollow" href="https://passport.lagou.com/oauth20/auth_weixinProvider.html" title="使用微信账号登录" onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2}></a>
			                            <a className="qq" rel="nofollow" href="https://passport.lagou.com/oauth20/auth_qqProvider.html" title="使用腾讯QQ账号登录" onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3}></a>
			                            <a className="baidu" rel="nofollow" href="https://passport.lagou.com/oauth20/auth_baiduProvider.html" title="使用百度账号登录" onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4}></a>
			                        </div>
		                        </div>
			    			</div>	
			    		</div>
			    		<div className="passport-pop-wrapper" style={{display:this.state.f?'block':'none'}} onClick={this.gotozh}>
			    			<a className="change-btn" href="#"></a>
			    			<p className="title">登录</p>
			    			<div className="scan-content">
		                        <div className="qrCodeCanvas" title="https://weapp.lagou.com/qr/c/login?authId=enmckjrue1h6yz5k">
		                        	<canvas></canvas>
		                        </div>
		                        <p className="tips">微信扫一扫，快速登录</p>
		                    </div>
		                    <div class="register-btn" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.gotoregister}>立即注册</div>
			    		</div>
			    	</div>
			    </div>
			    <div className="modal-register" style={{display:this.state.register?'block':'none'}}>
			    	<div className="modal-body">
			    		<i className="modal-close_icon" onClick={this.guanbi1}>X</i>
			    		<div className="account">
			    			<a className="change-btn" href="#" onClick={this.gotowx}></a>
			    			<div className="logo"></div>
			    			<div className="forms-area">
				    			<div class="switch-tab">
		                            <div class="tab-c active" onClick={this.gotoc}>找工作</div>
		                            <div class="tab-b" onClick={this.gotob}>我要招人</div>
		                        </div>
			    				<div className="forms-top-wrapper">
			    					<Carousel ref='registers'>
			    					<div>
			    						<div className="forms-top-password">
				    						<div className="phone-input">
								                <div className="input_border">
								                    <span className="area_code" onClick={this.handleClick}>{this.state.cd}</span>
								                    <div className="area_code_list" style={{display:this.state.n?'block':'none'}}>
								                        <dl className="code-list-main" >
								                        <dt>常用</dt>
								                        <dd data-id="0086" onClick={(e)=>this.handleCode(e)}>中国<span>0086</span></dd>
								                        <dd data-id="00852" onClick={(e)=>this.handleCode(e)}>中国香港<span>00852</span></dd>
								                        <dd data-id="00886" onClick={(e)=>this.handleCode(e)}>中国台湾<span>00886</span></dd>
								                        <dd data-id="00853" onClick={(e)=>this.handleCode(e)}>中国澳门<span>00853</span></dd>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>美国<span>001</span></dd>
								                        <dt>A</dt>
								                        <dd data-id="0061" onClick={(e)=>this.handleCode(e)}>澳大利亚<span>0061</span></dd>
								                        <dd data-id="00853" onClick={(e)=>this.handleCode(e)}>中国澳门<span>00853</span></dd>
								                        <dd data-id="00353" onClick={(e)=>this.handleCode(e)}>爱尔兰<span>00353</span></dd>
								                        <dt>B</dt>
								                        <dd data-id="0055" onClick={(e)=>this.handleCode(e)}>巴西<span>0055</span></dd>
								                        <dt>D</dt>
								                        <dd data-id="0049" onClick={(e)=>this.handleCode(e)}>德国<span>0049</span></dd>
								                        <dt>E</dt>
								                        <dd data-id="007" onClick={(e)=>this.handleCode(e)}>俄罗斯<span>007</span></dd>
								                        <dt>F</dt>
								                        <dd data-id="0033" onClick={(e)=>this.handleCode(e)}>法国<span>0033</span></dd>
								                        <dt>H</dt>
								                        <dd data-id="0082" onClick={(e)=>this.handleCode(e)}>韩国<span>0082</span></dd>
								                        <dt>J</dt>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>加拿大<span>001</span></dd>
								                        <dt>M</dt>
								                        <dd data-id="0060" onClick={(e)=>this.handleCode(e)}>马来西亚<span>0060</span></dd>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>美国<span>001</span></dd>
								                        <dt>R</dt>
								                        <dd data-id="0081" onClick={(e)=>this.handleCode(e)}>日本<span>0081</span></dd>
								                        <dt>T</dt>
								                        <dd data-id="00886" onClick={(e)=>this.handleCode(e)}>中国台湾<span>00886</span></dd>
								                        <dd data-id="0066" onClick={(e)=>this.handleCode(e)}>泰国<span>0066</span></dd>
								                        <dt>X</dt>
								                        <dd data-id="00852" onClick={(e)=>this.handleCode(e)}>中国香港<span>00852</span></dd>
								                        <dd data-id="0065" onClick={(e)=>this.handleCode(e)}>新加坡<span>0065</span></dd>
								                        <dd data-id="0064" onClick={(e)=>this.handleCode(e)}>新西兰<span>0064</span></dd>
								                        <dt>Y</dt>
								                        <dd data-id="0091" onClick={(e)=>this.handleCode(e)}>印度<span>0091</span></dd>
								                        <dd data-id="0044" onClick={(e)=>this.handleCode(e)}>英国<span>0044</span></dd>
								                        <dt>Z</dt>
								                        <dd data-id="0086" onClick={(e)=>this.handleCode(e)}>中国<span>0086</span></dd>
								                        </dl>
								                        <p className="tips">如果没有找到您的所在归属地，请拨打客服电话4006282835解决。</p>
								                    </div>
								                	<input className="login_enter_code" autocomplete="off" placeholder="输入手机号" name="phone" onBlur={this.bluer3} onFocus={this.focus3}/>
								                </div>	
								            </div>
								            <div className="input_group">
								                <input className="yzm-input" autocomplete="off" placeholder="验证码" name="yzm" onBlur={this.bluer4} onFocus={this.focus4}/>
								                <div className="yzm-btn" >获取验证码</div>
								            </div>
				    					</div>
			    					</div>
			    					<div>
			    						<div className="forms-top-password">
				    						<div className="phone-input">
								                <div className="input_border">
								                    <span className="area_code" onClick={this.handleClick}>{this.state.cd}</span>
								                    <div className="area_code_list" style={{display:this.state.n?'block':'none'}}>
								                        <dl className="code-list-main" >
								                        <dt>常用</dt>
								                        <dd data-id="0086" onClick={(e)=>this.handleCode(e)}>中国<span>0086</span></dd>
								                        <dd data-id="00852" onClick={(e)=>this.handleCode(e)}>中国香港<span>00852</span></dd>
								                        <dd data-id="00886" onClick={(e)=>this.handleCode(e)}>中国台湾<span>00886</span></dd>
								                        <dd data-id="00853" onClick={(e)=>this.handleCode(e)}>中国澳门<span>00853</span></dd>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>美国<span>001</span></dd>
								                        <dt>A</dt>
								                        <dd data-id="0061" onClick={(e)=>this.handleCode(e)}>澳大利亚<span>0061</span></dd>
								                        <dd data-id="00853" onClick={(e)=>this.handleCode(e)}>中国澳门<span>00853</span></dd>
								                        <dd data-id="00353" onClick={(e)=>this.handleCode(e)}>爱尔兰<span>00353</span></dd>
								                        <dt>B</dt>
								                        <dd data-id="0055" onClick={(e)=>this.handleCode(e)}>巴西<span>0055</span></dd>
								                        <dt>D</dt>
								                        <dd data-id="0049" onClick={(e)=>this.handleCode(e)}>德国<span>0049</span></dd>
								                        <dt>E</dt>
								                        <dd data-id="007" onClick={(e)=>this.handleCode(e)}>俄罗斯<span>007</span></dd>
								                        <dt>F</dt>
								                        <dd data-id="0033" onClick={(e)=>this.handleCode(e)}>法国<span>0033</span></dd>
								                        <dt>H</dt>
								                        <dd data-id="0082" onClick={(e)=>this.handleCode(e)}>韩国<span>0082</span></dd>
								                        <dt>J</dt>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>加拿大<span>001</span></dd>
								                        <dt>M</dt>
								                        <dd data-id="0060" onClick={(e)=>this.handleCode(e)}>马来西亚<span>0060</span></dd>
								                        <dd data-id="001" onClick={(e)=>this.handleCode(e)}>美国<span>001</span></dd>
								                        <dt>R</dt>
								                        <dd data-id="0081" onClick={(e)=>this.handleCode(e)}>日本<span>0081</span></dd>
								                        <dt>T</dt>
								                        <dd data-id="00886" onClick={(e)=>this.handleCode(e)}>中国台湾<span>00886</span></dd>
								                        <dd data-id="0066" onClick={(e)=>this.handleCode(e)}>泰国<span>0066</span></dd>
								                        <dt>X</dt>
								                        <dd data-id="00852" onClick={(e)=>this.handleCode(e)}>中国香港<span>00852</span></dd>
								                        <dd data-id="0065" onClick={(e)=>this.handleCode(e)}>新加坡<span>0065</span></dd>
								                        <dd data-id="0064" onClick={(e)=>this.handleCode(e)}>新西兰<span>0064</span></dd>
								                        <dt>Y</dt>
								                        <dd data-id="0091" onClick={(e)=>this.handleCode(e)}>印度<span>0091</span></dd>
								                        <dd data-id="0044" onClick={(e)=>this.handleCode(e)}>英国<span>0044</span></dd>
								                        <dt>Z</dt>
								                        <dd data-id="0086" onClick={(e)=>this.handleCode(e)}>中国<span>0086</span></dd>
								                        </dl>
								                        <p className="tips">如果没有找到您的所在归属地，请拨打客服电话4006282835解决。</p>
								                    </div>
								                	<input className="login_enter_code" autocomplete="off" placeholder="输入手机号" name="phone" onBlur={this.bluer3} onFocus={this.focus3}/>
								                </div>	
								            </div>
								            <div className="input_group">
								                <input className="yzm-input" autocomplete="off" placeholder="验证码" name="yzm" onBlur={this.bluer4} onFocus={this.focus4}/>
								                <div className="yzm-btn" >获取验证码</div>
								            </div>
				    					</div>
			    					</div>
	                                </Carousel>
			    				</div>
			    				<div className="forms-bottom">
			    					<div className="forms-bottom-body">
		                            	<div className="login-btn">注册</div>
		                        	</div>    
			    				</div>
			    				<div className="register-btn" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.gotologin}>直接登录</div>
			    				<div className="third-login">
		                            <span>第三方账号登录</span>
		                            <div className="third-login-btns">
			                            <a className="weibo" rel="nofollow" href="https://passport.lagou.com/oauth20/auth_sinaWeiboProvider.html" title="使用新浪微博账号登录" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}></a>
			                            <a className="wechat" rel="nofollow" href="https://passport.lagou.com/oauth20/auth_weixinProvider.html" title="使用微信账号登录" onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2}></a>
			                            <a className="qq" rel="nofollow" href="https://passport.lagou.com/oauth20/auth_qqProvider.html" title="使用腾讯QQ账号登录" onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3}></a>
			                            <a className="baidu" rel="nofollow" href="https://passport.lagou.com/oauth20/auth_baiduProvider.html" title="使用百度账号登录" onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4}></a>
			                        </div>
		                        </div>
		                        <div class="agreement">
                           			 注册代表你已同意
                           			 <a rel="nofollow" href="http://www.lagou.com/privacy.html" target="_blank">「拉勾用户协议」</a>
                           			 及
                           			 <a rel="nofollow" href="http://www.lagou.com/policy.html" target="_blank">「隐私保护政策」</a>
                        		</div>
			    			</div>	
			    		</div>
			    		<div className="passport-pop-wrapper" style={{display:this.state.f?'block':'none'}} onClick={this.gotozh}>
			    			<a className="change-btn" href="#"></a>
			    			<p className="title">注册</p>
			    			<div className="scan-content">
		                        <div className="qrCodeCanvas" title="https://weapp.lagou.com/qr/c/login?authId=enmckjrue1h6yz5k">
		                        	<canvas></canvas>
		                        </div>
		                        <p className="tips">微信扫一扫，快速注册</p>
		                    </div>
		                    <div class="register-btn" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.gotoregister}>直接登录</div>
			    		</div>
			    	</div>
			    </div>
		    </div>
		  )
	}
	login(){
		this.setState({
					login:!this.state.login
				})
	}
	register(){
		this.setState({
					register:!this.state.register
				})
	}
  	guanbi(){
  		this.setState({
					login:!this.state.login
				})
  	}
  	guanbi1(){
  		this.setState({
					register:!this.state.register
				})
  	}
  	handleMouseOver(){
  		$(".register-btn").css({"color":"#00b38a"})
  	}
  	handleMouseOut(){
  		$(".register-btn").css({"color":"#666"})
  	}
  	handleMouseOver1(){
  		$(".weibo").css({"background-position":"-150px -82px"})
  	}
  	handleMouseOut1(){
  		$(".weibo").css({"background-position":"-196px -82px"})
  	}
  	handleMouseOver2(){
  		$(".wechat").css({"background-position":"-149px -206px"})
  	}
  	handleMouseOut2(){
  		$(".wechat").css({"background-position":"-102px -206px"})
  	}
  	handleMouseOver3(){
  		$(".qq").css({"background-position":"-196px -164px"})
  	}
  	handleMouseOut3(){
  		$(".qq").css({"background-position":"-196px -123px"})
  	}
  	handleMouseOver4(){
  		$(".baidu").css({"background-position":"-61px -210px"})
  	}
  	handleMouseOut4(){
  		$(".baidu").css({"background-position":"-20px -210px"})
  	}
  	bluer(){
  		$(".zhanghao").css({"border":"0"})
  	}
  	focus(){
  		$(".zhanghao").css({"border":"1px solid #00b38a"})
  	}
  	bluer1(){
  		$(".mima").css({"border":"0"})
  	}
  	focus1(){
  		$(".mima").css({"border":"1px solid #00b38a"})
  	}
  	clickphone(){
  		this.refs.logins.next();
  		$(".phone").hide()
  		$(".zhang").show()
  	}
  	clickmima(){
  		this.refs.logins.prev();
  		$(".phone").show()
  		$(".zhang").hide()
  	}
  	handleClick(){
  		this.setState({
					n:!this.state.n
				})
  	}
  	handleCode(e){
		//console.log(e.currentTarget.getAttribute('data-id'))
		let code=e.currentTarget.getAttribute('data-id')
		this.setState({
			cd:code,
			n:!this.state.n,
		})
		
	}
  	bluer3(){
  		$(".login_enter_code").css({"border":"0"})
  	}
  	focus3(){
  		$(".login_enter_code").css({"border":"1px solid #00b38a"})
  	}
  	bluer4(){
  		$(".yzm-input").css({"border":"0"})
  	}
  	focus4(){
  		$(".yzm-input").css({"border":"1px solid #00b38a"})
  	}
  	gotowx(){
  		this.setState({
					f:!this.state.f
				})
  	}
  	gotozh(){
  		this.setState({
					f:!this.state.f
				})
  	}
  	gotoregister(){
  		this.setState({
					register:!this.state.register,
					login:!this.state.login
				})
  	}
  	gotoc(){
  		$(".tab-c").addClass("active")
  		$(".tab-b").removeClass("active")
  		this.refs.registers.prev();
  	}
  	gotob(){
  		$(".tab-b").addClass("active")
  		$(".tab-c").removeClass("active")
  		this.refs.registers.next();
  	}
  	gotologin(){
  		this.setState({
					register:!this.state.register,
					login:!this.state.login
				})
  	}
}

export default Header;
