import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';
import ComponentModal from '../../uis/NewComponentModal/ComponentModal';
import { getRandomString } from '../../../service/service';
import globalStore from '../../../service/globalStore';


const mapStateToProps = state => ({
    componentInfoGroup: state.componentInfoGroup,
    isNewComponentModalDisplayed: state.isNewComponentModalDisplayed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addNewComponent: () => {
        const id = getRandomString();
        const newComponentInfoId = globalStore.get('newComponentInfoId');
        const { componentInfoList } = ownProps;
        const newComponentInfo = componentInfoList.find(item => item.id === newComponentInfoId);
        const {
            name: newComponentName,
        } = newComponentInfo;
        dispatch({
            id,
            type: 'addNewComponent',
            name: newComponentName,
            order: globalStore.get('newComponentOrder'),
        });
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
