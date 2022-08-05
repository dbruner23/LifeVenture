import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile.jsx";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

function App() {
  
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className={user ? "App" : "AppWelcome"}>
      <div className="Overlay"></div>
      <div className="Wrapper">
        <Routes>
          <Route path='/' element={user ? <Navigate to="home" /> : <Navigate to="auth" />} />
          <Route path='/home' element={user ? <Home /> : <Navigate to='../auth' />} />
          <Route path='/auth' element={user ? <Navigate to='../home'/> : <Auth/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
