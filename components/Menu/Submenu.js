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
    return (React.createElement("div", { className: "dropdown", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        React.createElement("div", { className: "dropdown-toggle" }, "\u66F4\u591A"),
        isOpen && (React.createElement(Menu, { mode: "vertical", defaultIndex: 0, onSelect: handleSelect },
            React.createElement(MenuItem, null, "Option 1"),
            React.createElement(MenuItem, null, "Option 2"),
            React.createElement(MenuItem, null, "Option 3"),
            React.createElement(MenuItem, { disabled: true }, "Option 4")))));
};
export default Submenu;
