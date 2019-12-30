import React, { Component } from 'react';
import $ from 'jquery';
import './Menu.css';

class Menu extends Component{
	constructor(){
		super();
		this.handleMouseOver=this.handleMouseOver.bind(this);
		this.handleMouseOut=this.handleMouseOut.bind(this);
		this.handleMouseOver1=this.handleMouseOver1.bind(this);
		this.handleMouseOut1=this.handleMouseOut1.bind(this);
		this.handleMouseOver2=this.handleMouseOver2.bind(this);
		this.handleMouseOut2=this.handleMouseOut2.bind(this);
		this.handleMouseOver3=this.handleMouseOver3.bind(this);
		this.handleMouseOut3=this.handleMouseOut3.bind(this);
		this.handleMouseOver4=this.handleMouseOver4.bind(this);
		this.handleMouseOut4=this.handleMouseOut4.bind(this);
		this.handleMouseOver5=this.handleMouseOver5.bind(this);
		this.handleMouseOut5=this.handleMouseOut5.bind(this);
		this.handleMouseOver6=this.handleMouseOver6.bind(this);
		this.handleMouseOut6=this.handleMouseOut6.bind(this);
		this.handleMouseOver7=this.handleMouseOver7.bind(this);
		this.handleMouseOut7=this.handleMouseOut7.bind(this);
	}
	render(){
		return (
			<div className="mainNavs">
				<div className="menu_box" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
            		<div className="menu_main" id="jishu_main">
                		<div className="category-list">
                   			<h2>技术</h2>                                                                                                                                        
                    		<a href="#"><h3>Java</h3></a>
                    		<a href="#"><h3>PHP</h3></a>
                            <a href="#"><h3>C++</h3></a>                  
                            <a href="#"><h3>区块链</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub" id="jishu">
                        <dl>
                            <dt><span>后端开发</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>Java</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>C++</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>PHP</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>数据挖掘</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>搜索算法</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>精准推荐</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>C</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>C#</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>全栈工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>.NET</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Hadoop</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Python</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Delphi</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>VB</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Perl</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Ruby</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Node.js</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Go</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>ASP</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Shell</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>区块链</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>后端开发其它</h3></a>
                            </dd>                             
                        </dl>
                        <dl>
                            <dt><span>移动开发</span></dt>
                   			<dd>
                        		<a href="#"><h3>HTML5</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Android</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>iOS</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>WP</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>移动开发其它</h3></a><span>|</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>前端开发</span></dt>
                   			<dd>
                        		<a href="#"><h3>web前端</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Flash</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>html5</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>JavaScript</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>U3D</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>COCOS2D-X</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>前端开发其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>人工智能</span><i class="icon_new"></i></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>深度学习</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>机器学习</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>图像处理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>图像识别</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>语音识别</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>机器视觉</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>算法工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>自然语言处理</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>测试</span></dt>
                   			<dd>
                        		<a href="#"><h3>测试工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>自动化测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>功能测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>性能测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>测试开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>白盒测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>灰盒测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>黑盒测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>手机测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>硬件测试</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>测试经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>测试其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>运维</span></dt>
                   			<dd>
                        		<a href="#"><h3>运维工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>运维开发工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>网络工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>系统工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>IT支持</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>IDC</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>CDN</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>F5</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>系统管理员</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>病毒分析</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>WEB安全</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>网络安全</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>系统安全</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>运维经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>运维其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>DBA</span></dt>
                   			<dd>
                        		<a href="#"><h3>MySQL</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>SQLServer</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Oracle</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>DB2</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>MongoDB</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>ETL</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Hive</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>数据仓库</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>DBA其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>高端职位</span></dt>
                   			<dd>
                        		<a href="#"><h3>技术经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>技术总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>架构师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>CTO</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>运维总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>技术合伙人</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>项目总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>测试总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>安全专家</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>高端技术职位其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>项目管理</span></dt>
                   			<dd>
                        		<a href="#"><h3>项目经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>项目助理</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>硬件开发</span></dt>
                   			<dd>
                        		<a href="#"><h3>硬件</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>嵌入式</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>自动化</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>单片机</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>电路设计</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>驱动开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>系统集成</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>FPGA开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>DSP开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>ARM开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>PCB工艺</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>模具设计</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>热传导</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>材料工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>精益工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>射频工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>硬件开发其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>企业软件</span></dt>
                   			<dd>
                        		<a href="#"><h3>实施工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>售前工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>售后工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>BI工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>企业软件其它</h3></a>
                            </dd>
                        </dl>
                    </div>
        		</div>
        		<div className="menu_box" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}>
            		<div className="menu_main" id="chanpin_main">
                		<div className="category-list">
                   			<h2>产品</h2>                                                                                                                                        
                    		<a href="#"><h3>产品总监</h3></a>
                    		<a href="#"><h3>产品经理</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub" id="chanpin">
                        <dl>
                            <dt><span>产品经理</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>产品经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>网页产品经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>移动产品经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>产品助理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>数据产品经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>电商产品经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>游戏策划</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>产品实习生</h3></a>
                            </dd>        
                        </dl>
                        <dl>
                            <dt><span>产品设计师</span></dt>
                   			<dd>
                        		<a href="#"><h3>网页产品设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>无线产品设计师</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>高端职位</span></dt>
                   			<dd>
                        		<a href="#"><h3>产品部经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>产品总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏制作人</h3></a>
                            </dd>
                        </dl>
                        
                    </div>
        		</div>
        		<div className="menu_box" onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2}>
            		<div className="menu_main" id="sheji_main">
                		<div className="category-list">
                   			<h2>设计</h2>                                                                                                                                        
                    		<a href="#"><h3>UI设计师</h3></a>
                    		<a href="#"><h3>交互设计</h3></a>
                    		<a href="#"><h3>网页设计师</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub" id="sheji">
                        <dl>
                            <dt><span>视觉设计</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>视觉设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>网页设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>Flash设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>APP设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>UI设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>平面设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>美术设计师（2D/3D）</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>广告设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>多媒体设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>原画师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏特效</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏界面设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏场景</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏角色</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏动作</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>交互设计</span></dt>
                   			<dd>
                        		<a href="#"><h3>交互设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>无线交互设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>网页交互设计师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>硬件交互设计师</h3></a>
                            </dd>
                        </dl>
                         <dl>
                            <dt><span>用户研究</span></dt>
                   			<dd>
                        		<a href="#"><h3>数据分析师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>用户研究员</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏数值策划</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>高端职位</span></dt>
                   			<dd>
                        		<a href="#"><h3>设计经理/主管</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>设计总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>视觉设计经理/主管</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>视觉设计总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>交互设计经理/主管</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>交互设计总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>用户研究经理/主管</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>用户研究总监</h3></a>
                            </dd>
                        </dl>
                        
