// import React, { createContext, useContext,useState, Children, cloneElement, ReactElement, createElement } from 'react';
import React, { createContext, useState, Children, ReactElement } from 'react';
// import './Menu.scss';
import MenuItem, { MenuItemProps } from './MenuItem';

interface MenuContextProps {
    activeIndex: number;
    handleClick: (index: number) => void;
}

export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

type MenuMode = 'horizontal'|'vertical';
export interface MenuProps {
    defaultIndex?: number;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: number)=>void;
    children: ReactElement<typeof MenuItem>[]; // 只允许 MenuItem 作为子组件
}

const Menu: React.FC<MenuProps> = ({ 
    mode= 'horizontal',
    defaultIndex= 0,
    onSelect,
    children
 }) => {
    const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
    const handleClick = (index: number) => {
        setActiveIndex(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    const value = {
        activeIndex,
        handleClick,
    };
    return (
        <MenuContext.Provider value={value}>
            <ul className={`menu ${mode}`}>
                {Children.map(children, (child,index) => {
                    if (!React.isValidElement<MenuItemProps>(child) || child.type !== MenuItem) {
                        console.error('Menu can only have MenuItem as children');
                        return null;
                    }
                    return React.cloneElement(child, {
                        onClick: () => handleClick(index), // 确保传递当前项的索引
                      });
                })}
            </ul>
        </MenuContext.Provider>

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