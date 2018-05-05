import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class GlobalTop extends Component {
    static defaultProps = {

    }

    state = {
    }


    render() {
        return (
            <div className="global-top">
                <div className="left">
                    <div className="logo">
                        <i className="logo-img" alt="logo" title="logo" />
                        <span className="logo-text">HSiter</span>
                    </div>
                    <ul className="nav">
                        <li>
                            <a href="/" title="主页" className="active">
                                <i className="fa fa-home" />
                                <div className="cover" />
                            </a>
                        </li>
                        <li>
                            <a href="/" title="页面管理">
                                <i className="fa fa-tasks" />
                                <div className="cover" />
                            </a>
                        </li>
                        <li>
                            <a href="/" title="编辑器">
                                <i className="fa fa-laptop" />
                                <div className="cover" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <ul className="tool-list">
                        <li>
                            <a href="/" title="帮助">
                                <i className="fa fa-question-circle" />
                            </a>
                        </li>
                        <li>
                            <a href="/" title="信箱">
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
