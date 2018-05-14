import classames from 'classnames';
import React, { Component } from 'react';

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
            'hisite-component-editor-bar': true,
            transverse: this.state.transverse,
        });

        return (
            <div id={id} className="hisite-single-component-container">
                <div
                    className="hisite-component-mask"
                    onClick={() => {
                        openComponentConfigPanel({
                            configComponentId: id,
                        });
                    }}
                >
                    <div
                        className="hisite-add-component before"
                        onClick={(e) => {
                            openNewComponentModal(index);
                            e.stopPropagation();
                        }}
                    >
                        <i className="fa fa-plus" />
                    </div>
                    <ul className={operateBarCls}>
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
                                className="hisite-remove"
                                onClick={(e) => {
                                    deleteComponent(id, index);
                                    e.stopPropagation();
                                }}
                            >
                                <i className="fa fa-trash-o" />
                            </button>
                        </li>
                    </ul>
                    <div
                        className="hisite-add-component after"
                        onClick={() => {
                            openNewComponentModal(index + 1);
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
