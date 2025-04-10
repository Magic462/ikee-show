import { jsx as _jsx } from "react/jsx-runtime";
const Input = ({ customsize = 'small', disabled, ...props }) => {
    // 根据 size 属性设置类名
    const className = `input ${customsize} ${disabled ? 'disabled' : ''}`;
    return (_jsx("input", { className: className, disabled: disabled, ...props }));
};
export default Input;
