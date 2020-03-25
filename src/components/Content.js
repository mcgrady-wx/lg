import React, { Component } from 'react';
import New from './New';
import Hour from './Hour';
import './Content.css';

 class Content extends Component{
	constructor(){
		super();
		this.state={
			who:true,
			currentState:true
		}
		
	}
	render(){
		
		return (
		
		    <div className="hour_new">
					<ul className="content-nav">					
						<li className="hour"><span className={`active ${this.state.currentState?"link_active":""}`} onClick={this.hour.bind(this)}>24Hour热门</span></li>
						<li className="new"><span className={`active ${this.state.currentState?"":"link_active"}`} onClick={this.new.bind(this)}>最新职位</span></li>
					</ul>
					<div className="content-list">
						{this.state.who?<Hour />:<New />}
					</div>
					<a href="#" class="list_more">查看更多</a>
				</div>
		
		  )
	}
	hour(){
		this.setState({
			currentState:true,
			who:true
		})
	}
	new(){
		this.setState({
			currentState:false,
			who:false
		})
	}
  
}

export default Content;
