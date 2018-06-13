export default {
    id: 4,
    name: 'HTeamGallery',
    img: '/public/image/components/HTeamGallery/index.png',
    title: '团队画廊',
    collection: 'gallery',
    desc: '团队画廊，适合对成员信息进行展示',
    config_schema: {
        showTitle: {
            label: '是否展示标题',
            control: 'switch',
            layout: {
                labelCol: { span: 8 },
                wrapperCol: { span: 12 },
            },
            valuePropName: 'checked',
        },
        galleryTitle: {
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
        showTeamMotto: {
            label: '是否展示团队格言',
            control: 'switch',
            valuePropName: 'checked',
            layout: {
                labelCol: { span: 8 },
                wrapperCol: { span: 12 },
            },
        },
        teamMotto: {
            label: '团队格言',
            extra: '',
            layout: {
                labelCol: { span: 6 },
                wrapperCol: { span: 17 },
            },
        },
        showTeamContact: {
            label: '是否展示团队联系方式',
            control: 'switch',
            valuePropName: 'checked',
            layout: {
                labelCol: { span: 8 },
                wrapperCol: { span: 12 },
            },
        },
        teamContact: {
            label: '团队联系方式',
            extra: '',
            layout: {
                labelCol: { span: 6 },
                wrapperCol: { span: 17 },
            },
        },
        teamMember: {
            label: '成员集合',
            control: 'arrayControl',
            customProps: {
                arrUnit: {
                    name: {
                        label: '成员名',
                        rules: [{
                            required: true, message: '成员名不得为空',
                        }],
                        defaultData: '新的成员',
                    },
                    profile: {
                        label: '成员头像',
                        tip: '成员头像的URL链接',
                        rules: [
                            {
                                required: true, message: '人名不得为空',
                            },
                            {
                                message: '图片链接须为标准URL格式', type: 'url',
                            }],
                        defaultData: '/public/image/components/HTeamGallery/p1.png',
                    },
                    desc: {
                        control: 'textArea',
                        label: '成员描述',
                        defaultData: '新成员简介',
                        width: '100%',
                    },
                    home: {
                        label: '成员主页',
                        tip: '这里可以填写该队员的任意网页',
                        rules: [{
                            message: '主页须为标准URL格式', type: 'url',
                        }],
                        defaultData: 'https://www.alibaba.com',
                    },
                    email: {
                        label: '成员邮箱',
                        rules: [{
                            message: '邮箱须为标准email格式', type: 'email',
                        }],
                    },
                    phone: {
                        label: '成员电话',
                        type: 'number',
                    },
                    github: {
                        label: '成员github',
                        rules: [{
                            message: '主页须为标准URL格式', type: 'url',
                        }],
                        defaultData: 'https://www.alibaba.com',
                    },
                },
            },
        },
    },
    default_data: {
        teamMember: [
            {
                id: 'aloskasola',
                profile: '/public/image/components/HTeamGallery/p1.png',
                name: 'Francesca Chiti',
                desc: 'Francesca is a front-end developer who likes climbing, swimming and playing with her pet dog DingDing',
                home: 'http://www.hukaihe.cn',
                github: 'https://github.com/HuKaihe',
            },
            {
                id: 'floskahsjal10do',
                profile: '/public/image/components/HTeamGallery/p2.png',
                name: 'Barthelemy Chalvet',
                desc: 'Barthelemy is a backend engineer who is good at Nodejs. He won\'t tell anyone he used to be a singer',
                home: 'http://www.hukaihe.cn',
                github: 'https://github.com/HuKaihe',
            },
            {
                id: '8a9sielapd',
                profile: '/public/image/components/HTeamGallery/p3.png',
                name: 'Robin Halet',
                desc: 'Robin is a UI designer who likes to work on three large screens',
                home: 'http://www.hukaihe.cn',
                github: 'https://github.com/HuKaihe',
            },
        ],
        showTitle: true,
        galleryTitle: 'MEET THE TEAM',
        showTeamMotto: true,
        teamMotto: 'Knowledge puffs up, but love builds up',
        showTeamContact: true,
        teamContact: 'agentKyle@foxmail.com',
    },
    author: '恩言',
    github: '',
    npm: '',
};
