import React, { Component } from 'react';
import { Input } from 'antd';


export default class ArrayControl extends Component {
    state = {
    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;
        this.setState({ value });
    }

    triggerChange = (e, id, prop) => {
        const { value } = this.state;
        const changedValue = e.target.value;
        const group = value.find(item => id === item.id);
        const { arrKey } = this.props;
        group[prop] = changedValue;
        this.setState({
            value,
        });
        this.props.setArrayControlValue({
            [arrKey]: value,
        });
        // Should provide an event to pass value to Form.
        // const { onChange } = this.props;
        // if (onChange) {
        // }
    }
    render() {
        const unit = {
            title: '卡片标题',
            url: '卡片链接',
            pictureUrl: '卡片图片链接',
        };
        const arrValue = this.state.value || [];

        return (
            <div className="hsiter-form-control hsiter-arr-control">
                {
                    arrValue.map(item => (
                        <div key={item.id} className="arr-obj" >
                            {
                                Object.keys(unit).map(prop => (
                                    <div className="arr-item" key={prop}>
                                        <label>
                                            <div className="array-item-label">{unit[prop]}</div>
                                            <Input
                                                type="text"
                                                value={item[prop]}
                                                onChange={
                                                    (e) => { this.triggerChange(e, item.id, prop); }
                                                }
                                            />
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}
