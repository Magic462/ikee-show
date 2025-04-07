
import React, { FC, useState, useEffect, useRef, ChangeEvent, KeyboardEvent, ReactElement, useCallback } from 'react';
import Input, { InputProps } from '../Input/Input';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';

// 定义数据源对象和类型
interface DataSourceObject {
    value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>; // 接收字符串并返回建议列表
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}

/**
 * 自动完成输入框组件
 */
export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props;

    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(0);
    const triggerSearch = useRef(false);
    const componentRef = useRef<HTMLDivElement>(null);
    const debouncedValue = useDebounce(inputValue, 300);

    useClickOutside(componentRef as React.RefObject<HTMLElement>, () => {
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
        } else {
            setShowDropdown(false);
        }
        setHighlightIndex(-1);
    }, [debouncedValue, fetchSuggestions]);

    // 处理列表高亮项
    const highlight = (index: number) => {
        if (index < 0) index = 0;
        if (index >= suggestions.length) index = suggestions.length - 1;
        setHighlightIndex(index);
    };

    // 处理键盘事件
    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
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
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    }, []);

    const handleSelect = useCallback((item: DataSourceType) => {
        setInputValue(item.value);
        setShowDropdown(false);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    }, [onSelect]);

    // 根据 renderOption 的存在与否来决定如何渲染建议项的内容
    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item) : item.value;
    };

    const generateDropdown = () => {
        return (
            <ul className='suggestions'>
                {loading && <div>Loading</div>}
                {suggestions.map((item, index) => {
                    const isActive = index === highlightIndex;
                    
                    return (
                        <li
                            key={index}
                            className={`suggestion-item ${isActive ? 'is-active' : ''}`}
                            onClick={() => handleSelect(item)}
                        >
                            {renderTemplate(item)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div  ref={componentRef}>
            <Input
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                {...restProps}
            />
            {showDropdown && generateDropdown()}
        </div>
    );
};

export default AutoComplete;