import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BackTop } from 'antd';
import GlobalTop from '../../global/GlobalTop/GlobalTop';
import EditorToolBar from './EditorToolbar';
import EditorWorkspace from './EditorWorkspace';
import NewComponentModal from '../uis/NewComponentModal/NewComponentModal';
import ConfigPanel from './ConfigPanel';

class HSiterEditor extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    state = {
    }
    render() {
        return (
            <div id="hisiter-editor-app" className="hisiter-editor-app">
                <GlobalTop activeNav="editor" />
                <EditorToolBar />
                <EditorWorkspace />
                <NewComponentModal />
                <BackTop />
                <ConfigPanel />
            </div>
        );
    }
}

export default HSiterEditor;
