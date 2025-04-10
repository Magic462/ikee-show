import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
// test('button',()=>{
//     const wrapper = render(<Button>aqaq</Button>)
//     const element = wrapper.queryByText('aqaq')
//     expect(element).toBeTruthy()
// })
describe('Button Component', () => {
    test('renders with correct text', () => {
        render(_jsx(Button, { children: "Click Me" }));
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });
    test('applies correct class based on props', () => {
        const { rerender } = render(_jsx(Button, { round: true, children: "Rounded Button" }));
        expect(screen.getByText(/Rounded Button/i)).toHaveClass('rounded');
        rerender(_jsx(Button, { round: false, children: "Square Button" }));
        expect(screen.getByText(/Square Button/i)).toHaveClass('square');
    });
    test('disables the button when disabled prop is true', () => {
        render(_jsx(Button, { disabled: true, children: "Disabled Button" }));
        const buttonElement = screen.getByText(/Disabled Button/i);
        expect(buttonElement).toBeDisabled();
    });
    test('applies size and type classes', () => {
        render(_jsx(Button, { size: "large", type: "danger", children: "Danger Button" }));
        const buttonElement = screen.getByText(/Danger Button/i);
        expect(buttonElement).toHaveClass('large');
        expect(buttonElement).toHaveClass('danger');
    });
});
