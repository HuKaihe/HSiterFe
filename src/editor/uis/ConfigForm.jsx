import React, { Component } from 'react';
import { Form, Switch, Input } from 'antd';
import ArrayControl from './Forms/ArrayControl';

const FormItem = Form.Item;
const controlMap = {
    switch: {
        Control: Switch,
        controlDecorator: {
            valuePropName: 'checked',
        },
    },
    arrayControl: {
        Control: ArrayControl,
        type: 'custom',
    },
};

class ConfigForm extends Component {
    // state中放置自定义控件的数据
    state = {
    }
    componentWillReceiveProps = (nextProps) => {
        const { componentData } = nextProps;
        this.setState(componentData);
    }
    setCustomControlValue = (newCustomControlValue) => {
        if (Object.keys(newCustomControlValue)[0] === 'error') {
            this.props.checkError(true);
            return;
        }
        this.props.checkError(false);
        this.setState(newCustomControlValue);
        this.props.setComponentData(this.state);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            componentData = {},
            configComponentTypeInfo = {},
        } = this.props;
        const { configSchema = {} } = configComponentTypeInfo;
        const configKeys = Object.keys(configSchema) || [];
        return (
            <Form className="hsiter-config-panel-form">
                {
                    configKeys.map((key) => {
                        const config = configSchema[key];
                        const controlData = componentData[key];
                        const {
                            Control = Input,
                            controlDecorator,
                            type,
                        } = controlMap[config.control] || {};
                        let customProps = {};
                        if (type === 'custom') {
                            customProps.customKey = key;
                            customProps.setCustomControlValue = this.setCustomControlValue;
                            customProps = { ...customProps, ...config.customProps };
                        }
                        return (
                            <FormItem
                                key={key}
                                label={config.label}
                                help={config.help}
                                {...config.layout}
                            >
                                {
                                    getFieldDecorator(key, {
                                        initialValue: controlData,
                                        rules: config.rules,
                                        ...controlDecorator,
                                    })(<Control {...customProps} />)
                                }
                            </FormItem>
                        );
                    })
                }
            </Form>
        );
    }
}

const WrappedConfigForm = Form.create({
    onFieldsChange: (props, changedFields) => {
        const changedFieldKey = Object.keys(changedFields)[0];
        const changedFieldValue = changedFields[changedFieldKey].value;
        const changedField = {
            [changedFieldKey]: changedFieldValue,
        };
        const error = Object.values(changedFields)[0].errors;
        if (error) {
            props.checkError(true);
            return;
        }
        props.checkError(false);
        props.setComponentData({ ...props.componentData, ...changedField });
    },
})(ConfigForm);

export default WrappedConfigForm;
