import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AutoComplete from './Autocomplete';
// import '@testing-library/jest-dom';
// 模拟 fetchSuggestions 函数
const fetchSuggestions = jest.fn();
const setup = (props = {}) => {
    return render(React.createElement(AutoComplete, { fetchSuggestions: fetchSuggestions, ...props }));
};
describe('AutoComplete Component', () => {
    beforeEach(() => {
        fetchSuggestions.mockClear();
    });
    test('displays suggestions on input change', async () => {
        fetchSuggestions.mockReturnValueOnce([{ value: 'Apple' }, { value: 'Banana' }]);
        setup();
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'A' } });
        // 等待建议列表出现
        await waitFor(() => {
            expect(screen.getByText('Apple')).toBeInTheDocument();
            expect(screen.getByText('Banana')).toBeInTheDocument();
        });
    });
    test('calls onSelect when an item is clicked', async () => {
        const handleSelect = jest.fn();
        fetchSuggestions.mockReturnValueOnce([{ value: 'Apple' }]);
        setup({ onSelect: handleSelect });
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'A' } });
        // 等待建议列表出现
        await waitFor(() => {
            expect(screen.getByText('Apple')).toBeInTheDocument();
        });
        fireEvent.click(screen.getByText('Apple'));
        expect(handleSelect).toHaveBeenCalledWith({ value: 'Apple' });
        expect(input).toHaveValue('Apple');
    });
    test('handles keyboard navigation', async () => {
        fetchSuggestions.mockReturnValueOnce([{ value: 'Apple' }, { value: 'Banana' }]);
        setup();
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'A' } });
        // 等待建议列表出现
        await waitFor(() => {
            expect(screen.getByText('Apple')).toBeInTheDocument();
            expect(screen.getByText('Banana')).toBeInTheDocument();
        });
        // 按下向下箭头
        fireEvent.keyDown(input, { key: 'ArrowDown' });
        // 确保高亮的项是 Apple
        expect(screen.getByText('Apple')).toHaveClass('is-active');
        // 按下回车键选择
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(input).toHaveValue('Apple');
    });
    // test('shows loading state', async () => {
    //     fetchSuggestions.mockReturnValueOnce(new Promise(() => {})); // 返回一个未解决的 Promise
    //     setup();
    //     const input = screen.getByRole('textbox');
    //     fireEvent.change(input, { target: { value: 'A' } });
    //     // 确保加载状态能显示
    //     expect(await screen.findByText(/loading/i)).toBeInTheDocument(); // 使用 findByText 进行等待
    //     // expect(await screen.findByText((content, element) => {
    //     //     return content.includes('Loading') && element.tagName.toLowerCase() === 'div';
    //     // })).toBeInTheDocument();
    // });
});
