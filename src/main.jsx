import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import HomePage from './Component/HomePage/HomePage';
import JobDetails from './Component/JobDetails/JobDetails';
import Error from './Component/Error/Error';
import Statistics from './Component/Statistics/Statistics';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Blog from './Component/Blog/Blog';

const newJ = `job1.json`;
console.log(newJ)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },

      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/details/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`job${params.jobId}.json`)

      },
      {
        path: '*',
        element: <Error></Error>

      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
