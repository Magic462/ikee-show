import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MenuContext } from './Menu';
import MenuItem from './MenuItem';

describe('MenuItem Component', () => {
  const mockHandleClick = jest.fn();

  test('renders correctly', () => {
    render(
      <MenuContext.Provider value={{ activeIndex: 0, handleClick: mockHandleClick }}>
        <MenuItem>Option 1</MenuItem>
      </MenuContext.Provider>
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    render(
      <MenuContext.Provider value={{ activeIndex: 0, handleClick: mockHandleClick }}>
        <MenuItem onClick={() => {}}>Option 1</MenuItem>
      </MenuContext.Provider>
    );

    fireEvent.click(screen.getByText('Option 1'));
    expect(mockHandleClick).toHaveBeenCalled(); // 确保 handleClick 被调用
  });

//   test('does not call onClick when disabled', () => {
//     render(
//         <MenuContext.Provider value={{ activeIndex: 0, handleClick: mockHandleClick }}>
//             <MenuItem disabled>Option 1</MenuItem>
//         </MenuContext.Provider>
//     );

//     fireEvent.click(screen.getByText('Option 1'));
//     expect(mockHandleClick).not.toHaveBeenCalled(); // 确保 handleClick 不被调用
// });
});