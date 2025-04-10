import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import './MainLayout.scss'; // 引入样式文件
const MainLayout = () => {
    const [activeItem, setActiveItem] = useState('组件');
    const nav = useNavigate();
    const handleClick = (item) => {
        setActiveItem(item); // 更新激活项
        if (item === '指南') {
            nav('/document'); // 跳转到指南页面
        }
        else if (item === '组件') {
            nav('/'); // 跳转到组件页面
        }
    };
    return (_jsxs("div", { children: [_jsxs("header", { children: [_jsx("div", { className: "pic", children: _jsx("img", { src: "/src/assets/Logo.png" }) }), _jsx("div", { className: "search", children: "Search" }), _jsxs("div", { className: 'nav', children: [_jsx("div", { className: `document ${activeItem === '指南' ? 'active' : ''}`, onClick: () => handleClick('指南'), children: "\u6307\u5357" }), _jsx("div", { className: `menuu ${activeItem === '组件' ? 'active' : ''}`, onClick: () => handleClick('组件'), children: "\u7EC4\u4EF6" })] }), _jsx("div", { className: "github", children: "github" })] }), _jsx("div", { className: "content", children: _jsx(Outlet, {}) })] }));
};
export default MainLayout;
