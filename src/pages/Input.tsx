import React from 'react';
import Input from '../components/Input/Input';
// import './Input.scss';
// import { Input } from 'ikee-components'
import AutoComplete from '../components/Autocomplete/Autocomplete';
// import { DataSourceType } from 'ikee-components'
// import {AutoComplete} from 'ikee-components';
interface itemProps {
    value: string;
    // number?: number;
  }
const Inputpage: React.FC = () => {
    // 获取建议的方法
    const fetchSuggestions = (query: string): Promise<itemProps[]> => {
        return new Promise((resolve) => {
            const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Strawberry'];
            const results = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
            resolve(results.map(item => ({ value: item })));
        });
    };
    // const arrayList: DataSourceType<itemProps>[] = [
    //     {value: 'abc', number: 1}, {value: 'def', number: 1}, {value: 'ghi', number: 1},
    //     {value: 'jkl', number: 1}, {value: 'mno', number: 1}, {value: 'pqr', number: 1},
    //     {value: 'stu', number: 1}, {value: 'vwx', number: 1}, {value: 'yz', number: 1}]
    // const fetchSuggestions = (query:itemProps) => {
    //     const suggestions = [
    //         { value: 'Apple' },
    //         { value: 'Banana' },
    //         { value: 'Cherry' },
    //         { value: 'Date' },
    //         { value: 'Elderberry' }
    //     ];
    //     return suggestions.filter(item => item.value.toLowerCase().includes(query.toLowerCase()));
    // };

    const handleSelect = (item:itemProps) => {
        console.log('Selected:', item);
    };

    const renderOption = (item:itemProps) => {
        return <h3>{item.value}</h3>;
    };

    return (
        <div className='box'>
            <h4>基本用法</h4>
            <p>自定义输入框</p>
            <div className="contain">
                <Input placeholder="普通输入" />
            </div>
            <h4>尺寸</h4>
            <p>通过 <code> size </code> 设置按钮尺寸，可选值为<code> small </code>、<code> large </code></p>
            <div className="contain">
                <Input customsize="small" placeholder="size = small" />
                <Input customsize="large" placeholder="size = large" />
            </div>
            <h4>禁用</h4>
            <p>通过 <code> disabled </code> 设置是否禁用输入框</p>
            <div className="contain">
                <Input disabled placeholder="禁用输入" />
            </div>
            <h4>Autocomplete</h4>
            <p>通过 <code> Autocomplete </code> 实现输入框搜索内容筛选</p>
            <div className="contain">
            <AutoComplete
                    fetchSuggestions={fetchSuggestions}
                    placeholder="搜索水果"
                    onSelect={handleSelect}
                    renderOption={renderOption}
                />
            </div>
        </div>
    );
};

export default Inputpage;