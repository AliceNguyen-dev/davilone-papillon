import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import { Button } from 'react-bootstrap';
import BanniP from '../../assets/img/banni-p.png'

import './User.scss'

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const showRegisterForm = location.pathname === '/register';
  const showLoginForm = location.pathname === '/login';

  return (
    <div className="user-dashboard">
        <div className="--bann-tab-dash">
          <img src={BanniP} alt="bannip" className="bann--tab-index" />
        </div>
      <div className="auth-container">
        {!isLoggedIn ? (
          <div className='box-register'>

            <div className="intro-div">
              <h3 className="title-tab">Veuillez vous s'inscrire ou vous connecter afin de naviger sur le site.</h3>
            </div>
            
            {!showRegisterForm && !showLoginForm && (
              <div className="auth-options input-div">
                <div className="box-btn-tab">
                  <Button variant="contained" onClick={() => navigate('/login')}>Se connecter</Button>
                  <Button variant="outlined" onClick={() => navigate('/register')}>S'inscrire</Button>
                </div>
                
              </div>
            )}

            <Routes>
              <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        ) : (
          <div className="dashboard-options">
            <button onClick={handleLogout}>Se déconnecter</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;