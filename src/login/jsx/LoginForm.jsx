import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { post } from '../../service/service';

const FormItem = Form.Item;

class Login extends Component {
    static propTypes = {}
    static defaultProps = {}
    state = {
        loginErrorTip: '',
    }
    // 提交表单
    handleSubmit = () => {
        const { validateFields } = this.props.form;
        this.setState({
            loginErrorTip: '',
        });
        validateFields((err, values) => {
            if (err) {
                return;
            }
            post('/account/login', values).then(({ code, msg }) => {
                if (code === 200) {
                    window.location.href = '/pageManager';
                    return;
                }
                this.setState({
                    loginErrorTip: msg,
                });
            }).catch(() => {
                message.error('服务器开小差了，请亲稍后再试');
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
            <Form className="login-form">
                <div className="login-title">
                    登录HSiter
                </div>
                <FormItem
                    label="邮箱"
                    {...layout}
                >
                    {
                        getFieldDecorator('email', {
                            validateTrigger: 'onBlur',
                            rules: [
                                { required: true, message: '请亲填写邮箱' },
                                { type: 'email', message: '邮箱格式不正确~' },
                            ],
                        })(<Input placeholder="例如：hsiter@foxmail.com" />)
                    }
                </FormItem>
                <FormItem
                    label="密码"
                    {...layout}
                >
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码不得为空' }],
                        })(<Input type="password" />)
                    }
                </FormItem>
                {
                    this.state.loginErrorTip &&
                    <div className="login-error-tip animated bounceInLeft">
                        {
                            this.state.loginErrorTip
                        }
                    </div>
                }

                <FormItem
                    {...btnLayout}
                >
                    <Button
                        type="primary"
                        onClick={this.handleSubmit}
                    >
                        登录
                    </Button>
                    <a className="signup-href" href="/signup">
                        还没有账号？点此注册
                    </a>
                </FormItem>
            </Form>
        );
    }
}
export default Form.create()(Login);
