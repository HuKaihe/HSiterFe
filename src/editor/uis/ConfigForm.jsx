import React, { Component } from 'react';
import { Form, Switch, Input } from 'antd';
import ArrayControl from './Controls/ArrayControl';

const FormItem = Form.Item;
const { TextArea } = Input;

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
    textArea: {
        Control: TextArea,
    },
};

class ConfigForm extends Component {
    state = {
    }

    componentWillReceiveProps = (nextProps) => {
        const { componentData } = nextProps;
        this.setState(componentData, () => {
            if (this.configComponentId !== nextProps.configComponentId) {
                document.getElementById('hsiter-config-panel-form').scrollTop = 0;
                this.configComponentId = nextProps.configComponentId;
            }
        });
    }

    setCustomControlValue = (newCustomControlValue) => {
        this.setState(newCustomControlValue);
        this.props.setComponentData(this.state);
    }

    configComponentId = ''; // configComponentId用作直接渲染DOM，和React无关，故暂时不放置到state中

    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            // componentData = {},
            configComponentTypeInfo = {},
            configComponentId,
            errorMap,
            setError,
        } = this.props;
        const { configSchema = {} } = configComponentTypeInfo;
        const configKeys = Object.keys(configSchema) || [];
        return (
            <Form className="hsiter-config-panel-form" id="hsiter-config-panel-form">
                {
                    configKeys.map((key) => {
                        const config = configSchema[key];
                        // const controlData = componentData[key];
                        const {
                            Control = Input,
                            controlDecorator,
                            type,
                        } = controlMap[config.control] || {};
                        let customProps = {};
                        if (type === 'custom') {
                            customProps.customKey = key;
                            customProps.configComponentId = configComponentId;
                            customProps.errorMap = errorMap;
                            customProps.setError = setError;
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
                                    getFieldDecorator(`${configComponentId}_${key}`, {
                                        // initialValue: controlData,
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
        const realKey = changedFieldKey.split('_')[1];
        const changedField = {
            [realKey]: changedFieldValue,
        };
        const error = Object.values(changedFields)[0].errors;
        if (error) {
            props.setError({
                [changedFieldKey]: error,
            });
            return;
        }
        props.setError({
            [changedFieldKey]: undefined,
        });
        props.setComponentData({ ...props.componentData, ...changedField });
    },
    mapPropsToFields(props) {
        const result = {};
        const {
            componentData = {},
            configComponentTypeInfo = {},
            configComponentId,
        } = props;
        const { configSchema = {} } = configComponentTypeInfo;
        const configKeys = Object.keys(configSchema) || [];
        configKeys.forEach((key) => {
            const controlData = componentData[key];
            result[`${configComponentId}_${key}`] = Form.createFormField({
                errors: props.errorMap[`${configComponentId}_${key}`],
                value: controlData,
            });
        });
        return result;
    },
})(ConfigForm);

export default WrappedConfigForm;
