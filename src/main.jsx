import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/errorPage/ErrorPage.jsx'
import ListedBook from './components/listedBook/ListedBook.jsx'
import PagesToRead from './components/pagesToRead/PagesToRead.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/listed-book',
        element: <ListedBook></ListedBook>
      },
      {
        path:'/pages-to-read',
        element: <PagesToRead></PagesToRead>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
