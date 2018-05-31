import React from 'react';
import { Button, Tooltip, Modal, message } from 'antd';
import moment from 'moment';
import { post } from '../../service/service';

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
    const {
        page_id,
        page_type,
        is_publish,
        publish_url,
    } = props.cardInfo;
    const {
        updatePageList,
        showPageInfoModal,
        deletePage,
    } = props;
    const pageToolList = [
        {
            id: 'edit_page_info',
            title: '编辑页面信息',
            icon: 'fa-edit',
            listener: () => {
                showPageInfoModal(true, props.cardInfo);
            },
        },
        {
            id: 'page_preview',
            title: '查看页面快照',
            icon: 'fa-eye',
            listener: () => {
                window.open(`/screenshot?page=${page_id}`);
            },
        },
        {
            id: 'page_data',
            title: '看看页面数据',
            icon: 'fa-area-chart',
            listener: () => {
                message.error('这个功能还没有开发，程序员GG表示已经累坏了');
            },
        },
        {
            id: 'copy',
            title: '复制页面',
            icon: 'fa-clipboard',
            listener: () => {
                post('/pageManager/copyPage', { page_id }).then((({ payload }) => {
                    const { pageList = [] } = payload;
                    updatePageList(pageList);
                    message.success('复制页面成功');
                })).catch(() => {
                    message.error('网络错误，请再次登后重试，如果仍有问题，不如喝杯茶休息一下吧');
                });
            },
        },
    ];

    return (
        <div className="hsiter-page-card">
            <div
                className="page-card-info"
                style={{
                    backgroundImage: `url(/public/image/card_bg/card_bg_${page_type}.jpg)`,
                }}
            >
                <div className="card-info-cover">
                    <button
                        className="btn-remove"
                        onClick={() => {
                            confirm({
                                title: '你确定要删除这个页面吗?',
                                content: '页面删除将无法恢复，请谨慎操作',
                                okText: '确定删除',
                                okType: 'danger',
                                cancelText: '取消',
                                onOk() {
                                    deletePage(page_id);
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
                        {
                            !!is_publish &&
                            <li key="publish_url" className="publish-item spin-icon">
                                <a href={is_publish ? publish_url : '#'} target="_blank">

                                    <i className="fa fa-paper-plane icon" />
                                    <span>
                                            已发布(点此查看)
                                    </span>
                                </a>

                            </li>
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
                        window.open(`/editor?page=${page_id}`);
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
