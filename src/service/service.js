import fetch from 'node-fetch';

export function getRandomString() {
    return Math.random().toString(36).substr(2) + new Date().getTime();
}

export function deepCloneObj(obj = {}) {
    return JSON.parse(JSON.stringify(obj));
}

export function isObjPropsAllUnvalid(obj = {}) {
    const values = Object.values(obj);
    return values.every(i => !i === true);
}

export function objContentCompare(obj1 = {}, obj2 = {}) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function post(url, data = {}, headers = { 'Content-Type': 'application/json' }) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
        credentials: 'include',
    }).then(res => res.json()).catch((err) => { throw new Error('网络错误', err); });
}

export function get(url, headers) {
    return fetch(url, {
        method: 'GET',
        headers,
        credentials: 'include',
    }).then(res => res.json()).catch((err) => { throw new Error('网络错误', err); });
}
