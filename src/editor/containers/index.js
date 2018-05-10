import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BackTop } from 'antd';

import GlobalTop from '../../global/GlobalTop/GlobalTop';
import EditorToolBar from './EditorToolbar';
import EditorWorkspace from './EditorWorkspace';
import NewComponentModel from '../uis/NewComponentModel';

class HSiter extends Component {
    static propTypes = {


    }

    static defaultProps = {

    }

    state = {

    }

    render() {
        return (
            <div className="container">
                <NewComponentModel />
                <GlobalTop />
                <EditorToolBar />
                <EditorWorkspace />
                <BackTop />
            </div>
        );
    }
}

export default HSiter;
