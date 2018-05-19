import AntDesignNavInfo from '../../components/AntDesignNav/info';
import HKHBlogBannerInfo from '../../components/HKHBlogBanner/info';
import HKHBlogCollectionInfo from '../../components/HKHBlogCollection/info';

const componentTypeInfoList = [
    HKHBlogCollectionInfo,
    HKHBlogBannerInfo,
    AntDesignNavInfo,
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
