import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WindowResizer from './exercises/WindowResizer';
import Stopwatch from './exercises/Stopwatch';
import UserList from './exercises/UserList';
import RegisterForm from './exercises/RegisterForm';
import ProductList from './exercises/ProductList';
import ProductDetail from './exercises/ProductDetail';
import ThemePlayground from './exercises/ThemePlayground';
import InputPlayground from './exercises/InputPlayground';
import ExerciseMenu from './pages/ExerciseMenu';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './styles/global.css';

const router = createBrowserRouter([
  { path: '/', element: <ExerciseMenu /> },
  { path: '/section-1', element: <WindowResizer /> },
  { path: '/section-2', element: <Stopwatch /> },
  { path: '/section-3', element: <UserList /> },
  { path: '/section-4', element: <RegisterForm /> },
  { path: '/products', element: <ProductList /> },
  { path: '/products/:id', element: <ProductDetail /> },
  { path: '/section-6', element: <ThemePlayground /> },
  { path: '/section-7', element: <InputPlayground /> },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: <Dashboard /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
