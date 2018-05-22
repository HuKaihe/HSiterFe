import classames from 'classnames';
import React, { Component } from 'react';
import { Modal } from 'antd';

const { confirm } = Modal;

class SingleComponentContainer extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {
        transverse: false,
    }

    componentDidMount() {
        const nextProps = this.props;
        const height = (document.getElementById(nextProps.id) || {}).offsetHeight || 0;
        this.setState({
            transverse: height < 135,
        });
    }

    render() {
        // 属性
        const {
            id,
            children,
            index,
            canCompMoveUp,
            canCompMoveDown,
        } = this.props;

        // 方法
        const {
            moveComponentUp,
            moveComponentDown,
            deleteComponent,
            openNewComponentModal,
            openComponentConfigPanel,
        } = this.props;


        const operateBarCls = classames({
            'hsiter-component-editor-bar': true,
            transverse: this.state.transverse,
        });

        return (
            <div id={id} className="hsiter-single-component-container">
                <div
                    className="hsiter-component-mask"
                    onClick={() => {
                        openComponentConfigPanel({
                            configComponentId: id,
                        });
                    }}
                >
                    <div
                        className="hsiter-add-component before"
                        onClick={(e) => {
                            openNewComponentModal(index);
                            e.stopPropagation();
                        }}
                    >
                        <i className="fa fa-plus" />
                    </div>
                    <ul className={operateBarCls} >
                        <li>
                            <button
                                className={canCompMoveUp ? '' : 'disabled'}
                                onClick={(e) => {
                                    if (canCompMoveUp) {
                                        moveComponentUp(id, index);
                                    }
                                    e.stopPropagation();
                                }}
                            >
                                <i className="fa fa-arrow-up" />
                            </button>
                        </li>
                        <li>
                            <button
                                className={canCompMoveDown ? '' : 'disabled'}
                                onClick={(e) => {
                                    if (canCompMoveDown) {
                                        moveComponentDown(id, index);
                                    }
                                    e.stopPropagation();
                                }}
                            >
                                <i className="fa fa-arrow-down" />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                openComponentConfigPanel({
                                    configComponentId: id,
                                });
                            }}
                            >
                                <i className="fa fa-gear" />
                            </button>
                        </li>
                        <li>
                            <button
                                className="hsiter-remove"
                                onClick={(e) => {
                                    confirm({
                                        title: '删除提示',
                                        content: '确定要删除该组件吗？（如果删除失误，可通过撤销返回）',
                                        okText: '确定',
                                        okType: 'danger',
                                        cancelText: '取消',
                                        onOk() {
                                            deleteComponent(id, index);
                                        },
                                    });
                                    e.stopPropagation();
                                }}
                            >
                                <i className="fa fa-trash-o" />
                            </button>
                        </li>
                    </ul>
                    <div
                        className="hsiter-add-component after"
                        onClick={(e) => {
                            openNewComponentModal(index + 1);
                            e.stopPropagation();
                        }}
                    >
                        <i className="fa fa-plus" />
                    </div>
                </div>
                {children}
            </div>

        );
    }
}
export default SingleComponentContainer;
