import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';
import NewComponentModal from '../uis/NewComponentModal/NewComponentModal';
import { getRandomString, globalStore } from '../../service/service';

const mapStateToProps = state => ({
    componentGroup: state.componentGroup,
    isNewComponentModalDisplayed: state.isNewComponentModalDisplayed,
});

const mapDispatchToProps = dispatch => ({
    addNewComponent: () => {
        const id = getRandomString();
        dispatch({
            id,
            type: 'addNewComponent',
            name: globalStore.get('newComponentName'),
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
)(NewComponentModal);
