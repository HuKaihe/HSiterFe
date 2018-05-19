export default {
    id: 'HKHBlogCollection',
    name: 'HKHBlogCollection',
    img: 'http://fontawesome.hukaihe.com/public/image/HotCollection_s.png',
    title: 'HKHBlog专栏集合',
    collection: 'HKHBlog',
    desc: 'HKHBlog专栏集合，适合在这里设置链接，将引导用户至不同页面',
    config_schema: {
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
    default_data: {
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
};
