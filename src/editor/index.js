import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers';
import './less/index.less';
import editorReducer from './reducers/index.reducer';
import globalStore from '../service/globalStore';
import { componentTypeInfoList } from './mock/componentInfo';
import { deepCloneObj } from '../service/service';

const pageSchema = {
    layoutSchema: [],
    componentSchema: [],
    // layoutSchema: [
    //     { id: 'mmekx19vd81526119444508', name: 'HotCollection' },
    //     { id: 'mmekx19vd81526119444509', name: 'HotCollection' },
    // ],
    // componentSchema: [
    //     { id: 'mmekx19vd81526119444508', componentData: deepCloneObj(componentTypeInfoList[2].defaultData), componentTypeId: 'HotCollection' },
    //     { id: 'mmekx19vd81526119444509', componentData: deepCloneObj(componentTypeInfoList[2].defaultData), componentTypeId: 'HotCollection' },
    // ],
};

// react全局状态存储到redux store中
const store = createStore(editorReducer, {
    pageSchema,
    isNewComponentModalDisplayed: false,
    isComponentConfigPanelDisplayed: false,
    componentInfoGroup: window.componentInfoGroup,
});

// 将与UI完全无关、由事件触发的部分数据放到globalStore里管理
globalStore.init({
    componentTypeInfoList: deepCloneObj(window.componentTypeInfoList),
    newComponentTypeId: '',
    newComponentOrder: '',
    configComponentId: '',
});

// 销毁挂载在window上的数据
window.componentTypeInfoList = null;
window.componentInfoGroup = null;

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app'),
);
