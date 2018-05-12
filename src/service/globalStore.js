let globalData = {};
export default {
    init(initObj) {
        if (!initObj || typeof initObj !== 'object') {
            throw new Error('请使用一个对象初始化全局仓库，为了方便属性的管理，该对象应包括全局仓库能使用到的所有属性的key');
        }
        if (globalData.init) {
            throw new Error('全局仓库已经初始化完毕且只能初始化一次');
        }
        globalData = { init: true, ...initObj };
    },
    set(key, value) {
        if (!(key in globalData)) {
            throw new Error(`key${key}未在store初始化时进行设置，请在init的地方进行添加`);
        }
        globalData[key] = value;
    },
    get(key) {
        return globalData[key];
    },
    getAll() {
        return globalData;
    },
};
