import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="mainNavs">
				<div className="menu_box">
            		<div className="menu_main">
                		<div className="category-list">
                   			<h2>技术</h2>                                                                                                                                        
                    		<a href="#"><h3>Java</h3></a>
                    		<a href="#"><h3>PHP</h3></a>
                            <a href="#"><h3>C++</h3></a>                  
                            <a href="#"><h3>区块链</h3></a>
                            <i class="arrow"></i>
                		</div>
            		</div>
            		<div className="menu_sub">
                        <dl>
                            <dt><span>后端开发</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>Java</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>C++</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>PHP</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>数据挖掘</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>搜索算法</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>精准推荐</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>C</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>C#</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>全栈工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>.NET</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Hadoop</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Python</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Delphi</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>VB</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Perl</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Ruby</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Node.js</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Go</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>ASP</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Shell</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>区块链</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>后端开发其它</h3></a>
                            </dd>                             
                        </dl>
                        <dl>
                            <dt><span>移动开发</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>HTML5</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Android</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>iOS</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>WP</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>移动开发其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>前端开发</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>web前端</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Flash</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>html5</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>JavaScript</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>U3D</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>COCOS2D-X</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>前端开发其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>人工智能</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>深度学习</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>机器学习</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>图像处理</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>图像识别</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>语音识别</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>机器视觉</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>算法工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>自然语言处理</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>测试</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>测试工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>自动化测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>功能测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>性能测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>测试开发</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>游戏测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>白盒测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>灰盒测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>黑盒测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>手机测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>硬件测试</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>测试经理</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>测试其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>运维</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>运维工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>运维开发工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>网络工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>系统工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>IT支持</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>IDC</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>CDN</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>F5</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>系统管理员</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>病毒分析</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>WEB安全</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>网络安全</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>系统安全</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>运维经理</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>运维其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>DBA</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>MySQL</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>SQLServer</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Oracle</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>DB2</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>MongoDB</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>ETL</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>Hive</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>数据仓库</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>DBA其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>高端职位</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>技术经理</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>技术总监</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>架构师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>CTO</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>运维总监</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>技术合伙人</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>项目总监</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>测试总监</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>安全专家</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>高端技术职位其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>项目管理</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>项目经理</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>项目助理</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>硬件开发</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>硬件</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>嵌入式</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>自动化</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>单片机</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>电路设计</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>驱动开发</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>系统集成</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>FPGA开发</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>DSP开发</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>ARM开发</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>PCB工艺</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>模具设计</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>热传导</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>材料工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>精益工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>射频工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>硬件开发其它</h3></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt><span>企业软件</span></dt>
                   			<dd>
                        		<a href="#" className="curr"><h3>实施工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>售前工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>售后工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>BI工程师</h3></a>
                            </dd>
                            <dd>
                        		<a href="#" className="curr"><h3>企业软件其它</h3></a>
                            </dd>
                        </dl>
                    </div>
        		</div>
			</div>
		)
	}
}
 
export default Menu;