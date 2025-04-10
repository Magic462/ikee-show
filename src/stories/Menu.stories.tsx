
import Menu  from '../components/Menu/Menu'; // 确保正确导入你的 Menu 组件
import MenuItem from '../components/Menu/MenuItem';
import Submenu from '../components/Menu/Submenu';
// import {Menu,MenuItem,Submenu} from 'ikee-components'
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';


const meta: Meta<typeof Menu> = {
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
const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;


export const Default = Template.bind({});
Default.args = {
    onSelect: (index: number) => action(`clicked ${index} item`),
    mode: 'horizontal', // 默认设置
    children: [
        <MenuItem key="1">Home</MenuItem>,
        <MenuItem key="2" disabled>
            About
        </MenuItem>,
        <MenuItem key="3">Contact</MenuItem>,
    ],
};

export const MenuHorizontal = () => (
  <Menu mode="horizontal" defaultIndex={0} >
    <MenuItem>Home</MenuItem>
    <MenuItem>About</MenuItem>
    <MenuItem>Contact</MenuItem>
</Menu>
);

export const MenuVertical = () => (
  <Menu mode="vertical" defaultIndex={0} >
    <MenuItem>Home</MenuItem>
    <MenuItem>About</MenuItem>
    <MenuItem>Contact</MenuItem>
</Menu>
);

export const MenuDisabled = () => (
  <Menu mode="horizontal" defaultIndex={0} >
    <MenuItem>Home</MenuItem>
    <MenuItem disabled>About</MenuItem>
    <MenuItem disabled>Contact</MenuItem>
</Menu>
);

export const SubMenu = () => (
  <Submenu>
  </Submenu>
);
