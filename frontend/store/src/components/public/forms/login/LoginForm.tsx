import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../../../services/AuthService';
import styles from './LoginForm.module.scss';


const LoginForm: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const response = await authenticate(email, password);
    setLoading(false);

    if (response.success) {
      // Salva o token e os dados do usuário na sessão
      sessionStorage.setItem('token', response.token || '');
      sessionStorage.setItem('user', JSON.stringify(response.user));
      // Redireciona para a área do usuário
      navigate('/user-area');
    } else {
      // Exibe a mensagem de erro
      setError(response.message || 'An unknown error occurred');
    }
  };
  
  return (
    <div className="untree-co-section">
      <div className="container">
        <div className="block">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8 pb-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label className="text-black" htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="text-black" htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary-hover-outline" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;