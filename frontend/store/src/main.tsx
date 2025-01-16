import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Home from './pages/public/Home.tsx'
import About from './pages/public/About.tsx'
import Contact from './pages/public/Contact.tsx'
import Login from './pages/public/Login.tsx'
import NotFound from './pages/public/NotFound.tsx'
// Private Pages
import UserArea from './pages/private/UserArea.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          
          {/* <Route path="/register" element={<UserRegister />} /> */}
          {/* <Route path="/forgot-password" element={<UserForgotPassword />} /> */}
          {/* Privae routes */}
          <Route path="/user-area" element={<UserArea />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} /> {/* Rota curinga para capturar todas as rotas não definidas */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
