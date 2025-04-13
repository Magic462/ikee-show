import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
// import './Menu.scss'
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';
// import {Menu,MenuItem} from 'ikee-components'
const Menupage = () => {
    const handleSelect = (selectedIndex) => {
        // setActiveIndex(selectedIndex);
        console.log('Selected index:', selectedIndex);
    };
    return (_jsxs("div", { className: 'box', children: [_jsx("a", { href: "http://localhost:6006/?path=/docs/components-menu--docs&args=mode:horizontal" }), _jsx("h4", { children: "\u57FA\u672C\u7528\u6CD5" }), _jsx("p", { children: "\u81EA\u5B9A\u4E49\u83DC\u5355" }), _jsx("div", { className: "contain", children: _jsxs(Menu, { mode: "horizontal", defaultIndex: 0, onSelect: handleSelect, children: [_jsx(MenuItem, { children: "Home" }), _jsx(MenuItem, { children: "About" }), _jsx(MenuItem, { children: "Contact" })] }) }), _jsx("h4", { children: "\u81EA\u5B9A\u4E49\u9009\u4E2D\u83DC\u5355" }), _jsxs("p", { children: ["\u901A\u8FC7 ", _jsx("code", { children: " mode " }), " \u81EA\u5B9A\u4E49\u83DC\u5355\u6A2A\u5411\u6216\u7EB5\u5411\uFF0C\u7C7B\u578B\u6709 ", _jsx("code", { children: " horizontal " }), "\u3001 ", _jsx("code", { children: " vertical " }), " "] }), _jsx("div", { className: "contain", children: _jsxs(Menu, { mode: "vertical", defaultIndex: 0, onSelect: handleSelect, children: [_jsx(MenuItem, { children: "Home" }), _jsx(MenuItem, { children: "About" }), _jsx(MenuItem, { children: "Contact" })] }) }), _jsx("h4", { children: "\u7981\u7528\u83DC\u5355\u9879" }), _jsxs("p", { children: ["\u901A\u8FC7 ", _jsx("code", { children: " disabled " }), " \u8BBE\u7F6E\u7981\u7528\u83DC\u5355\u9879"] }), _jsx("div", { className: "contain", children: _jsxs(Menu, { mode: "horizontal", defaultIndex: 0, onSelect: handleSelect, children: [_jsx(MenuItem, { children: "Home" }), _jsx(MenuItem, { children: "About" }), _jsx(MenuItem, { disabled: true, children: "Contact" })] }) })] }));
};
export default Menupage;
