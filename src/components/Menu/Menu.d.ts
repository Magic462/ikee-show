import React, { ReactElement } from 'react';
import MenuItem from './MenuItem';
interface MenuContextProps {
    activeIndex: number;
    handleClick: (index: number) => void;
}
export declare const MenuContext: React.Context<MenuContextProps>;
type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    defaultIndex?: number;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: number) => void;
    children: ReactElement<typeof MenuItem>[];
}
declare const Menu: React.FC<MenuProps>;
export default Menu;
