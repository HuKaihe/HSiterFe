import { getRandomString } from '../../service/service';

const componentList = [
    {
        id: getRandomString(),
        name: 'HNav',
        title: 'AntDesign菜单导航',
        img: 'http://fontawesome.hukaihe.com/public/image/AntMenuNav_s.png',
        desc: 'Ant Design菜单栏，包括横版和竖版两种模式',
        collection: 'antDesign',
        config: '',
        data: '',
        author: '恩言',
        github: '',
        npm: '',
    },
    {
        id: getRandomString(),
        name: 'HKHBlogBanner',
        title: 'HKHBlog轮播主图',
        img: 'http://fontawesome.hukaihe.com/public/image/HKHBlogBanner_s.png',
        desc: 'HKHBlog的大型轮播主图，可以根据需要选择是否包含下部的导航栏',
        collection: 'HKHBlog',
        config: '',
        data: '',
        author: '恩言',
        github: '',
        npm: '',
    },
    {
        id: getRandomString(),
        name: 'HotCollection',
        img: 'http://fontawesome.hukaihe.com/public/image/HotCollection_s.png',
        title: 'HKHBlog专栏集合',
        collection: 'HKHBlog',
        desc: 'HKHBlog专栏集合，适合通过链接引导用户至不同页面',
        config: '',
        data: '',
        author: '恩言',
        github: '',
        npm: '',
    },
];

const classification = [
    {
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

const componentGroup = classification.map(item => ({
    ...item,
    children: componentList.filter(i => i.collection === item.code),
}));


export default componentGroup;
