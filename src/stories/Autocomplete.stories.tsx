
import AutoComplete from '../components/Autocomplete';
// import {AutoComplete} from 'ikee-components'

import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

const meta: Meta<typeof AutoComplete> = {
  // title: 'Autocomlete',
  component: AutoComplete,
  parameters: {
    layout: 'centered',
    docs: {
     description: {
         component: `一个功能强大的自动完成输入框，旨在提升用户输入体验。通过实时提供建议，帮助用户快速找到所需内容。此组件广泛适用于搜索框、表单输入等场景。`,
     },
 },
},
  argTypes: {
    // size: {
    //     control: { type: 'select' }, // 使用 select 控件
    //     options: ['small','large'], // 字符串选项
    //     mapping: {
    //         Small: 'small',
    //         Large: 'large',
    //     },
    // },
    placeholder: {
        control: 'text',
        description: '搜索水果',
      },
  },
};

export default meta;
const Template: Story<typeof AutoComplete> = (args) => <AutoComplete {...args} />;


// 模拟建议项数据
const fetchSuggestions = (query: string) => {
    const suggestions = [
      { value: 'Apple' },
      { value: 'Banana' },
      { value: 'Cherry' },
      { value: 'Date' },
      { value: 'Elderberry' },
    ];
    return suggestions.filter(item => item.value.toLowerCase().includes(query.toLowerCase()));
  };
  
  export const Default = Template.bind({});
  Default.args = {
    fetchSuggestions, // 传递建议项函数
    onSelect: action('selected'),
    placeholder: '请输入',
  };
  
  export const RenderOptionExample = () => (
    <AutoComplete
      fetchSuggestions={fetchSuggestions}
      placeholder="通过renderOption自定义建议项的渲染方式"
      renderOption={(item) => <strong>{item.value}</strong>} // 自定义渲染建议项
    />
  );


