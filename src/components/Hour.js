import React, { Component } from 'react';
import Listitem from './Listitem'

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
