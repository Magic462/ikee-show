import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ round = false, disabled = false, size = 'medium', type = 'primary', children, }) => {
    const shapeClass = round ? 'rounded' : 'square'; // 根据 round 选择类名
    const className = `button ${shapeClass} ${disabled ? 'disabled' : ''} ${size} ${type}`;
    return _jsx("button", { className: className, disabled: disabled, children: children });
};
export default Button;
