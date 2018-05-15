import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';
import { message } from 'antd';
import ComponentModal from '../uis/NewComponentModal/ComponentModal';
import { getRandomString } from '../../service/service';
import globalStore from '../../service/globalStore';


const mapStateToProps = state => ({
    componentInfoGroup: state.componentInfoGroup,
    isNewComponentModalDisplayed: state.isNewComponentModalDisplayed,
});

const mapDispatchToProps = dispatch => ({
    addNewComponent: () => {
        const componentTypeInfoList = globalStore.get('componentTypeInfoList');
        const newComponentTypeId = globalStore.get('newComponentTypeId');
        const newComponentInfo = componentTypeInfoList.find(item => item.id === newComponentTypeId);
        const id = getRandomString();
        const {
            name: newComponentName,
            defaultData,
        } = newComponentInfo;
        dispatch({
            type: 'addNewComponent',
            id,
            defaultData,
            newComponentTypeId,
            name: newComponentName,
            order: globalStore.get('newComponentOrder'),
        });
        message.success('新增元素成功');
        setTimeout(() => {
            scrollIntoView(document.getElementById(id));
        }, 100);
    },

    closeNewComponentModal: () => {
        dispatch({
            type: 'closeNewComponentModal',
        });
    },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ComponentModal);
