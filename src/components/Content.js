import React, { Component } from 'react';
import New from './New';
import Hour from './Hour';
import {
  HashRouter as Router, //你要用路径模式,路由的最外层
  Route, //路由切换的坑,组件的载体
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';
import './Content.css';

 class Content extends Component{
	constructor(){
		super();
		
	}
	render(){
		
		return (
		    <Router>
				<ul className="content-nav">
					<li className="hour"><NavLink to="/hour" activeClassName="link_active">24Hour热门</NavLink></li>
					<li className="new"><NavLink to="/new" activeClassName="link_active">最新职位</NavLink></li>
				</ul>
				<div className="content-list">
					<Switch>
				      	<Route path="/hour" component={Hour}></Route>
				      	<Route path="/new" component={New}></Route>
				    	<Redirect path="/" to="/hour"></Redirect>
				    	
			      	</Switch>
				</div>
			</Router>
		  )
	}
  
}

export default Content;
