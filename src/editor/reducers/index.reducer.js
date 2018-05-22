import { combineReducers } from 'redux';

import page_schema from './pageSchema.reducer';
import {
    arrDisposable,
    toggleNewComponentModal,
    toggleComponentConfigPanel,
} from './others.reducer';

const editorReducer = combineReducers({
    page_schema,
    componentInfoGroup: arrDisposable,
    isNewComponentModalDisplayed: toggleNewComponentModal,
    isComponentConfigPanelDisplayed: toggleComponentConfigPanel,
});

export default editorReducer;
