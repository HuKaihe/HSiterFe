import React, { Component } from 'react';
import { Form, Input } from 'antd';
import defaultContainerConfigSchema from './defaultContainerConfigSchema';
import controlMap from './controlMap';

const FormItem = Form.Item;

class ContainerConfigForm extends Component {
    state = {
    }

    componentWillReceiveProps = (nextProps) => {
        const { containerData } = nextProps;
        this.setState(containerData, () => {
            if (this.configComponentId !== nextProps.configComponentId) {
                document.getElementById('hsiter-container-config-form').scrollTop = 0;
                this.configComponentId = nextProps.configComponentId;
            }
        });
    }

    setCustomControlValue = (newCustomControlValue) => {
        this.setState(newCustomControlValue, () => {
            // console.log(this.state);
            this.props.setContainerData(this.state);
        });
    }

    configComponentId = ''; // configComponentId用作直接渲染DOM，和React无关，故暂时不放置到state中

    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            configComponentTypeInfo = {},
            configComponentId,
        } = this.props;
        const {
            errorMap,
            setError,
        } = this.props;
        const { config_schema = {} } = configComponentTypeInfo;
        const containerConfigSchema = config_schema.container || defaultContainerConfigSchema;
        const configKeys = Object.keys(containerConfigSchema) || [];

        return (
            <Form
                className="hsiter-config-panel-form"
                id="hsiter-container-config-form"
            >
                {
                    configKeys.map((key) => {
                        const config = containerConfigSchema[key];
                        const {
                            Control = Input,
                            controlDecorator,
                            type,
                        } = controlMap[config.control] || {};
                        let customProps = {};
                        customProps = { ...customProps, ...config.customProps };
                        if (type === 'custom') {
                            customProps.customKey = key;
                            customProps.title = config.label;
                            customProps.configComponentId = configComponentId;
                            customProps.errorMap = errorMap;
                            customProps.setError = setError;
                            customProps.setCustomControlValue = this.setCustomControlValue;
                        }
                        return (
                            <FormItem
                                key={`${configComponentId}_container_${key}`}
                                label={config.label}
                                help={config.help}
                                {...config.layout}
                            >
                                {
                                    getFieldDecorator(`${configComponentId}_container_${key}`, {
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

const WrappedContainerConfigForm = Form.create({
    onFieldsChange: (props, changedFields) => {
        const changedFieldKey = Object.keys(changedFields)[0];
        const changedFieldValue = changedFields[changedFieldKey].value;
        const realKey = changedFieldKey.split('_')[2];
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
        props.setContainerData({ ...props.containerData, ...changedField });
    },
    mapPropsToFields(props) {
        const result = {};
        const {
            containerData = {},
            configComponentId,
            configComponentTypeInfo,
        } = props;
        const { config_schema = {} } = configComponentTypeInfo;
        const containerConfigSchema = config_schema.container || defaultContainerConfigSchema;

        const configKeys = Object.keys(containerConfigSchema) || [];
        configKeys.forEach((key) => {
            const controlData = containerData[key];
            result[`${configComponentId}_container_${key}`] = Form.createFormField({
                errors: props.errorMap[`${configComponentId}_container_${key}`],
                value: controlData,
            });
        });
        return result;
    },
})(ContainerConfigForm);

export default WrappedContainerConfigForm;
