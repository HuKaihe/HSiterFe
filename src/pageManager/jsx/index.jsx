import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BackTop } from 'antd';
import GlobalTop from '../../global/GlobalTop/GlobalTop';
import OperateBar from './OperateBar';

class HSiterPageManager extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    state = {
    }
    render() {
        return (
            <div id="hister-page-manager-app" className="hister-page-manager-app">
                <GlobalTop />
                <OperateBar />
                <BackTop />
            </div>
        );
    }
}

export default HSiterPageManager;
