import React from 'react';
// import PropTypes from 'prop-types';
import ComponentModal from '../../containers/NewComponentModal/ComponentModal';
import NewAppComponent from './AppComponent';
import NewLayoutComponent from './LayoutComponent';

function NewComponent(props) {
    const tabs = [
        {
            key: 'appcomponenttab',
            title: '应用组件',
            icon: 'fa-puzzle-piece',
            PaneContent: NewAppComponent,
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
        <ComponentModal
            tabs={tabs}
            copy={copy}
            componentInfoList={props.componentInfoList}
        />
    );
}

NewComponent.propTypes = {};
NewComponent.defaultProps = {};
export default NewComponent;

