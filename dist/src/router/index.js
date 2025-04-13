import { jsx as _jsx } from "react/jsx-runtime";
// App.tsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; // 主布局组件
import Home from '../pages/Home';
import Document from '../pages/Document';
import Button from '../pages/Button'; // 注册页面组件
import Menu from '../pages/Menu'; // 注册页面组件
import Submenu from '../pages/Submenu'; // 注册页面组件
import Input from '../pages/Input'; // 注册页面组件
// import Status from '../pages/Status'; // 状态页面组件
// import Signup from '../pages/Signup'; // 状态页面组件
// import Change from '../pages/Change'; // 状态页面组件
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(MainLayout, {}),
        children: [
            {
                path: '/',
                element: _jsx(Home, {}),
            },
            {
                path: '/document',
                element: _jsx(Document, {}),
            },
            {
                path: '/button',
                element: _jsx(Button, {}),
            },
            {
                path: '/menu',
                element: _jsx(Menu, {}),
            },
            {
                path: '/submenu',
                element: _jsx(Submenu, {}),
            },
            {
                path: '/input',
                element: _jsx(Input, {}),
            },
            // {
            //     path:'/status',
            //     element:<Status />,
            // },
            // {
            //     path:'/signup',
            //     element:<Signup />,
            // },
            // {
            //     path:'/change',
            //     element:<Change />,
            // }
            // {
            //     path:'*',
            //     element:<Register />,
            // },
            //404
        ]
    }
], {
    basename: '/ikee-show'
});
export default router;
