import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
// import './Submenu.scss'; // 添加样式文件

const Submenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleSelect = (index: number) => {
        console.log(`Selected item: ${index}`);
        setIsOpen(false); // 选择后关闭下拉菜单
    };

    return (
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="dropdown-toggle">
                更多
            </div>
            {isOpen && (
                <Menu mode="vertical" defaultIndex={0} onSelect={handleSelect}>
                    <MenuItem >Option 1</MenuItem>
                    <MenuItem >Option 2</MenuItem>
                    <MenuItem >Option 3</MenuItem>
                    <MenuItem disabled>Option 4</MenuItem>
                </Menu>
            )}
        </div>
    );
};

export default Submenu;