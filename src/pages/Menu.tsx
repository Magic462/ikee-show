import React from 'react';
// import './Menu.scss'
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';
// import {Menu,MenuItem} from 'ikee-components'


const Menupage: React.FC = () => {
    const handleSelect = (selectedIndex: number) => {
        // setActiveIndex(selectedIndex);
        console.log('Selected index:', selectedIndex);
    };

    return (
        <div className='box'>
            <a href="http://localhost:6006/?path=/docs/components-menu--docs&args=mode:horizontal"></a>
        <h4>基本用法</h4>
        <p>自定义菜单</p>
        <div className="contain">
        <Menu mode="horizontal" defaultIndex={0} onSelect={handleSelect}>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
        </Menu>
        </div>
        <h4>自定义选中菜单</h4>
        <p>通过 <code> mode </code> 自定义菜单横向或纵向，类型有 <code> horizontal </code>、 <code> vertical </code> </p>
        <div className="contain">
        <Menu mode="vertical" defaultIndex={0} onSelect={handleSelect}>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
        </Menu>
        </div>
        <h4>禁用菜单项</h4>
        <p>通过 <code> disabled </code> 设置禁用菜单项</p>
        <div className="contain">
        <Menu mode="horizontal" defaultIndex={0} onSelect={handleSelect}>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem disabled>Contact</MenuItem>
        </Menu>
        </div>
    </div>
    );
};

export default Menupage;