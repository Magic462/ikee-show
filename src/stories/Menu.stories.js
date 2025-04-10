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
const Template = (args) => React.createElement(Menu, { ...args });
export const Default = Template.bind({});
Default.args = {
    onSelect: (index) => action(`clicked ${index} item`),
    mode: 'horizontal', // 默认设置
    children: [
        React.createElement(MenuItem, { key: "1" }, "Home"),
        React.createElement(MenuItem, { key: "2", disabled: true }, "About"),
        React.createElement(MenuItem, { key: "3" }, "Contact"),
    ],
};
export const MenuHorizontal = () => (React.createElement(Menu, { mode: "horizontal", defaultIndex: 0 },
    React.createElement(MenuItem, null, "Home"),
    React.createElement(MenuItem, null, "About"),
    React.createElement(MenuItem, null, "Contact")));
export const MenuVertical = () => (React.createElement(Menu, { mode: "vertical", defaultIndex: 0 },
    React.createElement(MenuItem, null, "Home"),
    React.createElement(MenuItem, null, "About"),
    React.createElement(MenuItem, null, "Contact")));
export const MenuDisabled = () => (React.createElement(Menu, { mode: "horizontal", defaultIndex: 0 },
    React.createElement(MenuItem, null, "Home"),
    React.createElement(MenuItem, { disabled: true }, "About"),
    React.createElement(MenuItem, { disabled: true }, "Contact")));
export const SubMenu = () => (React.createElement(Submenu, null));
