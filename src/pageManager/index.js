import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx';
import './less/index.less';
import { unencrypt } from '../service/service';
import globalStore from '../service/globalStore';

const pageList = JSON.parse(unencrypt(window.ok, window.pageList));
const user = JSON.parse(unencrypt(window.ok, window.user));
globalStore.init({
    user,
});

ReactDOM.render(
    <App pageList={pageList} />,
    document.getElementById('app'),
);

