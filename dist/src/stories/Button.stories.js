import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import Button  from './Button'; // 确保正确导入你的 Button 组件
// import {Button} from 'ikee-components'
import Button from '../components/Button';
import { action } from '@storybook/addon-actions';
const meta = {
    // title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `一个可重用的按钮组件，支持不同的样式和状态。`,
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' }, // 使用 select 控件
            options: ['small', 'medium', 'large'], // 字符串选项
            mapping: {
                Small: 'small',
                Medium: 'medium',
                Large: 'large',
            },
        },
        type: {
            control: { type: 'select' }, // 使用 select 控件
            options: ['primary', 'secondary', 'danger'], // 字符串选项
            mapping: {
                Primary: 'primary',
                secondary: 'secondary',
                danger: 'danger',
            },
        },
        round: {
            control: 'boolean',
            description: '设置按钮为圆形',
        },
        disabled: {
            control: 'boolean',
            description: '禁用按钮',
        },
        children: {
            control: 'text',
            description: '按钮内容',
        },
        // 如果需要更多的 argTypes 可以在这里添加
    },
};
export default meta;
const Template = (args) => _jsx(Button, { ...args });
// // 定义不同的故事
export const Default = Template.bind({});
Default.args = {
    onClick: action('clicked'),
    children: 'Default button',
};
export const DifferentSizes = () => (_jsxs(_Fragment, { children: [_jsx(Button, { size: 'small', children: "\u4E3B\u8981\u6309\u94AE" }), _jsx(Button, { size: 'medium', children: "\u6B21\u8981\u6309\u94AE" }), _jsx(Button, { size: 'large', children: "\u5371\u9669\u6309\u94AE" })] }));
export const DifferentTypes = () => (_jsxs(_Fragment, { children: [_jsx(Button, { type: 'primary', children: "\u4E3B\u8981\u6309\u94AE" }), _jsx(Button, { type: 'secondary', children: "\u6B21\u8981\u6309\u94AE" }), _jsx(Button, { type: 'danger', children: "\u5371\u9669\u6309\u94AE" })] }));
export const Round = Template.bind({});
Round.args = {
    round: true,
    disabled: false,
    size: 'small',
    type: 'primary',
    children: 'Round Button',
};
export const Disabled = Template.bind({});
Disabled.args = {
    round: false,
    disabled: true,
    size: 'medium',
    type: 'primary',
    children: 'Disabled Button',
};
