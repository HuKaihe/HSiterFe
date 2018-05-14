import React, { Component } from 'react';
import { Form, Button } from 'antd';
import ArrayControl from './Forms/ArrayControl';
import globalStore from '../../service/globalStore';

const FormItem = Form.Item;

class HorizontalLoginForm extends Component {
    state = {
    }
    componentWillReceiveProps = (nextProps) => {
        const { componentData } = nextProps;
        this.setState(componentData);
    }
    setArrayControlValue = (newArrControlValue) => {
        this.setState(newArrControlValue);
        this.props.setComponentData(this.state);
        console.log(globalStore.get('componentTypeInfoList')[2].defaultData.cards);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.setComponentData({
                    cards: [],
                });
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;
        const {
            componentData = {},
        } = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="hsiter-config-panel-form">
                {
                    <FormItem
                        label="卡片集合"
                    >
                        {
                            getFieldDecorator('cards', {
                                initialValue: componentData.cards,
                            })(<ArrayControl
                                arrKey="cards"
                                setArrayControlValue={this.setArrayControlValue}
                            />)
                        }
                    </FormItem>
                }
            </Form>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create({
    onFieldsChange: (props, changedFields) => {
        props.setComponentData({ ...props.componentData, ...changedFields });
    },
})(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;
