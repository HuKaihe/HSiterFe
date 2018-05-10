import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers';
import './less/index.less';
import editorReducer from './reducers/index.reducer';

const pageSchema = {
    layoutSchema: [],
    componentSchema: [],
};

const componentList = {
    HKHBlogBanner: {
        name: 'HKHBlogBanner',
        img: 'http://fontawesome.hukaihe.com/public/image/HKHBlogBanner.png',
        author: '恩言',
        github: '',
        npm: '',
    },
    HotCollection: {},
    HNav: {},
};

const store = createStore(editorReducer, { pageSchema, componentList });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
