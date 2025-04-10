import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Submenu from './Submenu';
describe('Submenu Component', () => {
    test('renders correctly and opens on hover', () => {
        render(_jsx(Submenu, {}));
        const toggle = screen.getByText('更多');
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument(); // 确保下拉菜单初始不显示
        fireEvent.mouseEnter(toggle); // 模拟鼠标进入
        expect(screen.getByText('Option 1')).toBeInTheDocument(); // 确保下拉菜单显示
    });
    test('closes the menu when an option is selected', async () => {
        const { getByText } = render(_jsx(Submenu, {}));
        const toggle = getByText('更多');
        fireEvent.mouseEnter(toggle);
        const option1 = getByText('Option 1');
        fireEvent.click(option1); // 选择一个选项
        // 使用 waitFor 等待选项被移除
        await waitFor(() => {
            expect(screen.queryByText('Option 1')).not.toBeInTheDocument(); // 确保下拉菜单关闭
        });
    });
});
