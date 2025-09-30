import { HomePage } from './pages/home.jsx';
import { SignUpPage } from './pages/sign-up.jsx';
import { LoginPage } from './pages/login.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        
      
    </>
  )
}

export default App
