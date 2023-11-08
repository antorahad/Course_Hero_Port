import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Course from './pages/Course';
import CourseDetail from './pages/CourseDetail';
import Cart from './pages/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/course",
        element: <Course/>,
        loader: () => fetch('courses.json')
      },
      {
        path: "/course/:id",
        element: <CourseDetail/>,
        loader: () => fetch('courses.json')
      },
      {
        path: "/blog",
        element: <Blog/>,
        loader: () => fetch('/blogs.json')
      },
      {
        path: "/blog/:id",
        element: <BlogDetail/>,
        loader: () => fetch('/blogs.json')
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/signin",
        element: <Signin/>
      },
      {
        path: "signup",
        element: <Signup/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='scroll-smooth'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
