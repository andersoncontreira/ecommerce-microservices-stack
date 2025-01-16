import React, { useState } from 'react';
import { forgotPassword } from '../../../../services/AuthService';
import styles from './ForgotPasswordForm.module.scss';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    const response = await forgotPassword(email);
    setLoading(false);

    if (response.success) {
      // Exibe a mensagem de sucesso
      setMessage(response.message || 'Password reset link sent');
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
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <div className="alert alert-success">{message}</div>}
                <button type="submit" className="btn btn-primary-hover-outline" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;