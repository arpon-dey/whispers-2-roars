import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Dashboard from './Layout/Dashboard/Dashboard';
import Main from './Layout/Main/Main';
import CreateTask from './Pages/Dashboard/CreateTask/CreateTask';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [

     
      {
        path: 'dHome',
        element: <DashboardHome></DashboardHome>
      },
      {
        path: 'createTask',
        element: <CreateTask></CreateTask>
      },
      {
        path: '*',
        element: <div>404 not found</div>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <div className=''>

        <RouterProvider router={router} />
      </div>
    </AuthProviders>

  </React.StrictMode>
)
