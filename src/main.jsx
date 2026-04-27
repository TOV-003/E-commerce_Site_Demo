import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Kids from './pages/Kids.jsx'
import ProductProvider from './Context/ProductContext.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'
import Cart from './pages/Cart.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        element: <Men />,
        path: "/Men"
      },
      {
        element: <Women />,
        path: "/Women"
      },
      {
        element: <Kids />,
        path: "/Kids"
      },
      {
        element: <SingleProductPage />,
        path: "/SingleProductPage/:id"
      },
      {
        element: <Cart />,
        path: "/Cart"
      },
      {
        element: <Register />,
        path: "/Register"
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ProductProvider>

)
