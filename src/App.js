import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';
function App() {
    // const title = "My React App"; // 或者通过 props 传入
    return (_jsx("div", { className: "App", children: _jsx(RouterProvider, { router: routerConfig }) }));
}
export default App;
