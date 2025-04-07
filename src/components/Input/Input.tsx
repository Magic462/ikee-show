import React from 'react';
// import './Input.scss'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    customsize?: 'small'  | 'large';
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ customsize = 'small', disabled,  ...props }) => {
    // 根据 size 属性设置类名
    const className = `input ${customsize} ${disabled ? 'disabled' : ''}`;

    return (
        <input
            className={className}
            disabled={disabled}
            {...props} // 传递其他输入属性
        />
    );
};

export default Input;