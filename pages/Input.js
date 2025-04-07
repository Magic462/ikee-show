import React from 'react';
import Input from '../components/Input/Input';
// import './Input.scss';
// import { Input } from 'ikee-components'
import AutoComplete from '../components/Autocomplete/Autocomplete';
const Inputpage = () => {
    // 获取建议的方法
    const fetchSuggestions = (query) => {
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
    const handleSelect = (item) => {
        console.log('Selected:', item);
    };
    const renderOption = (item) => {
        return React.createElement("h3", null, item.value);
    };
    return (React.createElement("div", { className: 'box' },
        React.createElement("h4", null, "\u57FA\u672C\u7528\u6CD5"),
        React.createElement("p", null, "\u81EA\u5B9A\u4E49\u8F93\u5165\u6846"),
        React.createElement("div", { className: "contain" },
            React.createElement(Input, { placeholder: "\u666E\u901A\u8F93\u5165" })),
        React.createElement("h4", null, "\u5C3A\u5BF8"),
        React.createElement("p", null,
            "\u901A\u8FC7 ",
            React.createElement("code", null, " size "),
            " \u8BBE\u7F6E\u6309\u94AE\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3A",
            React.createElement("code", null, " small "),
            "\u3001",
            React.createElement("code", null, " large ")),
        React.createElement("div", { className: "contain" },
            React.createElement(Input, { customsize: "small", placeholder: "size = small" }),
            React.createElement(Input, { customsize: "large", placeholder: "size = large" })),
        React.createElement("h4", null, "\u7981\u7528"),
        React.createElement("p", null,
            "\u901A\u8FC7 ",
            React.createElement("code", null, " disabled "),
            " \u8BBE\u7F6E\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"),
        React.createElement("div", { className: "contain" },
            React.createElement(Input, { disabled: true, placeholder: "\u7981\u7528\u8F93\u5165" })),
        React.createElement("h4", null, "Autocomplete"),
        React.createElement("p", null,
            "\u901A\u8FC7 ",
            React.createElement("code", null, " Autocomplete "),
            " \u5B9E\u73B0\u8F93\u5165\u6846\u641C\u7D22\u5185\u5BB9\u7B5B\u9009"),
        React.createElement("div", { className: "contain" },
            React.createElement(AutoComplete, { fetchSuggestions: fetchSuggestions, placeholder: "\u641C\u7D22\u6C34\u679C", onSelect: handleSelect, renderOption: renderOption }))));
};
export default Inputpage;
