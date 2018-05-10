import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';

import SingleComponentContainer from '../uis/SingleComponentContainer';
import { getRandomString } from '../../service/service';

const mapStateToProps = (state, ownProps) => ({
    index: ownProps.index,
    id: ownProps.id,
});

const mapDispatchToProps = dispatch => ({
    addNewComponent: (name, order = 0) => {
        const id = getRandomString() + new Date().getDate() + getRandomString();
        dispatch({
            type: 'addNewComponent',
            id,
            name,
            order,
        });
        setTimeout(() => {
            scrollIntoView(document.getElementById(id));
        }, 100);
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

    editComponent: (id) => {
        dispatch({
            type: 'editComponent',
            id,
        });
    },

});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SingleComponentContainer);
