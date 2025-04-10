import React from 'react';
const Input = ({ customsize = 'small', disabled, ...props }) => {
    // 根据 size 属性设置类名
    const className = `input ${customsize} ${disabled ? 'disabled' : ''}`;
    return (React.createElement("input", { className: className, disabled: disabled, ...props }));
};
export default Input;
