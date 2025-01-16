// src/components/UserArea.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserArea: React.FC = () => {
  const navigate = useNavigate();

  // Recupera os dados do usuário e o token da sessão
  const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  const token = sessionStorage.getItem('token');

  const handleLogout = () => {
    // Limpa os dados da sessão e redireciona para a página de login
    sessionStorage.clear();
    navigate('/');
  };

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