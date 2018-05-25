import React from 'react';
import { Button, Tooltip, Modal } from 'antd';
import classnames from 'classnames';
import moment from 'moment';

const { confirm } = Modal;

const infoUnit = [
    {
        id: 'page_name',
        code: 'page_name',
        title: '页面名称',
        icon: 'fa-sticky-note-o',
    },
    {
        id: 'author',
        title: '作者',
        code: 'author',
        icon: 'fa-user',
    },
    {
        id: 'create_time',
        title: '创建时间',
        code: 'create_time',
        icon: 'fa-clock-o',
    },
    {
        id: 'last_operate_time',
        title: '上次操作时间',
        code: 'last_operate_time',
        icon: 'fa-history',
    },
];


function PageCard(props) {
    const pageToolList = [
        {
            id: 'edit_page_info',
            title: '编辑页面信息',
            icon: 'fa-edit',
            listener: () => {},
        },
        {
            id: 'page_preview',
            title: '预览页面',
            icon: 'fa-eye',
            href: '',
            listener: () => {
                window.open(`/preview?page=${props.cardInfo.page_id}`);
            },
        },
        {
            id: 'page_data',
            title: '看看页面数据',
            icon: 'fa-area-chart',
            listener: () => {},
        },
        {
            id: 'copy',
            title: '复制页面',
            icon: 'fa-clipboard',
            listener: () => {},
        },
    ];
    const cardCls = classnames({
        'red-card': props.cardInfo.page_type === 1,
        'yellow-card': props.cardInfo.page_type === 2,
        'green-card': props.cardInfo.page_type === 3,
        'page-card-info': true,
    });
    return (
        <div className="hsiter-page-card">
            <div className={cardCls}>
                <div className="card-info-cover">
                    <button
                        className="btn-remove"
                        onClick={() => {
                            confirm({
                                title: '你确定要删除这个页面吗?',
                                content: '页面删除将无法恢复',
                                okText: '确定删除',
                                okType: 'danger',
                                cancelText: '取消',
                                onOk() {
                                    props.deletePage(props.cardInfo.page_id);
                                },
                            });
                        }}
                    >
                        <i className="fa fa-times" />
                    </button>
                    <ul className="info-list">
                        {
                            infoUnit.map(field => (
                                <li key={field.id}>
                                    <i className={`fa ${field.icon} icon`} />
                                    <span>
                                        {field.title}：
                                    </span>
                                    {
                                        field.id === 'create_time' || field.id === 'last_operate_time' ?
                                            moment(props.cardInfo[field.code]).format('MM-DD-YYYY HH:mm:ss') :
                                            props.cardInfo[field.code]
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="page-card-tool-bar" >
                <ul className="tool-list">
                    {
                        pageToolList.map(tool => (
                            <li key={tool.id}>
                                <button onClick={(e) => {
                                    tool.listener(e);
                                }}
                                >
                                    <Tooltip title={tool.title}>
                                        <i className={`fa ${tool.icon}`} />
                                    </Tooltip>
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <Button
                    type="primary"
                    className="start-edit-btn"
                    onClick={() => {
                        window.open(`/editor?page=${props.cardInfo.page_id}`);
                    }}
                >
                    <i className="fa fa-wrench icon" />
                        开始制作
                </Button>
            </div>
        </div>
    );
}

PageCard.propTypes = {};
PageCard.defaultProps = {};
export default PageCard;
