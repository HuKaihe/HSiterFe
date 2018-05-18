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
    configSchema: {
        cardsInfo: {
            label: '轮播主图信息',
            control: 'arrayControl',
            customProps: {
                arrUnit: {
                    title: {
                        label: '标题',
                        tip: '标题',
                        rules: [{
                            required: true, message: '标题不得为空',
                        }],
                        width: '70%',
                    },
                    paragraphs: {
                        label: '内容',
                        tip: '支持以换行分段',
                        control: 'textArea',
                        width: '100%',
                    },
                },
            },
        },
        navInfo: {
            label: '导航',
            control: 'arrayControl',
            customProps: {
                arrUnit: {
                    icon: {
                        label: '导航图标',
                        tip: '导航项左侧图标，支持fontawesome，请以“fa-”开头',
                        rules: [{
                            required: true, message: '卡片图标不得为空',
                        }],
                    },
                    title: {
                        label: '导航标题',
                        tip: '导航项标题',
                        rules: [{
                            required: true, message: '导航项标题不得为空',
                        }],
                    },
                    url: {
                        label: '导航项链接',
                        tip: '点击图片将链接到的地址',
                        rules: [
                            {
                                required: true, message: '链接不得为空',
                            },
                            {
                                message: '须为标准URL格式', type: 'url',
                            },
                        ],
                    },
                    desc: {
                        label: '导航描述',
                        tip: '对导航项的描述',
                    },
                },
            },
        },
    },
    defaultData: {
        navInfo: [
            {
                id: 'nav1',
                title: '技术小栈',
                desc: '有步骤、有分析、有对比、有思考',
                icon: 'fa-gitlab',
                url: 'https://www.alibaba.com',
            },
            {
                id: 'nav2',
                title: '神学研究',
                desc: '初级的神学理论、独立的神学思考',
                icon: 'fa-skyatlas',
                url: 'https://www.alibaba.com',
            },
            {
                id: 'nav3',
                title: '文学艺术',
                desc: '生活不止眼前的苟且 还有诗和远方的田野',
                icon: 'fa-fort-awesome',
                url: 'https://www.alibaba.com',
            },
            {
                id: 'nav4',
                title: 'dashboard',
                desc: '站长小工具集',
                icon: 'fa-dashboard',
                url: 'https://www.alibaba.com',
            },
            {
                id: 'nav5',
                title: '关于我',
                desc: '站长简介，期待结交更多的朋友',
                icon: 'fa-facebook-official',
                url: 'https://www.alibaba.com',
            },
        ],
        cardsInfo: [
            {
                id: 'banner1',
                title: '邮子心声',
                paragraphs: '我享受互联网赋予生活的事捷功倍，更享受用互联网进行创作的天马星空；我感谢“开源社区”中陌生工程师的鼎力相助，更感谢“开源精神”让我愿意用爱对需要帮助的人“慷慨解囊”。\n我学会用逻辑理智地处理生活中的问题，就像处理程序中的Bug一样；我在快节奏生活中大步流星，就像在技术的迭代中逆水行舟一样。\n四年的大学生涯让我感觉，软件工程不像是一个专业领域，更像是一种人生哲学与生活方式。\n胡凯赫\n阿里巴巴（中国）网络技术有限公司\n',
            },
            {
                id: 'banner2',
                title: 'BAT前端校招面试思考重磅来袭',
                paragraphs: '阅读这本书的前提是你对前端开发技术足够敬畏和感兴趣，但这可不是你能进BAT的前提：你需要过硬的技术功底以及丰富的项目经验，这只有靠你自己努力得到，但我相信，如果时间允许，这些是总能触及的。剩下的才是通过阅读这本书能够改善的东西：对考点的学习方法与面试技巧。\n胡凯赫\n阿里巴巴（中国）网络技术有限公司',
            },
        ],
    },
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
            extra: '',
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
                            required: true, message: '卡片文字不得为空',
                        }],
                    },
                    url: {
                        label: '卡片链接',
                        tip: '用户点击卡片时跳转的页面链接',
                        rules: [{
                            required: true, message: '卡片链接不得为空', type: 'url',
                        }],
                    },
                    pictureUrl: {
                        label: '图片URL',
                        tip: '左边图片, 因为服务器容量有限，暂时不支持图片上传功能',
                        rules: [
                            {
                                required: true, message: '图片链接不得为空',
                            },
                            {
                                message: '须为标准URL格式', type: 'url',
                            },
                        ],
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
