import React, { Component } from 'react';
import { Carousel } from 'antd';
import $ from 'jquery';
import axios from 'axios'
import Header from '../components/Header';
import Menu from '../components/Menu';
import Content from '../components/Content';
import Internet from '../components/Internet';
import Footer from '../components/Footer';
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
			height:false,
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
		this.handleClick=this.handleClick.bind(this);
		
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
				<div className="content">
					<div className="content-box">
						<Content />
						<Internet />
					</div>
				</div>
				<div className="link">
					<div className="linkbox">
						<dl>
        					<dt><span className="current">友情链接</span></dt>
        					<dd class="links" style={{height:this.state.height?"124px":"31px"}}>
                                <a href="http://www.lagou.com/" target="_blank" className="friend-link">拉勾网</a>
                                <a href="http://www.lagou.com/" target="_blank" className="friend-link">找工作</a>
                                <a href="http://www.lagou.com/" target="_blank" className="friend-link">招聘网</a>
                                <a href="http://www.lagou.com" target="_blank" className="friend-link">招聘</a>
                                <a href="http://kaiwu.lagou.com/course/courseInfo.htm?courseId=1" target="_blank" className="friend-link">java课</a>
                                <a href="http://kaiwu.lagou.com/course/courseInfo.htm?courseId=2" target="_blank" className="friend-link">架构课</a>
                                <a href="http://www.offcn.com" target="_blank" className="friend-link">国家公务员考试网</a>
                                <a href="http://www.eqxiu.com/" target="_blank" className="friend-link">易企秀H5</a>
                                <a href="http://www.lagou.com/s/list_5330ed5dd3d161b369c6c8a4d1a9d17555d6519424b22bf350ae863857ac5565" target="_blank" className="friend-link">移动WEB开发工程师</a>
                                <a href="http://www.wangxiao.cn" target="_blank" className="friend-link">中大网校</a>
                                <a href="http://www.woshipm.com/" target="_blank" className="friend-link">人人都是产品经理</a>
                                <a href="http://www.chinairn.com/" target="_blank" className="friend-link">研究报告</a>
                                <a href="http://www.examw.com/" target="_blank" className="friend-link">中华考试网</a>
                                <a href="http://www.zgjsks.com" target="_blank" className="friend-link">教师网</a>
                                <a href="http://www.lagou.com/hangzhou/" target="_blank" className="friend-link">杭州招聘</a>
                                <a href="http://www.lagou.com/shanghai/" target="_blank" className="friend-link">上海招聘</a>
                                <a href="http://china.findlaw.cn/" target="_blank" className="friend-link">法律咨询</a>
                                <a href="http://www.jobui.com" target="_blank" className="friend-link">求职网站</a>
                                <a href="http://www.yuwenmi.com/" target="_blank" className="friend-link">语文学习网</a>
                                <a href="http://www.job592.com/" target="_blank" className="friend-link">职业圈</a>
                                <a href="http://finance.gucheng.com/" target="_blank" className="friend-link">股城财经</a>
                                <a href="http://www.zbj.com/" target="_blank" className="friend-link">创意服务外包</a>
                                <a href="http://www.lawtime.cn/" target="_blank" className="friend-link">法律咨询</a>
                                <a href="http://www.99114.com/" target="_blank" className="friend-link">电子商务平台</a>
                                <a href="http://www.64365.com" target="_blank" className="friend-link">法律咨询网</a>
                                <a href="http://www.jianzhi8.com/" target="_blank" className="friend-link">兼职吧</a>
                                <a href="http://ishare.iask.sina.com.cn/" target="_blank" className="friend-link">爱问共享资料</a>
                                <a href="http://www.liepin.com/" target="_blank" className="friend-link">招聘</a>
                                <a href="http://baike.1688.com/" target="_blank" className="friend-link">生意经商业百科</a>
                                <a href="http://tuku.jia.com" target="_blank" className="friend-link">装修效果图</a>
                                <a href="http://www.ickd.cn" target="_blank" className="friend-link">快递查询</a>
                                <a href="http://www.eoffcn.com" target="_blank" className="friend-link">中公公务员网校</a>
                                <a href="http://www.job5156.com/" target="_blank" className="friend-link">招聘网</a>
                                <a href="http://www.qianzhan.com" target="_blank" className="friend-link">前瞻网</a>
                                <a href="http://shanghai.baixing.com/ " target="_blank" className="friend-link">上海分类信息网</a>
                                <a href="http://www.goodjobs.cn" target="_blank" className="friend-link">安徽招聘网</a>
                                <a href="http://www.huibo.com" target="_blank" className="friend-link">重庆人才网</a>
                                <a href="http://www.canet.com.cn/" target="_blank" className="friend-link">中国会计网</a>
                                <a href="http://www.qlrc.com/" target="_blank" className="friend-link">齐鲁人才网</a>
                                <a href="http://www.youbian.com/" target="_blank" className="friend-link">邮编生活网</a>
                                <a href="http://www.lagou.com/gongsi/j62.html" target="_blank" className="friend-link">字节跳动招聘</a>
                                <a href="http://www.lagou.com/gongsi/254799.html" target="_blank" className="friend-link">小鹏汽车招聘</a>
                                <a href="http://www.lagou.com/gongsi/59178.html" target="_blank" className="friend-link">泛华金融</a>
                                <a href="http://www.lagou.com/gongsi/263106.html" target="_blank" className="friend-link">简学网</a>
                                <a href="http://www.lagou.com/gongsi/93527.html" target="_blank" className="friend-link">易企秀</a>
                                <a href="http://www.lagou.com/gongsi/10359.html" target="_blank" className="friend-link">酷家乐</a>
                                <a href="http://www.lagou.com/gongsi/j7461.html" target="_blank" className="friend-link">有赞</a>
                                <a href="http://www.lagou.com/gongsi/6356.html" target="_blank" className="friend-link">兼职猫</a>
                                <a href="https://www.lagou.com/af/flink.html" target="_blank" className="more" rel="nofollow">更多</a>                                
        					</dd>
        					<span rel="nofollow" href="javascript:;" className="expansion" onClick={this.handleClick}>{this.state.height?"收起":"展开"}<i></i></span>
    					</dl>
					</div>
				</div>
				<Footer />
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
	handleClick(){
		
		this.setState({
					height:!this.state.height
				})
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
