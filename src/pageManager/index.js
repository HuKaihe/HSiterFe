import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx';
import './less/index.less';
import { deepCloneObj } from '../service/service';
import globalStore from '../service/globalStore';

const pageList = deepCloneObj(window.pageList);

globalStore.init({
    user: deepCloneObj(window.user),
});

ReactDOM.render(
    <App pageList={pageList} />,
    document.getElementById('app'),
);

