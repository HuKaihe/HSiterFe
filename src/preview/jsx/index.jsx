import React from 'react';
import { BackTop } from 'antd';
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
            <BackTop />
        </div>
    );
}

EditorWorkspace.propTypes = {
};
EditorWorkspace.defaultProps = {
    componentSchema: [],
};

export default EditorWorkspace;
