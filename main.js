import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
if (typeof document !== 'undefined') {
    createRoot(document.getElementById('root')).render(React.createElement(StrictMode, null,
        React.createElement(App, null)));
}
// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// const container = document.getElementById('root');
// const root = createRoot(container); // 只调用一次
// root.render(
// <App />
// );
// export {default as Button } from './components/Button'
// export {default as Input } from './components/Input'
// export {default as Autocomplete } from './components/Autocomplete'
// export {default as Menu } from './components/Menu'
// export { default as MenuItem } from './components/Menu';
// export { default as Submenu } from './components/Menu';
