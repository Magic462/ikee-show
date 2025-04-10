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
    return (React.createElement("div", { className: 'box' },
        React.createElement("a", { href: "http://localhost:6006/?path=/docs/components-menu--docs&args=mode:horizontal" }),
        React.createElement("h4", null, "\u57FA\u672C\u7528\u6CD5"),
        React.createElement("p", null, "\u81EA\u5B9A\u4E49\u83DC\u5355"),
        React.createElement("div", { className: "contain" },
            React.createElement(Menu, { mode: "horizontal", defaultIndex: 0, onSelect: handleSelect },
                React.createElement(MenuItem, null, "Home"),
                React.createElement(MenuItem, null, "About"),
                React.createElement(MenuItem, null, "Contact"))),
        React.createElement("h4", null, "\u81EA\u5B9A\u4E49\u9009\u4E2D\u83DC\u5355"),
        React.createElement("p", null,
            "\u901A\u8FC7 ",
            React.createElement("code", null, " mode "),
            " \u81EA\u5B9A\u4E49\u83DC\u5355\u6A2A\u5411\u6216\u7EB5\u5411\uFF0C\u7C7B\u578B\u6709 ",
            React.createElement("code", null, " horizontal "),
            "\u3001 ",
            React.createElement("code", null, " vertical "),
            " "),
        React.createElement("div", { className: "contain" },
            React.createElement(Menu, { mode: "vertical", defaultIndex: 0, onSelect: handleSelect },
                React.createElement(MenuItem, null, "Home"),
                React.createElement(MenuItem, null, "About"),
                React.createElement(MenuItem, null, "Contact"))),
        React.createElement("h4", null, "\u7981\u7528\u83DC\u5355\u9879"),
        React.createElement("p", null,
            "\u901A\u8FC7 ",
            React.createElement("code", null, " disabled "),
            " \u8BBE\u7F6E\u7981\u7528\u83DC\u5355\u9879"),
        React.createElement("div", { className: "contain" },
            React.createElement(Menu, { mode: "horizontal", defaultIndex: 0, onSelect: handleSelect },
                React.createElement(MenuItem, null, "Home"),
                React.createElement(MenuItem, null, "About"),
                React.createElement(MenuItem, { disabled: true }, "Contact")))));
};
export default Menupage;
