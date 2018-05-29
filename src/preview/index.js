import React from 'react';
import ReactDOM from 'react-dom';

import App from './jsx/index';
import './less/index.less';
import { unencrypt } from '../service/service';

const page_schema = JSON.parse(unencrypt(window.ok, window.page_schema));

ReactDOM.render(
    <App page_schema={page_schema} />,
    document.getElementById('app'),
);
window.page_schema = null;
