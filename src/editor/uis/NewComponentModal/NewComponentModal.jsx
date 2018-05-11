import React from 'react';
// import PropTypes from 'prop-types';
import NewComponentModal from './ComponentModal';
import NewAppComponent from './NewAppComponent';
import NewLayoutComponent from './NewLayoutComponent';

function NewComponent(props) {
    const {
        isNewComponentModalDisplayed,
        componentGroup,
    } = props;

    const {
        closeNewComponentModal,
        addNewComponent,
    } = props;

    const tabs = [
        {
            key: 'appcomponenttab',
            title: '应用组件',
            icon: 'fa-puzzle-piece',
            PaneContent: NewAppComponent,
            componentGroup,
        }, {
            key: 'layoutcomponenttab',
            title: '布局组件',
            icon: 'fa-object-group',
            PaneContent: NewLayoutComponent,
        },
    ];

    const copy = {
        okText: '确定新增',
        cancelText: '取消',
    };

    return (
        <NewComponentModal
            tabs={tabs}
            copy={copy}
            isNewComponentModalDisplayed={isNewComponentModalDisplayed}
            closeNewComponentModal={closeNewComponentModal}
            addNewComponent={addNewComponent}
        />
    );
}

NewComponent.propTypes = {};
NewComponent.defaultProps = {};
export default NewComponent;

