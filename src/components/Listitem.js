import React, { Component } from 'react';
import './Listitem.css';
import {withRouter} from 'react-router-dom';//把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上

class Listitem extends Component{
			//初始化状态
			constructor(){
				super();
				this.state={
					show:false,
					big:false,
					pointer:false
				};
				this.handleMouseOver=this.handleMouseOver.bind(this);
				this.handleMouseOut=this.handleMouseOut.bind(this);
				this.handleMouseOver1=this.handleMouseOver1.bind(this);
				this.handleMouseOut1=this.handleMouseOut1.bind(this);
			};
			render(){
				let {positionId,positionName,createTime,hrtou,hrname,hrposition,salary,jinyan,xueli,biaoti,companyLogo,companyFullName,miaoshu,rongzhi,city}=this.props.item;
				var biaotis=biaoti.map(function(obj){
					return <span className="wordCut">{obj}</span>
				});
				return (
					<li className="position_list_item" style={{boxShadow:this.state.big?"0 0 4px 2px rgba(0,0,0,.09)":"none"}} onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}> 
			    		<div className="item_box">
			    			<div className="pli_top">
			    				<div className="pli_top_1">
			    					<a ref="#" className="pli_top_name" onClick={this.handleGoToDatail.bind(this)} data-positionId={positionId}>{positionName}</a>
			    					<span className="pli_top_time">{createTime}</span>
			    					<div className="pli_top_tubiao" style={{cursor:this.state.pointer?"pointer":"none"}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
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
					show:!this.state.show,
					pointer:!this.state.pointer
				})
			}
		  	handleMouseOut(){
				this.setState({
					show:!this.state.show,
					pointer:!this.state.pointer
				})
		  	}
		  	handleMouseOver1(){
		  		this.setState({
					big:!this.state.big
				})
		  	}
		  	handleMouseOut1(){
		  		this.setState({
					big:!this.state.big
				})
		  	}
		  	handleGoToDatail(e){
		  		//console.log(e.target.dataset.positionid)
		  		//console.log(this.props)
		  		let id=e.target.dataset.positionid
		  		this.props.history.push({ pathname: '/datail/'+id,state: { id } })
		  	}
		}


//高阶组件
export default withRouter(Listitem);