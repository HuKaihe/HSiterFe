import { connect } from 'react-redux';
import { message } from 'antd';
import ConfigPanel from '../uis/ConfigPanel';
import globalStore from '../../service/globalStore';

const mapStateToProps = (state) => {
    const configComponentId = globalStore.get('configComponentId');
    const configComponent = state.pageSchema.componentSchema.find(item => item.id === configComponentId) || {};
    const componentTypeInfoList = globalStore.get('componentTypeInfoList');
    const configComponentTypeId = configComponent.componentTypeId;
    const configComponentTypeInfo = componentTypeInfoList.find(item => item.id === configComponentTypeId);
    const { componentData } = configComponent;
    return {
        isComponentConfigPanelDisplayed: state.isComponentConfigPanelDisplayed,
        configComponentTypeInfo,
        configComponentId,
        componentData,
    };
};

const mapDispatchToProps = dispatch => ({
    closeComponentConfigPanel: () => {
        dispatch({
            type: 'closeComponentConfigPanel',
        });
    },
    editComponent: (id, componentData) => {
        dispatch({
            type: 'editComponent',
            id,
            componentData,
        });
        message.success('修改元素属性成功');
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(ConfigPanel);
