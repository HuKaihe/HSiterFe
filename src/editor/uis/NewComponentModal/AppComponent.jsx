import React, { Component } from 'react';
import { Tabs } from 'antd';
import ComponentListPanel from './ComponentListPanel';
import globalStore from '../../../service/globalStore';

const { TabPane } = Tabs;

class AppComponent extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {
        activeComponentId: '',
    }

    setActiveComponentId = (id) => {
        this.setState({
            activeComponentId: id,
        });
        globalStore.set('newComponentTypeId', id);
    }

    render() {
        const { componentInfoGroup } = this.props;
        return (
            <Tabs
                tabPosition="left"
                className="new-app-component"
            >
                {
                    componentInfoGroup.map(item => (
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
export default AppComponent;
