import { connect } from 'react-redux';
import NewComponentModal from '../../uis/NewComponentModal/NewComponentModal';

const mapStateToProps = state => ({
    componentInfoList: state.componentInfoList,
});

export default connect(mapStateToProps)(NewComponentModal);
