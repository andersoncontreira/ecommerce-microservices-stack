import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../../services/AuthService';
import styles from './RegisterForm.module.scss';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const response = await register(email, password);
    setLoading(false);

    if (response.success) {
      // Redireciona para a área do usuário
      navigate('/user-area');
    } else {
      // Exibe a mensagem de erro
      setError(response.message || 'An unknown error occurred');
    }
  };

  return (
    <div className={styles.untreeCoSection}>
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
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;