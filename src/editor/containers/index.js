import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BackTop } from 'antd';

import GlobalTop from '../../global/GlobalTop/GlobalTop';
import EditorToolBar from './EditorToolbar';
import EditorWorkspace from './EditorWorkspace';
import NewComponentModal from '../uis/NewComponentModal/NewComponentModal';
import ConfigPanel from './ConfigPanel';

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
                <GlobalTop />
                <EditorToolBar />
                <EditorWorkspace />
                <NewComponentModal />
                <BackTop />
                <ConfigPanel />
            </div>
        );
    }
}

export default HSiter;
