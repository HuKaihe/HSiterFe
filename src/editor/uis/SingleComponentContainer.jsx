import classames from 'classnames';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import globalStore from '../../service/globalStore';

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
            editComponent,
            openNewComponentModal,
        } = this.props;


        const operateBarCls = classames({
            'hisite-component-editor-bar': true,
            transverse: this.state.transverse,
        });

        return (
            <div id={id} className="hisite-single-component-container">
                <div className="hisite-component-mask" >
                    <div
                        className="hisite-add-component before"
                        onClick={() => {
                            globalStore.set('newComponentOrder', index);
                            openNewComponentModal();
                        }}
                    >
                        <i className="fa fa-plus" />
                    </div>
                    <ul className={operateBarCls}>
                        <li>
                            <button
                                className={canCompMoveUp ? '' : 'disabled'}
                                onClick={() => {
                                    if (canCompMoveUp) {
                                        moveComponentUp(id, index);
                                    }
                                }}
                            >
                                <i className="fa fa-arrow-up" />
                            </button>
                        </li>
                        <li>
                            <button
                                className={canCompMoveDown ? '' : 'disabled'}
                                onClick={() => {
                                    if (canCompMoveDown) {
                                        moveComponentDown(id, index);
                                    }
                                }}
                            >
                                <i className="fa fa-arrow-down" />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { editComponent(id); }}>
                                <i className="fa fa-gear" />
                            </button>
                        </li>
                        <li>
                            <button
                                className="hisite-remove"
                                onClick={() => { deleteComponent(id, index); }}
                            >
                                <i className="fa fa-trash-o" />
                            </button>
                        </li>
                    </ul>
                    <div
                        className="hisite-add-component after"
                        onClick={() => {
                            globalStore.set('newComponentOrder', index + 1);
                            openNewComponentModal();
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
