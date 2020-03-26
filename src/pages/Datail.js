import React, { Component } from 'react';
import './Datail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

 class Datail extends Component{
	constructor(){
		super();
		this.state={
			id:''
		}
	}
	componentDidMount(){
		//console.log(this.props.location.state.id)
		this.setState({
			id:this.props.location.state.id
		})
	}
	render(){
		
		return (
		    <div>
		    	<Header />
		    	<div className="contents">
		    		欢迎投递ID为<span className="id">{this.state.id}</span>的公司
		    	</div>
		    	<Footer />
		    </div>
		  )
	}
	 
}

export default Datail;
