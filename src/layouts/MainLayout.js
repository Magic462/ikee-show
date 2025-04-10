import React, { useState } from 'react';
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
    return (React.createElement("div", null,
        React.createElement("header", null,
            React.createElement("div", { className: "pic" },
                React.createElement("img", { src: "/src/assets/Logo.png" })),
            React.createElement("div", { className: "search" }, "Search"),
            React.createElement("div", { className: 'nav' },
                React.createElement("div", { className: `document ${activeItem === '指南' ? 'active' : ''}`, onClick: () => handleClick('指南') }, "\u6307\u5357"),
                React.createElement("div", { className: `menuu ${activeItem === '组件' ? 'active' : ''}`, onClick: () => handleClick('组件') }, "\u7EC4\u4EF6")),
            React.createElement("div", { className: "github" }, "github")),
        React.createElement("div", { className: "content" },
            React.createElement(Outlet, null))));
};
export default MainLayout;
