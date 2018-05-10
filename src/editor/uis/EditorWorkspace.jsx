import React from 'react';
// import PropTypes from 'prop-types';
import SingleComponentContainer from '../containers/SingleComponentContainer';

// Components
import components from '../../components/components';

function EditorWorkspace(props) {
    const compNums = props.layoutSchema.length - 1;
    return (
        <div className="editor">
            {
                props.layoutSchema.map(({ name, id }, index) => {
                    const MyComponent = components[name];
                    const { data } = props.componentSchema.find(item => item.id === id) || {};
                    return (
                        <SingleComponentContainer
                            key={id}
                            index={index}
                            id={id}
                            canCompMoveUp={index !== 0}
                            canCompMoveDown={index <= (compNums - 1)}
                        >
                            <MyComponent {...data} />
                        </SingleComponentContainer>
                    );
                })
            }
            <div className="new" onClick={() => props.addNewComponent('HKHBlogBanner', (compNums + 1))} >
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
