import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

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
        title: '编辑器',
        url: '/editor',
        icon: 'fa-laptop',
    },
];

class GlobalTop extends Component {
    static defaultProps = {

    }

    state = {
    }

    render() {
        const { activeNav } = this.props;
        return (
            <div className="global-top">
                <div className="left">
                    <div className="logo">
                        <i className="logo-img" alt="logo" title="logo" />
                        <span className="logo-text">HSiter</span>
                    </div>
                    <ul className="nav">
                        {
                            globalNavInfo.map(navInfo => (
                                <li key={navInfo.id}>
                                    <Tooltip title={navInfo.title} placement="bottom">
                                        <a
                                            href={navInfo.url}
                                            target="_blank"
                                            className={navInfo.id === activeNav ? 'active' : ''}
                                        >
                                            <i className={`fa ${navInfo.icon}`} />
                                            <div className="cover" />
                                        </a>
                                    </Tooltip>
                                </li>
                            ))
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
                        <div className="user-profile" />
                    </div>
                </div>
            </div>
        );
    }
}

GlobalTop.propTypes = {};

export default GlobalTop;
