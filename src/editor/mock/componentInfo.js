const componentTypeInfoList = [{
    id: 'HNav',
    name: 'HNav',
    title: 'AntDesign菜单导航',
    img: 'http://fontawesome.hukaihe.com/public/image/AntMenuNav_s.png',
    desc: 'Ant Design菜单栏，包括横版和竖版两种模式',
    collection: 'antDesign',
    configSchema: '',
    defaultData: '',
    author: '恩言',
    github: '',
    npm: '',
},
{
    id: 'HKHBlogBanner',
    name: 'HKHBlogBanner',
    title: 'HKHBlog轮播主图',
    img: 'http://fontawesome.hukaihe.com/public/image/HKHBlogBanner_s.png',
    desc: 'HKHBlog的大型轮播主图，可以根据需要选择是否包含下部的导航栏',
    collection: 'HKHBlog',
    configSchema: '',
    defaultData: '',
    author: '恩言',
    github: '',
    npm: '',
},
{
    id: 'HotCollection',
    name: 'HotCollection',
    img: 'http://fontawesome.hukaihe.com/public/image/HotCollection_s.png',
    title: 'HKHBlog专栏集合',
    collection: 'HKHBlog',
    desc: 'HKHBlog专栏集合，适合通过链接引导用户至不同页面',
    configSchema: 'hello config',
    defaultData: {
        cards: [
            {
                id: 'card1',
                title: 'React',
                url: 'http://www.baidu.com',
                pictureUrl: 'https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg',
            },
            {
                id: 'card2',
                title: 'Vuejs',
                url: 'http://www.baidu.com',
                pictureUrl: 'https://cn.vuejs.org/images/logo.png',
            },
            {
                id: 'card3',
                title: 'BAT前端校招面试思考',
                url: 'http://www.baidu.com',
                pictureUrl: 'http://fontawesome.hukaihe.com/public/image/logo_gold.png',
            },
            {
                id: 'card4',
                title: 'Angular',
                url: 'http://www.baidu.com',
                pictureUrl: 'https://www.angular.cn/assets/images/logos/angular/angular.svg',
            },
        ],
        showTitle: true,
        moduleTitle: '热门集合',
    },
    showTitle: true,
    moduleTitle: '热门集合',
    author: '恩言',
    github: '',
    npm: '',
},
];

const classification = [{
    title: '我的收藏',
    icon: 'fa-star',
    code: 'mycollection',
    children: [],
},
{
    title: 'web原生组件',
    icon: 'fa-html5',
    code: 'origin',
    children: [],
},
{
    title: 'HKH内置组件',
    icon: 'fa-archive',
    code: 'inner',
    splitter: true,
    children: [],
},
{
    title: 'Ant Design',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    code: 'antDesign',
    children: [

    ],
},
{
    title: 'HKHBlog',
    img: 'http://fontawesome.hukaihe.com/public/image/logo.png',
    code: 'HKHBlog',
    children: [

    ],
},
];

const componentInfoGroup = classification.map(item => ({
    ...item,
    children: componentTypeInfoList.filter(i => i.collection === item.code),
}));
// 将变量挂在到window对象上
window.componentInfoGroup = componentInfoGroup;
window.componentTypeInfoList = componentTypeInfoList;

export {
    componentInfoGroup,
    componentTypeInfoList,
};
