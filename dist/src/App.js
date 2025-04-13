import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';
function App() {
    return (_jsx("div", { className: "App", children: _jsx(RouterProvider, { router: routerConfig }) }));
}
export default App;
