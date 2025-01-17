// src/components/UserArea.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext.tsx";

const UserArea: React.FC = () => {
  const navigate = useNavigate();
  const {isAuthenticated, logout} = useAuth();

  // TODO migrar para o useAuth
  // Recupera os dados do usuário e o token da sessão
  const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  const token = sessionStorage.getItem('token');


  // console.log('UserArea -> isAuthenticated', isAuthenticated);

  const handleLogout = () => {
    if (isAuthenticated) {
      logout();
      // Limpa os dados da sessão e redireciona para a página de login
      sessionStorage.clear();
      navigate('/');
    }

  };
// TODO a logic do não logado não será necessário aqui
  return (
    <div>
      <h1>Welcome to the User Area</h1>
      {token && user ? (
        <div>
          <p>Email: {user.email}</p>
          <p>Token: {token}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in. Please <a href="/">login</a>.</p>
      )}
    </div>
  );
};

export default UserArea;