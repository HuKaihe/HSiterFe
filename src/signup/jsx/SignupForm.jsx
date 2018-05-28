import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { post } from '../../service/service';

const FormItem = Form.Item;

class Signup extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {
        emailValidateStatus: '',
    }

    // 去数据库检查邮箱是否重复
    checkEmailValid = () => {
        const { getFieldError, getFieldValue, setFields } = this.props.form;
        const email = getFieldValue('email');
        const isEmailFormatRight = getFieldError('email') === undefined;
        console.log(isEmailFormatRight);
        if (!isEmailFormatRight || !email) {
            return;
        }
        this.setState({
            emailValidateStatus: 'validating',
        });
        post('/account/checkEmailValid', {
            email,
        }).then(({ code }) => {
            if (code === 200) {
                this.setState({
                    emailValidateStatus: 'success',
                });
                return;
            }
            this.setState({
                emailValidateStatus: 'error',
            });
            setFields({
                email: {
                    value: email,
                    errors: [new Error('很抱歉，您的邮箱已经被注册过了')],
                },
            });
        }).catch(() => {
            message.error('服务器开小差了，请亲稍后再试');
        });
    }

    // 提交表单
    handleSubmit = () => {
        const { validateFields, getFieldValue, setFields } = this.props.form;
        // 放置邮箱检验过程中表单被提交
        if (this.state.emailValidateStatus === 'validating') {
            message.warning('正在检测亲的邮箱是否可用，请稍后');
            return;
        }
        validateFields((err, values) => {
            if (err) {
                return;
            }
            if (this.state.emailValidateStatus !== 'success') {
                const email = getFieldValue('email');
                setFields({
                    email: {
                        value: email,
                        errors: [new Error('很抱歉，您的邮箱已经被注册过了')],
                    },
                });
                return;
            }
            post('/account/signup', values).then(({ code, msg }) => {
                if (code === 200) {
                    window.location.href = '/pageManager';
                    return;
                }
                message.error(msg);
            }).catch(() => {
                message.error('服务器开小差了，请亲稍后再试');
                this.setState({
                    emailValidateStatus: '',
                });
            });
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const layout = {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 20,
            },
        };
        const btnLayout = {
            wrapperCol: {
                offset: 4,
            },
        };
        return (
            <Form className="signup-form">
                <div className="signup-title">
                        注册账号
                </div>
                <FormItem
                    label="邮箱"
                    {...layout}
                    hasFeedback
                    validateStatus={this.state.emailValidateStatus}
                >
                    {
                        getFieldDecorator('email', {
                            validateTrigger: 'onBlur',
                            rules: [
                                { type: 'email', message: '亲的邮箱格式不正确哦~' },
                                { required: true, message: '邮箱将作为亲登录系统的账号，必须认真填写~' },
                            ],
                        })(<Input
                            placeholder="例如：hsiter@foxmail.com"
                            onBlur={() => setTimeout(() => {
                                this.checkEmailValid();
                            }, 100)}
                        />)
                    }
                </FormItem>
                <FormItem
                    label="密码"
                    {...layout}
                >
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码不得为空哦~' }],
                        })(<Input type="password" placeholder="例如：welcome2hsiter" />)
                    }
                </FormItem>
                <FormItem
                    label="昵称"
                    {...layout}
                >
                    {
                        getFieldDecorator('nickName', {
                            rules: [
                                { required: true, message: '请亲为自己起一个昵称' },
                                { max: 15, message: '亲的昵称不宜超过15个字哦~' },
                            ],
                        })(<Input placeholder="例如：恩言" />)
                    }
                </FormItem>
                <FormItem
                    {...btnLayout}
                >
                    <Button
                        type="primary"
                        onClick={this.handleSubmit}
                    >注册
                    </Button>
                    <a className="login-href" href="/login">
                            已经有账号了?点此登录
                    </a>
                </FormItem>
            </Form>
        );
    }
}
export default Form.create()(Signup);
