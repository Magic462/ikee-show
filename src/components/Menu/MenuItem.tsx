import React, { useContext } from 'react';
import { MenuContext } from './Menu';

export interface MenuItemProps {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    disabled = false,
    children
}) => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error('MenuItem must be used within a Menu');
    }

    const { activeIndex, handleClick } = context;
    const isActive = children === activeIndex; // 根据您的逻辑修改
    const className = `menu-item ${disabled ? 'disabled' : ''} ${isActive ? 'active' : ''}`;

    const handleItemClick = (e: React.MouseEvent) => {
        console.log('Item clicked, disabled:', disabled);
        if (disabled) {
            e.preventDefault(); // 阻止默认行为
            // console.log('Click event ignored due to disabled state.');
            return; // 直接返回，不执行后续操作
        }
        
        // 只有在未禁用时才调用 onClick 和 handleClick
        if (onClick) {
            onClick(); // 调用传入的 onClick 属性
            // console.log('onClick called.');
        }
        handleClick(children as unknown as number); // 传递当前项的索引
        // console.log('handleClick called with index:', children);
    };

    return (
        <li className={className} onClick={handleItemClick}>
            {children}
        </li>
    );
};

export default MenuItem;