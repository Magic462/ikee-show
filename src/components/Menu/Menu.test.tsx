import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import MenuItem from './MenuItem';


describe('Menu Component', () => {
  test('renders correctly with MenuItems', () => {
    render(
      <Menu>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
      </Menu>
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('handles selection', () => {
    const handleSelect = jest.fn();
    render(
      <Menu onSelect={handleSelect} defaultIndex={0}>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
      </Menu>
    );
  
    fireEvent.click(screen.getByText('Option 1'));
    expect(handleSelect).toHaveBeenCalledWith(0); // 第一个选项的索引
  });

  test('shows error when non-MenuItem is child', () => {
    console.error = jest.fn(); // 捕获 console.error
    render(
      <Menu>
        {/* @ts-ignore */}
        <div>Not a MenuItem</div>
      </Menu>
    );

    expect(console.error).toHaveBeenCalled();
  });
});