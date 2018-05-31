import React from 'react';
import ReactDOM from 'react-dom';

import App from './jsx/index';
import Publisher from './jsx/Publisher';
import './less/index.less';
import { unencrypt } from '../service/service';

let page_schema = null;
const page_schema_cache_str = window.sessionStorage.getItem('page_schema_cache');
if (page_schema_cache_str) {
    page_schema = JSON.parse(page_schema_cache_str);
} else {
    page_schema = JSON.parse(unencrypt(window.ok, window.page_schema));
}

const pageInfo = JSON.parse(unencrypt(window.ok, window.pageInfo));

const appDom = document.getElementById('app');
const publisher = document.getElementById('publisher');

ReactDOM.render(
    <App page_schema={page_schema} />,
    appDom,
);

if (window.pp) {
    ReactDOM.render(
        <Publisher pageInfo={pageInfo} />,
        publisher,
    );
}
