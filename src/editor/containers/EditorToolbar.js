import { connect } from 'react-redux';
import EditorToolbar from '../uis/EditorToolbar';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
    undo: () => {
        dispatch({
            type: 'undo',
        });
    },

    forward: () => {
        dispatch({
            type: 'forward',
        });
    },

    save: () => {
        dispatch({
            type: 'save',
        });
    },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditorToolbar);
