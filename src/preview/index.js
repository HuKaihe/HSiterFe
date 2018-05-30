import React from 'react';
import ReactDOM from 'react-dom';

import App from './jsx/index';
import Publisher from './jsx/Publisher';
import './less/index.less';
import { unencrypt } from '../service/service';

const page_schema = JSON.parse(unencrypt(window.ok, window.page_schema));
const pageInfo = JSON.parse(unencrypt(window.ok, window.pageInfo));

const appDom = document.getElementById('app');
const publisher = document.getElementById('publisher');

ReactDOM.render(
    <App page_schema={page_schema} />,
    appDom,
);
if (!window.online) {
    ReactDOM.render(
        <Publisher pageInfo={pageInfo} />,
        publisher,
    );
}
