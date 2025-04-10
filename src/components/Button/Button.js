// src/components/Button.tsx
import React from 'react';
const Button = ({ round = false, disabled = false, size = 'medium', type = 'primary', children, }) => {
    const shapeClass = round ? 'rounded' : 'square'; // 根据 round 选择类名
    const className = `button ${shapeClass} ${disabled ? 'disabled' : ''} ${size} ${type}`;
    return React.createElement("button", { className: className, disabled: disabled }, children);
};
export default Button;
