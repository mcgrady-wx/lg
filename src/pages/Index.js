import React, { Component } from 'react';
import Header from '../components/Header';
import './Index.css';

 class Index extends Component{
	constructor(){
		super();
		this.state={
			code:'0086',
			n:false,
			log:false
		};
		this.handleClick=this.handleClick.bind(this);
		this.Click=this.Click.bind(this);
	}
	render(){
		return (
			<div>
		   		<Header />
		   		<div className="un-login-banner">
				    <div className="inner">
				        <div className="img-wrapper">   
				        </div>
				        <div className="register-login-form">
				            <div className="input-wrapper">
				                <div className="area-code-content">
				                    <span className="area-code-span" onClick={this.handleClick}>{this.state.code}</span>
				                    <div className="area-code-list" style={{display:this.state.n?'block':'none'}}>
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
				                </div>
				                <input className="tel-input" autocomplete="off" placeholder="输入手机号" name="phone" />
				            </div>
				            <div className="input-wrapper">
				                <input className="yzm-input" autocomplete="off" placeholder="验证码" name="yzm" />
				                <div className="yzm-btn" >获取</div>
				            </div>
				            <a className="register-login-btn" href="javascript: void 0;" onClick={this.Click}>登录/注册</a>
				            <div className="error-area" style={{display:this.state.log?'block':'none'}}>
				                <p>请输入手机/请输入验证码</p>
				            </div>
				        </div>
				    </div>
				</div>
		   	</div>
		  )
	}
	handleClick(){
		let n=this.state.n
		this.setState({
			n:!n
		})
	}
	Click(){
		this.setState({
			log:!this.state.log
		})
	}
	handleCode(e){
		//console.log(e.currentTarget.getAttribute('data-id'))
		let code=e.currentTarget.getAttribute('data-id')
		this.setState({
			code:code,
			n:!this.state.n,
		})
		
	}
  
}

export default Index;
