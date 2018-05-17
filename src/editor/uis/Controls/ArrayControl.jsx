import React from 'react';
import { Input, Tooltip, Form, Switch } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const controlMap = {
    switch: {
        Control: Switch,
        controlDecorator: {
            valuePropName: 'checked',
        },
    },
    textArea: {
        Control: TextArea,
    },
};

function ArrayControl(props) {
    const { getFieldDecorator } = props.form;
    const { arrUnit } = props;
    const arrValue = props.value || [];
    if (arrValue.length === 0) {
        arrValue.push({});
    }
    return (
        <div className="hsiter-form-custom-control hsiter-arr-control">
            {
                arrValue.map((item) => {
                    const arrFields = Object.keys(arrUnit);
                    return (
                        <div key={item.id} className="arr-obj" >
                            {
                                arrFields.map((field) => {
                                    const fieldConfig = arrUnit[field];
                                    const {
                                        tip,
                                        label,
                                        control,
                                        width,
                                    } = fieldConfig;
                                    const {
                                        Control = Input,
                                        controlDecorator,
                                    } = controlMap[control] || {};
                                    // 去除空格
                                    const rules = fieldConfig.rules && fieldConfig.rules.map((i) => {
                                        const rule = i;
                                        rule.transform = (value) => {
                                            if (typeof value === 'string') {
                                                return value.trim();
                                            }
                                            return value;
                                        };
                                        return rule;
                                    });
                                    return (
                                        <div className="arr-item" key={field} style={{ width }}>
                                            <FormItem
                                                label={(
                                                    <span className="array-item-label">
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
                                                    getFieldDecorator(`${item.id}_${field}`, {
                                                        initialValue: item[field],
                                                        rules,
                                                        ...controlDecorator,
                                                    })(<Control />)
                                                }
                                            </FormItem>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

const WrappedArrayControl = Form.create({
    onFieldsChange: (props, changedFields) => {
        const { value, customKey } = props;
        const changedKey = Object.keys(changedFields)[0];
        const changedValue = changedFields[changedKey].value;
        const id = changedKey.split('_')[0];
        const field = changedKey.split('_')[1];
        const group = value.find(item => id === item.id);
        group[field] = changedValue;
        const error = Object.values(changedFields)[0].errors;
        if (error) {
            props.setCustomControlValue({
                error,
            });
            return;
        }
        props.setCustomControlValue({
            [customKey]: value,
        });
    },
})(ArrayControl);

export default WrappedArrayControl;
