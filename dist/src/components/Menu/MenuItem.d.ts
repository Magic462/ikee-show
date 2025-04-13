import React from 'react';
export interface MenuItemProps {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
