import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers';
import './less/index.less';
import editorReducer from './reducers/index.reducer';
import globalStore from '../service/globalStore';
import './mock/componentInfo';

const pageSchema = {
    layoutSchema: [],
    componentSchema: [],
};

// react全局状态存储到redux store中
const store = createStore(editorReducer, {
    pageSchema,
    isNewComponentModalDisplayed: false,
    componentInfoList: window.componentInfoList,
    componentInfoGroup: window.componentInfoGroup,
});

// 销毁挂载在window上的数据
window.componentInfoList = {};
window.componentInfoGroup = {};

// 必要的非react内部状态存储到globalStore中
globalStore.init({
    newComponentInfoId: '',
    newComponentOrder: '',
});

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app'),
);
