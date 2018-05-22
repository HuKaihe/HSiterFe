import { connect } from 'react-redux';
import EditorToolbar from '../uis/EditorToolbar';

const mapStateToProps = state => ({
    page_schema: state.page_schema,
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
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditorToolbar);
