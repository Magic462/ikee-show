// src/components/Button.tsx
import React from 'react';
// import './Button.scss'

interface ButtonProps {
    round?: boolean;
    disabled?: boolean;
    // size?: ButtonSize;
    size?: 'small'|'medium'|'large';
    type?: 'primary'|'secondary'|'danger';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    round = false,
    disabled = false,
    size = 'medium',
    type = 'primary',
    children,
}) => {
    const shapeClass = round ? 'rounded' : 'square';  // 根据 round 选择类名
    const className = `button ${shapeClass} ${disabled ? 'disabled' : ''} ${size} ${type}`;
    return <button className={className} disabled={ disabled }>{children}</button>;
};

export default Button;