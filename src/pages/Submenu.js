import React from 'react';
// import './Menu.scss'
import Submenu from '../components/Menu/Submenu';
// import {Submenu} from 'ikee-components'
const Submenupage = () => {
    return (React.createElement("div", { className: 'box' },
        React.createElement("h4", null, "\u57FA\u672C\u7528\u6CD5"),
        React.createElement("p", null,
            "\u901A\u8FC7 ",
            React.createElement("code", null, " data "),
            " \u914D\u7F6E\u83DC\u5355\u6570\u636E"),
        React.createElement("div", { className: "contain" },
            React.createElement(Submenu, null)),
        React.createElement("h4", null, "\u7981\u7528"),
        React.createElement("p", null,
            "\u901A\u8FC7 ",
            React.createElement("code", null, " disabled "),
            " \u5C5E\u6027\u8BBE\u7F6E\u83DC\u5355\u6216\u8005\u83DC\u5355\u9879\u4E3A\u7981\u7528\u72B6\u6001"),
        React.createElement("div", { className: "contain" },
            React.createElement(Submenu, null))));
};
export default Submenupage;
