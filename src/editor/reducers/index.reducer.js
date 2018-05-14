import { combineReducers } from 'redux';

import pageSchema from './pageSchema.reducer';
import {
    arrDisposable,
    toggleNewComponentModal,
    toggleComponentConfigPanel,
} from './others.reducer';

const editorReducer = combineReducers({
    pageSchema,
    componentInfoGroup: arrDisposable,
    isNewComponentModalDisplayed: toggleNewComponentModal,
    isComponentConfigPanelDisplayed: toggleComponentConfigPanel,
});

export default editorReducer;
