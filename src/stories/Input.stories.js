import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import Input  from './Input'; // 确保正确导入你的 Input 组件
// import {Input} from 'ikee-components'
import Input from '../components/Input';
import { action } from '@storybook/addon-actions';
const meta = {
    // title: 'Input',
    component: Input,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `一个灵活输入框组件，支持不同的样式和状态。`,
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' }, // 使用 select 控件
            options: ['small', 'large'], // 字符串选项
            mapping: {
                Small: 'small',
                Large: 'large',
            },
        },
        disabled: {
            control: 'boolean',
            description: '禁用输入框',
        },
        placeholder: {
            control: 'text',
            description: '输入框内置内容',
        },
    },
};
export default meta;
const Template = (args) => _jsx(Input, { ...args });
export const Default = Template.bind({});
Default.args = {
    onClick: action('clicked'),
    placeholder: '请输入',
};
export const DifferentSizes = () => (_jsxs(_Fragment, { children: [_jsx(Input, { customsize: "small", placeholder: "size = small" }), _jsx(Input, { customsize: "large", placeholder: "size = large" })] }));
export const Disabled = () => (_jsx(_Fragment, { children: _jsx(Input, { customsize: "small", placeholder: "\u7981\u7528\u8F93\u5165\u6846", disabled: true }) }));
