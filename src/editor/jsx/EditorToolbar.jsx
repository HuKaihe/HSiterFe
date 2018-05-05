import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class EditorToolbar extends Component {
    static defaultProps = {

    }

    state = {

    }

    render() {
        return (
            <div className="editor-tool-bar">
                <div className="left">
                    <ul className="setting-list">
                        <li>
                            <button className="btn">
                                <i className="icon fa fa-info-circle" />
                                <span className="text">页面信息</span>
                            </button>

                        </li>
                        <li>
                            <button className="btn">
                                <i className="icon fa fa-cogs" />
                                <span className="text">基本设置</span>
                            </button>
                        </li>
                    </ul>
                    <ul className="edit-list">
                        <li>
                            <button className="btn">
                                <i className="icon fa fa-reply" />
                                <span className="text">撤销</span>
                            </button>
                        </li>
                        <li>
                            <button className="btn">
                                <i className="icon fa fa-share" />
                                <span className="text">前进</span>
                            </button>

                        </li>
                        <li>
                            <button className="btn">
                                <i className="icon fa fa-download" />
                                <span className="text">下载</span>
                            </button>

                        </li>
                    </ul>
                </div>

                <div className="right">
                    <ul className="other-tool-list">
                        <li title="钉住工具栏">
                            <button className="btn">
                                <i className="icon fa fa-thumb-tack" />
                            </button>
                        </li>
                    </ul>
                    <ul className="page-list">
                        <li>
                            <button className="btn">
                                <i className="icon fa fa-save" />
                                <span className="text">保存</span>
                            </button>
                        </li>
                        <li>
                            <button className="btn">
                                <i className="icon fa fa-inbox" />
                                <span className="text">另存为</span>
                            </button>
                        </li>
                        <li>
                            <button className="btn">
                                <i className="icon fa fa-eye" />
                                <span className="text">预览</span>
                            </button>
                        </li>
                        <li>
                            <button className="btn publish">
                                <i className="icon fa fa-send-o" />
                                <span className="text">发布</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

EditorToolbar.propTypes = {};

export default EditorToolbar;
