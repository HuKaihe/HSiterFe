import React from 'react';
import { Modal, Form, Input, Tooltip, Select, message } from 'antd';
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

class PageInfoModal extends React.Component {
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
    getBackgroundSelect = () => (
        <Select>
            <Option value={1}>江南民宿</Option>
            <Option value={2}>落日扁舟</Option>
            <Option value={3}>冰原灯塔</Option>
            <Option value={4}>天外来客</Option>
            <Option value={5}>皓月孤舟</Option>
        </Select>
    );
    handleCancel = () => {
        this.props.showPageInfoModal(false);
    }
    addNewPage = () => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }
            post('/pageManager/newPage', values).then((({ payload }) => {
                const { pageList = [], page_id } = payload;
                this.props.updatePageList(pageList);
                window.open(`/editor?page=${page_id}`);
                this.props.showPageInfoModal(false);
            })).catch(() => {
                message.error('网络错误，请检查您的登录状态');
            });
        });
    }
    editPage = () => {
        const {
            pageInfo,
            showPageInfoModal,
            updatePageList,
        } = this.props;
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }
            post('/pageManager/editPage', {
                page_id: pageInfo.page_id,
                changedInfo: values,
            }).then((({ payload }) => {
                const { pageList = [] } = payload;
                updatePageList(pageList);
                showPageInfoModal(false);
                message.success('修改成功');
            })).catch(() => {
                message.error('网络错误，请检查您的登录状态');
            });
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { pageInfo } = this.props;
        const isEdit = !!pageInfo.page_id;
        return (
            <Modal
                getContainer={() => document.getElementById('hsiter-page-manager-app')}
                className="hsiter-new-page-modal"
                title={isEdit ? '修改页面信息' : '新建页面'}
                visible={this.props.visible}
                onOk={isEdit ? this.editPage : this.addNewPage}
                okText={isEdit ? '确定修改' : '确定'}
                onCancel={this.handleCancel}
                cancelText={isEdit ? '取消修改' : '取消'}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('页面名称', '亲可以根据页面名称在页面管理器里查找和操作页面，该名称对外不可见')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('page_name', {
                                rules: [
                                    { required: true, message: '请亲填写页面名称~' },
                                    { max: 38, message: '页面标题不得超过38个字~' },
                                ],
                            })(<Input placeholder="页面名称" />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('页面标题', '显示在浏览器标签栏，供所有用户查看的标题')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('page_title', {
                                rules: [
                                    { required: true, message: '请亲为自己的页面起一个响亮的名字吧~' },
                                    { max: 25, message: '页面标题不得超过25个字~' },
                                ],
                            })(<Input placeholder="页面标题" />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('页面链接', '选填，页面发布后，其他用户可以根据您填写的链接访问您的页面')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('href', {
                                rules: [
                                    { pattern: /^([A-Za-z0-9]|_|-)+$/, message: 'url只支持英文、数字及下划线' },
                                    { max: 25, message: 'URL链接长度不得超过25个字符~' },
                                ],
                            })(<Input addonBefore="hsiter.hukaihe.com/pages/" placeholder="页面链接" />)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('页面集合', '对页面进行简单的归档。可以点击【新建页面】左边的【新建集合】创建新的集合')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('page_collection', {
                                initialValue: 0,
                            })(<Select><Option value={0}>未归档页面</Option></Select>)
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={this.getLabelWithTip('标记', '根据您的喜好对页面进行个性化分类；比如，您可以把明天要发布的页面设置成【天外来客】，从而在下次进入页面管理器时一眼就能看到它')}
                        colon={false}
                    >
                        {
                            getFieldDecorator('page_type', {
                                initialValue: 1,
                            })(this.getBackgroundSelect())
                        }
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

PageInfoModal.propTypes = {};
PageInfoModal.defaultProps = {};
export default Form.create({
    mapPropsToFields(props) {
        const { pageInfo } = props;
        const pageInfoKeys = Object.keys(pageInfo);
        const result = {};
        pageInfoKeys.forEach((key) => {
            result[key] = Form.createFormField({
                value: pageInfo[key],
            });
        });
        return result;
    },
})(PageInfoModal);
