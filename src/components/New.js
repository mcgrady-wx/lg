import React, { Component } from 'react';
import Listitem from './Listitem'

 class New extends Component{
	constructor(){
		super();
		this.state={
			news:[]
		};
	}
	render(){
		var lis=this.state.news.map(function(item){
			return <Listitem item={item} key={item.positionId} />
		})
		return (
		    <ul className="position_list_ul">
		    	{lis}
		    </ul>
		  )
	}
	componentWillMount(){
		fetch('news.json').then((response)=>{
			response.json().then((data)=>{
				this.setState({
					news:data.content.data.page.result
				})
				
			})
		})
		
	}
	
}

export default New;
