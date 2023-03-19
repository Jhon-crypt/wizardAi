import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header.component';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

function Main() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Header
                login_color="white"
                signup_color="white"
                about_color="white"
                terms_color="white"
            />}>
            <Route index element={<HomePage />} />
            <Route path="Signup" element={<SignupPage />} />
            <Route path="Login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </React.StrictMode>,
)
