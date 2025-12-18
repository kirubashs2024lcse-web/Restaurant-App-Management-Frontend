import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './page/Login';
import Home from './page/Home';
import About from './page/About';
import Items from './page/Items';
import Cart from './page/Cart';
import Admin from './page/Admin';
import ErrorBoundary from './components/ErrorBoundary';




const a =createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div style={{padding: '20px', textAlign: 'center'}}><h2>Page Not Found</h2><p>The page you're looking for doesn't exist.</p><a href="/">Go Home</a></div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/items",
        element: <Items />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={a} />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
