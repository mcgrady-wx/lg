import React, { Component } from 'react';


 class Index extends Component{
	constructor(){
		super();
		this.state={
			n:"哈哈"
		}
	}
	render(){
		return (
		    <div className="App">
		      <input type="text" value={this.state.n}/>
		        
		    </div>
		  )
	}
  
}

export default Index;
