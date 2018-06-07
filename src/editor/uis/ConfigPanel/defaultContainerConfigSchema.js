const defaultContainerLayoutSchema = {
    margin: {
        label: '外边距',
        control: 'groupControl',
        customProps: {
            groupUnit: {
                marginTop: {
                    label: '与上一元素的距离',
                    rules: [{
                        required: true,
                        message: '该字段不得为空',
                    }],
                    defaultData: 0,
                },
                marginBottom: {
                    label: '与下一元素的距离',
                    rules: [{
                        required: true,
                        message: '该字段不得为空',
                    }],
                    defaultData: 0,
                },
            },
        },
    },
    padding: {
        label: '内边距',
        control: 'groupControl',
        customProps: {
            groupUnit: {
                paddingTop: {
                    label: '容器顶部距离组件的距离',
                    rules: [{
                        required: true,
                        message: '该字段不得为空',
                    }],
                    defaultData: 0,
                },
                paddingBottom: {
                    label: '容器底部距离组件的距离',
                    rules: [{
                        required: true,
                        message: '该字段不得为空',
                    }],
                    defaultData: 0,
                },
            },
        },
    },
    size: {
        label: '元素尺寸',
        control: 'groupControl',
        customProps: {
            groupUnit: {
                width: {
                    label: '元素宽度',
                    rules: [{
                        required: true,
                        message: '该字段不得为空',
                    }],
                    tip: '设置了宽度的元素将居中于整个容器',
                    defaultData: 100,
                },
                maxWidth: {
                    label: '最大宽度',
                    defaultData: 100,
                },
                minWidth: {
                    label: '最小宽度',
                    defaultData: 1300,
                },
            },
        },
    },
    backgroundColor: {
        label: '背景颜色',
        extra: '',
        rules: [{
            required: true,
            message: '该字段不得为空',
        }],
        customProps: {
            type: 'color',
        },
    },
};

export default defaultContainerLayoutSchema;
