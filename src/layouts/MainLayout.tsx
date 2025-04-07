import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import './MainLayout.scss'; // 引入样式文件

const MainLayout: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('组件'); 

    const nav=useNavigate()

    const handleClick = (item: string) => {
        setActiveItem(item); // 更新激活项
        if (item === '指南') {
            nav('/document'); // 跳转到指南页面
        } else if (item === '组件') {
            nav('/'); // 跳转到组件页面
        }
    };

    return (
        <div>
            <header>
                <div className="pic">
                    <img src="/src/assets/Logo.png" />
                </div>
                <div className="search">Search</div>
                <div className='nav'>
                    <div className={`document ${activeItem === '指南' ? 'active' : ''}`}
                    onClick={() => handleClick('指南')}>指南</div>
                    <div className={`menuu ${activeItem === '组件' ? 'active' : ''}`}
                    onClick={() => handleClick('组件')}>组件</div>
                </div>
                <div className="github">github</div>
            </header>
            <div className="content">
                <Outlet />
            </div>

        </div>
    );
};
export default MainLayout;