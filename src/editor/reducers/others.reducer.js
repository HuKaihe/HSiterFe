export function arrDisposable(state = []) {
    return [...state];
}

export function objDisposable(state = {}) {
    return state;
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
