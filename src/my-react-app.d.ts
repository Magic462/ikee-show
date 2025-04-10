// import React, { ReactElement } from 'react';
// declare module 'my-react-app' {
//     export const Button: React.FC<ButtonProps>;
//     export const Input: React.FC<InputProps>;
//     // 添加其他组件的导出和类型...

//     interface ButtonProps {
//         round?: boolean;
//         disabled?: boolean;
//         // size?: ButtonSize;
//         size?: 'small'|'medium'|'large';
//         type?: 'primary'|'secondary'|'danger';
//         children: React.ReactNode;
//     }

//     interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//         customsize?: 'small'  | 'large';
//         disabled?: boolean;
//     }

//     type MenuMode = 'horizontal' | 'vertical';
//     export const MenuItem: React.FC<MenuItemProps>;
//     interface MenuProps {
//         defaultIndex?: number;
//         mode?: MenuMode;
//         style?: React.CSSProperties;
//         onSelect?: (selectedIndex: number)=>void;
//         children: ReactElement<typeof MenuItem>[]; // 只允许 MenuItem 作为子组件
//     }

//     interface MenuItemProps {
//         onClick?: () => void;
//         disabled?: boolean;
//         // active?: boolean;
//         children: React.ReactNode;
//     }
// }