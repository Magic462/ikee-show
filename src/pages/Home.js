import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { children: [_jsx("h3", { className: 'zonglan', children: "\u7EC4\u4EF6\u603B\u89C8" }), _jsxs("div", { className: "base", children: [_jsx("h5", { children: "\u57FA\u7840" }), _jsx("div", { className: "componentbox", children: _jsx("div", { className: "component", onClick: clickButton, children: "Buttton" }) })] }), _jsxs("div", { className: "base", children: [_jsx("h5", { children: "\u83DC\u5355" }), _jsxs("div", { className: "componentbox", children: [_jsx("div", { className: "component", onClick: clickMenu, children: "\u5BFC\u822A\u83DC\u5355" }), _jsx("div", { className: "component", onClick: clickSubmenu, children: "\u4E0B\u62C9\u83DC\u5355" })] })] }), _jsxs("div", { className: "base", children: [_jsx("h5", { children: "\u8F93\u5165\u6846" }), _jsx("div", { className: "componentbox", children: _jsx("div", { className: "component", onClick: clickInput, children: "\u8F93\u5165\u6846" }) })] })] }));
};
export default Home;
