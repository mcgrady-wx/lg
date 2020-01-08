import React, { Component } from 'react';

import './Internet.css';

 class Internet extends Component{
	constructor(){
		super();
		
	}
	render(){
		
		return (
		    
		    <div className="internet">
				<div className="internet-nav">
					<p>互联网热门公司榜</p>
				</div>
				<div className="internet-list">
					<ul className="internet-list-ul">
						<li className="internet-list-item">
							<div class="top">
			                    <p>
			                        <a href="#" >
			                            <img src="//www.lgstatic.com/thumbnail_160x160/i/image3/M00/1E/37/Cgq2xlqPqvqAaO0vAAAMxE8jvM4347.png" width="80" height="80" />                            
			                        </a>
			                    </p>
			                    <h3 class="company-name ">
			                        <a href="#" target="_blank" >瓦拉数字</a>
			                    </h3>
			                    <h4 class="indus-stage ">
			                        <span>移动互联网,金融/B轮</span>                               
			                    </h4>
			                    <h4 class="advantage">区块链技术平台初创公司，拥有业界良好资源，投身区</h4>
			                </div>
			                <div class="bottom">
			                    <a class="bottom-item1" href="#">
			                      	<p class="green">
			                            <span>68</span>
			                        </p>
			                       <p class="gray">面试评价</p>
			                       <span className="xian">|</span>
			                    </a>
			                    <a class="bottom-item2" href="#">
			                        <p class="green">
			                            <span>27</span>
			                        </p>
			                        <p class="gray">在招职位</p>
			                        <span className="xian">|</span>
			                    </a>
			                    <a class="bottom-item3" href="#" >
			                        <p class="green">
			                            <span>100%</span>
			                        </p>
			                        <p class="gray">简历处理率</p>
			                    </a>
			                </div>
						</li>
						<li className="internet-list-item"></li>
						<li className="internet-list-item"></li>
						<li className="internet-list-item"></li>
						<li className="internet-list-item"></li>
						<li className="internet-list-item"></li>
						<li className="internet-list-item"></li>
						<li className="internet-list-item"></li>
						
					</ul>
					<a href="#" class="list_more">查看更多</a>
				</div>
			</div>
			
		  )
	}
  
}

export default Internet;
