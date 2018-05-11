import { connect } from 'react-redux';
import EditorWorkspace from '../uis/EditorWorkspace';

const mapStateToProps = state => ({
    layoutSchema: state.pageSchema.layoutSchema,
    componentSchema: state.pageSchema.componentSchema,
});

const mapDispatchToProps = dispatch => ({
    openNewComponentModal: () => {
        dispatch({
            type: 'openNewComponentModal',
        });
    },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditorWorkspace);
