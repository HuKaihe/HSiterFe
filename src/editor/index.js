import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers';
import './less/index.less';
import editorReducer from './reducers/index.reducer';
import globalStore from '../service/globalStore';
// import './mock/componentInfo';
import { unencrypt } from '../service/service';

const page_schema = JSON.parse(unencrypt(window.ok, window.page_schema));
const componentInfoGroup = JSON.parse(unencrypt(window.ok, window.componentInfoGroup));
const componentTypeInfoList = JSON.parse(unencrypt(window.ok, window.componentTypeInfoList));
const pageInfo = JSON.parse(unencrypt(window.ok, window.pageInfo));
const user = JSON.parse(unencrypt(window.ok, window.user));

// react全局状态存储到redux store中
const store = createStore(editorReducer, {
    page_schema,
    isNewComponentModalDisplayed: false,
    isComponentConfigPanelDisplayed: false,
    componentInfoGroup,
});

// 将与UI完全无关、由事件触发的部分数据放到globalStore里管理
globalStore.init({
    componentTypeInfoList,
    pageInfo,
    user,
    newComponentTypeId: '',
    newComponentOrder: '',
    configComponentId: '',
});

// 销毁挂载在window上的数据
window.componentTypeInfoList = null;
window.componentInfoGroup = null;
window.pageInfo = null;
window.page_schema = null;

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app'),
);
