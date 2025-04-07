import React from 'react';
// import './Home.scss'
import { useNavigate } from 'react-router-dom';
// Home 组件
const Home = () => {
    const nav = useNavigate();
    function clickButton() {
        nav('/button');
    }
    function clickMenu() {
        nav('/menu');
    }
    function clickSubmenu() {
        nav('/submenu');
    }
    function clickInput() {
        nav('/Input');
    }
    return (React.createElement("div", null,
        React.createElement("h3", { className: 'zonglan' }, "\u7EC4\u4EF6\u603B\u89C8"),
        React.createElement("div", { className: "base" },
            React.createElement("h5", null, "\u57FA\u7840"),
            React.createElement("div", { className: "componentbox" },
                React.createElement("div", { className: "component", onClick: clickButton }, "Buttton"))),
        React.createElement("div", { className: "base" },
            React.createElement("h5", null, "\u83DC\u5355"),
            React.createElement("div", { className: "componentbox" },
                React.createElement("div", { className: "component", onClick: clickMenu }, "\u5BFC\u822A\u83DC\u5355"),
                React.createElement("div", { className: "component", onClick: clickSubmenu }, "\u4E0B\u62C9\u83DC\u5355"))),
        React.createElement("div", { className: "base" },
            React.createElement("h5", null, "\u8F93\u5165\u6846"),
            React.createElement("div", { className: "componentbox" },
                React.createElement("div", { className: "component", onClick: clickInput }, "\u8F93\u5165\u6846")))));
};
export default Home;
