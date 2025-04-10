import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import MenuItem from './MenuItem';
describe('Menu Component', () => {
    test('renders correctly with MenuItems', () => {
        render(React.createElement(Menu, null,
            React.createElement(MenuItem, null, "Option 1"),
            React.createElement(MenuItem, null, "Option 2")));
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
    test('handles selection', () => {
        const handleSelect = jest.fn();
        render(React.createElement(Menu, { onSelect: handleSelect, defaultIndex: 0 },
            React.createElement(MenuItem, null, "Option 1"),
            React.createElement(MenuItem, null, "Option 2")));
        fireEvent.click(screen.getByText('Option 1'));
        expect(handleSelect).toHaveBeenCalledWith(0); // 第一个选项的索引
    });
    test('shows error when non-MenuItem is child', () => {
        console.error = jest.fn(); // 捕获 console.error
        render(React.createElement(Menu, null,
            React.createElement("div", null, "Not a MenuItem")));
        expect(console.error).toHaveBeenCalled();
    });
});
