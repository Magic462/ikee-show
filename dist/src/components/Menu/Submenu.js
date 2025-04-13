import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
// import './Submenu.scss'; // 添加样式文件
const Submenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsOpen(true);
    };
    const handleMouseLeave = () => {
        setIsOpen(false);
    };
    const handleSelect = (index) => {
        console.log(`Selected item: ${index}`);
        setIsOpen(false); // 选择后关闭下拉菜单
    };
    return (_jsxs("div", { className: "dropdown", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [_jsx("div", { className: "dropdown-toggle", children: "\u66F4\u591A" }), isOpen && (_jsxs(Menu, { mode: "vertical", defaultIndex: 0, onSelect: handleSelect, children: [_jsx(MenuItem, { children: "Option 1" }), _jsx(MenuItem, { children: "Option 2" }), _jsx(MenuItem, { children: "Option 3" }), _jsx(MenuItem, { disabled: true, children: "Option 4" })] }))] }));
};
export default Submenu;
