import React from 'react';
import { Input, Tooltip, Form, Switch, Button, message } from 'antd';

import { getRandomString } from '../../../../service/service';

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
    const {
        title, arrUnit, configComponentId, customKey, max = 5, min = 1,
    } = props;
    const arrValue = props.value || [];

    // 处理元素拖拽
    const dragInfo = {
        parent: configComponentId,
        dragId: '',
        dropId: '',
        before: true,
    };

    const addNewArrObj = (init = false) => {
        const originArr = props.value;
        if (originArr.length + 1 > max) {
            message.error(`${title}最多可以填加${max}个元素`);
            return;
        }
        const arrFields = Object.keys(arrUnit);
        const newArrObj = {
            id: getRandomString(),
        };
        arrFields.forEach((field) => {
            newArrObj[field] = arrUnit[field].defaultData;
        });
        props.setCustomControlValue({
            [props.customKey]: [...props.value, newArrObj],
        });
        if (!init) {
            message.success('添加元素成功');
        }
        setTimeout(() => {
            props.form.validateFields((errors) => {
                if (!errors) {
                    return;
                }
                const errorKeys = Object.keys(errors);
                const errorCollection = {};
                errorKeys.forEach((errKey) => {
                    errorCollection[errKey] = errors[errKey].errors.map(i => ({ ...i, message: '' }));
                });
                console.log(errorCollection);
                props.setError(errorCollection);
            });
        }, 100);
    };

    const removeArrObj = (itemId) => {
        const newArrValue = arrValue.filter(arrObj => arrObj.id !== itemId);
        if (newArrValue.length < min) {
            message.error(`${title}至少要有${min}个元素`);
            return;
        }
        props.setCustomControlValue({
            [customKey]: newArrValue,
        });
        message.success('删除元素成功');
        // 清除错误
        setTimeout(() => {
            const arrFields = Object.keys(arrUnit);
            const errorCollection = {};
            arrFields.forEach((field) => {
                errorCollection[`${configComponentId}_${itemId}_${field}`] = undefined;
            });
            props.setError(errorCollection);
        }, 100);
    };

    const startDrag = (id) => {
        dragInfo.dragId = id;
    };

    const calculateIndex = (event, id) => {
        event.preventDefault();
        if (arrValue.length < 2) {
            return;
        }
        dragInfo.dropId = id;
        const mouseY = event.clientY + document.getElementById('hsiter-component-config-form').scrollTop;
        let target = event.currentTarget;
        const height = target.offsetHeight;
        let top = 0;
        while (target.offsetParent) {
            top += target.offsetTop;
            target = target.offsetParent;
        }
        // console.log('mouseY', mouseY);
        // console.log('top + (height / 2)', top + (height / 2));
        if (mouseY > (top + (height / 2))) {
            dragInfo.before = false;
            return;
        }
        dragInfo.before = true;
    };

    const handleCollectionRank = () => {
        if (!dragInfo.dragId || dragInfo.dragId === dragInfo.dropId) {
            return;
        }
        console.log(dragInfo);
        if (arrValue.length < 2) {
            return;
        }
        // console.log('draggingId', draggingId);
        // console.log('draggingOrder', draggingOrder);
        const arrItem = arrValue.find(item => item.id === dragInfo.dragId);
        const originIndex = arrValue.findIndex(item => item.id === dragInfo.dragId);
        arrValue.splice(originIndex, 1);
        const dropIndex = arrValue.findIndex(item => item.id === dragInfo.dropId);
        const newOrder = dropIndex + (dragInfo.before ? 0 : 1);

        arrValue.splice(newOrder, 0, arrItem);
        props.setCustomControlValue({
            [customKey]: arrValue,
        });
    };

    if (arrValue.length === 0) {
        addNewArrObj(true);
    }

    return (
        <div className="hsiter-form-custom-control hsiter-arr-control" onDrop={() => { handleCollectionRank(); }}>
            {
                arrValue.map((item) => {
                    const arrFields = Object.keys(arrUnit);
                    return (
                        <div
                            key={item.id}
                            className="arr-obj"
                            onDragOver={(event) => { calculateIndex(event, item.id); }}
                        >
                            <div
                                draggable
                                onDragStart={() => { startDrag(item.id); }}
                                className="drag-component-container"
                            >
                                <button
                                    className="drag-arr-obj"
                                >
                                    <i className="fa fa-arrows" />
                                </button>
                            </div>
                            <button
                                className="remove-arr-obj"
                                onClick={() => {
                                    removeArrObj(item.id);
                                }}
                            >
                                <i className="fa fa-times" />
                            </button>

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
                                                    getFieldDecorator(`${configComponentId}_${item.id}_${field}`, {
                                                        // initialValue: item[field],
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
            <Button
                className="add-new-arr-obj"
                onClick={() => addNewArrObj()}
            >
                添加新的数组项
            </Button>
        </div>
    );
}

const WrappedArrayControl = Form.create({
    onFieldsChange: (props, changedFields) => {
        const { value, customKey } = props;
        const changedKey = Object.keys(changedFields)[0];
        const changedValue = changedFields[changedKey].value;
        const id = changedKey.split('_')[1];
        const field = changedKey.split('_')[2];
        const group = value.find(item => id === item.id);
        group[field] = changedValue;
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
        const { arrUnit, configComponentId, errorMap } = props;
        const arrFields = Object.keys(arrUnit) || [];
        const arrValue = props.value || [];
        arrValue.forEach((item) => {
            arrFields.forEach((field) => {
                const controlData = item[field];
                const controlKey = `${configComponentId}_${item.id}_${field}`;
                result[controlKey] = Form.createFormField({
                    value: controlData,
                    errors: errorMap[controlKey],
                });
            });
        });
        return result;
    },
})(ArrayControl);

export default WrappedArrayControl;
