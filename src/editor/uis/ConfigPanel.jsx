import React, { Component } from 'react';
import { Tooltip, Button } from 'antd';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import ConfigForm from './ConfigForm';
import { objContentCompare, deepCloneObj, isObjPropsAllUnvalid } from '../../service/service';

class ConfigPanel extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {
        errorMap: {},
        componentData: {},
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isComponentConfigPanelDisplayed === false) {
            return;
        }
        if (nextProps.configComponentId === this.state.configComponentId) {
            this.initialData = deepCloneObj(nextProps.componentData || {});
            return;
        }
        this.setState({
            componentData: nextProps.componentData || {},
            configComponentId: nextProps.configComponentId,
            errorMap: {},
        });
        this.initialData = deepCloneObj(nextProps.componentData || {});
    }

    setComponentData = (newComponentData) => {
        this.setState({
            componentData: newComponentData,
        });
    }

    setError = (errorObj) => {
        this.setState(pre => ({
            errorMap: { ...pre.errorMap, ...errorObj },
        }), () => {
            console.log(this.state.errorMap);
        });
    }

    closePanel = () => {
        this.panel.className = 'hsiter-config-panel slideOutRight';
        setTimeout(() => {
            this.props.closeComponentConfigPanel();
            this.panel.className = 'hsiter-config-panel';
        }, 300);
    }

    render() {
        const {
            isComponentConfigPanelDisplayed,
            configComponentTypeInfo = {},
        } = this.props;
        const {
            editComponent,
            configComponentId,
        } = this.props;

        const {
            title,
            desc,
        } = configComponentTypeInfo;

        const configPanelCls = classnames({
            'hsiter-config-panel-container': true,
            visible: isComponentConfigPanelDisplayed,
        });

        return (
            <div
                className={configPanelCls}
                onClick={this.closePanel}
            >
                <div
                    ref={(panel) => { this.panel = panel; }}
                    className="hsiter-config-panel"
                    onClick={(e) => { e.stopPropagation(); }}
                >
                    <div className="component-title">
                        {
                            title
                        }
                        {
                            desc &&
                            <Tooltip title={desc} placement="left">
                                <i className="fa fa-info-circle icon" />
                            </Tooltip>
                        }

                    </div>
                    <ConfigForm
                        setComponentData={this.setComponentData}
                        setError={this.setError}
                        errorMap={this.state.errorMap}
                        componentData={this.state.componentData}
                        configComponentId={configComponentId}
                        configComponentTypeInfo={configComponentTypeInfo}
                    />
                    <div className="hsiter-config-panel-footer">
                        <Tooltip title="在您点击另一个元素之前，配置面版将保持您当前操作的状态">
                            <Button
                                onClick={this.closePanel}
                            >
                            取消修改
                            </Button>
                        </Tooltip>
                        <Button
                            disabled={
                                !(
                                    !objContentCompare(this.state.componentData, this.initialData) &&
                                    isObjPropsAllUnvalid(this.state.errorMap)
                                )
                            }
                            type="primary"
                            onClick={() => {
                                if (
                                    !(
                                        !objContentCompare(this.state.componentData, this.initialData) &&
                                        isObjPropsAllUnvalid(this.state.errorMap)
                                    )
                                ) {
                                    return;
                                }
                                console.log(this.state.componentData);
                                editComponent(configComponentId, deepCloneObj(this.state.componentData));
                                this.closePanel();
                            }}
                        >
                            确定修改
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ConfigPanel;

