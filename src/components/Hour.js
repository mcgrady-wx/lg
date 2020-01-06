import React, { Component } from 'react';
import $ from 'jquery';
import './Hour.css';

class Listitem extends Component{
			//初始化状态
			constructor(){
				super();
				this.state={
					show:false
				};
				this.handleMouseOver=this.handleMouseOver.bind(this);
				this.handleMouseOut=this.handleMouseOut.bind(this);
				this.handleMouseOver1=this.handleMouseOver1.bind(this);
				this.handleMouseOut1=this.handleMouseOut1.bind(this);
			};
			render(){
				let {positionName,createTime,hrtou,hrname,hrposition,salary,jinyan,xueli,biaoti,companyLogo,companyFullName,miaoshu,rongzhi,city}=this.props.item;
				var biaotis=biaoti.map(function(obj){
					return <span className="wordCut">{obj}</span>
				});
				return (
					<li className="position_list_item" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}>
			    		<div className="item_box">
			    			<div className="pli_top">
			    				<div className="pli_top_1">
			    					<a ref="#" className="pli_top_name">{positionName}</a>
			    					<span className="pli_top_time">[[createTime]]</span>
			    					<div className="pli_top_tubiao" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
			    						<div className="chat_pop_up" style={{display:this.state.show?"block":"none"}}>
			    							<div className="chat_pop_up_left">
			    								<dl className="chat_head">
			    									<dt>
			    										<img src={hrtou} />
			    									</dt>
			    									<dd>
			    										<h4>{hrname}</h4>
			    										<h5>{hrposition}</h5>
			    									</dd>
			    								</dl>
												<div className="tips_text">Hi，对我发布的职位感兴趣？用拉勾APP扫码，直接和我聊聊吧！</div>		    								
			    							</div>
			    							<div className="chat_pop_up_right"></div>
			    						</div>
			    					</div>
			    					<span className="pli_top_money">{salary}</span>
			    				</div>
			    				<div className="pli_top_2">
			    					经验{jinyan}年/{xueli}
			    				</div>
			    				<div className="pli_top_3">
			    					{biaotis}
			    				</div>
			    			</div>
			    			<div className="pli_btm">
			    				<a href="#" className="pli_btm_1">
			    					<img src={companyLogo} />
			    				</a>
			    				<div className="pli_btm_2">
			    					<h3 className="company_name">
			    						<a href="#">{companyFullName}</a>
			    					</h3>
			    					<h3 className="industry">{miaoshu}/{rongzhi}/{city}</h3>
			    				</div>
			    			</div>
			    		</div>
			    	</li>
				)

			}
			handleMouseOver(){
			
				this.setState({
					show:!this.state.show
				})
			}
		  	handleMouseOut(){
		  		/*$(".chat_pop_up").hide();
				$(".pli_top_tubiao").css({cursor:"none"})*/
				this.setState({
					show:!this.state.show
				})
		  	}
		  	handleMouseOver1(){
		  		$(".position_list_item").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
		  	}
		  	handleMouseOut1(){
		  		$(".position_list_item").css({boxShadow:"none"})
		  	}
		}
 class Hour extends Component{
	constructor(){
		super();
		this.state={
			hour:[]
		};
	}
	render(){
		var lis=this.state.hour.map(function(item){
			return <Listitem item={item} key={item.positionId} />
		})
		return (
		    <ul className="position_list_ul">
		    	{lis}
		    </ul>
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
	
}

export default Hour;