                    </div>
        		</div>
        		<div className="menu_box" onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3}>
            		<div className="menu_main" id="yunying_main">
                		<div className="category-list">
                   			<h2>运营</h2>                                                                                                                                        
                    		<a href="#"><h3>新媒体运营</h3></a>
                    		<a href="#"><h3>编辑</h3></a>
                    		<a href="#"><h3>数据运营</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub" id="yunying">
                        <dl>
                            <dt><span>运营</span></dt>
                   			<dd>
                        		<a href="#"><h3>用户运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>产品运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>数据运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>内容运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>活动运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>商家运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>品类运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>网络推广</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>运营专员</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>网店运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>新媒体运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>海外运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>运营经理</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>编辑</span></dt>
                   			<dd>
                        		<a href="#"><h3>副主编</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>内容编辑</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>文案策划</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>记者</h3></a>
                            </dd>
                        </dl>
                         <dl>
                            <dt><span>客服</span></dt>
                   			<dd>
                        		<a href="#"><h3>售前咨询</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>售后客服</h3></a><span>|</span>
                            </dd>
                             <dd>
                        		<a href="#"><h3>淘宝客服</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>客服经理</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>高端职位</span></dt>
                   			<dd>
                        		<a href="#"><h3>主编</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>运营总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>COO</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>客服总监</h3></a>
                            </dd>
                        </dl>                       
                    </div>
        		</div>
        		<div className="menu_box" onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4}>
            		<div className="menu_main" id="shichang_main">
                		<div className="category-list">
                   			<h2>市场</h2>                                                                                                                                        
                    		<a href="#"><h3>市场营销</h3></a>
                    		<a href="#"><h3>市场推广</h3></a>
                    		<a href="#"><h3>市场策划</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub" id="shichang">
                        <dl>
                            <dt><span>市场/营销</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>市场营销</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>市场策划</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>市场顾问</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>商务渠道</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>商业数据分析</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>活动策划</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>网络营销</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>海外市场</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>商务专员</h3></a>
                            </dd>                           
                        </dl>
                        <dl>
                            <dt><span>媒介/公关</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>政府关系</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>品牌公关</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>广告协调</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>媒介投放</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>媒介合作</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>媒介顾问</h3></a>
                            </dd>
                        </dl>
                         <dl>
                            <dt><span>品牌/广告</span></dt>
                   			<dd>
                        		<a href="#"><h3>广告创意</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>广告制作</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>广告文案</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>广告投放</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>广告定价</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>广告专员</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>品牌合作</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>品牌策划</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>品牌专员</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>美术指导</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>渠道/推广</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>市场推广</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>渠道推广</h3></a><span>|</span>
                            </dd>
                             <dd>
                        		<a href="#" className="curr"><h3>SEO</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>SEM</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>高端职位</span></dt>
                   			<dd>
                        		<a href="#"><h3>策划经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>媒介经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>市场总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>公关总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>媒介总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>创意总监</h3></a>
                            </dd>
                        </dl>                       
                    </div>
        		</div>
        		<div className="menu_box" onMouseOver={this.handleMouseOver5} onMouseOut={this.handleMouseOut5}>
            		<div className="menu_main" id="xiaoshou_main">
                		<div className="category-list">
                   			<h2>销售</h2>                                                                                                                                        
                    		<a href="#"><h3>销售专员</h3></a>
                    		<a href="#"><h3>销售经理</h3></a>
                    		<a href="#"><h3>销售总监</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub" id="xiaoshou">
                        <dl>
                            <dt><span>销售</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>销售专员</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>销售顾问</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>销售经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>客户代表</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>大客户代表</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>客户经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>商务拓展</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>渠道销售</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>代理商销售</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>电话销售</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>广告销售</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>信用卡销售</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>保险销售</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>销售工程师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>商务渠道</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>其他销售</h3></a>
                            </dd>                           
                        </dl>
                        <dl>
                            <dt><span>销售管理</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>销售总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>商务总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>区域总监</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>城市经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>团队经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>销售VP</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>商务主管</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>其他销售管理职位</h3></a>
                            </dd>
                        </dl>
                    </div>   
        		</div>
        		<div className="menu_box" onMouseOver={this.handleMouseOver6} onMouseOut={this.handleMouseOut6}>
            		<div className="menu_main" id="zhineng_main">
                		<div className="category-list">
                   			<h2>职能</h2>                                                                                                                                        
                    		<a href="#"><h3>HR</h3></a>
                    		<a href="#"><h3>行政</h3></a>
                    		<a href="#"><h3>财务</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub" id="zhineng">
                        <dl>
                            <dt><span>人力资源</span></dt>
                   			<dd>
                        		<a href="#"><h3>人力资源</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>招聘</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>HRBP</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>人事/HR</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>培训经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>薪资福利经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>绩效考核经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>员工关系</h3></a>
                            </dd>                           
                        </dl>
                        <dl>
                            <dt><span>行政</span></dt>
                   			<dd>
                        		<a href="#"><h3>助理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>前台</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>行政</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>总助</h3></a><span>|</span>
                            </dd>                           
                            <dd>
                        		<a href="#"><h3>文秘</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>财务</span></dt>
                   			<dd>
                        		<a href="#"><h3>会计</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>出纳</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>财务</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>结算</h3></a><span>|</span>
                            </dd> 
                             <dd>
                        		<a href="#"><h3>税务</h3></a><span>|</span>
                            </dd>
                             <dd>
                        		<a href="#" className="curr"><h3>审计</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>风控</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>法务</span></dt>
                   			<dd>
                        		<a href="#"><h3>法务</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>律师</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>专利</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>高端职位</span></dt>
                   			<dd>
                        		<a href="#"><h3>行政总监/经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>财务总监/经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>HRD/HRM</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>CFO</h3></a><span>|</span>
                            </dd>                              
                            <dd>
                        		<a href="#"><h3>CEO</h3></a>
                            </dd>
                        </dl>
                    </div>
        		</div>
        		<div className="menu_box" onMouseOver={this.handleMouseOver7} onMouseOut={this.handleMouseOut7}>
            		<div className="menu_main" id="youxi_main">
                		<div className="category-list">
                   			<h2>游戏</h2>                                                                                                                                        
                    		<a href="#"><h3>小游戏开发</h3></a>
                    		<a href="#"><h3>U3D</h3></a>
                    		<a href="#"><h3>游戏策划</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub" id="youxi">
                        <dl>
                            <dt><span>技术开发</span></dt>
                   			<dd>
                        		<a href="#"><h3>H5游戏开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>小游戏开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏后端开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>C++游戏开发</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>FLASH</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>COCOS2D-X</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>U3D</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏测试</h3></a>
                            </dd>                           
                        </dl>
                        <dl>
                            <dt><span>产品策划</span></dt>
                   			<dd>
                        		<a href="#"><h3>游戏制作人</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏产品经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏项目经理</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>游戏策划</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>剧情设计</h3></a><span>|</span>
                            </dd>                                                     
                            <dd>
                        		<a href="#"><h3>游戏文案</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>设计</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>游戏动画</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>游戏原画</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏界面</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏场景</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏角色</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏动作</h3></a><span>|</span>
                            </dd> 
                            <dd>
                        		<a href="#"><h3>游戏动效</h3></a><span>|</span>
                            </dd> 
                            <dd>
                        		<a href="#"><h3>游戏美工</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>运营/推广</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>游戏运营</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏编辑</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏推广</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>手游推广</h3></a><span>|</span>
                            </dd>                           
                            <dd>
                        		<a href="#"><h3>页游推广</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>其他</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>游戏主播</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>游戏陪练</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>游戏体验</h3></a><span>|</span>
                            </dd>
                            <dd>
                        		<a href="#"><h3>电竞主持</h3></a><span>|</span>
                            </dd>                           
                            <dd>
                        		<a href="#"><h3>电竞讲师</h3></a>
                            </dd>
                        </dl>
                    </div>
                </div>    
			</div>
		)
	}
	handleMouseOver(){
		$("#jishu").show();
		$("#jishu_main").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
	}
	handleMouseOut(){
		$("#jishu").hide()
		$("#jishu_main").css({boxShadow:"none"})
	}
	handleMouseOver1(){
		$("#chanpin").show();
		$("#chanpin_main").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
	}
	handleMouseOut1(){
		$("#chanpin").hide()
		$("#chanpin_main").css({boxShadow:"none"})
	}
	handleMouseOver2(){
		$("#sheji").show();
		$("#sheji_main").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
	}
	handleMouseOut2(){
		$("#sheji").hide()
		$("#sheji_main").css({boxShadow:"none"})
	}
	handleMouseOver3(){
		$("#yunying").show();
		$("#yunying_main").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
	}
	handleMouseOut3(){
		$("#yunying").hide()
		$("#yunying_main").css({boxShadow:"none"})
	}
	handleMouseOver4(){
		$("#shichang").show();
		$("#shichang_main").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
	}
	handleMouseOut4(){
		$("#shichang").hide()
		$("#shichang_main").css({boxShadow:"none"})
	}
	handleMouseOver5(){
		$("#xiaoshou").show();
		$("#xiaoshou_main").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
	}
	handleMouseOut5(){
		$("#xiaoshou").hide()
		$("#xiaoshou_main").css({boxShadow:"none"})
	}
	handleMouseOver6(){
		$("#zhineng").show();
		$("#zhineng_main").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
	}
	handleMouseOut6(){
		$("#zhineng").hide()
		$("#zhineng_main").css({boxShadow:"none"})
	}
	handleMouseOver7(){
		$("#youxi").show();
		$("#youxi_main").css({boxShadow:"0 0 4px 2px rgba(0,0,0,.09)"})
	}
	handleMouseOut7(){
		$("#youxi").hide()
		$("#youxi_main").css({boxShadow:"none"})
	}
}
 
export default Menu;