// import { getRandomString } from '../../service/service';
export function componentGroup(state = {}, action) {
    const { type } = action;
    const map = {
    };
    const operate = map[type] || (() => { });
    return operate(action, state) || state;
}

export function toggleNewComponentModal(state = false, action) {
    const { type } = action;
    if (type === 'openNewComponentModal') {
        return true;
    }
    if (type === 'closeNewComponentModal') {
        return false;
    }
    return state;
}
