import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Input from './Input'; // 替换为您的 Input 组件路径
describe('Input Component', () => {
    test('renders with default props', () => {
        render(_jsx(Input, { placeholder: "Enter text" }));
        const inputElement = screen.getByPlaceholderText(/Enter text/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('input small');
        expect(inputElement).not.toBeDisabled();
    });
    test('applies custom size class', () => {
        render(_jsx(Input, { customsize: "large", placeholder: "Large Input" }));
        const inputElement = screen.getByPlaceholderText(/Large Input/i);
        expect(inputElement).toHaveClass('input large');
    });
    test('is disabled when disabled prop is true', () => {
        render(_jsx(Input, { disabled: true, placeholder: "Disabled Input" }));
        const inputElement = screen.getByPlaceholderText(/Disabled Input/i);
        expect(inputElement).toBeDisabled();
    });
    test('supports other input attributes', () => {
        const handleChange = jest.fn(); // 创建一个模拟的 onChange 处理程序
        render(_jsx(Input, { type: "text", value: "Test Value", onChange: handleChange }));
        const inputElement = screen.getByDisplayValue(/Test Value/i);
        // 使用 fireEvent 模拟用户输入
        fireEvent.change(inputElement, { target: { value: 'New Value' } });
        expect(handleChange).toHaveBeenCalled(); // 现在应该会被调用
    });
});
