import React from 'react';
import GlobalTop from '../../global/GlobalTop/GlobalTop';
import LoginForm from './LoginForm';

function HsiterSignup() {
    return (
        <div className="hsiter-account">
            <GlobalTop />
            <div className="account-container">
                <div className="hsiter-login">
                    <LoginForm />
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

        </div>
    );
}

HsiterSignup.propTypes = {};
HsiterSignup.defaultProps = {};
export default HsiterSignup;
