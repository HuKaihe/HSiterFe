import { Switch, Input } from 'antd';
import ArrayControl from './Controls/ArrayControl';
import GroupControl from './Controls/GroupControl';

const { TextArea } = Input;

export default {
    switch: {
        Control: Switch,
        controlDecorator: {
            valuePropName: 'checked',
        },
    },
    arrayControl: {
        Control: ArrayControl,
        type: 'custom',
    },
    groupControl: {
        Control: GroupControl,
        type: 'custom',
    },
    textArea: {
        Control: TextArea,
    },
};
