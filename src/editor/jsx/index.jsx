import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import GlobalTop from '../../common/jsx/GlobalTop';
import EditorToolBar from './EditorToolbar';
import EditorWorkspace from './EditorWorkspace';

class TopBar extends Component {
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
            </div>
        );
    }
}

export default TopBar;
