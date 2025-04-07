import React from 'react';
// import './Menu.scss'
import Submenu from '../components/Menu/Submenu';
// import {Submenu} from 'ikee-components'

const Submenupage: React.FC = () => {

    return (
        <div className='box'>
        <h4>基本用法</h4>
        <p>通过 <code> data </code> 配置菜单数据</p>
        <div className="contain">
            <Submenu></Submenu>
        </div>
        <h4>禁用</h4>
        <p>通过 <code> disabled </code> 属性设置菜单或者菜单项为禁用状态</p>
        <div className="contain">
            <Submenu></Submenu>
        </div>
    </div>
    );
};

export default Submenupage;