import { connect } from 'react-redux';
import NewComponentModel from '../uis/NewComponentModel';
import { getRandomString } from '../../service/service';

const mapStateToProps = state => ({
    layoutSchema: state.pageSchema.layoutSchema,
    componentSchema: state.pageSchema.componentSchema,
});

const mapDispatchToProps = dispatch => ({
    addNewComponent: (name, order = 0) => {
        const id = getRandomString() + new Date().getDate() + getRandomString();
        dispatch({
            id,
            type: 'addNewComponent',
            name,
            order,
        });
    },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewComponentModel);
