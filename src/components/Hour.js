import React, { Component } from 'react';
import './Hour.css';
 class Hour extends Component{
	constructor(){
		super();
		this.state={
			hour:[]
		};
		
	}
	render(){
		return (
		    <ul className="position_list_ul">
		    	<li className="position_list_item">
		    		<div className="item_box">
		    			<div className="pli_top">
		    				<div className="pli_top_1">
		    					<a ref="#" className="pli_top_name">新媒体运营经理 </a>
		    					<span className="pli_top_time">[13:53发布]</span>
		    					<div className="pli_top_tubiao"></div>
		    					<span className="pli_top_money">15k-25k</span>
		    				</div>
		    			</div>
		    			<div className="pli_btm">aaaa</div>
		    		</div>
		    	</li>
		    	<li className="position_list_item"></li>
		    	<li className="position_list_item"></li>
		    	<li className="position_list_item"></li>
		    	<li className="position_list_item"></li>
		    	<li className="position_list_item"></li>
		    	<li className="position_list_item"></li>
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
