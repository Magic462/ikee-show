import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import MenuItem from './MenuItem';
describe('Menu Component', () => {
    test('renders correctly with MenuItems', () => {
        render(_jsxs(Menu, { children: [_jsx(MenuItem, { children: "Option 1" }), _jsx(MenuItem, { children: "Option 2" })] }));
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
    test('handles selection', () => {
        const handleSelect = jest.fn();
        render(_jsxs(Menu, { onSelect: handleSelect, defaultIndex: 0, children: [_jsx(MenuItem, { children: "Option 1" }), _jsx(MenuItem, { children: "Option 2" })] }));
        fireEvent.click(screen.getByText('Option 1'));
        expect(handleSelect).toHaveBeenCalledWith(0); // 第一个选项的索引
    });
    // test('shows error when non-MenuItem is child', () => {
    //   console.error = jest.fn(); // 捕获 console.error
    //   render(
    //     <Menu>
    //       <div>Not a MenuItem</div>
    //     </Menu>
    //   );
    //   expect(console.error).toHaveBeenCalled();
    // });
});
