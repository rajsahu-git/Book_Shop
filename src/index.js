import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './components/About'
import ErrorElement from './components/Error_Element';
import Contact from './components/Contact'
import Blog from './components/Blog'
import Shop from './components/Shop'
import Books from "./components/Books";
import BooksDetails from './components/Book_Details'
import Cart from './components/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/> ,
    errorElement: <ErrorElement />,
    children:[
      
        {
          path:'/contact',
          element:<Contact />
        },
        {
          path:'/blog',
          element:<Blog />
        },
        {
          path:'/',
          element:<Books />
        },
        {
          path:'/about',
          element:<About />
        },
        {
          path:'/shop',
          element:<Shop />
        },
        {
          path:'book_details/:id',
          element:<BooksDetails />,
        },
        {
          path:'cart',
          element:<Cart />,
        }
      
    ]
  },
  

])
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
