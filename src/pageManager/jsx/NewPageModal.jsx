import React from 'react';
import { Modal, Form, Input, Tooltip, Select } from 'antd';
import { post } from '../../service/service';

const FormItem = Form.Item;
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};

class NewPageModal extends React.Component {
    state = {}
    componentWillReceiveProps(nextProp) {
        this.setState(nextProp);
    }
    getLabelWithTip = (title, tip) => (
        <span>
            {title}
            <Tooltip title={tip} placement="right">
                <i className="fa fa-question-circle hsiter-icon" />
            </Tooltip>
        </span>
    )
    handleCancel = () => {
        this.props.showNewPageModal(false);
    }
    addNewPage = () => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }
            post('/pageManager/newPage', {
                page_name: values.page_name,
                page_type: values.page_type,
                page_collection: values.page_collection,
            }).then((({ payload }) => {
                const { pageList, page_id } = payload;
                this.props.updatePageList(pageList);
                window.open(`/editor?page=${page_id}`);
            })).then(() => {
                this.props.showNewPageModal(false);
            });
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                getContainer={() => document.getElementById('hsiter-page-manager-app')}
                className="hsiter-new-page-modal"
                title="新增页面"
                visible={this.props.visible}
                onOk={this.addNewPage}
                okText="确定新增"
                onCancel={this.handleCancel}
                cancelText="取消"
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('页面名称', '页面名称是您查找页面的重要凭据，请尽量使用一个有意义的名称')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('page_name', {
                                rules: [{ required: true, message: '请填写页面名称' }],
                            })(<Input placeholder="页面名称" />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('页面链接', '您希望作为您访问地址的链接')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('href', {
                                rules: [
                                    { pattern: /^([A-Za-z0-9]|_|-)+$/, message: 'url只支持英文、数字及下划线' },
                                ],
                            })(<Input addonBefore="hsiter.hukaihe.com/hukaihe/" placeholder="页面链接" />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('页面集合', '对页面进行简单的归档。可以点击【新建页面】左边的【新建集合】创建新的集合')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('page_collection', {
                                rules: [{ required: true, message: '请填写页面名称' }],
                                initialValue: 1,
                            })(<Select><Option value={1}>未归档页面</Option></Select>)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('标记', '根据您的喜好对页面进行个性化分类')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('page_type', {
                                rules: [{ required: true, message: '请填写页面名称' }],
                                initialValue: 0,
                            })((<Select><Option value={0}>蓝色</Option><Option value={1}>红色</Option><Option value={2}>黄色</Option><Option value={3}>绿色</Option></Select>))
                        }
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

NewPageModal.propTypes = {};
NewPageModal.defaultProps = {};
export default Form.create()(NewPageModal);
