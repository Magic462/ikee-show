// import Button  from './Button'; // 确保正确导入你的 Button 组件
// import {Button} from 'ikee-components'
import Button from '../components/Button'
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

const meta: Meta<typeof Button> = {
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

const Template: Story<typeof Button> = (args) => <Button {...args} />;


// // 定义不同的故事
export const Default = Template.bind({});
Default.args = {
  onClick: action('clicked'),
  children: 'Default button',
};

export const DifferentSizes = () => (
  <>
    <Button size={'small'}>主要按钮</Button>
    <Button size={'medium'}>次要按钮</Button>
    <Button size={'large'}>危险按钮</Button>
  </>
);

export const DifferentTypes = () => (
  <>
    <Button type={'primary'}>主要按钮</Button>
    <Button type={'secondary'}>次要按钮</Button>
    <Button type={'danger'}>危险按钮</Button>
  </>
);


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
