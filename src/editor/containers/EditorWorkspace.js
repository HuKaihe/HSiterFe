import { connect } from 'react-redux';
import EditorWorkspace from '../uis/EditorWorkspace';

const mapStateToProps = state => ({
    layoutSchema: state.page_schema.layoutSchema,
    componentSchema: state.page_schema.componentSchema,
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
