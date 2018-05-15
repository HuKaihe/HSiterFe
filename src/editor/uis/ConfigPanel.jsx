import React, { Component } from 'react';
import { Tooltip, Button } from 'antd';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import ConfigForm from './ConfigForm';
import { objContentCompare, deepCloneObj } from '../../service/service';

class ConfigPanel extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {
        componentData: {},
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            componentData: nextProps.componentData,
        });
        this.initialData = deepCloneObj(nextProps.componentData);
    }

    setComponentData = (newComponentData) => {
        this.setState({
            componentData: newComponentData,
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
            componentData,
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
                        <Tooltip title={desc} placement="left">
                            <i className="fa fa-info-circle icon" />
                        </Tooltip>
                    </div>
                    <ConfigForm
                        setComponentData={this.setComponentData}
                        componentData={componentData}
                        configComponentTypeInfo={configComponentTypeInfo}
                    />
                    <div className="hsiter-config-panel-footer">
                        <Button
                            onClick={this.closePanel}
                        >
                            取消修改
                        </Button>
                        <Button
                            disabled={objContentCompare(this.state.componentData, this.initialData)}
                            type="primary"
                            onClick={() => {
                                if (objContentCompare(this.state.componentData, this.initialData)) {
                                    return;
                                }
                                editComponent(configComponentId, this.state.componentData);
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

