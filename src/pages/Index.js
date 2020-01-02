import React, { Component } from 'react';
import { Carousel } from 'antd';
import $ from 'jquery';
import axios from 'axios'
import Header from '../components/Header';
import Menu from '../components/Menu';
import './Index.css';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';

 class Index extends Component{
	constructor(){
		super();
		this.state={
			code:'0086',
			n:false,
			log:false,
			placeholder:"汽车之家",
			width:0,
			list:[],
			ul:false,
			hour:[]
		};
		this.handleClick=this.handleClick.bind(this);
		this.Click=this.Click.bind(this);
		this.inputOnBlur=this.inputOnBlur.bind(this);
		this.inputOnFocus=this.inputOnFocus.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleMouseOver=this.handleMouseOver.bind(this);
		this.handleMouseOut=this.handleMouseOut.bind(this);
		this.handleLeft=this.handleLeft.bind(this);
		this.handleRight=this.handleRight.bind(this);
		
	}
	render(){
		var lists=this.state.list.map(function(obj,index){
					return <JobItem obj={obj} key={index}/>
				})
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
				<div className="search">
					<div className="search-wrapper">
						<div className="search_box">
							<from className="searchForm">
								<input onChange={this.handleChange} style={{borderWidth:this.state.width}} type="text" className="searchinput" onBlur={this.inputOnBlur} onFocus={this.inputOnFocus} placeholder={this.state.placeholder} />
								<input className="button" type="submit" value="搜索" />
							</from>
						</div>
						<dl className="hotSearch">
							<dt>热门搜索：</dt>
							<dd><a href="#" className="highlight" >年底高薪招聘专场</a></dd>
							<dd><a href="#" className="highlight" >iOS</a></dd>
							<dd><a href="#" className="highlight" >java面试</a></dd>
							<dd><a href="#" className="highlight" >架构设计</a></dd>
							<dd><a href="#" className="highlight" >C++</a></dd>
						</dl>
						<ul className="corner-all" style={{display:this.state.ul?'block':'none'}}>
							{lists}
						</ul>
					</div>
				</div>
				<div className="sidebar">
					<div className="nav">
						<div className="leftnav"><Menu /></div>
						<div className="banner" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
							 <Carousel autoplay ref='img'>
							    <div>
							    	<a href="#"><img src={img7}/></a>
							    </div>
							    <div>
							     	<a href="#"><img src={img8}/></a>
							    </div>
							    <div>
							      	<a href="#"><img src={img9}/></a>
							    </div>
							  </Carousel>
							  <i className="control-left" onClick={this.handleLeft}></i>
							  <i className="control-right" onClick={this.handleRight}></i>
						</div>
					</div>
				</div>
		   	</div>
		  )
	}
	componentWillMount(){
		fetch('hour.json').then((response)=>{
			response.json().then((data)=>{
				this.setState({
					hour:data.content.data.page.result
				})
				
			})
		})
		
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
	inputOnFocus(){
		this.setState({
			placeholder:"搜索职位、公司或地点",
			width:1
		})

	}
	inputOnBlur(){
		this.setState({
			placeholder:"汽车之家",
			width:0
		})
	}
	handleChange(e){
		//console.log(e.target.value)
		let input=e.target.value
		if(input.length){
			axios.get('https://suggest.lagou.com/suggestion/mix', {
		    params: {
			      input:input,
			      type:1,
			      num:10
			    }
			  })
			  .then((response)=>{
			    //console.log(response);
			    let list=response.data.COMPANY;
			    //console.log(list)
			    this.setState({
			    	list:list,
			    	ul:!this.state.ul
			    })
			  })	
		}else{
			this.setState({
			    	ul:!this.state.ul
			    })
		}
		  
	}
	handleMouseOver(){
		$(".control-left").show();
		$(".control-right").show();
		
	}
	handleMouseOut(){
		$(".control-left").hide();
		$(".control-right").hide();

	}
	handleLeft(){
		this.refs.img.prev();
	}
	handleRight(){
		this.refs.img.next();
	}
  
}

class JobItem extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		let {cont,hot}=this.props.obj;
		return (
			<li className="menu-item">
				<a className="ui-all">
					<span className="fl">{cont}</span>
					<span className="fr">共<i>{hot}个</i>职位</span>
				</a>
			</li>
		)
	}
	
}

export default Index;
