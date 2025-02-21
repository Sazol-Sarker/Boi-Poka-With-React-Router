import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import {ToastContainer} from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'',
        element:<Home></Home>
      },
      {
        path:'/books/:bookId',
        loader:()=>fetch('/booksData.json'),
        
        element:<BookDetail></BookDetail>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/listedBooks',
        loader:()=>fetch('https://boipoka17.surge.sh/booksData.json'),
        element:<ListedBooks></ListedBooks>
      }
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
