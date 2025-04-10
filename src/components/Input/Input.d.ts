import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    customsize?: 'small' | 'large';
    disabled?: boolean;
}
declare const Input: React.FC<InputProps>;
export default Input;
