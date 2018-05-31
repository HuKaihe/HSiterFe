import React from 'react';
import ReactDOM from 'react-dom';

import App from './jsx/index';
import Publisher from './jsx/Publisher';
import './less/index.less';
import { unencrypt } from '../service/service';

const previewType = window.location.pathname.split('?')[0];
const pageInfo = JSON.parse(unencrypt(window.ok, window.pageInfo));
const { page_id } = pageInfo;

let page_schema = null;
if (previewType === '/preview') {
    page_schema = JSON.parse(window.localStorage.getItem(page_id));
} else {
    page_schema = JSON.parse(unencrypt(window.ok, window.page_schema));
}

const appDom = document.getElementById('app');
const publisher = document.getElementById('publisher');

ReactDOM.render(
    <App page_schema={page_schema} page_id={page_id} />,
    appDom,
);

if (previewType === '/prePublish') {
    ReactDOM.render(
        <Publisher pageInfo={pageInfo} />,
        publisher,
    );
}
