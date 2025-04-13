import React, { ReactElement } from 'react';
import MenuItem from './MenuItem';
export declare const MenuContext: any;
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
