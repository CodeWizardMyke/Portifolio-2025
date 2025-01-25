import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App';


import Home from './pages/home/Home.jsx'
import Project from './pages/projects/Project.jsx'
import './style/index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Curriculum from './pages/curriculum/Curriculum.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {path:'/', element:<Home/>},
      {path:'/project', element: <Project/>},
      {
        path:'/curriculum', element: <Curriculum/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);