import { combineReducers } from 'redux';

import pageSchema from './pageSchema.reducer';

const editorReducer = combineReducers({
    pageSchema,
});

export default editorReducer;
