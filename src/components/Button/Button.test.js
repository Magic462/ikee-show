import React from "react";
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
        render(React.createElement(Button, null, "Click Me"));
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
    });
    test('applies correct class based on props', () => {
        const { rerender } = render(React.createElement(Button, { round: true }, "Rounded Button"));
        expect(screen.getByText(/Rounded Button/i)).toHaveClass('rounded');
        rerender(React.createElement(Button, { round: false }, "Square Button"));
        expect(screen.getByText(/Square Button/i)).toHaveClass('square');
    });
    test('disables the button when disabled prop is true', () => {
        render(React.createElement(Button, { disabled: true }, "Disabled Button"));
        const buttonElement = screen.getByText(/Disabled Button/i);
        expect(buttonElement).toBeDisabled();
    });
    test('applies size and type classes', () => {
        render(React.createElement(Button, { size: "large", type: "danger" }, "Danger Button"));
        const buttonElement = screen.getByText(/Danger Button/i);
        expect(buttonElement).toHaveClass('large');
        expect(buttonElement).toHaveClass('danger');
    });
});
