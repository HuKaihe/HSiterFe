export default {
    id: 'AntDesignNav',
    name: 'AntDesignNav',
    title: 'AntDesign菜单导航',
    img: 'http://fontawesome.hukaihe.com/public/image/AntMenuNav_s.png',
    desc: 'Ant Design菜单栏，包括横版和竖版两种模式',
    collection: 'antDesign',
    config_schema: {
        isLight: {
            label: '亮色主题',
            control: 'switch',
            layout: {
                labelCol: { span: 6 },
                wrapperCol: { span: 12 },
            },
            valuePropName: 'checked',
        },
        menuCollection: {
            label: '导航信息',
            control: 'arrayControl',
            customProps: {
                arrUnit: {
                    title: {
                        label: '标题',
                        tip: '标题',
                        rules: [{
                            required: true, message: '标题不得为空',
                        }],
                    },
                    disabled: {
                        label: '不可点击',
                        control: 'switch',
                        layout: {
                            labelCol: { span: 6 },
                            wrapperCol: { span: 12 },
                        },
                        valuePropName: 'checked',
                    },
                    url: {
                        label: '导航链接',
                        rules: [
                            {
                                type: 'url', message: '导航链接必须是标准的URL格式',
                            },
                        ],
                    },
                    icon: {
                        label: '导航图标',
                        tip: '支持fontawesome，请以“fa-”开头',
                    },
                },
            },
        },
    },
    default_data: {
        isLight: true,
        menuCollection: [
            {
                id: 'i1',
                icon: 'fa-child',
                title: '儿童专区',
                url: 'https://www.alibaba.com',
            },
            {
                id: 'i2',
                icon: 'fa-female',
                title: '女性专区',
                disabled: true,
                url: 'https://www.alibaba.com',
            },
            {
                id: 'i3',
                icon: 'fa-user-secret',
                title: '商务专区',
                url: 'https://www.alibaba.com',
            },
            {
                id: 'i4',
                icon: 'fa-wheelchair',
                title: '残疾人专区',
                url: 'https://www.alibaba.com',
            },
        ],
    },
    author: '恩言',
    github: '',
    npm: '',
};
