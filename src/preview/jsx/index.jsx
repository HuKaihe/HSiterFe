import React from 'react';
// Components
import components from '../../components/components';

function EditorWorkspace(props) {
    const { layoutSchema, componentSchema } = props.page_schema;
    return (
        <div className="hsite-editor">
            {
                layoutSchema.map(({ name, id }) => {
                    const MyComponent = components[name];
                    const { componentData } = componentSchema.find(item =>
                        item.id === id) || {};
                    return (
                        <MyComponent key={id} {...componentData} />
                    );
                })
            }
        </div>
    );
}

EditorWorkspace.propTypes = {
};
EditorWorkspace.defaultProps = {
    componentSchema: [],
};

export default EditorWorkspace;
