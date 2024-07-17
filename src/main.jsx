import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      return redirect('/dashboard');
    },
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
