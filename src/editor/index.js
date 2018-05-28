import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers';
import './less/index.less';
import editorReducer from './reducers/index.reducer';
import globalStore from '../service/globalStore';
import './mock/componentInfo';
import { deepCloneObj } from '../service/service';

// react全局状态存储到redux store中
const store = createStore(editorReducer, {
    page_schema: deepCloneObj(window.page_schema),
    isNewComponentModalDisplayed: false,
    isComponentConfigPanelDisplayed: false,
    componentInfoGroup: window.componentInfoGroup,
});

// 将与UI完全无关、由事件触发的部分数据放到globalStore里管理
globalStore.init({
    componentTypeInfoList: deepCloneObj(window.componentTypeInfoList),
    pageInfo: deepCloneObj(window.pageInfo),
    user: deepCloneObj(window.user),
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
