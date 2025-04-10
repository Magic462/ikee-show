import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Menu from '../components/Menu/Menu'; // 确保正确导入你的 Menu 组件
import MenuItem from '../components/Menu/MenuItem';
import Submenu from '../components/Menu/Submenu';
// import {Menu,MenuItem,Submenu} from 'ikee-components'
import { action } from '@storybook/addon-actions';
const meta = {
    // title: 'Menu',
    component: Menu,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `一个灵活菜单组件，支持不同的样式和状态。`,
            },
        },
    },
    argTypes: {
        mode: {
            control: { type: 'select' }, // 使用 select 控件
            options: ["horizontal", "vertical"], // 字符串选项
        },
    },
};
export default meta;
const Template = (args) => _jsx(Menu, { ...args });
export const Default = Template.bind({});
Default.args = {
    onSelect: (index) => action(`clicked ${index} item`),
    mode: 'horizontal', // 默认设置
    children: [
        _jsx(MenuItem, { children: "Home" }, "1"),
        _jsx(MenuItem, { disabled: true, children: "About" }, "2"),
        _jsx(MenuItem, { children: "Contact" }, "3"),
    ],
};
export const MenuHorizontal = () => (_jsxs(Menu, { mode: "horizontal", defaultIndex: 0, children: [_jsx(MenuItem, { children: "Home" }), _jsx(MenuItem, { children: "About" }), _jsx(MenuItem, { children: "Contact" })] }));
export const MenuVertical = () => (_jsxs(Menu, { mode: "vertical", defaultIndex: 0, children: [_jsx(MenuItem, { children: "Home" }), _jsx(MenuItem, { children: "About" }), _jsx(MenuItem, { children: "Contact" })] }));
export const MenuDisabled = () => (_jsxs(Menu, { mode: "horizontal", defaultIndex: 0, children: [_jsx(MenuItem, { children: "Home" }), _jsx(MenuItem, { disabled: true, children: "About" }), _jsx(MenuItem, { disabled: true, children: "Contact" })] }));
export const SubMenu = () => (_jsx(Submenu, {}));
