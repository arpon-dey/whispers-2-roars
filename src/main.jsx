import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from './Layout/Dashboard/Dashboard';
import Main from './Layout/Main/Main';
import CreateTask from './Pages/Dashboard/CreateTask/CreateTask';
import DashHome from './Pages/Dashboard/CreateTask/DashHome';
import Edit from './Pages/Dashboard/Edit/Edit';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoute from './Routes/PrivateRoute';
import './index.css';
const queryClient = new QueryClient()
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
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
    children: [

      {
        path: 'createTask',
        element: <CreateTask></CreateTask>
      },
      {
        path: "home",
        element: <DashHome></DashHome>
      },
      {
        path: "editTask/:id",
        element: <Edit></Edit>,
        loader: ({params}) => fetch(`https://scic-job-task-server-three.vercel.app/tasks/${params.id}`)
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
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
      </AuthProviders>
  </React.StrictMode >
)
