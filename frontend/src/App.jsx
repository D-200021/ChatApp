import './App.css'
import HomePage from './pages/home/HomePage.jsx'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/LoginPage.jsx";
import SignUp from "./pages/signup/SignUpPage.jsx";
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
