import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './pages/home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Login",
    element: <div>Hello!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
