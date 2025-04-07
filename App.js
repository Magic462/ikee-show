import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';
function App() {
    // const title = "My React App"; // 或者通过 props 传入
    return (React.createElement("div", { className: "App" },
        React.createElement(RouterProvider, { router: routerConfig })));
}
export default App;
