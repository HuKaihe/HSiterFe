import React, { Component } from 'react';
import { Tabs } from 'antd';
import ComponentListPanel from './ComponentListPanel';

const { TabPane } = Tabs;

class NewAppComponent extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {
        activeComponentId: '',
    }

    setActiveComponentId = (id) => {
        this.setState({
            activeComponentId: id,
        });
    }

    render() {
        const {
            componentGroup,
        } = this.props;
        return (
            <Tabs
                tabPosition="left"
                className="component-menu"
            >
                {
                    componentGroup.map(item => (
                        <TabPane
                            key={item.code}
                            tab={
                                <div className="component-menu-item" >
                                    {item.img ?
                                        <img className="logo-img" src={item.img} alt={item.title} /> :
                                        <i className={`fa ${item.icon}`} />}
                                    {item.title}
                                    {item.splitter && <div className="splitter" />}
                                </div>}
                        >
                            <ComponentListPanel
                                activeComponentId={this.state.activeComponentId}
                                componentList={item.children}
                                setActiveComponentId={this.setActiveComponentId}
                            />
                        </TabPane>
                    ))
                }
            </Tabs>
        );
    }
}
export default NewAppComponent;
