import React, { Component } from 'react';
import { BackTop } from 'antd';
// Components
import components from '../../components/components';

class EditorWorkspace extends Component {
    static propTypes = {}

    static defaultProps = {}

    state = {}

    componentWillMount() {
        this.setState({
            page_schema: this.props.page_schema,
        });
    }

    componentDidMount() {
        const previewType = window.location.pathname.split('?')[0];
        const { page_id } = this.props;
        if (previewType === '/preview') {
            window.addEventListener('storage', () => {
                const new_page_schema_str = window.localStorage.getItem(page_id);
                if (new_page_schema_str !== JSON.stringify(this.state.page_schema)) {
                    window.location.reload();
                }
            });
        }
    }

    render() {
        const { layoutSchema, componentSchema } = this.state.page_schema;
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
}

export default EditorWorkspace;
