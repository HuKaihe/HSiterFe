import { combineReducers } from 'redux';

import pageSchema from './pageSchema.reducer';
import { arrDisposable, toggleNewComponentModal } from './others.reducer';

const editorReducer = combineReducers({
    pageSchema,
    componentInfoGroup: arrDisposable,
    componentInfoList: arrDisposable,
    isNewComponentModalDisplayed: toggleNewComponentModal,
});

export default editorReducer;
