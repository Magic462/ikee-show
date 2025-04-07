import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';

function App() {
  // const title = "My React App"; // 或者通过 props 传入

  return (
    <div className="App">
        <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  );
}

export default App;