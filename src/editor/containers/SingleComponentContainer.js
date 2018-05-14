import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';

import SingleComponentContainer from '../uis/SingleComponentContainer';
import globalStore from '../../service/globalStore';

const mapStateToProps = (state, ownProps) => ({
    index: ownProps.index,
    id: ownProps.id,
});

const mapDispatchToProps = dispatch => ({

    openNewComponentModal: (order) => {
        globalStore.set('newComponentOrder', order);
        dispatch({
            type: 'openNewComponentModal',
        });
    },

    moveComponentUp: (id, order) => {
        dispatch({
            type: 'moveComponentUp',
            id,
            order,
        });
        setTimeout(() => {
            scrollIntoView(document.getElementById(id));
        }, 100);
    },

    moveComponentDown: (id, order) => {
        dispatch({
            type: 'moveComponentDown',
            id,
            order,
        });
        setTimeout(() => {
            scrollIntoView(document.getElementById(id));
        }, 100);
    },

    deleteComponent: (id, order) => {
        dispatch({
            type: 'deleteComponent',
            id,
            order,
        });
    },

    openComponentConfigPanel: (configInfo) => {
        globalStore.setObj(configInfo);
        scrollIntoView(document.getElementById(configInfo.configComponentId));
        // 启用简单的动画效果
        dispatch({
            type: 'openComponentConfigPanel',
        });
    },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SingleComponentContainer);
