import React, { Component } from 'react';
import { message } from 'antd';
// import PropTypes from 'prop-types';

class PageTopBar extends Component {
    static propTypes = {}

    static defaultProps = {}
    state = {}
    render() {
        const {
            searchPage,
            showPageInfoModal,
        } = this.props;
        return (
            <div className="hsiter-page-operate-bar">
                <div className="module-title">
                    页面资源管理
                </div>
                <ul className="page-operate-list">
                    <li>
                        <div className="page-search-control">
                            <input
                                className="search-input"
                                onChange={e => searchPage(e.target.value)}
                                placeholder="页面名称"
                            />
                            <i className="fa fa-search" />
                        </div>
                    </li>
                    <li>
                        <button
                            className="new-collection-btn hsiter-btn"
                            onClick={() => {
                                message.error('暂时不支持新建集合');
                            }}
                        >
                            <i className="fa fa-folder-open icon" />
                            新建集合
                        </button>
                    </li>
                    <li>
                        <button
                            className="new-page-btn hsiter-btn"
                            onClick={() => showPageInfoModal(true)}
                        >
                            <i className="fa fa-sticky-note-o icon" />
                            新建页面
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

PageTopBar.propTypes = {};
PageTopBar.defaultProps = {};
export default PageTopBar;
