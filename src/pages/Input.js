import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        return _jsx("h3", { children: item.value });
    };
    return (_jsxs("div", { className: 'box', children: [_jsx("h4", { children: "\u57FA\u672C\u7528\u6CD5" }), _jsx("p", { children: "\u81EA\u5B9A\u4E49\u8F93\u5165\u6846" }), _jsx("div", { className: "contain", children: _jsx(Input, { placeholder: "\u666E\u901A\u8F93\u5165" }) }), _jsx("h4", { children: "\u5C3A\u5BF8" }), _jsxs("p", { children: ["\u901A\u8FC7 ", _jsx("code", { children: " size " }), " \u8BBE\u7F6E\u6309\u94AE\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3A", _jsx("code", { children: " small " }), "\u3001", _jsx("code", { children: " large " })] }), _jsxs("div", { className: "contain", children: [_jsx(Input, { customsize: "small", placeholder: "size = small" }), _jsx(Input, { customsize: "large", placeholder: "size = large" })] }), _jsx("h4", { children: "\u7981\u7528" }), _jsxs("p", { children: ["\u901A\u8FC7 ", _jsx("code", { children: " disabled " }), " \u8BBE\u7F6E\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"] }), _jsx("div", { className: "contain", children: _jsx(Input, { disabled: true, placeholder: "\u7981\u7528\u8F93\u5165" }) }), _jsx("h4", { children: "Autocomplete" }), _jsxs("p", { children: ["\u901A\u8FC7 ", _jsx("code", { children: " Autocomplete " }), " \u5B9E\u73B0\u8F93\u5165\u6846\u641C\u7D22\u5185\u5BB9\u7B5B\u9009"] }), _jsx("div", { className: "contain", children: _jsx(AutoComplete, { fetchSuggestions: fetchSuggestions, placeholder: "\u641C\u7D22\u6C34\u679C", onSelect: handleSelect, renderOption: renderOption }) })] }));
};
export default Inputpage;
