import { jsx as _jsx } from "react/jsx-runtime";
// import React, { createContext, useContext,useState, Children, cloneElement, ReactElement, createElement } from 'react';
import React, { createContext, useState, Children } from 'react';
// import './Menu.scss';
import MenuItem from './MenuItem';
export const MenuContext = createContext(undefined);
const Menu = ({ mode = 'horizontal', defaultIndex = 0, onSelect, children }) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const handleClick = (index) => {
        setActiveIndex(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    const value = {
        activeIndex,
        handleClick,
    };
    return (_jsx(MenuContext.Provider, { value: value, children: _jsx("ul", { className: `menu ${mode}`, children: Children.map(children, (child, index) => {
                if (!React.isValidElement(child) || child.type !== MenuItem) {
                    console.error('Menu can only have MenuItem as children');
                    return null;
                }
                return React.cloneElement(child, {
                    onClick: () => handleClick(index), // 确保传递当前项的索引
                });
            }) }) })
    // <MenuProvider defaultIndex={defaultIndex} onSelect={onSelect}>
    //     <ul className={`menu ${mode}`}>
    //         {Children.map(children, (child,index) => {
    //             if (!React.isValidElement<MenuItemProps>(child) || child.type !== MenuItem) {
    //                 console.error('Menu can only have MenuItem as children');
    //                 return null;
    //             }
    //             return React.cloneElement(child, {
    //                 onClick: () => handleClick(index), // 确保传递当前项的索引
    //               });
    //         })}
    //     </ul>
    // </MenuProvider>
    );
};
export default Menu;
