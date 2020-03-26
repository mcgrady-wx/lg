import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, //你要用路径模式,路由的最外层
  Route, //路由切换的坑,组件的载体
  Link, //模板切换的组件
  NavLink,//模板切换的组件,可以通过activeClassName添加class类名
  Redirect,//重定向
  Switch//默认只匹配一个
} from 'react-router-dom';
import Index from './pages/Index';
import Datail from './pages/Datail';
function App() {
  return (
    <div className="App">
    	<Router>
	      <Switch>
					<Route path="/index" component={Index}></Route>
					<Route path="/datail/:id" component={Datail}></Route>
					<Redirect path="/" to="/index"></Redirect>		    	
				</Switch>
			</Router>
    </div>
  );
}

export default App;
