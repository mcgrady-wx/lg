import React, { Component } from 'react';

import './Internet.css';

 class Internet extends Component{
	constructor(){
		super();
		this.state={
			internet:[]
		}
	}
	render(){
		let lists=this.state.internet.map(function(item){
			return <Item item={item} key={item.positionId} />
		})
		return (
		    
		    <div className="internet">
				<div className="internet-nav">
					<p>互联网热门公司榜</p>
				</div>
				<div className="internet-list">
					<ul className="internet-list-ul">
						{lists}
					</ul>
					<a href="#" class="list_more">查看更多</a>
				</div>
			</div>
			
		  )
	}
	componentWillMount(){
		fetch('internet.json').then((response)=>{
			response.json().then((data)=>{
				this.setState({
					internet:data.content.data.page.result
				})
				
			})
		})
  	}
}

class Item extends Component{
	constructor(){
		super();
		this.state={
			big:false
		};
		this.handleMouseOver=this.handleMouseOver.bind(this);
		this.handleMouseOut=this.handleMouseOut.bind(this);
	}
	render(){
		let {companyLogo,companyName,miaoshu,rongzhi,biaoti,mianshi,zhiwei,chuli}=this.props.item;
		return (
		    <li className="internet-list-item" style={{boxShadow:this.state.big?"0 0 4px 2px rgba(0,0,0,.09)":"none"}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				<div class="top">
                    <p>
                        <a href="#" >
                            <img src={companyLogo} width="80" height="80" />                            
                        </a>
                    </p>
                    <h3 class="company-name ">
                        <a href="#">{companyName}</a>
                    </h3>
                    <h4 class="indus-stage ">
                        <span>{miaoshu}/{rongzhi}</span>                               
                    </h4>
                    <h4 class="advantage">{biaoti}</h4>
                </div>
                <div class="bottom">
                    <a class="bottom-item1 fl" href="#">
                      	<p class="green">
                            <span>{mianshi}</span>
                        </p>
                       <p class="gray">面试评价</p>
                       <span className="xian">|</span>
                    </a>
                    <a class="bottom-item2 fl" href="#">
                        <p class="green">
                            <span>{zhiwei}</span>
                        </p>
                        <p class="gray">在招职位</p>
                        <span className="xian">|</span>
                    </a>
                    <a class="bottom-item3 fl" href="#" >
                        <p class="green">
                            <span>{chuli}</span>
                        </p>
                        <p class="gray">简历处理率</p>
                    </a>
                </div>
			</li>
		  )
	}
	handleMouseOver(){
  		this.setState({
			big:!this.state.big
		})
  	}
  	handleMouseOut(){
  		this.setState({
			big:!this.state.big
		})
  	}
}

export default Internet;
