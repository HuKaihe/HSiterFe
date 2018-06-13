import AntDesignNavInfo from '../../components/AntDesignNav/info';
import HKHBlogBannerInfo from '../../components/HKHBlogBanner/info';
import HKHBlogCollectionInfo from '../../components/HKHBlogCollection/info';
import HTeamGalleryInfo from '../../components/HTeamGallery/info';

const containerData = {
    margin: {
        marginTop: '0px',
        marginBottom: '0px',
    },
    padding: {
        paddingTop: '0px',
        paddingBottom: '0px',
    },
    size: {
        width: '100%',
        maxWidth: '100%',
        minWidth: '1200px',
    },
    backgroundColor: '#ffffff',
};

const componentTypeInfoList = [
    HKHBlogCollectionInfo,
    HKHBlogBannerInfo,
    AntDesignNavInfo,
    HTeamGalleryInfo,
];

componentTypeInfoList.forEach((componentTypeInfo) => {
    componentTypeInfo.default_data.container = containerData;
});


const classification = [{
    title: '我的收藏',
    icon: 'fa-star',
    code: 'mycollection',
    children: [],
},
{
    title: '画廊',
    icon: 'fa-pagelines',
    code: 'gallery',
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
