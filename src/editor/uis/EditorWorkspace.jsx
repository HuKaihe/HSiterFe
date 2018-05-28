import React from 'react';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';
import SingleComponentContainer from '../containers/SingleComponentContainer';
import globalStore from '../../service/globalStore';

// Components
import components from '../../components/components';

function EditorWorkspace(props) {
    const compNums = props.layoutSchema.length - 1;
    return (
        <div className="hsite-editor">
            {
                props.layoutSchema.map(({ name, id }, index) => {
                    const MyComponent = components[name];
                    const { componentData } = props.componentSchema.find(item =>
                        item.id === id) || {};
                    return (
                        <SingleComponentContainer
                            key={id}
                            index={index}
                            id={id}
                            canCompMoveUp={index !== 0}
                            canCompMoveDown={index <= (compNums - 1)}
                        >
                            <MyComponent {...componentData} />
                        </SingleComponentContainer>
                    );
                })
            }
            <div
                className="hsite-new-component-bottom"
                onClick={() => {
                    globalStore.set('newComponentOrder', compNums + 1);
                    props.openNewComponentModal();
                }}
            >
                <i className="fa fa-plus" />
            </div>
        </div>
    );
}

EditorWorkspace.propTypes = {
};
EditorWorkspace.defaultProps = {
    componentSchema: [],
};

export default EditorWorkspace;
