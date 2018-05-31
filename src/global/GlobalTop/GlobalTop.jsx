import React, { Component } from 'react';
import { Tooltip, Popover, message } from 'antd';
import globalStore from '../../service/globalStore';
import { post } from '../../service/service';

import './GlobalTop.less';

const globalNavInfo = [
    {
        id: 'home',
        title: '主页',
        url: '/home',
        icon: 'fa-home',
    },
    {
        id: 'pageManager',
        title: '页面管理',
        url: '/pageManager',
        icon: 'fa-tasks',
    },
    {
        id: 'editor',
        title: '最近打开的页面编辑器',
        url: '/editor',
        icon: 'fa-laptop',
    },
];

class GlobalTop extends Component {
    static defaultProps = {

    }

    state = {
    }

    getAccountOperateList = () => (
        <ul className="hsiter-account-operate-list">
            <li>
                <button>
                    <i className="fa fa-id-badge icon" />
                    更改用户信息
                </button>
            </li>
            <li>
                <button>
                    <i className="fa fa-key icon" />
                    更改密码
                </button>
            </li>
            <li>
                <button className="off" onClick={this.signout}>
                    <i className="fa fa-power-off icon" />
                    注销
                </button>
            </li>
        </ul>
    );

    signout = () => {
        post('/account/signout').then(({ code, msg }) => {
            if (code === 200) {
                window.localStorage.clear();
                window.location.href = '/login';
                return;
            }
            message.error(msg);
        }).catch(() => {
            message.error('服务器开小差了，请亲稍后再试');
        });
    }

    render() {
        const { activeNav } = this.props;
        const user = globalStore.get('user');
        const hasLogin = !!user;
        const recent_page_id = localStorage.getItem('recent_page_id');
        return (
            <div className="global-top">
                <div className="left">
                    <div className="logo">
                        <i className="logo-img" alt="logo" title="logo" />
                        <span className="logo-text">HSiter</span>
                    </div>
                    <ul className="nav">
                        {
                            globalNavInfo.map((navInfo) => {
                                if (navInfo.id === 'editor' && !recent_page_id) {
                                    return null;
                                }
                                return (
                                    <li key={navInfo.id}>
                                        <Tooltip title={navInfo.title} placement="bottom">
                                            <a
                                                href={
                                                    navInfo.id === 'editor' ?
                                                        `${navInfo.url}?page=${recent_page_id}` : navInfo.url
                                                }
                                                target="_blank"
                                                className={navInfo.id === activeNav ? 'active' : ''}
                                            >
                                                <i className={`fa ${navInfo.icon}`} />
                                                <div className="cover" />
                                            </a>
                                        </Tooltip>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>

                <div className="right">
                    <ul className="tool-list">
                        <li>
                            <a href="/" target="_blank" title="帮助">
                                <i className="fa fa-question-circle" />
                            </a>
                        </li>
                        <li>
                            <a href="/" target="_blank" title="信箱">
                                <i className="fa fa-envelope-o" />
                            </a>
                        </li>
                    </ul>
                    <div className="user-module">
                        {
                            hasLogin ?
                                <Popover
                                    title={`欢迎，${user.nickname}`}
                                    content={this.getAccountOperateList()}
                                    placement="bottomLeft"
                                >
                                    <div
                                        className="user-profile"
                                        style={{
                                            background: `url(${user.profile}) center / cover`,
                                        }}
                                    />
                                </Popover> :
                                <div className="account-href-list">
                                    <a href="/login" className="account-href">登录</a>/
                                    <a href="/signup" className="account-href">注册</a>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

GlobalTop.propTypes = {};

export default GlobalTop;
