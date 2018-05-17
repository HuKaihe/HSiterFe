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
    configSchema: {
        showTitle: {
            label: '是否展示标题',
            control: 'switch',
            layout: {
                labelCol: { span: 6 },
                wrapperCol: { span: 12 },
            },
            valuePropName: 'checked',
        },
        moduleTitle: {
            label: '模块标题',
            rules: [{
                required: true, message: '模块标题不得为空',
            }],
            layout: {
                labelCol: { span: 6 },
                wrapperCol: { span: 17 },
            },
        },
        cards: {
            label: '卡片集合',
            control: 'arrayControl',
            customProps: {
                arrUnit: {
                    title: {
                        label: '卡片标题',
                        tip: '右边的文字',
                        rules: [{
                            required: true, message: '模块标题不得为空',
                        }],
                    },
                    url: {
                        label: '卡片链接',
                        tip: '用户点击卡片时跳转的页面链接',
                        rules: [{
                            required: true, message: '模块标题不得为空', type: 'url',
                        }],
                    },
                    pictureUrl: {
                        label: '左边图片的URL',
                        tip: '因为服务器容量有限，暂时不支持图片上传功能',
                    },
                },
            },
        },
    },
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
