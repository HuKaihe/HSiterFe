import React, { Component } from 'react';
import { Affix, message, Tooltip } from 'antd';
import { post } from '../../service/service';
import globalStore from '../../service/globalStore';
// import PropTypes from 'prop-types';


class EditorToolbar extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {}

    componentWillMount() {
        window.localStorage.setItem(this.page_id, JSON.stringify(this.props.page_schema));
    }

    componentWillReceiveProps(nextProps) {
        window.localStorage.setItem(this.page_id, JSON.stringify(nextProps.page_schema));
    }

    page_id = globalStore.get('pageInfo').page_id;

    save = () => post('/editor/save', {
        page_schema: JSON.stringify(this.props.page_schema),
        page_id: this.page_id,
    }).then(({ code }) => {
        if (code === 200) {
            message.success('保存成功');
            return;
        }
        message.error('保存失败');
    }).catch(() => {
        message.error('网络错误，请检查您的登录状态');
    });

    preview = () => {
        window.localStorage.setItem(this.page_id, JSON.stringify(this.props.page_schema));
        window.open(`/preview?page=${this.page_id}`);
    };

    prePublish = () => {
        this.save().then(() => {
            window.open(`/prePublish?page=${this.page_id}`);
        });
    };

    render() {
        const {
            undo,
            forward,
        } = this.props;

        return (
            <Affix className="editor-tool-bar-affix">
                <div className="editor-tool-bar">
                    <div className="left">
                        <ul className="setting-list">
                            <li>
                                <button className="btn">
                                    <i className="icon fa fa-info-circle" />
                                    <span className="text">页面信息</span>
                                </button>

                            </li>
                            <li>
                                <button className="btn">
                                    <i className="icon fa fa-cogs" />
                                    <span className="text">基本设置</span>
                                </button>
                            </li>
                        </ul>
                        <ul className="edit-list">
                            <li>
                                <button className="btn" onClick={() => { undo(); }}>
                                    <i className="icon fa fa-reply" />
                                    <span className="text">撤销</span>
                                </button>
                            </li>
                            <li>
                                <button className="btn" onClick={() => { forward(); }}>
                                    <i className="icon fa fa-share" />
                                    <span className="text">前进</span>
                                </button>

                            </li>
                            {/* <li>
                                <button className="btn">
                                    <i className="icon fa fa-download" />
                                    <span className="text">下载</span>
                                </button>
                            </li> */}
                        </ul>
                    </div>

                    <div className="right">
                        <ul className="other-tool-list">
                            <li title="钉住工具栏">
                                <button className="btn">
                                    <i className="icon fa fa-thumb-tack" />
                                </button>
                            </li>
                        </ul>
                        <ul className="page-list">
                            <li>
                                <button
                                    className="btn"
                                    onClick={this.save}
                                >
                                    <i className="icon fa fa-save" />
                                    <span className="text">保存</span>
                                </button>
                            </li>
                            <li>
                                <button className="btn">
                                    <i className="icon fa fa-inbox" />
                                    <span className="text">另存为</span>
                                </button>
                            </li>
                            <li>
                                <Tooltip title="对页面进行实时预览，预览页面会根据您的操作自动刷新" placement="bottom">
                                    <button
                                        className="btn"
                                        onClick={this.preview}
                                    >
                                        <i className="icon fa fa-eye" />
                                        <span className="text">预览</span>
                                    </button>
                                </Tooltip>

                            </li>
                            <li>
                                <button
                                    className="btn publish"
                                    onClick={this.prePublish}
                                >
                                    <i className="icon fa fa-send-o" />
                                    <span className="text">预发布</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Affix>);
    }
}
export default EditorToolbar;
