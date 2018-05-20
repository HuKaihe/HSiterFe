import React from 'react';
// import PropTypes from 'prop-types';

function OperateBar(props) {
    const { searchPage } = props;
    return (
        <div className="hsiter-page-operate-bar">
            <div className="module-title">
                <i className="fa fa-tasks" />
                页面资源管理
            </div>
            <div>
                <div className="page-search-control">
                    <input onChange={e => searchPage(e.target.value)} />
                    <i className="fa fa-search" />
                </div>
                <button className="new-page-btn">
                    新建页面
                </button>
            </div>
        </div>
    );
}

OperateBar.propTypes = {};
OperateBar.defaultProps = {};
export default OperateBar;
