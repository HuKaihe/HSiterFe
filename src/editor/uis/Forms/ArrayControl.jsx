import React, { Component } from 'react';
import { Input, Tooltip } from 'antd';


export default class ArrayControl extends Component {
    state = {
    }

    componentWillMount() {
        const { value } = this.props;
        this.setState({ value });
    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps;
        this.setState({ value });
    }

    triggerChange = (e, id, prop) => {
        const { value } = this.state;
        const changedValue = e.target.value;
        const group = value.find(item => id === item.id);
        const { customKey } = this.props;
        group[prop] = changedValue;
        this.setState({
            value,
        });
        this.props.setCustomControlValue({
            [customKey]: value,
        });
    }
    render() {
        const { arrUnit } = this.props;
        const arrValue = this.state.value || [];
        if (arrValue.length === 0) {
            arrValue.push({});
        }
        return (
            <div className="hsiter-form-custom-control hsiter-arr-control">
                {
                    arrValue.map((item) => {
                        const arrFields = Object.keys(arrUnit);
                        return (
                            <div key={item.id} className="arr-obj" >
                                {
                                    arrFields.map(field => (
                                        <div className="arr-item" key={field}>
                                            <label>
                                                <div className="array-item-label">
                                                    {
                                                        arrUnit[field].tip &&
                                                        <Tooltip title={arrUnit[field].tip}>
                                                            <i className="fa fa-info-circle tip-icon" />
                                                        </Tooltip>
                                                    }
                                                    {arrUnit[field].label}
                                                </div>
                                                <Input
                                                    type="text"
                                                    value={item[field]}
                                                    onChange={
                                                        (e) => {
                                                            this.triggerChange(e, item.id, field);
                                                        }
                                                    }
                                                />
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
