import { combineReducers } from 'redux';

import pageSchema from './pageSchema.reducer';
import { componentGroup, toggleNewComponentModal } from './others.reducer';

const editorReducer = combineReducers({
    pageSchema,
    componentGroup,
    isNewComponentModalDisplayed: toggleNewComponentModal,
});

export default editorReducer;
