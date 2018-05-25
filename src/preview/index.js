import React from 'react';
import ReactDOM from 'react-dom';

import App from './jsx/index';
import './less/index.less';
import { deepCloneObj } from '../service/service';

ReactDOM.render(
    <App page_schema={deepCloneObj(window.page_schema)} />,
    document.getElementById('app'),
);
window.page_schema = null;
