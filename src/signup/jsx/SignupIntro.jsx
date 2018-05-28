import React from 'react';
import { Steps, Checkbox, Popover } from 'antd';

const { Step } = Steps;

function Introduce() {
    return (
        <div className="site-intro">
            <div className="intro-title">
                        准备好爱上HSiter了吗？
            </div>
            <Steps size="small" className="intro-steps spin-icon">
                <Step
                    status="finish"
                    title="注册/登录"
                    icon={<Popover content="注册成为HSiter会员"><i className="fa fa-user icon" /></Popover>}
                />
                <Step
                    status="finish"
                    title="新建页面"
                    icon={<Popover content="在页面管理器创建一个新的页面"><i className="fa fa-sticky-note-o icon" /></Popover>}
                />
                <Step
                    status="finish"
                    title="制作页面"
                    icon={<Popover content="打开编辑器，对页面进行编辑"><i className="fa fa-laptop icon" /></Popover>}
                />
                <Step
                    status="finish"
                    title="发布页面"
                    icon={<Popover content="发布页面，全网可见"><i className="fa fa-paper-plane-o icon" /></Popover>}
                />
            </Steps>
            <div className="intro-content">
                <div className="intro-text">
                            HSiter是一款智能web编辑器，由阿里巴巴恩言出品，帮助您免费定制个性化web页面。
                </div>
                <ul className="feature-list">
                    <li>
                        <Checkbox checked /> 源代码在github上开源，供开发者交流学习
                    </li>
                    <li>
                        <Checkbox checked /> 全站全部功能对所有注册用户免费
                    </li>
                    <li>
                        <Checkbox checked /> 界面简约，使用方法简单，几乎没有任何学习成本
                    </li>
                    <li>
                        <Checkbox checked /> 匠人情怀，为用户体验而生
                    </li>
                    <li>
                        <Checkbox checked /> 用户第一，通过站长邮箱获得第一时间的人工服务
                    </li>
                </ul>
                <ul className="site-info-list">
                    <li>
                        <i className="fa fa-envelope-o icon" />&nbsp;agentKyle@foxmail.com
                    </li>
                    <li>
                        <i className="fa fa-github icon" />
                        <a href="https://github.com/HuKaihe/HSiterFe" target="_blank" rel="noopener noreferrer">&nbsp;github.com/HuKaihe/HSiterFe</a>
                    </li>
                    <li>
                        <i className="fa fa-newspaper-o icon" />广告：阿里巴巴国际站前端招新
                    </li>
                    <li>
                        <i className="fa fa-bank icon" />备案号：冀ICP备18005603号
                    </li>
                </ul>
            </div>
        </div>
    );
}

Introduce.propTypes = {};
Introduce.defaultProps = {};
export default Introduce;
