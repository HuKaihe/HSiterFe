import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers';
import './less/index.less';
import editorReducer from './reducers/index.reducer';

// mock
import componentGroup from './mock/componentGroup';

const pageSchema = {
    layoutSchema: [],
    componentSchema: [],
};

const store = createStore(editorReducer, {
    pageSchema,
    componentGroup,
    isNewComponentModalDisplayed: false,
});

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app'),
);
