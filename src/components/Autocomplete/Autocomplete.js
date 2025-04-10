import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback } from 'react';
import Input from '../Input/Input';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';
/**
 * 自动完成输入框组件
 */
export const AutoComplete = (props) => {
    const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props;
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(0);
    const triggerSearch = useRef(false);
    const componentRef = useRef(null);
    const debouncedValue = useDebounce(inputValue, 300);
    useClickOutside(componentRef, () => {
        setSuggestions([]);
        setShowDropdown(false);
    });
    useEffect(() => {
        if (debouncedValue && triggerSearch.current) {
            setSuggestions([]);
            const results = fetchSuggestions(debouncedValue);
            setLoading(true);
            Promise.resolve(results).then(data => {
                setLoading(false);
                setSuggestions(data);
                setShowDropdown(data.length > 0);
            });
        }
        else {
            setShowDropdown(false);
        }
        setHighlightIndex(-1);
    }, [debouncedValue, fetchSuggestions]);
    // 处理列表高亮项
    const highlight = (index) => {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length)
            index = suggestions.length - 1;
        setHighlightIndex(index);
    };
    // 处理键盘事件
    const handleKeyDown = useCallback((e) => {
        switch (e.key) {
            case 'Enter':
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case 'ArrowUp':
                highlight(highlightIndex - 1);
                break;
            case 'ArrowDown':
                highlight(highlightIndex + 1);
                break;
            case 'Escape':
                setShowDropdown(false);
                break;
            default:
                break;
        }
    }, [suggestions, highlightIndex]);
    // input框变化标记triggerSearch
    const handleChange = useCallback((e) => {
        const value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    }, []);
    const handleSelect = useCallback((item) => {
        setInputValue(item.value);
        setShowDropdown(false);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    }, [onSelect]);
    // 根据 renderOption 的存在与否来决定如何渲染建议项的内容
    const renderTemplate = (item) => {
        return renderOption ? renderOption(item) : item.value;
    };
    const generateDropdown = () => {
        return (_jsxs("ul", { className: 'suggestions', children: [loading && _jsx("div", { children: "Loading" }), suggestions.map((item, index) => {
                    const isActive = index === highlightIndex;
                    return (_jsx("li", { className: `suggestion-item ${isActive ? 'is-active' : ''}`, onClick: () => handleSelect(item), children: renderTemplate(item) }, index));
                })] }));
    };
    return (_jsxs("div", { ref: componentRef, children: [_jsx(Input, { value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown, ...restProps }), showDropdown && generateDropdown()] }));
};
export default AutoComplete;
