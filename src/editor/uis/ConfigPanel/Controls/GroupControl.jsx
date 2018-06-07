import React from 'react';
import { Tooltip, Form, Input } from 'antd';
import controlMap from '../controlMap';

const FormItem = Form.Item;

function GroupControl(props) {
    const { getFieldDecorator } = props.form;
    const {
        groupUnit, configComponentId, customKey,
    } = props;
    const fields = Object.keys(groupUnit);
    return (
        <div className="hsiter-form-custom-control hsiter-group-control" >
            {
                fields.map((field) => {
                    const fieldConfig = groupUnit[field];
                    const {
                        tip,
                        label,
                        control,
                        width,
                        rules,
                    } = fieldConfig;
                    const {
                        Control = Input,
                        controlDecorator,
                    } = controlMap[control] || {};
                    let customProps = {};
                    customProps = { ...customProps, ...fieldConfig.customProps };
                    return (
                        <div className="group-item" key={field} style={{ width }}>
                            <FormItem
                                label={(
                                    <span className="group-item-label">
                                        {label}
                                        {
                                            tip &&
                                            <Tooltip title={tip}>
                                                <i className="fa fa-info-circle tip-icon" />
                                            </Tooltip>
                                        }
                                    </span>
                                )}
                                colon={false}
                            >
                                {
                                    getFieldDecorator(`${configComponentId}_${customKey}_${field}`, {
                                        rules,
                                        ...controlDecorator,
                                    })(<Control {...customProps} />)
                                }
                            </FormItem>
                        </div>
                    );
                })
            }
        </div>
    );
}

const WrappedGroupControl = Form.create({
    onFieldsChange: (props, changedFields) => {
        const { value = {}, customKey } = props;
        const changedKey = Object.keys(changedFields)[0];
        const changedValue = changedFields[changedKey].value;
        // console.log(changedKey);
        // console.log(changedValue);
        const propField = changedKey.split('_')[2];
        value[propField] = changedValue;
        const error = Object.values(changedFields)[0].errors;
        if (error) {
            props.setError({
                [changedKey]: error,
            });
            return;
        }
        props.setError({
            [changedKey]: undefined,
        });
        props.setCustomControlValue({
            [customKey]: value,
        });
    },
    mapPropsToFields(props) {
        const result = {};
        const {
            groupUnit,
            configComponentId,
            errorMap,
            customKey,
        } = props;
        const groupFields = Object.keys(groupUnit) || [];
        const groupValue = props.value || {};
        groupFields.forEach((field) => {
            const controlData = groupValue[field];
            const controlKey = `${configComponentId}_${customKey}_${field}`;
            result[controlKey] = Form.createFormField({
                value: controlData,
                errors: errorMap[controlKey],
            });
        });
        return result;
    },
})(GroupControl);

export default WrappedGroupControl;
